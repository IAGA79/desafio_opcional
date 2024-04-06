// Constructora para Paciente
function Paciente(nombre, edad, rut, diagnostico) {
  let _nombre = nombre;
  let _edad = edad;
  let _rut = rut;
  let _diagnostico = diagnostico;

  // Getter y Setter para nombre
  Object.defineProperty(this, "nombre", {
    get: function () {
      return _nombre;
    },
    set: function (nuevoNombre) {
      _nombre = nuevoNombre;
    },
  });

  // Getter y Setter para edad
  Object.defineProperty(this, "edad", {
    get: function () {
      return _edad;
    },
    set: function (nuevaEdad) {
      _edad = nuevaEdad;
    },
  });

  // Getter y Setter para rut
  Object.defineProperty(this, "rut", {
    get: function () {
      return _rut;
    },
    set: function (nuevoRut) {
      _rut = nuevoRut;
    },
  });

  // Getter y Setter para diagnostico
  Object.defineProperty(this, "diagnostico", {
    get: function () {
      return _diagnostico;
    },
    set: function (nuevoDiagnostico) {
      _diagnostico = nuevoDiagnostico;
    },
  });
}

// Constructora para Consultorio
function Consultorio(nombre, pacientes = []) {
  this.nombre = nombre;
  this.pacientes = pacientes;
}

// Buscar pacientes por nombre
Consultorio.prototype.buscarPacientePorNombre = function (nombre) {
  const pacienteEncontrado = this.pacientes.find(
    (paciente) => paciente.nombre === nombre
  );
  if (pacienteEncontrado) {
    console.log(
      `Paciente encontrado: Nombre: ${pacienteEncontrado.nombre}, Edad: ${pacienteEncontrado.edad}, RUT: ${pacienteEncontrado.rut}, Diagnóstico: ${pacienteEncontrado.diagnostico}`
    );
  } else {
    console.log("Paciente no encontrado.");
  }
};

// Mostrar todos los pacientes
Consultorio.prototype.mostrarTodosLosPacientes = function () {
  this.pacientes.forEach((paciente) => {
    console.log(
      `Nombre: ${paciente.nombre}, Edad: ${paciente.edad}, RUT: ${paciente.rut}, Diagnóstico: ${paciente.diagnostico}`
    );
  });
};

// Instrucción new.

const paciente1 = new Paciente("Juan Perez", 30, "12345678-9", "Hipertensión");
const paciente2 = new Paciente("María López", 25, "98765432-1", "Diabetes");

const consultorio1 = new Consultorio("Consultorio Central", [
  paciente1,
  paciente2,
]);

console.log("Todos los pacientes:");
consultorio1.mostrarTodosLosPacientes();

console.log("\nBuscar paciente por nombre:");
consultorio1.buscarPacientePorNombre("Juan Perez");
