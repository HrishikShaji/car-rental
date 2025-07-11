import { Status } from "@/app/generated/prisma";
import useUpdateListing from "@/hooks/listing/useUpdateListing";

interface Props {
	listingId: string;
	onUpdate: (status: Status, listingId: string) => void;
	status: Status;
	buttonText: string;
}

export default function UpdateListingStatusButton({ buttonText, status, listingId, onUpdate }: Props) {
	const { isLoading, error, handleUpdate } = useUpdateListing({ onUpdate, listingId, status })

	return (
		<button
			disabled={isLoading}
			onClick={handleUpdate}
			className="w-full text-left cursor-pointer"
		>
			{isLoading ? 'Updating...' : buttonText}
		</button>
	)
}
