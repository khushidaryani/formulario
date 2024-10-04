import React, { useState } from 'react';
import { styled, Box, Paper, Grid2, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { MenuItem, Divider, Rating, Stack, Checkbox, Typography, Button, ButtonGroup, Dialog, DialogActions, DialogTitle } from '@mui/material';

// Componente Item basado en Paper con estilos personalizados
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.primary,
  boxShadow: 'none',
}));

function App() {

  // Estado para controlar el diálogo
  const [open, setOpen] = React.useState(false);

  // Funciones para abrir y cerrar el diálogo
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    age: '',
    gender: '',
    programmingLanguage: '',
    rating: 0,
    termsAccepted: false,
  });

  // Manejo de cambios en los campos de texto
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Extrae "name" y "value" del evento "e.target" que es el input modificado
    setFormData((prevState) => ({ // La función setFormData actualiza el estado del campo correspondiente usando la propiedad "name" del campo
      ...prevState,
      [name]: value,
    }));
  };

  // Manejo de cambios en los radio buttons
  const handleRadioChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      gender: e.target.value,
    }));
  };

  // Manejo de cambios en el checkbox
  const handleCheckboxChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      termsAccepted: e.target.checked,
    }));
  };

  // Manejo de cambios en el rating
  const handleRatingChange = (e, newValue) => {
    setFormData((prevState) => ({
      ...prevState,
      rating: newValue, // El argumento "newValue" contiene la nueva calificación seleccionada, que se usa para actualizar
    }));
  };

  // Envío de los datos del formulario
  const handleSubmit = () => {
    console.log(formData); // Se usa para mostrar los datos del formulario en la consola del navegador
    setOpen(false); // Se cierra el diálogo despúes de enviar el formulario
  };

  // Restablecer el formulario
  const handleReset = () => {
    setFormData({
      name: '',
      surname: '',
      age: '',
      gender: '',
      favoriteLanguage: '',
      rating: 0,
      termsAccepted: false,
    });
  };

  return (

    <>

      <Box sx={{

        flexGrow: 1,
        mx: 'auto',
        mt: 10,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',

      }}>

        {/* TextField paar el nombre */}
        <Grid2 container spacing={3} justifyContent="center" sx={{ flexGrow: 1, mt: 2, mx: 10 }}>

          <Grid2 size={{ xs: 12, md: 4, lg: 5 }}>
            <Item>
              <TextField
                required
                id="name"
                name="name"
                label="Nombre"
                variant="outlined"
                fullWidth
                onChange={handleInputChange}
                value={formData.name}
                sx={{ borderRadius: 1 }}
              />
            </Item>
          </Grid2>

          {/* TextField para los apellidos */}
          <Grid2 size={{ xs: 12, md: 4, lg: 5 }}>
            <Item>
              <TextField
                required
                id="surname"
                name="surname"
                label="Apellidos"
                variant="outlined"
                fullWidth
                onChange={handleInputChange}
                value={formData.surname}
                sx={{ borderRadius: 1 }}
              />
            </Item>
          </Grid2>

          {/* TextField de tipo number para la edad  */}
          <Grid2 size={{ xs: 12, md: 4, lg: 2 }}>
            <Item>
              <TextField
                required
                fullWidth
                id="age"
                name="age"
                label="Edad"
                type="number"
                variant="outlined"
                onChange={handleInputChange}
                value={formData.age}
              />
            </Item>
          </Grid2>

          {/* RadioGroup junto con FormControlLabel para el género */}
          <Grid2 size={{ xs: 10, md: 5, lg: 5 }}>
            <Item>
              <FormControl component="fieldset">
                <FormLabel id="gender-radio-buttons-group-label">Género</FormLabel>
                <RadioGroup
                  row name="gender"
                  value={formData.gender}
                  onChange={handleRadioChange}
                  fullWidth
                >
                  <FormControlLabel required value="female" control={<Radio />} label="Femenino" />
                  <FormControlLabel required value="male" control={<Radio />} label="Masculino" />
                  <FormControlLabel required value="other" control={<Radio />} label="Otro" />
                </RadioGroup>
              </FormControl>
            </Item>
          </Grid2>

          {/* TextField de tipo select junto con MenuItem para el lenguaje de programación favorito */}
          <Grid2 size={{ xs: 10, md: 5, lg: 7 }}>
            <Item>
              <TextField
                required
                select
                fullWidth
                id="outlined-select-lenguage"
                name="programmingLanguage"
                label="Lenguaje de programación favorito"
                variant="outlined"
                value={formData.programmingLanguage}
                onChange={handleInputChange}
              >
                <MenuItem value="JavaScript">JavaScript</MenuItem>
                <MenuItem value="Python">Python</MenuItem>
                <MenuItem value="Java">Java</MenuItem>
                <MenuItem value="C++">C++</MenuItem>
                <MenuItem value="Kotlin">Kotlin</MenuItem>
                <MenuItem value="Swift">Swift</MenuItem>
              </TextField>
            </Item>
          </Grid2>

          {/* Divider para dividir la página */}
          <Grid2 size={{ xs: 12 }}>
            <Divider sx={{ mt: 1, mb: 1 }} />
          </Grid2>

          {/* Rating junto con TypoGraphy para la valoración de la encuesta */}
          <Grid2 size={{ xs: 5, md: 6, lg: 2 }}>
            <Item sx={{ display: 'flex' }}>
              <Typography variant="body1">Puntúa esta encuesta</Typography>
            </Item>
          </Grid2>
          <Grid2 size={{ xs: 5, md: 6, lg: 10 }}>
            <Item>
              <Stack
                spacing={1}
                direction="row"
              >
                <Rating
                  name="half-rating"
                  defaultValue={2.5}
                  precision={0.5}
                  value={formData.rating}
                  onChange={handleRatingChange}
                />
              </Stack>
            </Item>
          </Grid2>

          {/* CheckBox junto con FormControlLabel para marcar una casilla */}
          <Grid2 size={{ xs: 12, md: 12, lg: 12 }} display="flex">
            <Item>
              <FormControlLabel control={<Checkbox checked={formData.termsAccepted} onChange={handleCheckboxChange} />} label="He leído los términos y condiciones" />
            </Item>
          </Grid2>

          {/* Button para los botones de envíar y limpiar */}
          
          <Grid2 size={{ xs: 10, md: 4, lg: 6 }}>
            <Item>
              <ButtonGroup variant="contained" aria-label="Disabled button group" fullWidth>
                <Button sx={{ flexGrow: 1 }} onClick={handleClickOpen} disabled={!formData.termsAccepted}>Enviar</Button>
              </ButtonGroup>
            </Item>
          </Grid2>
          <Grid2 size={{ xs: 10, md: 4, lg: 6 }}>
            <Item>
              <ButtonGroup variant="contained" aria-label="Disabled button group" fullWidth>
                <Button sx={{ flexGrow: 1 }} onClick={handleReset}>Limpiar</Button>
              </ButtonGroup>
            </Item>
          </Grid2>

        </Grid2>
      </Box>

      
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
        >

          <DialogTitle id="alert-dialog-title">
            {"¿Está seguro/a que quiere enviar sus datos?"}
          </DialogTitle>
          

          <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button onClick={handleSubmit}>Sí</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>

    </>

  );
}

export default App
