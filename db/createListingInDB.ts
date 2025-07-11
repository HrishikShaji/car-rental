import { prisma } from "@/prisma";

interface Props {
  name: string;
  companyName: string;
  jobTitle: string;
  fleetSize: string;
  email: string;
  country: string;
  city: string;
  userId: string;

}

export default async function createListingInDB(data: Props) {
  const listing = await prisma.listing.create({
    data: data,
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
