import Header from '../components/global/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import {
	ChevronLeftIcon,
	MapIcon,
	MapPinIcon,
} from '@heroicons/react/24/solid';

function DetailPharma() {
	let navigate = useNavigate();
	const state = useLocation().state;
	const { pharmacie } = state;
	return (
		<div className=''>
			<Header>
				<section className='space-y-7'>
					<h1 className='text-3xl font-bold'>Détails Pharmacie</h1>

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

			<div
				onClick={() => {
					navigate(-1);
				}}
				className='sm:flex gap-2 items-center cursor-pointer max-w-fit hidden my-10'
			>
				<ChevronLeftIcon className='w-4 h-4' />
				<p>Retour</p>
			</div>

			<section className='max-w-lg mx-auto max-auto space-y-7'>
				<div
					className={`rounded-2xl ${
						!pharmacie.status
							? 'bg-[#FFF5FB]'
							: pharmacie.status && pharmacie.garde
							? 'bg-[#F5FFF6]'
							: 'bg-[#F5F6FF]'
					} overflow-hidden`}
				>
					<div className=''>
						<img
							className='h-48 w-full object-cover'
							src={pharmacie.img}
							alt={pharmacie.name}
						/>
					</div>
					<div className='p-5 space-y-5'>
						<div className='flex justify-between items-center'>
							<div className='space-y-1'>
								<h4>{pharmacie.name}</h4>
								<p className='small_text'>
									{pharmacie.city}, {pharmacie.region} SN
								</p>
								<p className='small_text'>{pharmacie.tel}</p>
							</div>
							<div className='space-y-2'>
								{pharmacie.garde && (
									<p className='font-semibold text-xs text-primary'>De garde</p>
								)}
								<p className='text-lg font-medium'>
									... {pharmacie.position}km
								</p>
							</div>
						</div>

						<div className='space-y-2'>
							<h4>Gardes cette semaine :</h4>
							<p className='text-xs ml-10'>
								Lundi - Jeudi - Vendredi - Dimanche
							</p>
						</div>
					</div>
				</div>
				<div className='mx-auto max-w-fit'>
					<button
						onClick={() => navigate('/mapping')}
						className='px-4 py-3 rounded-lg transition duration-300 text-gray-900 border border-primary bg-green-50 hover:bg-green-100 font-medium text-sm inline-flex items-center gap-2'
					>
						Voir l'itinéraire
						<MapPinIcon className='w-5 h-5' />
					</button>
				</div>
			</section>

			{/* à revoir */}
		</div>
	);
}

export default DetailPharma;
