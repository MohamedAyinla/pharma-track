import React, { useEffect } from 'react';
import Header from '../../components/global/Header';
import InputField from '../../components/forms/InputField';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { URGENCIES } from '../../data/urgencies';
import Urgence from '../../components/cards/Urgence';
import { getAllNumbers } from '../../api/numeroUrgence';
import { useState } from 'react';

function Urgencies() {
	const [load, setLoad] = useState(false);
	const [err, setErr] = useState(false);
	const [urgencies, setUrgencies] = useState([]);

	useEffect(() => {
		setLoad(true);
		getAllNumbers()
			.then((result) => {
				setLoad(false);
				console.log(result.data.data);
				setUrgencies(result.data.data);
			})
			.catch((err) => {
				setErr(true)
				setLoad(false);
				console.log(err);
			});
	}, []);
	return (
		<div className='space-y-5'>
			<Header>
				<section className=''>
					<h1 className='text-3xl font-bold'>Numéros d'urgence</h1>
				</section>
			</Header>

			<section className='w-full mx-auto sm:max-w-screen-sm space-y-5'>
				<InputField
					placeholder='Rechercher une urgence nom ou numéro'
					id='search'
					name={'search'}
					type={'text'}
					rightIcon={<MagnifyingGlassIcon className='h-5 w-5 cursor-pointer' />}
				/>
			</section>

			<section>
				<h3 className='text-lg font-semibold cursor-default mb-5	'>
					Liste non exhaustive
				</h3>

				{load ? (
					<p>Chargement</p>
				) : err ? (
					<p className='text-bold text-red-500'>Une erreur est survenue lors de la récupération des données</p>
				) : urgencies.length > 0 ? (
					<div className='columns-2'>
						{urgencies.map((el) => (
							<Urgence key={el.id} data={el} />
						))}
					</div>
				) : (
					<p>Aucun</p>
				)}
			</section>
		</div>
	);
}

export default Urgencies;
