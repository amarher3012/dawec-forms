const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');

const validate = (e) => {
	// FormData recoje los datos del formulario en un objeto
	const formData = new FormData(form);
	const activeErrors = [];
	const errors = {
		nameError: 'Comprueba tu nombre',
		surnameError: 'Comprueba tu primer apellido',
		lastNameError: 'Comprueba tu segundo apellido',
		adressError: 'Comprueba tu direccion',
		phoneError: 'Comprueba tu numero de telefono',
		passwordError: 'Comprueba tu contraseña',
		emailError: 'Comprueba el email introducido',
		sexError: 'Comprueba el sexo introducido',
		skillIssue: 'Comprueba los estudios introducidos',
	};
	let isFormValid = true;

	// Name error
	if (!/^[A-Z]{1}[a-z]+$/.test(formData.get('name'))) {
		activeErrors.push(errors.nameError);
		isFormValid = false;
		document.getElementById('name').focus();
	}

	// Surname error
	if (!/^[A-Z]{1}[a-z]+$/.test(formData.get('surname'))) {
		activeErrors.push(errors.surnameError);
		isFormValid = false;
		document.getElementById('surname').focus();
	}

	// Last name error
	if (!/^[A-Z]{1}[a-z]+$/.test(formData.get('lastname'))) {
		activeErrors.push(errors.lastNameError);
		isFormValid = false;
		document.getElementById('lastname').focus();
	}

	// Adress error
	if (
		!/^([A-Z]{1}[a-z]+)\s([A-Z]{1}[a-z]+)+\s\d+\,\s\d+$/.test(
			formData.get('adress')
		)
	) {
		activeErrors.push(errors.adressError);
		isFormValid = false;
		document.getElementById('adress').focus();
	}

	// Phone number error
	if (!/^\(\+\d{2,3}\)\s\d{9}$/.test(formData.get('phone'))) {
		activeErrors.push(errors.phoneError);
		isFormValid = false;
		document.getElementById('phone').focus();
	}

	// Email error
	if (!/^\w+\@[a-z]+\.(com|net|me)$/.test(formData.get('email'))) {
		activeErrors.push(errors.emailError);
		isFormValid = false;
		document.getElementById('email').focus();
	}

	// Password error
	if (
		!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\s]{8,}$/.test(
			formData.get('password')
		)
	) {
		activeErrors.push(errors.passwordError);
		isFormValid = false;
		document.getElementById('password').focus();
	}

	// Sex error
	if (!formData.get('sexo')) {
		activeErrors.push(errors.sexError);
		isFormValid = false;
	}

	// Studies error
	if (!formData.get('nivel')) {
		activeErrors.push(errors.skillIssue);
		isFormValid = false;
	}

	// Comprobacion si existen errores
	if (!isFormValid) {
		alert(activeErrors.join('\n'));
		e.preventDefault();
	} else {
		alert('Enviado correctamente');
	}
};

form.addEventListener('submit', validate);
