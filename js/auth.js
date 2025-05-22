const url = "https://conecta-ilha-bus-api.onrender.com";

function registerUser() {
  const name = document.getElementById("fullName").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    return alert("As senhas não coicidem!");
  }

  try {
    axios.post(`${url}/users/register`, {
      name,
      username,
      email,
      password
    });
    alert("Usuário cadastrado com sucesso!");
  } catch (error) {
    alert("Erro ao tentar se cadastrar!");
  }
}

async function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await axios.post(`${url}/users/login`, { email, password })
          .then(response => {
            const token = response.data.token;
            const name = response.data.user;
            localStorage.setItem("token", token);
            localStorage.setItem("name", name);
            window.location.href = "/pages/inicial.html";
          });
  } catch (error) {
    console.log(error);
    alert("Erro ao tentar se logar!");
  }
}