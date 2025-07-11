import { signInDefaultValues, SignInFormData, signInSchema } from "@/schemas/signInSchema"
import signInUser from "@/services/signInUser"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"

export function useSignInForm() {
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()

	const form = useForm<SignInFormData>({
		resolver: zodResolver(signInSchema),
		defaultValues: signInDefaultValues,
	})

	const onSubmit = async (data: SignInFormData) => {
		setError('')
		setIsLoading(true)

		try {
			await signInUser({
				email: data.email,
				password: data.password
			})
			router.push('/')
			router.refresh()
		} catch (err) {
			setError('An error occurred. Please try again.')
		} finally {
			setIsLoading(false)
		}
	}

	return { error, isLoading, form, onSubmit }
}
