import { defaultRegisterValues, RegisterFormData, registerSchema } from "@/schemas/registerSchema"
import registerUser from "@/services/registerUser"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"

export function useRegisterForm() {
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()

	const form = useForm<RegisterFormData>({
		resolver: zodResolver(registerSchema),
		defaultValues: defaultRegisterValues,
	})

	const onSubmit = async (data: RegisterFormData) => {
		setError('')
		setIsLoading(true)

		try {

			await registerUser({
				name: data.name,
				email: data.email,
				password: data.password,
				joinAsAdmin: data.joinAsAdmin,
			})

			router.push('/')
			router.refresh()
		} catch (err) {
			setError('An error occurred. Please try again.')
		} finally {
			setIsLoading(false)
		}
	}

	return {
		onSubmit,
		form,
		error,
		isLoading
	}

}
