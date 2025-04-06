import '../styles/footer.css';

export const Footer = () => {
	return (
		<footer className="footer">
			<p>
				⚠️ Las tasas mostradas son de la fecha 05/04/25 las cuales
				podrían variar. Este sistema tiene fines educativos e
				informativos, de los cuales los datos fueron obtenidos de la
				pagina oficial de {''}
				<a
					href="https://www.sbs.gob.pe/app/pp/EstadisticasSAEEPortal/Paginas/TIActivaTipoCreditoEmpresa.aspx?tip=B"
					target="_blank"
					rel="noopener noreferrer"
					title="Ir a la página oficial de la SBS (se abre en una nueva pestaña)"
				>
					<strong>sbs.gob.pe</strong>
				</a>
			</p>
			<p className="prof">
				Realizado por Carlos CS - GitHub: <strong>Corpus2k</strong>
			</p>
		</footer>
	);
};
