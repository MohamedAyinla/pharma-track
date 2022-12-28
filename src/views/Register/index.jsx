import React, { useState } from 'react';
import Header from '../../components/global/Header';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Outlet, useNavigate } from 'react-router';
import { BuildingOfficeIcon, UsersIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function Register() {
	let navigate = useNavigate();

	return (
		<div className='container relative'>
			<header>
				<div className='py-5 sticky top-0 z-30 bg-white'>
					<div className='mb-6'>
						<p className='text-center font-bold text-gray-200'>PharmaTrack</p>
					</div>

					<section className='space-y-7'>
						<h1 className='text-3xl font-bold'>Inscrivez-vous !</h1>

						<div
							onClick={() => {
								navigate(-1);
							}}
							className='flex gap-2 items-center cursor-pointer max-w-fit'
						>
							<ChevronLeftIcon className='w-4 h-4' />
							<p>Retour</p>
						</div>
					</section>
				</div>
			</header>

			<Outlet />

			<p className='text-center mt-10'>
				<Link className='font-medium text-sm ' to={'/login'}>
					Déjà un compte ? Connectez-vous !
				</Link>
			</p>
		</div>
	);
}

export default Register;
