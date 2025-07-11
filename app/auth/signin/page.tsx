import SignInForm from '@/components/auth/SignInForm'
import { bgImg } from '@/lib/constants'
import Image from 'next/image'

export default async function Page() {

	return (
		<div className="h-full w-full flex flex-col justify-center items-center relative">
			<Image className="h-full w-full object-cover " src={bgImg} fill alt="hero" />
			<div className="absolute z-20 flex items-center gap-5">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<h2 className="mt-6 text-center text-3xl font-extrabold text-white">
						Sign in to your account
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Or{' '}
						<a
							href="/auth/register"
							className="font-medium text-indigo-600 hover:text-indigo-500"
						>
							create a new account
						</a>
					</p>
				</div>

				<div className="mt-8 w-2xl">
					<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
						<SignInForm />
					</div>
				</div>
			</div>
		</div>
	)
}
