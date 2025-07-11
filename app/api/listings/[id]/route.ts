import { auth } from '@/auth';
import deleteListingFromDB from '@/db/deleteListingFromDB';
import getListingFromDB from '@/db/getListingFromDB';
import updateListingInDB from '@/db/updateListingInDB';
import updateListingStatusInDB from '@/db/updateListingStatusInDB';
import { NextRequest, NextResponse } from 'next/server';

interface Params {
	id: string;
}

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<Params> }
) {
	const { id } = await params
	try {

		const listing = await getListingFromDB({ id })

		if (!listing) {
			return NextResponse.json(
				{ error: 'Listing not found' },
				{ status: 404 }
			);
		}

		return NextResponse.json(listing, { status: 200 });
	} catch (error) {
		console.error('Error fetching listing:', error);
		return NextResponse.json(
			{ error: 'Failed to fetch listing' },
			{ status: 500 }
		);
	}
}

export async function PUT(
	request: NextRequest,
	{ params }: { params: Promise<Params> }
) {
	const { id } = await params
	try {
		const body = await request.json();
		const {
			name,
			companyName,
			jobTitle,
			fleetSize,
			email,
			country,
			city,
		} = body;

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
				{ error: 'All fields are required' },
				{ status: 400 }
			);
		}

		const listing = await updateListingInDB({
			id,
			name,
			companyName,
			jobTitle,
			fleetSize,
			email,
			country,
			city

		})

		return NextResponse.json(listing, { status: 200 });
	} catch (error) {
		console.error('Error updating listing:', error);
		return NextResponse.json(
			{ error: 'Failed to update listing' },
			{ status: 500 }
		);
	}
}

export async function PATCH(
	request: NextRequest,
	{ params }: { params: Promise<Params> }
) {
	const { id } = await params
	const user = await auth()
	try {
		const body = await request.json();
		const { status } = body;

		if (!user || user.user.role === "USER") {
			return NextResponse.json(
				{ error: 'Invalid request' },
				{ status: 403 }
			);
		}


		if (!status) {
			return NextResponse.json(
				{ error: 'Status is required' },
				{ status: 400 }
			);
		}

		const response = await updateListingStatusInDB({ id, status, userId: user.user.id })

		return NextResponse.json(response, { status: 200 });
	} catch (error) {
		console.error('Error updating listing:', error);
		return NextResponse.json(
			{ error: 'Failed to update listing' },
			{ status: 500 }
		);
	}
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: Promise<Params> }
) {
	const { id } = await params
	try {

		const listing = await deleteListingFromDB({ id })
		return NextResponse.json({ listing, message: 'Listing deleted successfully' }, { status: 200 });
	} catch (error) {
		console.error('Error deleting listing:', error);
		return NextResponse.json(
			{ error: 'Failed to delete listing' },
			{ status: 500 }
		);
	}
}
