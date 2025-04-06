import '../styles/buttonForm.css';
import PropTypes from 'prop-types';

export const ButtonForm = ({ type, label, secundary, handle }) => {
	return secundary ? (
		<button className="btn-form-secundary" onClick={handle} type={type}>
			{label}
		</button>
	) : (
		<button className="btn-form" type={type}>
			{label}
		</button>
	);
};
ButtonForm.propTypes = {
	type: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	secundary: PropTypes.bool,
	handle: PropTypes.func,
};
