import '../styles/results.css';
import { useContext } from 'react';
import { DataContext } from '../contexts/dataContext';

export const Results = () => {
	const { banks, results } = useContext(DataContext);
	return (
		<>
			<main className="main">
				<h2 className="main-title">Resultados :</h2>
				<p className="main-results">
					Banco selecionado : <strong>{banks.banco}</strong>
				</p>
				<p className="main-results">
					Categoria selecionada : <strong>{banks.categorias}</strong>
				</p>
				<p className="main-results">
					Tipo de prestamo : <strong>{banks.tipoPrestamo}</strong>
				</p>
				<p className="main-results main-results--finish">
					Tasas anual % : <strong>{results}</strong>
				</p>
			</main>
		</>
	);
};
