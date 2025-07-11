import { prisma } from "@/prisma";

interface Props {
  joinAsAdmin: boolean;
  email: string;
  name: string;
  hashedPassword: string;
}

export default async function createUserInDB({ joinAsAdmin, email, name, hashedPassword }: Props) {
  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
      role: joinAsAdmin ? "ADMIN" : "USER"
    },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      createdAt: true,
    }
  })

  return user
}
