import { prisma } from "@/prisma";

interface Props {
  id: string;
}

export default async function getListingFromDB({ id }: Props) {
  const listing = await prisma.listing.findUnique({
    where: { id },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });

  return listing

}
