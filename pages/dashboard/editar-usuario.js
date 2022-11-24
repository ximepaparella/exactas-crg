import DashLayout from "../../components/Dashboard/DashLayout";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Paper, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import styles from "../../styles/DashboardEditPages.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import countries from "../../data/countries";
import entityTypes from "../../data/entityType";

const DashboardEditUser = () => {
  return (
    <DashLayout>
      <section>
        <Grid flex xs={12} sx={{ mb: 3 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              CRG
            </Link>
            <Link underline="hover" color="inherit" href="/usuarios/">
              Usuarios
            </Link>
            <Typography color="text.primary">Editar Usario</Typography>
          </Breadcrumbs>
        </Grid>

        <Grid container spacing={2} rowSpacing={1}>
          <Grid item xs={12}>
            <Paper className={styles.pages} sx={{ width: "100%", mb: 2 }}>
              <Typography variant={"h5"}>Editar usuario</Typography>
              <Divider sx={{ mb: 4, mt: 2 }} />
              <Grid item xs={6}>
                <TextField
                  sx={{ mb: 2, mt: 2 }}
                  fullWidth
                  required
                  id="ad-title"
                  label="Nombre"
                  variant="outlined"
                  value="Juan Bautista "
                />

                <TextField
                  sx={{ mb: 2, mt: 2 }}
                  fullWidth
                  required
                  id="ad-title"
                  label="Apellido"
                  variant="outlined"
                  value="Alberdi"
                />

                <TextField
                  sx={{ mb: 2, mt: 2 }}
                  fullWidth
                  required
                  id="ad-title"
                  label="Email"
                  variant="outlined"
                  value="juan.alberdi@gmail.com"
                />

                <FormControl fullWidth sx={{ mb: 2, mt: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    Rol del usuario *
                  </InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Rol del usuario*"
                    value={10}
                  >
                    <MenuItem value={10}>Administrador</MenuItem>
                    <MenuItem value={20}>Editor</MenuItem>
                    <MenuItem value={30}>Moderador</MenuItem>
                    <MenuItem value={30}>Aprobador</MenuItem>
                    <MenuItem value={30}>Cliente</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth sx={{ mb: 2, mt: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    Entidad a la que pertenece *
                  </InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Entidad a la que pertenece *"
                    value={"Empresa"}
                  >
                    {entityTypes.map((entities, index) => (
                      <MenuItem key={index} value={entities}>
                        {entities}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <TextField
                  sx={{ mb: 2, mt: 2 }}
                  fullWidth
                  required
                  id="ad-title"
                  label="Tipo de entidad"
                  variant="outlined"
                  value="Staff"
                />

                <FormControl fullWidth sx={{ mb: 2, mt: 2 }}>
                  <InputLabel id="demo-simple-select-label">País*</InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="País *"
                    value="Argentina"
                  >
                    {countries.map((country) => (
                      <MenuItem key={country} value={country}>
                        {country}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <TextField
                  sx={{ mb: 4, mt: 2 }}
                  fullWidth
                  required
                  id="ad-title"
                  label="Cargo en la entidad"
                  variant="outlined"
                  value="Director"
                />
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={2}>
                  <Button
                    href="/dashboard/usuarios"
                    variant="contained"
                    size="large"
                  >
                    <SaveIcon />
                    <Typography ml={1} variant="p">
                      Guardar cambios
                    </Typography>
                  </Button>
                </Grid>
                <Grid item xs={1}>
                  <Button
                    href="/dashboard/usuarios"
                    variant="contained"
                    size="large"
                    color="error"
                  >
                    <CancelIcon />
                    <Typography ml={2} variant="p">
                      Cancelar
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </section>
    </DashLayout>
  );
};

export default DashboardEditUser;
