import { useContext } from 'react';
import tasasBancarias from '../data/tasasBancarias.json';
import { DataContext } from '../contexts/dataContext';
import { initialBanksData } from '../data/initialBanksData';

export const useFormLogic = () => {
	const { banks, setBanks, setResults } = useContext(DataContext);

	const banksData = Object.keys(tasasBancarias.resultsBancos);

	const category = Object.keys(
		tasasBancarias.resultsBancos?.[banks?.banco] || {}
	);

	const typeInterest =
		tasasBancarias.resultsBancos?.[banks?.banco]?.[banks.categorias] || [];

	const _handleOnChange = (e) => {
		const { name, value } = e.target;

		setBanks((prevBanks) => {
			return {
				...prevBanks,
				[name]: value,
			};
		});
	};

	const _handleOnsubmit = (e) => {
		e.preventDefault();

		const resultadoFinal = typeInterest.find(
			(result) => result.categoria === banks.tipoPrestamo
		)?.tasa;

		const resultadoFinalEdited =
			resultadoFinal === '-' ? 'Sin datos :(' : resultadoFinal;

		setResults(resultadoFinalEdited);
	};

	const _handleReset = () => {
		setBanks(initialBanksData);
		setResults('');
	};
	return {
		banks,
		banksData,
		category,
		typeInterest,
		_handleOnChange,
		_handleOnsubmit,
		_handleReset,
	};
};
