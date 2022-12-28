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

function LoadCard() {
	return (
		<div role='status' className='space-y-7 max-w-md rounded animate-pulse'>
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
	);
}

function Search() {
	const [city, setCCity] = useState('');
	const [region, setRegion] = useState('');

	const [advanced, toAdvanced] = useState(false);

	const [search, setSearch] = useState('');

	function searching() {
		return Pharmacies.filter((t) => {
			let searched = false;
			const byName = [t.name && t.name];

			byName.forEach((item) => {
				if (item && item.toLowerCase().includes(search.toLowerCase())) {
					searched = true;
				}
			});

			return searched;
		});
	}

	function searchCity() {
		return Pharmacies.filter((t) => {
			let searched = false;
			const byCity = [t.city && t.city];

			byCity.forEach((item) => {
				if (item && item.toLowerCase().includes(city.toLowerCase())) {
					searched = true;
				}
			});

			return searched;
		});
	}

	function searchR() {
		return Pharmacies.filter((t) => {
			let searched = false;
			const byR = [t.region && t.region];

			byR.forEach((item) => {
				if (item && item.toLowerCase().includes(region.toLowerCase())) {
					searched = true;
				}
			});

			return searched;
		});
	}

	console.log(city, region);

	return (
		<div className='space-y-5'>
			<Header>
				<section className=''>
					<h1 className='text-3xl font-bold'>Rechercher</h1>
				</section>
			</Header>

			<section className='w-full mx-auto sm:max-w-screen-sm space-y-5'>
				<div>
					<InputField
						placeholder='Rechercher une pharmacie, un numéro etc..'
						id='search'
						name={'search'}
						type={'text'}
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						rightIcon={
							<MagnifyingGlassIcon className='h-5 w-5 cursor-pointer' />
						}
					/>
				</div>

				<div className='space-y-5 ml-10 sm:ml-0'>
					<div
						className='flex gap-3 items-center cursor-pointer w-fit'
						onClick={() => toAdvanced(!advanced)}
					>
						<h4 className='cursor-pointer'>Effectuer une recherche avancée</h4>
						{advanced ? (
							<motion.div whileTap={{ opacity: 0 }}>
								<ChevronDownIcon className='w-4 h-4' />
							</motion.div>
						) : (
							<motion.div whileTap={{ opacity: 0 }}>
								<ChevronRightIcon className='w-4 h-4' />
							</motion.div>
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
										value={city}
										onChange={(e) => setCCity(e.target.value)}
										id='ville'
										className='border border-gray-300 text-gray-900 sm:text-xs rounded-lg focus:ring-primary focus:outline-none focus:border-primary block w-full p-2'
									>
										<option value={''}>Sélectionner une ville</option>
										<option>Dakar</option>
										<option>Cotonou</option>
									</select>
								</div>

								<div className=''>
									<label
										htmlFor='region'
										className={`block mb-1 text-sm font-medium ${
											city !== '' ? 'text-gray-900' : 'text-gray-300'
										}`}
									>
										Par region
									</label>
									<select
										id='region'
										value={region}
										onChange={(e) => setRegion(e.target.value)}
										disabled={city !== '' ? false : true}
										className='border border-gray-300 text-gray-900 sm:text-xs rounded-lg focus:ring-primary focus:outline-none focus:border-primary block w-full p-2'
									>
										<option value={''}>Sélectionner une region</option>
										<option>Sicap Liberté</option>
										<option>Autre</option>
									</select>
								</div>
							</form>
						</div>
					)}
				</div>
			</section>

			<section>
				<h3 className='mb-5'>Résultats de la recherche</h3>

				<motion.div
					initial='hidden'
					animate='visible'
					variants={list}
					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5'
				>
					{search !== '' ? (
						searching()
							.sort((a, b) => a.position - b.position)
							.map((el) => <PharmaSmall key={el.id} element={el} />)
					) : city !== '' ? (
						searchCity()
							.sort((a, b) => a.position - b.position)
							.map((el) => <PharmaSmall key={el.id} element={el} />)
					) : region !== '' ? (
						searchR()
							.sort((a, b) => a.position - b.position)
							.map((el) => <PharmaSmall key={el.id} element={el} />)
					) : (
						<LoadCard />
					)}
				</motion.div>
			</section>
		</div>
	);
}

export default Search;
