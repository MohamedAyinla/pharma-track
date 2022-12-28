import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';

import Wrapper from './views';
import Home from './views/Home';
import Search from './views/Search';

import { AnimatePresence } from 'framer-motion';
import Urgencies from './views/Urgences/Urgencies';
import Profile from './views/Profile/Profile';
import Splash from './views/Splash';
import ScrollToTop from './components/global/ScrollToTop';
import DetailPharma from './views/DetailPharma';
import DetailUrgence from './views/Urgences/DetailUrgence';
import { useSelector } from 'react-redux';
import { selectLogged } from './redux/slices/logSlice';
import Login from './views/Login';
import Register from './views/Register';
import Command from './views/Command';
import axios from 'axios';
import Mapping from './views/Mapping';
import Inquery from './views/Register/Inquery';
import RPharmacie from './views/Register/RPharmacie';
import RParticular from './views/Register/RParticular';
import ProfilViews from './views/Profile';
import GeneralInfo from './views/Profile/GeneralInfo';

const ProtectedRoute = ({ children }) => {
	let log = useSelector(selectLogged);
	if (!log) {
		return <Navigate to='/login' />;
	}
	return children;
};

// const EnterRoute = ({ children }) => {
// 	let log = useSelector(selectLogged);
// 	if (log) {
// 		return <Navigate to='/' />;
// 	}
// 	return children;
// };

function App() {
	const [status, setStatus] = useState(false);
	const [load, setLoad] = useState(true);
	const [localisation, setLoc] = useState();
	const location = useLocation();
	useEffect(() => {
		setTimeout(() => {
			setStatus(true);
		}, 2000);
	}, []);

	async function getUserLocationFromAPI() {
		await axios
			.get(
				'https://ipgeolocation.abstractapi.com/v1/?api_key=46cf9e5e0f4840dcb99fb0354dfad0b4',
			)
			.then((result) => {
				console.log(result.data);
				setLoc({
					lat: result.data.latitude,
					lng: result.data.longitude,
				});
				setLoad(false);
			})
			.catch((err) => {
				console.log(err);
				setLoad(false);
			});
	}

	useEffect(() => {
		getUserLocationFromAPI();
	}, []);
	return status && !load ? (
		<AnimatePresence mode='wait'>
			<ScrollToTop>
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={<Wrapper />}>
						<Route index element={<Home />} />
						<Route path='pharmacies/:id' element={<DetailPharma />} />
						<Route path='search' element={<Search />} />
						<Route path='urgencies' element={<Urgencies />} />
						<Route path='urgencies/:id' element={<DetailUrgence />} />
						<Route path='command' element={<Command />} />
						<Route path='mapping' element={<Mapping loc={localisation} />} />
						<Route
							path='profile'
							element={
								<ProtectedRoute>
									<ProfilViews />
								</ProtectedRoute>
							}
						>
							<Route index element={<Profile />} />
							<Route path='generalInfo' element={<GeneralInfo />} />
						</Route>
					</Route>

					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />}>
						<Route index element={<Inquery />} />
						<Route path='pharmacie' element={<RPharmacie />} />
						<Route path='particular' element={<RParticular />} />
					</Route>
				</Routes>
			</ScrollToTop>
		</AnimatePresence>
	) : (
		<Splash />
	);
}

export default App;
