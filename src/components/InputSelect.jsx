import '../styles/inputSelect.css'
import PropTypes from 'prop-types';

export const InputSelect = ({ label, name, id, value, onChange, isDisabled, data }) => {
	return (
		<div className='container-select'>
			<label className='container-select-label' htmlFor={name}>{label} : </label>
			<select className='container-select-select' name={name} id={id} value={value} onChange={onChange} disabled={isDisabled}>
				<option  className='container-select-option'  value="">Seleccionar</option>
				{
                isDisabled ? data.map((banks) => (
					<option  className='container-select-option' key={banks} value={banks}>
						{banks}
					</option>
				)) : data.map((banks) => (
					<option className='container-select-option' key={banks} value={banks}>
						{banks}
					</option>
				))
                }
			</select>
		</div>
	);
};

InputSelect.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	value: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired,
	data: PropTypes.array.isRequired,
};
