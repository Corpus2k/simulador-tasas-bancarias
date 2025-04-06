import { DataContext } from './dataContext';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { initialBanksData } from '../data/initialBanksData';
export const StateDataContext = ({ children }) => {
	const [banks, setBanks] = useState(initialBanksData);
	const [results, setResults] = useState('');
	return (
		<DataContext.Provider
			value={{
				banks,
				setBanks,
				results,
				setResults,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

StateDataContext.propTypes = {
	children: PropTypes.node.isRequired,
};
