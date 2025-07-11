import { prisma } from "@/prisma";

interface Props {
  id: string;
  name: string;
  companyName: string;
  jobTitle: string;
  fleetSize: string;
  email: string;
  country: string;
  city: string;
}

export default async function updateListingInDB({ id, name, city, country, companyName, jobTitle, email, fleetSize }: Props) {
  const listing = await prisma.listing.update({
    where: { id },
    data: {
      name,
      companyName,
      jobTitle,
      fleetSize,
      email,
      country,
      city,
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

  return listing
}
