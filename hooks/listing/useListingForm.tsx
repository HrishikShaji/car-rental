import { ListingFormData, ListingFormType, listingSchema } from "@/schemas/listingSchema";
import createOrUpdateListing from "@/services/createOrUpdateListing";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface Props {
	isEditMode: boolean;
	listing: ListingFormType
}

export function useListingForm({ isEditMode, listing }: Props) {
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()


	const form = useForm<ListingFormData>({
		resolver: zodResolver(listingSchema),
		defaultValues: listing,
	})

	const onSubmit = async (data: ListingFormData) => {
		setError('')
		setIsLoading(true)

		try {
			const url = isEditMode ? `/api/listings/${listing.id}` : '/api/listings'
			const method = isEditMode ? 'PUT' : 'POST'

			const result = await createOrUpdateListing({
				url,
				method,
				data
			})
			const listingId = isEditMode ? listing.id : result.id

			toast.success("Listing added successfully")
			router.push(`/listings/view/${listingId}`)
		} catch (err) {
			setError(err instanceof Error ? err.message : `Failed to ${isEditMode ? 'update' : 'create'} listing. Please try again.`)
		} finally {
			setIsLoading(false)
		}
	}
	return { error, form, isLoading, onSubmit }

}
