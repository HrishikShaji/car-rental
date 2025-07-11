import { NextRequest, NextResponse } from 'next/server'
import checkUserInDB from '@/db/checkUserInDB'
import createUserInDB from '@/db/createUserInDB'
import { saltAndHashPassword } from '@/lib/utils'

export async function POST(request: NextRequest) {
	try {
		const { email, password, name, joinAsAdmin } = await request.json()

		if (!email || !password || !name) {
			return NextResponse.json(
				{ error: 'Email,name and password are required' },
				{ status: 400 }
			)
		}

		const existingUser = await checkUserInDB({ email })

		if (existingUser) {
			return NextResponse.json(
				{ error: 'User already exists' },
				{ status: 400 }
			)
		}

		const hashedPassword = await saltAndHashPassword(password)

		const user = await createUserInDB({ email, name, hashedPassword, joinAsAdmin })

		return NextResponse.json(
			{ message: 'User created successfully', user },
			{ status: 201 }
		)
	} catch (error) {
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		)
	}
}
