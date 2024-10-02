// Función para simular el inicio de sesión
function login(email, password) {
    // En una aplicación real, esto se haría en el servidor
    if (email === "usuario@ejemplo.com" && password === "password") {
        localStorage.setItem("userLoggedIn", "true");
        window.location.href = "dashboard.html";
    } else {
        alert("Credenciales incorrectas");
    }
}

// Función para simular el registro
function register(name, email, password) {
    // En una aplicación real, esto se haría en el servidor
    console.log(`Usuario registrado: ${name}, ${email}`);
    alert("Registro exitoso. Por favor, inicia sesión.");
    window.location.href = "login.html";
}

// Función para cerrar sesión
function logout() {
    localStorage.removeItem("userLoggedIn");
    window.location.href = "index.html";
}

// Función para registrar ingreso
function registrarIngreso() {
    const fecha = new Date();
    document.getElementById("ultimoIngreso").textContent = `Último ingreso: ${fecha.toLocaleString()}`;
}

// Función para agregar nueva rutina
function agregarRutina() {
    const nombreRutina = prompt("Ingrese el nombre de la nueva rutina:");
    if (nombreRutina) {
        const listaRutinas = document.getElementById("listaRutinas");
        const nuevaRutina = document.createElement("li");
        nuevaRutina.textContent = nombreRutina;
        listaRutinas.appendChild(nuevaRutina);
    }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            login(email, password);
        });
    }

    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            register(name, email, password);
        });
    }

    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", logout);
    }

    const registrarIngresoBtn = document.getElementById("registrarIngreso");
    if (registrarIngresoBtn) {
        registrarIngresoBtn.addEventListener("click", registrarIngreso);
    }

    const nuevaRutinaBtn = document.getElementById("nuevaRutina");
    if (nuevaRutinaBtn) {
        nuevaRutinaBtn.addEventListener("click", agregarRutina);
    }

    // Simulación de datos para el panel de administración
    const totalUsuarios = document.getElementById("totalUsuarios");
    const ingresosHoy = document.getElementById("ingresosHoy");
    const totalRutinas = document.getElementById("totalRutinas");

    if (totalUsuarios && ingresosHoy && totalRutinas) {
        totalUsuarios.textContent = Math.floor(Math.random() * 1000);
        ingresosHoy.textContent = Math.floor(Math.random() * 100);
        totalRutinas.textContent = Math.floor(Math.random() * 500);
    }
    
});

