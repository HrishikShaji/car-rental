import { prisma } from "@/prisma";

interface Props {
  page: number;
  pageSize: number;
  status: string;
  sortBy: string;
  sortOrder: string;
}

export default async function getLogsFromDB({ page, pageSize, sortOrder, sortBy, status }: Props) {
  const offset = (page - 1) * pageSize

  const whereClause: any = {}


  if (status && status !== 'ALL') {
    whereClause.status = status
  }

  let orderBy: any = {}
  if (sortBy === 'user') {
    orderBy = { user: { name: sortOrder } }
  } else if (sortBy === 'createdAt') {
    orderBy = { createdAt: sortOrder }
  } else {
    orderBy = { [sortBy]: sortOrder }
  }

  const totalCount = await prisma.log.count({
    where: whereClause,
  })

  const logs = await prisma.log.findMany({
    where: whereClause,
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      listing: {
        select: {
          id: true,
          name: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true
            }
          }
        },
      }
    },
    orderBy,
    skip: offset,
    take: pageSize,
  })

  const totalPages = Math.ceil(totalCount / pageSize)
  const hasNextPage = page < totalPages
  const hasPreviousPage = page > 1

  return {
    data: logs,
    pagination: {
      page,
      pageSize,
      total: totalCount,
      totalPages,
      hasNextPage,
      hasPreviousPage,
    }
  }
}
