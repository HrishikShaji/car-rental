interface Props {
  listingId: string;
}

export default async function deleteListing({ listingId }: Props) {
  const response = await fetch(`/api/listings/${listingId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete listing');
  }

}
