import React, { useState } from 'react';
import Header from './../components/global/Header';
import InputField from './../components/forms/InputField';
import { motion } from 'framer-motion';
import {
	ChevronDownIcon,
	ChevronRightIcon,
	MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { Pharmacies } from './../data/pharma';
import PharmaSmall from '../components/cards/PharmaSmall';

const list = {
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.3,
		},
	},
	hidden: {
		opacity: 0,
		transition: {
			when: 'afterChildren',
		},
	},
};

function Search() {
	const [ville, setVille] = useState('');
	const [region, setRegion] = useState('');

	const [advanced, toAdvanced] = useState(false);

	const [search, setSearch] = useState('');
	return (
		<div className='space-y-5'>
			<Header>
				<section className=''>
					<h1 className='text-3xl font-bold'>Rechercher</h1>
				</section>
			</Header>

			<section>
				<InputField
					placeholder='Rechercher une pharmacie, un numéro etc..'
					id='search'
					name={'search'}
					type={'text'}
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					rightIcon={<MagnifyingGlassIcon className='h-5 w-5 cursor-pointer' />}
				/>
			</section>

			<section className='space-y-5 max-w-xs mx-auto'>
				<div
					className='flex gap-3 items-center cursor-pointer w-fit'
					onClick={() => toAdvanced(!advanced)}
				>
					<h4 className='cursor-pointer'>Effectuer une recherche avancée</h4>
					{advanced ? (
						<motion.div>
							<ChevronDownIcon className='w-4 h-4' />
						</motion.div>
					) : (
						<ChevronRightIcon className='w-4 h-4' />
					)}
				</div>

				{advanced && (
					<div>
						<form className='space-y-3'>
							<div>
								<label
									htmlFor='ville'
									className='block mb-1 text-sm font-medium text-gray-900'
								>
									Par ville
								</label>
								<select
									value={ville}
									onChange={(e) => setVille(e.target.value)}
									id='ville'
									className='border border-gray-300 text-gray-900 sm:text-xs rounded-lg focus:ring-primary focus:outline-none focus:border-primary block w-full p-2'
								>
									<option value={''}>Sélectionner une ville</option>
									<option>Dakar</option>
									<option>...</option>
								</select>
							</div>

							<div className=''>
								<label
									htmlFor='region'
									className={`block mb-1 text-sm font-medium ${
										ville !== '' ? 'text-gray-900' : 'text-gray-300'
									}`}
								>
									Par region
								</label>
								<select
									id='region'
									value={region}
									onChange={(e) => setRegion(e.target.value)}
									disabled={ville !== '' ? false : true}
									className='border border-gray-300 text-gray-900 sm:text-xs rounded-lg focus:ring-primary focus:outline-none focus:border-primary block w-full p-2'
								>
									<option>Sélectionner une region</option>
									<option>...</option>
								</select>
							</div>
						</form>
					</div>
				)}
			</section>

			<section>
				<h3 className='mb-5'>Résultats de la recherche</h3>

				<motion.div
					initial='hidden'
					animate='visible'
					variants={list}
					className='grid grid-cols-1 gap-3'
				>
					{search ? (
						Pharmacies.sort((a, b) => a.position - b.position).map((el, i) => (
							<PharmaSmall
								key={i}
								city={el.city}
								status={el.status}
								garde={el.garde}
								position={el.position}
								region={el.region}
								refer={el.refer}
								name={el.name}
							/>
						))
					) : (
						<div
							role='status'
							className='space-y-7 max-w-md rounded animate-pulse'
						>
							<div className='flex justify-between items-center bg-gray-100 p-5 rounded-lg'>
								<div>
									<div className='h-2.5 bg-gray-300 rounded-full w-24 mb-2.5'></div>
									<div className='w-32 h-2 bg-gray-200 rounded-full'></div>
								</div>
								<div className='h-2.5 bg-gray-300 rounded-full w-12'></div>
							</div>
							<div className='flex justify-between items-center bg-gray-100 p-5 rounded-lg'>
								<div>
									<div className='h-2.5 bg-gray-300 rounded-full w-24 mb-2.5'></div>
									<div className='w-32 h-2 bg-gray-200 rounded-full'></div>
								</div>
								<div className='h-2.5 bg-gray-300 rounded-full w-12'></div>
							</div>

							<span className='sr-only'>Loading...</span>
						</div>
					)}
				</motion.div>
			</section>
		</div>
	);
}

export default Search;
