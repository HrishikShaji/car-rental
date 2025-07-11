import { signIn } from "next-auth/react"

interface Props {
  email: string;
  password: string;
}

export default async function signInUser({ email, password }: Props) {
  const result = await signIn('credentials', {
    email: email,
    password: password,
    redirect: false,
  })

  if (result?.error) {
    throw new Error("Error signing in")
  }
}
