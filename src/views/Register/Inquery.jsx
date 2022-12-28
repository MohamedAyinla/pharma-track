import React from 'react';
import { BuildingOfficeIcon, UsersIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

function Inquery() {
	let navigate = useNavigate();
	return (
		<section className='mt-16 max-w-sm mx-auto'>
			<p>Vous êtes :</p>

			<div className='grid grid-cols-2 mt-10 gap-10'>
				<div
					className='text-center border flex items-center justify-center flex-col py-5 px-5 max-w-20 cursor-pointer hover:bg-gray-100 transition-all duration-500 max-h-22'
					onClick={() => navigate('/register/particular')}
				>
					<UsersIcon className='w-8 h-8 mb-2' />
					<p>Un particulier</p>
				</div>

				<div
					className='text-center border flex items-center justify-center flex-col py-5 px-5 max-w-20 max-h-22 cursor-pointer hover:bg-gray-100 transition-all duration-500'
					onClick={() => navigate('/register/pharmacie')}
				>
					<BuildingOfficeIcon className='w-8 h-8 mb-2' />
					<p>Une pharmacie</p>
				</div>
			</div>
		</section>
	);
}

export default Inquery;
