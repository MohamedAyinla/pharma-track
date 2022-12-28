import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
	EnvelopeIcon,
	LockClosedIcon,
	MapPinIcon,
	UserIcon,
} from '@heroicons/react/24/outline';
import Illustration from '../../images/register2.png';


import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Select from 'react-select';
import AutoComplete from '../../components/forms/AutoComplete';

function RPharmacie() {
	const [place, setPlace] = useState()
	const autoCompleteRef = useRef();
	const inputRef = useRef();
	const options = {
		componentRestrictions: { country: 'sn' },
		fields: ['address_components', 'geometry', 'icon', 'name'],
		types: ['pharmacy'],
	};
	useEffect(() => {
		autoCompleteRef.current = new window.google.maps.places.Autocomplete(
			inputRef.current,
			options,
		);
		autoCompleteRef.current.addListener('place_changed', async function () {
			const place = await autoCompleteRef.current.getPlace();
			setPlace(place)
			console.log({ place });
		});
	}, []);<div className="m"></div>

	const [load, setLoad] = useState(false);
	const [err, setErr] = useState(false);
	const [dayErr, setDayErr] = useState(false);
	const [otherInfo, setOtherInfo] = useState(false);

	// State with list of all checked item
	const [checked, setChecked] = useState([]);
	const days = [
		'Lundi',
		'Mardi',
		'Mercredi',
		'Jeudi',
		'Vendredi',
		'Samedi',
		'Dimanche',
	];

	// Add/Remove checked item from list
	const handleCheck = (event) => {
		var updatedList = [...checked];
		if (event.target.checked) {
			updatedList = [...checked, event.target.value];
		} else {
			updatedList.splice(checked.indexOf(event.target.value), 1);
		}
		setChecked(updatedList);
	};

	console.log(checked);

	const validationSchema = Yup.object().shape({
		fullname: Yup.string().required('Ce champs est obligatoire'),
		numID: Yup.string().required('Ce champs est obligatoire'),
		email: Yup.string()
			.email('email invalide')
			.required("l'email est obligatoire"),
		password: Yup.string().required('Ce champs est obligatoire'),
		confirme_password: Yup.string().oneOf(
			[Yup.ref('password'), null],
			'Mot de passe incompatible',
		),
		beginHour: Yup.string().required('Ce champs est obligatoire'),
		endHour: Yup.string().required('Ce champs est obligatoire'),
	});

	let navigate = useNavigate();
	const dispatch = useDispatch();

	const { register, handleSubmit, formState, reset } = useForm({
		mode: 'all',
		defaultValues: {
			fullname: '',
			numID: '',
			email: '',
			password: '',
			confirme_password: '',
			days: '',
		},
		resolver: yupResolver(validationSchema),
	});

	const { errors } = formState;

	const onSubmit = (data) => {
		setLoad(true);
		console.log(data);
		console.log(localisation);
		setLoad(false);
	};
	return (
		<section className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-center justify-center'>
			<div className=''>
				<img
					src={Illustration}
					alt=''
					className='hidden mx-auto lg:block w-full'
				/>
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='space-y-5 max-w-md w-full mx-auto'
			>
				{err && (
					<small className='text-red-500'>
						Données utilisateurs incorrectes
					</small>
				)}
				<div>
					<label className='mb-3 block font-medium text-sm' htmlFor='fullname'>
						Nom de la pharmacie
					</label>
					<div className='relative rounded-xl shadow-sm'>
						<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
							<UserIcon className='h-5 w-5 cursor-pointer' />
						</div>
						<input
							disabled={load ? true : false}
							type={'text'}
							name={'fullname'}
							id={'fullname'}
							className={`block w-full bg-gray-50 outline-none rounded-lg border border-gray-500 pl-11 pr-5 pr-12 py-3 focus:border-gray-100 focus:ring-0 text-sm`}
							placeholder='Pharmacie ...'
							{...register('fullname')}
						/>
					</div>
					<small className='text-red-500'>{errors.fullname?.message}</small>
				</div>
				<div>
					<label className='mb-3 block font-medium text-sm' htmlFor='numID'>
						Numéro d'identification
					</label>
					<div className='relative rounded-xl shadow-sm'>
						<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
							<UserIcon className='h-5 w-5 cursor-pointer' />
						</div>
						<input
							disabled={load ? true : false}
							type={'text'}
							name={'numID'}
							id={'numID'}
							className={`block w-full bg-gray-50 outline-none rounded-lg border border-gray-500 pl-11 pr-5 pr-12 py-3 focus:border-gray-100 focus:ring-0 text-sm`}
							placeholder='Pharmacie ...'
							{...register('numID')}
						/>
					</div>
					<small className='text-red-500'>{errors.numID?.message}</small>
				</div>
				<div>
					<label className='mb-3 block font-medium text-sm' htmlFor='email'>
						Email
					</label>
					<div className='relative rounded-xl shadow-sm'>
						<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
							<EnvelopeIcon className='h-5 w-5 cursor-pointer' />
						</div>
						<input
							disabled={load ? true : false}
							type={'email'}
							name={'email'}
							id={'email'}
							className={`block w-full bg-gray-50 outline-none rounded-lg border border-gray-500 pl-11 pr-5 pr-12 py-3 focus:border-gray-100 focus:ring-0 text-sm`}
							placeholder='example@gmail.com'
							{...register('email')}
						/>
					</div>
					<small className='text-red-500'>{errors.email?.message}</small>
				</div>

				<div>
					<label className='mb-3 block font-medium text-sm' htmlFor='location'>
						Localisation
					</label>
					<div className='relative rounded-xl shadow-sm'>
						<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
							<MapPinIcon className='h-5 w-5 cursor-pointer' />
						</div>
						<input
							ref={inputRef}
							disabled={load ? true : false}
							// name={'location'}
							id={'location'}
							className={`block w-full bg-gray-50 outline-none rounded-lg border border-gray-500 pl-11 pr-5 pr-12 py-3 focus:border-gray-100 focus:ring-0 text-sm`}
							placeholder='Votre emplacement'
							// {...register('location')}
						/>
					</div>
					<small className='text-red-500'>{errors.location?.message}</small>
				</div>

				{/* <AutoComplete /> */}

				<div className='grid grid-cols-2 gap-5'>
					<div>
						<label
							className='mb-3 block font-medium text-sm'
							htmlFor='password'
						>
							Mot de passe
						</label>
						<div className='relative rounded-xl shadow-sm'>
							<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
								<LockClosedIcon className='h-5 w-5 cursor-pointer' />
							</div>
							<input
								disabled={load ? true : false}
								type={'password'}
								name={'password'}
								id={'password'}
								className={`block w-full bg-gray-50 outline-none rounded-lg border border-gray-500 pl-11 pr-5 pr-12 py-3 focus:border-gray-100 focus:ring-0 text-sm`}
								placeholder='Entrez un mot de passe'
								{...register('password')}
							/>
						</div>
						<small className='text-red-500'>{errors.password?.message}</small>
					</div>
					<div>
						<label
							className='mb-3 block font-medium text-sm'
							htmlFor='confirme_password'
						>
							Confirmer Mot de passe
						</label>
						<div className='relative rounded-xl shadow-sm'>
							<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
								<LockClosedIcon className='h-5 w-5 cursor-pointer' />
							</div>
							<input
								disabled={load ? true : false}
								type={'password'}
								name={'confirme_password'}
								id={'confirme_password'}
								className={`block w-full bg-gray-50 outline-none rounded-lg border border-gray-500 pl-11 pr-5 pr-12 py-3 focus:border-gray-100 focus:ring-0 text-sm`}
								placeholder='Entrez un mot de passe'
								{...register('confirme_password')}
							/>
						</div>
						<small className='text-red-500'>
							{errors.confirme_password?.message}
						</small>
					</div>
				</div>

				<div>
					<p className='mb-3 block font-medium text-sm'>Horaires normales</p>
					<div className='mb-4'>
						<div className='flex gap-3 flex-wrap'>
							{days.map((item, index) => (
								<div className='flex items-center' key={index}>
									<input
										value={item}
										type='checkbox'
										id={item}
										className='w-4 h-4 text-green-600 bg-green-100 rounded border-green-300 outline-0 focus:ring-0 '
										onChange={handleCheck}
									/>
									<label
										className='ml-2 text-sm font-medium text-gray-900'
										htmlFor={item}
									>
										{item}
									</label>
								</div>
							))}
						</div>
						{dayErr && (
							<small className='text-red-500'>
								Vous devez au moins sélectionner un jour
							</small>
						)}
					</div>
					<div className='grid grid-cols-2 gap-5'>
						<div>
							<label
								className='mb-3 block font-medium text-sm'
								htmlFor='beginHour'
							>
								Heure de début
							</label>
							<input
								className={`block w-full bg-gray-50 outline-none rounded-lg border border-gray-500 px-5 py-3 focus:border-gray-100 focus:ring-0 text-sm`}
								type='time'
								name='beginHour'
								id='beginHour'
								{...register('beginHour')}
							/>
							<small className='text-red-500'>
								{errors.beginHour?.message}
							</small>
						</div>
						<div>
							<label
								className='mb-3 block font-medium text-sm'
								htmlFor='endHour'
							>
								Heure de fin
							</label>
							<input
								className={`block w-full bg-gray-50 outline-none rounded-lg border border-gray-500 px-5 py-3 focus:border-gray-100 focus:ring-0 text-sm`}
								type='time'
								name='endHour'
								id='endHour'
								{...register('endHour')}
							/>
							<small className='text-red-500'>{errors.endHour?.message}</small>
						</div>
					</div>
				</div>

				<div className='mx-auto max-w-fit'>
					<button
						disabled={load ? true : false}
						type='submit'
						className='px-4 py-3 rounded-lg transition duration-300 bg-primary hover:bg-green-800 font-medium text-white text-sm'
						onClick={() => {
							checked.length <= 0 ? setDayErr(true) : setDayErr(false);
						}}
					>
						S'inscrire
					</button>
				</div>
			</form>
		</section>
	);
}

export default RPharmacie;
