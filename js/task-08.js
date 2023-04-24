const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

    if (!email || !password) {
      return alert("Все поля должны быть заполнены!");
    }

  const formDataObj = {
    email,
    password,
  };

  console.log (formDataObj)

  event.target.reset();
}
