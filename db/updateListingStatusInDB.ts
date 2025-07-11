import { Status } from "@/app/generated/prisma";
import { prisma } from "@/prisma";

interface Props {
  id: string;
  status: Status;
  userId: string;
}

export default async function updateListingStatusInDB({ id, status, userId }: Props) {
  const listing = await prisma.listing.update({
    where: { id },
    data: {
      status
    },
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
  const log = await prisma.log.create({
    data: {
      status,
      userId: userId,
      listingId: listing.id
    },
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


  return { listing, log }

}
