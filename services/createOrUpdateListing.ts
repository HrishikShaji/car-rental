interface Props {
  url: string;
  method: string;
  data: any;
}

export default async function createOrUpdateListing({ url, method, data }: Props) {

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error("An Error occured")
  }

  return response.json()

}
