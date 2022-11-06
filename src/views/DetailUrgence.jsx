import Header from '../components/global/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, PhoneIcon } from '@heroicons/react/24/solid';

function DetailUrgence() {
	let navigate = useNavigate();
	const state = useLocation().state;
	const { urgence } = state;
	return (
		<div className='space-y-7'>
			<Header>
				<section className='space-y-7'>
					<h1 className='text-3xl font-bold'>Détails urgence</h1>

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
					className={`bg-[#F5EADF6E] p-4 text-center rounded-xl space-y-6 max-w-xs mx-auto`}
				>
					<h4>{urgence.name}</h4>
					<div>
						{urgence.number}
					</div>
					<p className='text-xs'>{urgence.short}</p>
					<p className='text-sm'>{urgence.desc}</p>
					{urgence.siege && (
						<p className='text-sm font-medium'>Siège : {urgence.siege}</p>
					)}{' '}
				</div>
			</section>

			<div className='mx-auto max-w-fit'>
				<a
					href={`tel:${urgence.number}`}
					className='px-4 py-3 cursor-pointer rounded-lg transition duration-300 bg-primary hover:bg-green-800 font-medium text-white text-sm inline-flex items-center gap-2'
				>
					<PhoneIcon className='w-4 h-4' />
					Appeler
				</a>
			</div>
		</div>
	);
}

export default DetailUrgence;
