import { useDeleteListing } from "@/hooks/listing/useDeleteListing";

interface Props {
	listingId: string;
	onDelete: (listingId: string) => void;
}

export default function DeleteListingButton({ listingId, onDelete }: Props) {
	const { isLoading, error, handleDelete } = useDeleteListing({ listingId, onDelete })

	return (
		<button
			disabled={isLoading}
			onClick={handleDelete}
			className="w-full text-left cursor-pointer"
		>
			{isLoading ? 'Deleting...' : 'Delete listing'}
		</button>
	)
}
