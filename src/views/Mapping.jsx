import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/global/Header';
import MapContainer from '../components/MapContainer';

const LocationPin = ({ text }) => (
	<div className='pin'>
		{/* <Icon icon={locationIcon} className='pin-icon' /> */}
		<p className='pin-text'>{text}</p>
	</div>
);

function Mapping({ loc }) {
	let navigate = useNavigate();
	return (
		<div className='space-y-5'>
			<Header>
				<section className='space-y-7'>
					<h1 className='text-3xl font-bold'>Carte</h1>

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
			</Header>

			<section className='w-full h-full relative'>
				{/* <MapContainer /> */}
			</section>
		</div>
	);
}

export default Mapping;
