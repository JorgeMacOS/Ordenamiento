class Alumno {
    constructor(nombre, calificaciones) {
      this.nombre = nombre;
      this.calificaciones = calificaciones;
    }
  
    obtenerPromedio() {
      const sumaCalificaciones = this.calificaciones.reduce((total, calificacion) => total + calificacion, 0);
      const promedio = sumaCalificaciones / this.calificaciones.length;
      return promedio;
    }
  }
  
  class Salon {
    constructor() {
      this.alumnos = [];
    }
  
    agregarAlumno(alumno) {
      this.alumnos.push(alumno);
    }
  
    ordenarAlumnosPorPromedio() {
      this.alumnos.sort((a, b) => b.obtenerPromedio() - a.obtenerPromedio());
    }
  }
  
  const alumno1 = new Alumno('Elver', [8, 7, 9, 6, 8]);
  const alumno2 = new Alumno('Gala', [9, 8, 7, 9, 10]);
  const alumno3 = new Alumno('Raul', [7, 6, 8, 7, 9]);
  
  const salon = new Salon();
  salon.agregarAlumno(alumno1);
  salon.agregarAlumno(alumno2);
  salon.agregarAlumno(alumno3);
  
  salon.ordenarAlumnosPorPromedio();
  
  console.log(salon.alumnos);