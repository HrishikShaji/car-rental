'use client'

import { useRouter } from 'next/navigation'
import { Loader2, User, Building, Briefcase, Truck, Mail, Globe, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { useListingForm } from '@/hooks/listing/useListingForm'
import { ListingFormData, ListingFormType } from '@/schemas/listingSchema'
import CustomInput from '../common/CustomInput'


interface ListingFormProps {
	listing: ListingFormType,
	mode?: 'create' | 'edit'
}

export function ListingForm({ listing, mode = 'create' }: ListingFormProps) {
	const isEditMode = mode === 'edit'

	const { form, isLoading, error, onSubmit } = useListingForm({ listing, isEditMode })

	const router = useRouter()
	return (
		<Card className="max-w-4xl mx-auto">
			<CardHeader>
				<CardTitle>
					{isEditMode ? 'Edit Listing' : 'Create New Listing'}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						{error && (
							<Alert variant="destructive">
								<AlertDescription>{error}</AlertDescription>
							</Alert>
						)}

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<CustomInput<ListingFormData>
								control={form.control}
								name='name'
								type="text"
								placeholder="Enter the listing name"
								autocomplete="name"
							/>

							<CustomInput<ListingFormData>
								control={form.control}
								name='email'
								type="email"
								placeholder="Enter your email"
								autocomplete="email"
							/>

						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<CustomInput<ListingFormData>
								control={form.control}
								name='jobTitle'
								type="text"
								placeholder="Enter your job title"
								autocomplete="off"
							/>
							<CustomInput<ListingFormData>
								control={form.control}
								name='fleetSize'
								type="number"
								placeholder="Enter fleet size"
								autocomplete="off"
							/>

						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<CustomInput<ListingFormData>
								control={form.control}
								name='companyName'
								type="text"
								placeholder="Enter company name"
								autocomplete="off"
							/>

							<CustomInput<ListingFormData>
								control={form.control}
								name='city'
								type="text"
								placeholder="Enter city"
								autocomplete="off"
							/>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<CustomInput<ListingFormData>
								control={form.control}
								name='country'
								type="text"
								placeholder="Enter country"
								autocomplete="off"
							/>

						</div>


						<div className="flex gap-2 pt-4">
							<Button type="submit" disabled={isLoading}>
								{isLoading ? (
									<>
										<Loader2 className="mr-2 h-4 w-4 animate-spin" />
										{isEditMode ? 'Updating...' : 'Creating...'}
									</>
								) : (
									isEditMode ? 'Update Listing' : 'Create Listing'
								)}
							</Button>
							<Button
								type="button"
								variant="outline"
								onClick={() => router.back()}
							>
								Cancel
							</Button>
						</div>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}
