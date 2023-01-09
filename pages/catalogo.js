import Layout from "../components/Layout";
import Link from "next/link";
import MaterialList from "../components/MaterialList";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import materialTypes from "../data/materialType";
import materialBacteriaSpecie from "../data/materialBacteriaSpecie";
import materialBacteriaFuncionalGroup from "../data/materialBacteriaFuncionalGroup";

export default function Catalogo() {
  console.log(materialBacteriaSpecie);
  const logged = true;
  return (
    <Layout
      title="Formulario de Ingreso"
      description="Sitio Web de La Universidad de Buenos Aires"
    >
      <section className="section-before">
        <h1 className="heading-1">
          {logged ? "Catalogo" : "Formulario de Ingreso"}
        </h1>

        <section className="search-box">
          <Divider sx={{ mb: 2, mt: 2 }} />
          <Grid container spacing={2} rowSpacing={1}>
            <Typography variant={"h6"}>Busqueda de materiales</Typography>
            <Grid container spacing={4} rowSpacing={1} item xs={12}>
              <Grid item xs={4}>
                <FormControl fullWidth sx={{ mb: 2, mt: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    Tipo de microorganismo *
                  </InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label=" Tipo de microorganismo *"
                  >
                    {materialTypes.map((materialType, index) => (
                      <MenuItem key={index} value={materialType}>
                        {materialType}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth sx={{ mb: 2, mt: 2 }}>
                  <Autocomplete
                    id="combo-box-demo"
                    options={materialBacteriaSpecie}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Especie *"
                        variant="filled"
                      />
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth sx={{ mb: 2, mt: 2 }}>
                  <Autocomplete
                    multiple
                    id="tags-standard"
                    options={materialBacteriaFuncionalGroup}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        label="Grupos funcionales"
                      />
                    )}
                  />
                </FormControl>
              </Grid>
              <Divider sx={{ mb: 2, mt: 2 }} />
              <Grid item xs={12}>
                Características técnicas para líneas celulares (solo si
                selecciono Linea celular)
              </Grid>
              <Divider sx={{ mb: 2, mt: 2 }} />
              <Grid item xs={12}>
                Características técnicas para plásmidos (solo si seleccionó
                plasmido)
              </Grid>
              <Grid item xs={12}>
                Ubicación de la recolección
              </Grid>
              <Divider sx={{ mb: 2, mt: 2 }} />
            </Grid>
          </Grid>
          <Divider sx={{ mb: 2, mt: 2 }} />
        </section>

        {logged ? (
          <>
            <MaterialList />
          </>
        ) : (
          <>
            <p>
              Por favor para realizar un ingreso de material debes estar
              registrado.
              <Link href="/registro">
                <a> Registarse </a>
              </Link>
              o
              <Link href="/iniciar-sesion">
                <a> Iniciar Sesión</a>
              </Link>
            </p>
          </>
        )}
      </section>
    </Layout>
  );
}
