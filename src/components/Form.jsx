import '../styles/form.css';
import { InputSelect } from './InputSelect';
import { useFormLogic } from '../hooks/useFormLogic';
import { ButtonForm } from './ButtonForm';

export const Form = () => {
	const {
		_handleOnChange,
		_handleOnsubmit,
		_handleReset,
		banks,
		banksData,
		category,
		typeInterest,
	} = useFormLogic();

	return (
		<form onSubmit={_handleOnsubmit} className="form">
			<InputSelect
				label="Seleccione bancos"
				name="banco"
				id="banco"
				value={banks.banco}
				onChange={_handleOnChange}
				isDisabled={false}
				data={banksData}
			/>

			<InputSelect
				label="Seleccione la categoria"
				name="categorias"
				id="categorias"
				value={banks.categorias}
				onChange={_handleOnChange}
				isDisabled={!banks.banco}
				data={category}
			/>
			<InputSelect
				label="Seleccione tipo de prestamo"
				name="tipoPrestamo"
				id="tipoPrestamo"
				value={banks.tipoPrestamo}
				onChange={_handleOnChange}
				isDisabled={!banks.categorias}
				data={typeInterest.map((ctgs) => ctgs.categoria)}
			/>

			<div className="container_btn">
				<ButtonForm type="submit" label="CALCULAR" />

				<ButtonForm
					type="button"
					label="BORRAR"
					secundary={true}
					handle={_handleReset}
				/>
			</div>
		</form>
	);
};
