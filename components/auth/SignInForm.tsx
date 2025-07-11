'use client'
import { Loader2, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import {
	Form,
} from '@/components/ui/form'
import { useSignInForm } from '@/hooks/auth/useSignInForm'
import CustomInput from '../common/CustomInput'
import { SignInFormData } from '@/schemas/signInSchema'
import CustomPasswordInput from '../common/CustomPasswordInput'


export default function SignInForm() {

	const { error, form, onSubmit, isLoading } = useSignInForm()

	return (
		<div className="w-full max-w-md mx-auto">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					{error && (
						<Alert variant="destructive">
							<AlertDescription>{error}</AlertDescription>
						</Alert>
					)}

					<CustomInput<SignInFormData>
						control={form.control}
						name='email'
						type="email"
						placeholder="Enter your email"
						autocomplete="email"
					/>
					<CustomPasswordInput<SignInFormData>
						control={form.control}
						name='password'
						placeholder="Enter your password"
						autocomplete="current-password"
					/>


					<Button
						type="submit"
						disabled={isLoading}
						className="w-full"
					>
						{isLoading ? (
							<>
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />
								Signing in...
							</>
						) : (
							'Sign in'
						)}
					</Button>
				</form>
			</Form>
		</div>
	)
}
