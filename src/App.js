import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Wrapper from './views';
import Home from './views/Home';
import Search from './views/Search';

import { AnimatePresence } from 'framer-motion';
import Urgencies from './views/Urgencies';
import Profile from './views/Profile';
import Splash from './views/Splash';
import ScrollToTop from './components/global/ScrollToTop';
import DetailPharma from './views/DetailPharma';
import DetailUrgence from './views/DetailUrgence';

function App() {
	const [status, setStatus] = useState(false);
	const location = useLocation();
	useEffect(() => {
		setTimeout(() => {
			setStatus(true);
		}, 2000);
	}, []);
	return status ? (
		<AnimatePresence mode='wait'>
			<ScrollToTop>
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={<Wrapper />}>
						<Route index element={<Home />} />
						<Route path='pharmacies/:id' element={<DetailPharma />} />
						<Route path='search' element={<Search />} />
						<Route path='urgencies' element={<Urgencies />} />
						<Route path='urgencies/:id' element={<DetailUrgence />} />
						<Route path='profile' element={<Profile />} />
					</Route>
				</Routes>
			</ScrollToTop>
		</AnimatePresence>
	) : (
		<Splash />
	);
}

export default App;
