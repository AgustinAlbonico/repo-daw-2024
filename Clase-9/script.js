document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("subscriptionForm");
    const formTitle = document.getElementById("form-title");
    const fullNameInput = document.getElementById("fullName");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        validateForm();
    });

    fullNameInput.addEventListener("keydown", updateTitle);
    fullNameInput.addEventListener("focus", updateTitle);

    const inputs = form.querySelectorAll("input");
    inputs.forEach(input => {
        input.addEventListener("blur", validateField);
        input.addEventListener("focus", clearError);
    });

    function validateForm() {
        let isValid = true;
        const errorMessages = [];

        inputs.forEach(input => {
            const errorMessage = validateField({ target: input });
            if (errorMessage) {
                isValid = false;
                errorMessages.push(errorMessage);
            }
        });

        if (!isValid) {
            alert("Errores en el formulario:\n" + errorMessages.join("\n"));
        } else {
            alert("Formulario enviado correctamente:\n" + getFormData());
        }
    }

    function validateField(event) {
        const field = event.target;
        const errorElement = document.getElementById(`${field.id}Error`);
        let errorMessage = "";

        switch (field.id) {
            case "fullName":
                if (!/^.+\s.+$/.test(field.value)) {
                    errorMessage = "Debe tener más de 6 letras y al menos un espacio entre medio.";
                }
                break;
            case "email":
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
                    errorMessage = "Debe tener un formato de email válido.";
                }
                break;
            case "password":
                if (!/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(field.value)) {
                    errorMessage = "Debe tener al menos 8 caracteres, formados por letras y números.";
                }
                break;
            case "confirmPassword":
                if (field.value !== document.getElementById("password").value) {
                    errorMessage = "Las contraseñas no coinciden.";
                }
                break;
            case "age":
                if (!/^\d+$/.test(field.value) || parseInt(field.value) < 18) {
                    errorMessage = "Debe ser un número entero mayor o igual a 18.";
                }
                break;
            case "phone":
                if (!/^\d{7,}$/.test(field.value)) {
                    errorMessage = "Debe ser un número de al menos 7 dígitos, sin espacios, guiones ni paréntesis.";
                }
                break;
            case "address":
                if (!/.+\s.+/.test(field.value) || field.value.length < 5) {
                    errorMessage = "Debe tener al menos 5 caracteres, con letras, números y un espacio en el medio.";
                }
                break;
            case "city":
                if (field.value.length < 3) {
                    errorMessage = "Debe tener al menos 3 caracteres.";
                }
                break;
            case "postalCode":
                if (field.value.length < 3) {
                    errorMessage = "Debe tener al menos 3 caracteres.";
                }
                break;
            case "dni":
                if (!/^\d{7,8}$/.test(field.value)) {
                    errorMessage = "Debe ser un número de 7 u 8 dígitos.";
                }
                break;
            default:
                break;
        }

        if (errorMessage) {
            errorElement.textContent = errorMessage;
            errorElement.style.display = "block";
            return errorMessage;
        } else {
            errorElement.textContent = "";
            errorElement.style.display = "none";
            return "";
        }
    }

    function clearError(event) {
        const field = event.target;
        const errorElement = document.getElementById(`${field.id}Error`);
        errorElement.textContent = "";
        errorElement.style.display = "none";
    }

    function updateTitle() {
        const name = fullNameInput.value.trim();
        formTitle.textContent = name ? `HOLA ${name}` : "HOLA";
    }

    function getFormData() {
        return Array.from(inputs).map(input => `${input.name}: ${input.value}`).join("\n");
    }
});