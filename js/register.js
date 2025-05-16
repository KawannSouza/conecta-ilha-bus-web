const form = document.getElementById('registerForm');

const fields = {
  fullName: {
    input: document.getElementById('fullName'),
    error: document.getElementById('fullNameError'),
    validate: value => value.trim() !== '' ? '' : 'Nome é obrigatório.'
  },
  email: {
    input: document.getElementById('email'),
    error: document.getElementById('emailError'),
    validate: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'E-mail inválido.'
  },
  neighborhood: {
    input: document.getElementById('neighborhood'),
    error: document.getElementById('neighborhoodError'),
    validate: value => value.trim() !== '' ? '' : 'Bairro é obrigatório.'
  },
  busLine: {
    input: document.getElementById('busLine'),
    error: document.getElementById('busLineError'),
    validate: value => value.trim() !== '' ? '' : 'Linha de ônibus é obrigatória.'
  },
  password: {
    input: document.getElementById('password'),
    error: document.getElementById('passwordError'),
    validate: value => value.length >= 6 ? '' : 'A senha deve ter pelo menos 6 caracteres.'
  },
  confirmPassword: {
    input: document.getElementById('confirmPassword'),
    error: document.getElementById('confirmPasswordError'),
    validate: value => value === fields.password.input.value ? '' : 'As senhas não coincidem.'
  }
};

Object.values(fields).forEach(({ input, error, validate }) => {
  input.addEventListener('input', () => {
    const errorMsg = validate(input.value);
    error.textContent = errorMsg;
  });
});

form.addEventListener('submit', function (e) {
  let isValid = true;
  Object.values(fields).forEach(({ input, error, validate }) => {
    const errorMsg = validate(input.value);
    error.textContent = errorMsg;
    if (errorMsg) isValid = false;
  });
  if (!isValid) e.preventDefault();
});