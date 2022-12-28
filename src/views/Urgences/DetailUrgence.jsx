import Header from '../../components/global/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, PhoneIcon } from '@heroicons/react/24/solid';

function DetailUrgence() {
	let navigate = useNavigate();
	const state = useLocation().state;
	const { urgence } = state;
	return (
		<div className=''>
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
					className={`bg-[#F5EADF6E] p-4 text-center rounded-xl space-y-6 max-w-xs mx-auto`}
				>
					<h4>{urgence.nom}</h4>
					<div>{urgence.telephone}</div>
					<p className='text-xs'>
						{urgence.description && urgence.description}
					</p>
					<p className='text-sm'>{urgence.services && urgence.services}</p>
					{urgence.adresse && (
						<p className='text-sm font-medium'>Siège : {urgence.adresse}</p>
					)}
				</div>
				<div className='mx-auto max-w-fit'>
					<a
						href={`tel:${urgence.telephone}`}
						className='px-4 py-3 cursor-pointer rounded-lg transition duration-300 bg-primary hover:bg-green-800 font-medium text-white text-sm inline-flex items-center gap-2'
					>
						<PhoneIcon className='w-4 h-4' />
						Appeler
					</a>
				</div>
			</section>
		</div>
	);
}

export default DetailUrgence;
