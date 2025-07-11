import { fetchListings } from '@/services/fetchListings'
import ListingsDataTable from '@/components/dashboard/ListingsDataTable'


export default async function Page() {

  const initialData = await fetchListings({ page: 1, pageSize: 5 })

  return (
    <div className='w-full h-full '>
      {initialData.pagination.total === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">No listings found</p>
        </div>
      ) : (
        <ListingsDataTable initialData={initialData} />
      )}
    </div>
  )
}

