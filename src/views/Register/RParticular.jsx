import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
	EnvelopeIcon,
	LockClosedIcon,
	UserIcon,
} from '@heroicons/react/24/outline';
import Illustration from '../../images/register1.png';


import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { createAccount } from '../../api/users';

function RParticular() {
	const [load, setLoad] = useState(false);
	const [err, setErr] = useState(false);
	// const [success, setSuccess] = useState(false);
	// const [onInsurance, setOnInsurance] = useState(false);

	const validationSchema = Yup.object().shape({
		lastname: Yup.string().required('Ce champs est obligatoire'),
		firstname: Yup.string().required('Ce champs est obligatoire'),
		email: Yup.string()
			.email('email invalide')
			.required("l'email est obligatoire"),
		password: Yup.string().required('Ce champs est obligatoire'),
		confirme_password: Yup.string().oneOf(
			[Yup.ref('password'), null],
			'Mot de passe incompatible',
		),
		// numInsurance: onInsurance
		// 	? Yup.string().required('Ce champs est obligatoire')
		// 	: null,
		// picInsurance: onInsurance
		// 	? Yup.string().required('Ce champs est obligatoire')
		// 	: null,
	});

	let navigate = useNavigate();
	const dispatch = useDispatch();

	const { register, handleSubmit, formState, reset } = useForm({
		mode: 'all',
		defaultValues: {
			lastname: '',
			firstname: '',
			email: '',
			password: '',
			confirme_password: '',
			// numInsurance: '',
			// picInsurance: '',
		},
		resolver: yupResolver(validationSchema),
	});

	const { errors } = formState;

	const onSubmit = (data) => {
		setLoad(true);
		// console.log(data);
		createAccount({
			nom: data.lastname,
			prenoms: data.firstname,
			email: data.email,
			motDePasse: data.password,
			role: 'aucun',
		})
			.then((result) => {
				setLoad(false);
				console.log(result.data);
				alert('Succès');
				navigate('/login', { replace: true });
			})
			.catch((err) => {
				setLoad(false);
				console.log(err);
			});
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
					<label className='mb-3 block font-medium text-sm' htmlFor='lastname'>
						Nom
					</label>
					<div className='relative rounded-xl shadow-sm'>
						<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
							<UserIcon className='h-5 w-5 cursor-pointer' />
						</div>
						<input
							disabled={load ? true : false}
							type={'text'}
							name={'lastname'}
							id={'lastname'}
							className={`block w-full bg-gray-50 outline-none rounded-lg border border-gray-500 pl-11 pr-5 pr-12 py-3 focus:border-gray-100 focus:ring-0 text-sm`}
							placeholder='Pierrot'
							{...register('lastname')}
						/>
					</div>
					<small className='text-red-500'>{errors.lastname?.message}</small>
				</div>
				<div>
					<label className='mb-3 block font-medium text-sm' htmlFor='firstname'>
						Prénoms
					</label>
					<div className='relative rounded-xl shadow-sm'>
						<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
							<UserIcon className='h-5 w-5 cursor-pointer' />
						</div>
						<input
							disabled={load ? true : false}
							type={'text'}
							name={'firstname'}
							id={'firstname'}
							className={`block w-full bg-gray-50 outline-none rounded-lg border border-gray-500 pl-11 pr-5 pr-12 py-3 focus:border-gray-100 focus:ring-0 text-sm`}
							placeholder='Jean'
							{...register('firstname')}
						/>
					</div>
					<small className='text-red-500'>{errors.firstname?.message}</small>
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
					<label className='mb-3 block font-medium text-sm' htmlFor='password'>
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
				{/* {onInsurance && (
					<>
						<div>
							<label
								className='mb-3 block font-medium text-sm'
								htmlFor='numInsurance'
							>
								Numéro d'assuré
							</label>
							<div className='relative rounded-xl shadow-sm'>
								<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
									<UserIcon className='h-5 w-5 cursor-pointer' />
								</div>
								<input
									disabled={load ? true : false}
									type={'text'}
									name={'numInsurance'}
									id={'numInsurance'}
									className={`block w-full bg-gray-50 outline-none rounded-lg border border-gray-500 pl-11 pr-5 pr-12 py-3 focus:border-gray-100 focus:ring-0 text-sm`}
									placeholder='xxxx xxxx xxxx xxxx'
									{...register('numInsurance')}
								/>
							</div>
							<small className='text-red-500'>
								{errors.numInsurance?.message}
							</small>
						</div>
						<div>
							<label
								className='mb-3 block font-medium text-sm'
								htmlFor='picInsurance'
							>
								Carte d'assurance
							</label>
							<div className='relative rounded-xl shadow-sm'>
								<input
									disabled={load ? true : false}
									className='block w-full text-sm text-gray-900 cursor-pointer focus:outline-none'
									id='picInsurance'
									type='file'
									{...register('picInsurance')}
									name={'picInsurance'}
								/>
							</div>
							<small className='text-red-500'>
								{errors.picInsurance?.message}
							</small>
						</div>
					</>
				)}
				<div className='flex items-center mb-4'>
					<input
						id='insurance'
						type='checkbox'
						value={onInsurance}
						onChange={() => setOnInsurance(!onInsurance)}
						className='w-4 h-4 text-green-600 bg-green-100 rounded border-green-300 outline-0 focus:ring-0 '
					/>
					<label
						htmlFor='insurance'
						className='ml-2 text-sm font-medium text-gray-900'
					>
						Vous êtes assuré ?
					</label>
				</div> */}
				<div className='mx-auto max-w-fit'>
					<button
						disabled={load ? true : false}
						type='submit'
						className='px-4 py-3 rounded-lg transition duration-300 bg-primary hover:bg-green-800 font-medium text-white text-sm'
					>
						S'inscrire
					</button>
				</div>
			</form>
		</section>
	);
}

export default RParticular;
