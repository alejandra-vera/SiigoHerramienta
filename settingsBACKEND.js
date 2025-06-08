function redirectUser() {
  const tipo = document.getElementById("tipo").value;
  const autorizacion = document.getElementById("autorizacion").checked;

  if (!autorizacion) {
    alert("Debe autorizar el tratamiento de datos para continuar.");
    return false;
  }

  if (tipo === "empleado") {
    window.location.href = "Empleado.html";
  } else if (tipo === "empresa") {
    window.location.href = "Empresarios.html";
  } else {
    alert("Por favor, seleccione un tipo (Empleado o Empresa) para ingresar.");
    return false;
  }
  return false;
}