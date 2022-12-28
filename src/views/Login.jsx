import React, { useState } from 'react';

import Illustration from '../images/LoginIll.png'

import Header from '../components/global/Header';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router';
import InputField from '../components/forms/InputField';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loggedIn } from '../redux/slices/logSlice';
import { setUser } from '../redux/slices/userSlice';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { USER } from '../data/user';
import { connectAccount } from '../api/auth';

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email('email invalide')
		.required("l'email est obligatoire"),
	password: Yup.string().required('Mot de passe est obligatoire'),
});

function Login() {
	const [load, setLoad] = useState(false);
	const [err, setErr] = useState(false);

	let navigate = useNavigate();
	const dispatch = useDispatch();

	const [email, setEmail] = useState();
	const [password, setPwd] = useState();

	const { register, handleSubmit, formState, reset } = useForm({
		mode: 'all',
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(validationSchema),
	});

	const { errors } = formState;

	const onSubmit = (data) => {
		setLoad(true);
		// let result = USER.find(
		// 	(user) => user.email === data.email && user.password === data.password,
		// );

		// if (result) {
		// 	console.log('trouvé');
		// 	dispatch(loggedIn());
		// 	dispatch(
		// 		setUser({
		// 			fullname: result.fullname,
		// 			username: result.fullname.trim().split(' ').pop(),
		// 			email: result.email,
		// 			category: result.category,
		// 		}),
		// 	);
		// 	navigate('/', { replace: true });
		// 	reset();
		// } else {
		// 	setErr(true);
		// 	console.log('non trouvé');
		// }

		connectAccount({
			email: data.email,
			mdpLogin: data.password,
		})
			.then((result) => {
				setLoad(false);
				console.log(result.data);
			})
			.catch((err) => {
				console.log(err);
				setLoad(false);
				setErr(true);
			});
	};
	return (
		<div className='container relative sm:pb-0'>
			<Header>
				<section className='space-y-7'>
					<h1 className='text-3xl font-bold'>Connectez-vous !</h1>

					<div
						onClick={() => {
							navigate('/');
						}}
						className='flex gap-2 items-center cursor-pointer max-w-fit'
					>
						<ChevronLeftIcon className='w-4 h-4' />
						<p>Retour</p>
					</div>
				</section>
			</Header>

			<section className='lg:h-screen grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-center justify-center'>
				<div className=''>
					<img src={Illustration} alt='' className='mx-auto w-60 sm:w-1/2 md:w-1/3 lg:w-full' />
				</div>
				<div className='max-w-md w-full mx-auto'>
					<div
						onClick={() => {
							navigate('/');
						}}
						className='sm:flex gap-2 items-center cursor-pointer max-w-fit mb-5 hidden'
					>
						<ChevronLeftIcon className='w-4 h-4' />
						<p>Retour</p>
					</div>
					<form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
						{err && (
							<small className='text-red-500'>
								Données utilisateurs incorrectes
							</small>
						)}
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

						<div className='flex justify-between items-center'>
							<div></div>
							<p className='text-sm cursor-pointer'>Mot de passe oublié ?</p>
						</div>

						<div className='mx-auto max-w-fit'>
							<button
								disabled={load ? true : false}
								type='submit'
								className='px-4 py-3 rounded-lg transition duration-300 bg-primary hover:bg-green-800 font-medium text-white text-sm'
							>
								Se connecter
							</button>
						</div>
					</form>

					<p className='text-center mt-10'>
						<Link className='font-medium text-sm ' to={'/register'}>
							Pas de compte ? Créez-en un !
						</Link>
					</p>
				</div>
			</section>
		</div>
	);
}

export default Login;
