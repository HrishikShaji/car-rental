import { auth } from '@/auth';
import createListingInDB from '@/db/createListingInDB';
import getListingsFromDB from '@/db/getListingsFromDB';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url)

		const page = parseInt(searchParams.get('page') || '1')
		const pageSize = parseInt(searchParams.get('pageSize') || '10')
		const search = searchParams.get('search') || ''
		const status = searchParams.get('status') || ''
		const sortBy = searchParams.get('sortBy') || 'createdAt'
		const sortOrder = searchParams.get('sortOrder') || 'desc'

		const response = await getListingsFromDB({ pageSize, page, search, status, sortBy, sortOrder })

		return NextResponse.json(response, { status: 200 })
	} catch (error) {
		console.error('Error fetching listings:', error)
		return NextResponse.json(
			{ error: 'Failed to fetch listings' },
			{ status: 500 }
		)
	}
}

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const user = await auth()
		const {
			name,
			companyName,
			jobTitle,
			fleetSize,
			email,
			country,
			city,
		} = body;




		if (!user || !user.user.id) {
			return NextResponse.json(
				{ error: 'Invalid Request' },
				{ status: 403 }
			);
		}

		if (
			!name ||
			!companyName ||
			!jobTitle ||
			!fleetSize ||
			!email ||
			!country ||
			!city
		) {
			return NextResponse.json(
				{ error: 'All Fields are required' },
				{ status: 400 }
			);
		}

		const response = await createListingInDB({
			name,
			companyName,
			jobTitle,
			fleetSize,
			email,
			country,
			city,
			userId: user.user.id,

		})

		return NextResponse.json(response, { status: 201 });
	} catch (error) {
		console.error('Error creating listing:', error);
		return NextResponse.json(
			{ error: 'Failed to create listing' },
			{ status: 500 }
		);
	}
}
