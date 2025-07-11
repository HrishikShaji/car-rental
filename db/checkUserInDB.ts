import { prisma } from "@/prisma";

interface Props {
  email: string;
}

export default async function checkUserInDB({ email }: Props) {
  const existingUser = await prisma.user.findUnique({
    where: { email }
  })

  return existingUser
}
