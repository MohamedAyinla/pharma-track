import React from 'react';
import Header from './../components/global/Header';
import InputField from './../components/forms/InputField';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { URGENCIES } from './../data/urgencies';
import Urgence from '../components/cards/Urgence';

function Urgencies() {
	return (
		<div className='space-y-5'>
			<Header>
				<section className=''>
					<h1 className='text-3xl font-bold'>Numéros d'urgence</h1>
				</section>
			</Header>

			<section>
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

				<div className='columns-2'>
					{URGENCIES.map((el) => (
						<Urgence key={el.id} data={el} />
					))}
				</div>
			</section>
		</div>
	);
}

export default Urgencies;
