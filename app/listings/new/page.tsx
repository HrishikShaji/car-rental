import { ListingForm } from "@/components/listing/ListingForm";
import { listingDefaultValues, ListingFormType } from "@/schemas/listingSchema";

export default function Page() {
	return (
		<div className="h-full w-full flex flex-col justify-center items-center">
			<ListingForm mode="create" listing={listingDefaultValues as ListingFormType} />
		</div>
	);
}

