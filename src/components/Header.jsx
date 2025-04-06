import '../styles/header.css';

export const Header = () => {
	return (
		<>
			<header className="header">
				<h1 className="title">SIMULADOR DE TASAS DE INTERÉS</h1>
			</header>

			<p className="paragraph">
				Selecciona un <strong>BANCO</strong> y busque su categoria de
				crédito para visualizar
				<strong> TASA DE INTERES ANUAL REFERENCIAL</strong>, según la
				información disponible de forma pública.
			</p>
		</>
	);
};
