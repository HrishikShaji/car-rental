import { signIn } from "next-auth/react";

interface Props {
  name: string;
  email: string;
  password: string;
  joinAsAdmin: boolean;
}

export default async function registerUser({ name, email, password, joinAsAdmin }: Props) {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      joinAsAdmin: joinAsAdmin,
    }),
  })

  if (!response.ok) {
    throw new Error("Error creating user")
  }

  const result = await signIn('credentials', {
    email,
    password,
    redirect: false,
  })

  if (result.error) {
    throw new Error("Error signing in")
  }
}

