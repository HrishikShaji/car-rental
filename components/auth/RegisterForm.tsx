'use client'

import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Checkbox } from '@/components/ui/checkbox'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from '@/components/ui/form'
import { useRegisterForm } from '@/hooks/auth/useRegisterForm'
import CustomInput from '../common/CustomInput'
import { RegisterFormData } from '@/schemas/registerSchema'
import CustomPasswordInput from '../common/CustomPasswordInput'



export default function RegisterForm() {

	const { error, onSubmit, form, isLoading } = useRegisterForm()

	return (
		<div className="w-full max-w-md mx-auto">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					{error && (
						<Alert variant="destructive">
							<AlertDescription>{error}</AlertDescription>
						</Alert>
					)}
					<CustomInput<RegisterFormData>
						control={form.control}
						name='name'
						type="text"
						placeholder="Enter your full name"
						autocomplete="name"
					/>
					<CustomInput<RegisterFormData>
						control={form.control}
						name='email'
						type="email"
						placeholder="Enter your email"
						autocomplete="email"
					/>

					<CustomPasswordInput<RegisterFormData>
						control={form.control}
						name='password'
						placeholder="Create a password"
						autocomplete="new-password"
					/>

					<CustomPasswordInput<RegisterFormData>
						control={form.control}
						name='confirmPassword'
						placeholder="Confirm your password"
						autocomplete="new-password"
					/>


					<FormField
						control={form.control}
						name="joinAsAdmin"
						render={({ field }) => (
							<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
								<FormControl>
									<Checkbox
										checked={field.value}
										onCheckedChange={field.onChange}
									/>
								</FormControl>
								<div className="space-y-1 leading-none">
									<FormLabel>
										Join as Admin
									</FormLabel>
								</div>
							</FormItem>
						)}
					/>

					<Button
						type="submit"
						disabled={isLoading}
						className="w-full"
					>
						{isLoading ? (
							<>
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />
								Creating account...
							</>
						) : (
							'Create account'
						)}
					</Button>

				</form>
			</Form>
		</div>
	)
}
