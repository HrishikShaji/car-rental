import deleteListing from "@/services/deleteListing";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
	listingId: string;
	onDelete: (listingId: string) => void;
}

export function useDeleteListing({ onDelete, listingId }: Props) {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("")

	const handleDelete = async () => {

		setIsLoading(true);

		onDelete(listingId);

		try {

			await deleteListing({ listingId })
			toast.success('Listing deleted successfully');
		} catch (error) {
			console.error('Error deleting listing:', error);
			setError("error deleting listing")
			toast.error('Failed to delete listing. Please refresh the page.');

		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, handleDelete, error }
}
