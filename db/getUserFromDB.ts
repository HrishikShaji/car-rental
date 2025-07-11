import { verifyPassword } from "@/lib/utils";
import { prisma } from "@/prisma";

interface Props {
  email: string;
  password: string;
}

export default async function getUserFromDB({ password, email }: Props) {
  const user = await prisma.user.findUnique({
    where: { email }
  })

  if (!user || !user.password) {
    return null
  }

  const isPasswordValid = await verifyPassword(password, user.password)

  if (!isPasswordValid) {
    return null
  }

  const { password: _, ...userWithoutPassword } = user
  return userWithoutPassword
}

