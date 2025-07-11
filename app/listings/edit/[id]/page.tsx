import { ListingForm } from "@/components/listing/ListingForm";
import { fetchListing } from "@/services/fetchListing";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params
	const listing = await fetchListing(id);

	return (
		<div className="h-full w-full flex flex-col justify-center items-center">
			<ListingForm mode="edit" listing={listing} />
		</div>
	);
}
