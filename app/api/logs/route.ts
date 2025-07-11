import getLogsFromDB from '@/db/getLogsFromDB';
import { NextRequest, NextResponse } from 'next/server';



export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url)

		const page = parseInt(searchParams.get('page') || '1')
		const pageSize = parseInt(searchParams.get('pageSize') || '10')
		const status = searchParams.get('status') || ''
		const sortBy = searchParams.get('sortBy') || 'createdAt'
		const sortOrder = searchParams.get('sortOrder') || 'desc'


		const response = await getLogsFromDB({ pageSize, page, status, sortBy, sortOrder })

		return NextResponse.json(response, { status: 200 })
	} catch (error) {
		console.error('Error fetching logs:', error)
		return NextResponse.json(
			{ error: 'Failed to fetch logs' },
			{ status: 500 }
		)
	}
}

