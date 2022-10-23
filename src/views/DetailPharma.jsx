import Header from '../components/global/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

function DetailPharma() {
	let navigate = useNavigate();
	const state = useLocation().state;
	const { pharmacie } = state;
	return (
		<div className='space-y-7'>
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

			<section>
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
			</section>

			<div className='mx-auto max-w-fit'>
				<button
					onClick={() => navigate('/command')}
					className='px-4 py-3 rounded-lg transition duration-300 bg-primary hover:bg-green-800 font-medium text-white text-sm'
				>
					Commander une ordonnance
				</button>
			</div>
		</div>
	);
}

export default DetailPharma;
