import { prisma } from "@/prisma";

interface Props {
  id: string;
}

export default async function deleteListingFromDB({ id }: Props) {
  const listing = await prisma.listing.delete({
    where: { id },
  });

  return listing
}
