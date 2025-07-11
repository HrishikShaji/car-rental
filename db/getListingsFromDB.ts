import { prisma } from "@/prisma";

interface Props {
  page: number;
  pageSize: number;
  search: string;
  status: string;
  sortBy: string;
  sortOrder: string;
}

export default async function getListingsFromDB({ page, pageSize, search, sortOrder, sortBy, status }: Props) {
  const offset = (page - 1) * pageSize

  const whereClause: any = {}

  if (search) {
    whereClause.OR = [
      { name: { contains: search, mode: 'insensitive' as const } },
    ]
  }

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

  const totalCount = await prisma.listing.count({
    where: whereClause,
  })

  const listings = await prisma.listing.findMany({
    where: whereClause,
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
    orderBy,
    skip: offset,
    take: pageSize,
  })

  const totalPages = Math.ceil(totalCount / pageSize)
  const hasNextPage = page < totalPages
  const hasPreviousPage = page > 1

  return {
    data: listings,
    pagination: {
      page,
      pageSize,
      total: totalCount,
      totalPages,
      hasNextPage,
      hasPreviousPage,
    },
  }

}
