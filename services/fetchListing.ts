import { BASE_URL } from "@/lib/variables";
import { ListingWithUser } from "@/types/types";

export async function fetchListing(id: string): Promise<ListingWithUser> {
  const res = await fetch(`${BASE_URL}/api/listings/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch listing');
  }

  return res.json();
}
