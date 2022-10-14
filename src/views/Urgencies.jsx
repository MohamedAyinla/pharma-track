import React from 'react';
import Header from './../components/global/Header';
import InputField from './../components/forms/InputField';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const URGENCIES = [
	{
		name: 'SAMU Nationnal',
		numbers: ['1515'],
		short: 'Urgences médicales chirurgicales et obstétricales',
	},
	{
		name: 'SAMU Nationnal',
		numbers: ['1515', '1515'],
		short: 'Urgences médicales chirurgicales et obstétricales',
	},
	{
		name: 'SAMU Nationnal',
		numbers: ['1515', '1515'],
		short: 'Urgences médicales chirurgicales et obstétricales',
	},
	{
		name: 'SAMU Nationnal',
		numbers: ['1515'],
		short: 'Urgences médicales chirurgicales et obstétricales',
	},
	{
		name: 'SAMU Nationnal',
		numbers: ['1515', '1515'],
		short: 'Urgences médicales chirurgicales et obstétricales',
	},
	{
		name: 'SAMU Nationnal',
		numbers: ['1515', '1515'],
		short: 'Urgences médicales chirurgicales et obstétricales',
	},
	{
		name: 'SAMU Nationnal',
		numbers: ['1515'],
		short: 'Urgences médicales chirurgicales et obstétricales',
	},
];

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
					placeholder='Rechercher une pharmacie, un numéro etc..'
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
					{URGENCIES.map((el, i) => (
						<div
							key={i}
							className='bg-[#F5EADF6E] p-3 text-center rounded-xl space-y-3 mb-4 break-inside-avoid-column'
						>
							<h4>{el.name}</h4>
							<div>
								{el.numbers.map((num, id) => (
									<p className='font-semibold text-xl'>{num}</p>
								))}
							</div>
							<p className='text-xs'>{el.short}</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}

export default Urgencies;
