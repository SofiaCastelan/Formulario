import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    email: '',
  });

  const [errores, setErrores] = useState({
    nombre: '',
    edad: '',
    email: '',
  });

  // Función de validación del formulario
  const validarFormulario = () => {
    let valid = true;
    const newErrores = {
      nombre: '',
      edad: '',
      email: '',
    };

    if (formData.nombre.trim() === '') {
      newErrores.nombre = 'Ingresa el nombre correctamente';
      valid = false;
    }

    if (formData.edad.trim() === '' || isNaN(formData.edad)) {
      newErrores.edad = 'Ingresa la edad correctamente';
      valid = false;
    }

    if (formData.email.trim() === '') {
      newErrores.email = 'Ingresa correctamente el email';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrores.email = 'Ingresa un email válido';
      valid = false;
    }

    setErrores(newErrores);
    return valid;
  };

  // Manejo del cambio en los campos del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      alert('Se envió correctamente');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Ingresa tu Nombre:</FormLabel>
        <TextField
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          error={Boolean(errores.nombre)}
          helperText={errores.nombre}
        />
      </FormControl><br />

      <FormControl>
        <FormLabel>Ingresa tu Edad:</FormLabel>
        <TextField
          name="edad"
          value={formData.edad}
          onChange={handleChange}
          error={Boolean(errores.edad)}
          helperText={errores.edad}
        />
      </FormControl><br />

      <FormControl>
        <FormLabel>Ingresa tu Correo Electrónico:</FormLabel>
        <TextField
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(errores.email)}
          helperText={errores.email}
        />
      </FormControl><br /><br />

      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  );
}

export default Formulario;