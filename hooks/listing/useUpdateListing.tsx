import { Status } from "@/app/generated/prisma";
import updateListingStatus from "@/services/updateListingStatus";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
	onUpdate: (status: Status, listingId: string) => void;
	listingId: string;
	status: Status;
}

export default function useUpdateListing({ onUpdate, listingId, status }: Props) {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("")

	const handleUpdate = async () => {

		setIsLoading(true);

		onUpdate(status, listingId);

		try {

			const response = await updateListingStatus({ status, listingId })

			const updateText = status === "APPROVED" ? "Listing Approved" : "Listing Rejected"
			toast.success(updateText);
		} catch (error) {
			console.error('Error updating listing:', error);
			setError("Error updating listing")
			toast.error('Failed to update listing. Please refresh the page.');

		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, error, handleUpdate }

}
