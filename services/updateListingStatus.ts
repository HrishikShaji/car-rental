interface Props {
  listingId: string;
  status: string;
}

export default async function updateListingStatus({ listingId, status }: Props) {
  const response = await fetch(`/api/listings/${listingId}`, {
    method: 'PATCH',
    body: JSON.stringify({
      status
    })
  });

  if (!response.ok) {
    throw new Error('Failed to update listing');
  }

  return response.json()

}
