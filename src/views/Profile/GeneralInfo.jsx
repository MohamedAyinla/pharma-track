import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	ChevronLeftIcon,
	EnvelopeIcon,
	LockClosedIcon,
	UserIcon,
	PhoneIcon,
} from '@heroicons/react/24/outline';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Header from '../../components/global/Header';

import { getUser } from '../../redux/slices/userSlice';

function GeneralInfo() {
	const [load, setLoad] = useState(false);
	const [err, setErr] = useState(false);

    const user = useSelector(getUser);
    
    // console.log(user)

	const validationSchema = Yup.object().shape({
		fullname: Yup.string().required('Ce champs est obligatoire'),
		email: Yup.string()
			.email('email invalide')
			.required("l'email est obligatoire"),
		phone: Yup.string(),
		password: Yup.string(),
		new_password: Yup.string(),
		confirme_new_password: Yup.string().oneOf(
			[Yup.ref('new_password'), null],
			'Mot de passe incompatible',
		),
	});

	let navigate = useNavigate();
	const dispatch = useDispatch();

	const { register, handleSubmit, formState, reset } = useForm({
		mode: 'all',
		defaultValues: {
			fullname: user.fullname,
			email: user.email,
            phone: user.phone,
            password: '',
			new_password: '',
			confirme_new_password: '',
			
		},
		resolver: yupResolver(validationSchema),
	});

	const { errors } = formState;

	const onSubmit = (data) => {
        setLoad(true);
        console.log('submit')
		console.log(data);
		setLoad(false);
	};
	return (
		<div className=''>
			<Header>
				<section className='space-y-7'>
					<h1 className='text-3xl font-bold'>Informations Générales</h1>

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
				<form onSubmit={handleSubmit(onSubmit)} className='space-y-9'>
					<div className='p-4 bg-gray-100 rounded-lg space-y-3'>
						<h3>Détails personnels</h3>
						<div className='space-y-1.5'>
							<div className='input_block'>
								<div className='relative rounded-xl'>
									<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
										<UserIcon className='h-5 w-5 cursor-pointer text-gray-500' />
									</div>
									<input
										disabled={load ? true : false}
										type={'text'}
										name={'fullname'}
										id={'fullname'}
										className={`block w-full bg-white outline-none rounded-lg pl-11 pr-5 pr-12 py-3 focus:ring-0 text-sm`}
										placeholder='Jean Pierrot'
										{...register('fullname')}
									/>
								</div>
								<small className='text-red-500'>
									{errors.fullname?.message}
								</small>
							</div>
							<div className='input_block'>
								<div className='relative rounded-xl'>
									<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
										<EnvelopeIcon className='h-5 w-5 cursor-pointer text-gray-500' />
									</div>
									<input
										disabled={load ? true : false}
										type={'text'}
										name={'email'}
										id={'email'}
										className={`block w-full bg-white outline-none rounded-lg pl-11 pr-5 pr-12 py-3 focus:ring-0 text-sm`}
										placeholder='Jean Pierrot'
										{...register('email')}
									/>
								</div>
								<small className='text-red-500'>{errors.email?.message}</small>
							</div>
							<div className='input_block'>
								<div className='relative rounded-xl'>
									<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
										<PhoneIcon className='h-5 w-5 cursor-pointer text-gray-500' />
									</div>
									<input
										disabled={load ? true : false}
										type={'text'}
										name={'phone'}
										id={'phone'}
										className={`block w-full bg-white outline-none rounded-lg pl-11 pr-5 pr-12 py-3 focus:ring-0 text-sm`}
										placeholder='+221 ...'
										{...register('phone')}
									/>
								</div>
								<small className='text-red-500'>{errors.phone?.message}</small>
							</div>
						</div>
					</div>

					<div className='p-4 bg-gray-100 rounded-lg space-y-3'>
						<h3>Changer votre mot de passe</h3>
						<div className='space-y-1.5'>
							<div className='input_block'>
								<div className='relative rounded-xl'>
									<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
										<LockClosedIcon className='h-5 w-5 cursor-pointer text-gray-500' />
									</div>
									<input
										disabled={load ? true : false}
										type={'text'}
										name={'password'}
										id={'password'}
										className={`block w-full bg-white outline-none rounded-lg pl-11 pr-5 pr-12 py-3 focus:ring-0 text-sm`}
										placeholder='Mot de passe actuel'
										{...register('password')}
									/>
								</div>
								<small className='text-red-500'>
									{errors.password?.message}
								</small>
							</div>
							<div className='input_block'>
								<div className='relative rounded-xl'>
									<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
										<LockClosedIcon className='h-5 w-5 cursor-pointer text-gray-500' />
									</div>
									<input
										disabled={load ? true : false}
										type={'text'}
										name={'new_password'}
										id={'new_password'}
										className={`block w-full bg-white outline-none rounded-lg pl-11 pr-5 pr-12 py-3 focus:ring-0 text-sm`}
										placeholder='Nouveau mot de passe'
										{...register('new_password')}
									/>
								</div>
								<small className='text-red-500'>
									{errors.new_password?.message}
								</small>
							</div>
							<div className='input_block'>
								<div className='relative rounded-xl'>
									<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
										<LockClosedIcon className='h-5 w-5 cursor-pointer text-gray-500' />
									</div>
									<input
										disabled={load ? true : false}
										type={'text'}
										name={'confirme_new_password'}
										id={'confirme_new_password'}
										className={`block w-full bg-white outline-none rounded-lg pl-11 pr-5 pr-12 py-3 focus:ring-0 text-sm`}
										placeholder='Confirmer nouveau mot de passe'
										{...register('confirme_new_password')}
									/>
								</div>
								<small className='text-red-500'>
									{errors.confirme_new_password?.message}
								</small>
							</div>
						</div>
					</div>

					<div className='mx-auto max-w-fit'>
						<button
							disabled={load ? true : false}
							type='submit'
							className='px-4 py-3 rounded-lg transition duration-300 bg-primary hover:bg-green-800 font-medium text-white text-sm'
						>
							Sauvegarder les modifications
						</button>
					</div>
				</form>
			</section>
		</div>
	);
}

export default GeneralInfo;
