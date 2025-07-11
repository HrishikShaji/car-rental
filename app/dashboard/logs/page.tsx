import { fetchLogs } from '@/services/fetchLogs'
import LogsDataTable from '@/components/logs/LogsDataTable'

export default async function Page() {

  const initialData = await fetchLogs({ page: 1, pageSize: 5 })

  return (
    <div className='w-full h-full '>
      {initialData.pagination.total === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">No logs found</p>
        </div>
      ) : (
        <LogsDataTable initialData={initialData} />
      )}
    </div>
  )
}
