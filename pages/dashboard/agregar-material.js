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
import FormGroup from "@mui/material/FormGroup";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import materialTypes from "../../data/materialType";
import materialStates from "../../data/materialState";
import materialTypeOfHoldings from "../../data/materialTypeOfHolding";
import countries from "../../data/countries";
import materialDepositCollections from "../../data/materialDepositCollection";
import materialDepositTypes from "../../data/materialDepositType";
import materialUses from "../../data/materialUse";
import materialPlacesOfCultivation from "../../data/materialPlaceOfCultivation";
import materialBiosecurityLevels from "../../data/materialBiosecurityLevel";
import materialPreservationMethods from "../../data/materialPreservationMethods";

const DashboardAddMaterial = () => {
  return (
    <DashLayout>
      <section>
        <Grid flex xs={12} sx={{ mb: 3 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              CRG
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="dashboard/materiales/"
            >
              Materiales
            </Link>
            <Typography color="text.primary">Agregar nuevo Material</Typography>
          </Breadcrumbs>
        </Grid>

        <Grid container spacing={2} rowSpacing={1}>
          <Grid item xs={12}>
            <Paper className={styles.pages} sx={{ width: "100%", mb: 2 }}>
              <Typography variant={"h5"}>
                Formulario de ingreso de material
              </Typography>
              <Divider sx={{ mb: 2, mt: 2 }} />
              <Grid item xs={6}>
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
                <Divider sx={{ mb: 2, mt: 2 }} />
                <FormControl fullWidth sx={{ mb: 2, mt: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    Estado *
                  </InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label=" Estado *"
                  >
                    {materialStates.map((materialState, index) => (
                      <MenuItem key={index} value={materialState}>
                        {materialState}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Divider sx={{ mb: 2, mt: 2 }} />
                <FormControl fullWidth sx={{ mb: 2, mt: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    Tipo de tenencia del material original *
                  </InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="  Tipo de tenencia del material original  *"
                  >
                    {materialTypeOfHoldings.map(
                      (materialTypeOfHolding, index) => (
                        <MenuItem key={index} value={materialTypeOfHolding}>
                          {materialTypeOfHolding}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
                <Divider sx={{ mb: 2, mt: 2 }} />
                <FormControl fullWidth sx={{ mb: 2, mt: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    Especie de Bacterias *
                  </InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="  Tipo de tenencia del material original  *"
                  >
                    {materialTypeOfHoldings.map(
                      (materialTypeOfHolding, index) => (
                        <MenuItem key={index} value={materialTypeOfHolding}>
                          {materialTypeOfHolding}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
                <Divider sx={{ mb: 2, mt: 2 }} />
                <Grid spacing={2} sx={{ mb: 3, mt: 3 }}>
                  <InputLabel id="demo-simple-select-label">
                    C??digo de cat??logo alternativo pre-existente *
                  </InputLabel>
                  <p>
                    Si el material ya est?? depositado en otra colecci??n, por
                    favor indique aqu?? los datos:
                  </p>
                </Grid>
                <Grid container direction="row" spacing={2}>
                  <Grid item xs={4}>
                    <TextField
                      sx={{ mb: 2, mt: 2 }}
                      fullWidth
                      required
                      id="ad-title"
                      label="Nombre de la colecci??n / instituci??n donde se aloja la muestra"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth sx={{ mb: 2, mt: 2 }}>
                      <InputLabel id="demo-simple-select-label">
                        Pa??s*
                      </InputLabel>
                      <Select
                        required
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Pa??s *"
                        value="Argentina"
                      >
                        {countries.map((country) => (
                          <MenuItem key={country} value={country}>
                            {country}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      sx={{ mb: 2, mt: 2 }}
                      fullWidth
                      required
                      id="ad-title"
                      label="Nombre"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Divider sx={{ mb: 4, mt: 2 }} />
                <Grid spacing={2} sx={{ mb: 3, mt: 3 }}>
                  <InputLabel id="demo-simple-select-label">
                    Pr??stamos realizados *
                  </InputLabel>
                  <p>
                    El CRG se reserva el derecho de solicitar informaci??n
                    adicional
                  </p>
                </Grid>
                <Grid container direction="row" spacing={2}>
                  <Grid item xs={4}>
                    <TextField
                      sx={{ mb: 1, mt: 2 }}
                      fullWidth
                      required
                      id="ad-title"
                      label="Entidad a la que se realiz?? el pr??stamo"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl fullWidth sx={{ mb: 1, mt: 2 }}>
                      <InputLabel id="demo-simple-select-label">
                        Pa??s*
                      </InputLabel>
                      <Select
                        required
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Pa??s *"
                        value="Argentina"
                      >
                        {countries.map((country) => (
                          <MenuItem key={country} value={country}>
                            {country}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      sx={{ mb: 1, mt: 2 }}
                      fullWidth
                      required
                      id="ad-title"
                      label="	Nombre de la persona de contacto"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      sx={{ mb: 2 }}
                      fullWidth
                      required
                      id="ad-title"
                      label="	Email de contacto"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      sx={{ mb: 2 }}
                      fullWidth
                      required
                      id="ad-title"
                      label="Documento de pr??stamo (MTA o similar)"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>

                <Divider sx={{ mb: 4, mt: 2 }} />

                <Typography variant={"h6"}>Condiciones de dep??sito</Typography>
                <Divider sx={{ mb: 4, mt: 2 }} />

                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    Colecci??n donde desea incluir el material *
                  </InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label=" Colecci??n donde desea incluir el material *"
                  >
                    {materialDepositCollections.map(
                      (materialDepositCollection, index) => (
                        <MenuItem key={index} value={materialDepositCollection}>
                          {materialDepositCollection}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
                <Divider sx={{ mb: 2, mt: 2 }} />

                <FormGroup sx={{ mb: 2, mt: 2 }}>
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="??Visibilidad en la web?"
                  />
                </FormGroup>

                <Divider sx={{ mb: 2, mt: 2 }} />

                <FormControl fullWidth sx={{ mb: 2, mt: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    Tipo de dep??sito *
                  </InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="  Tipo de dep??sito *"
                  >
                    {materialDepositTypes.map((materialDepositType, index) => (
                      <MenuItem key={index} value={materialDepositType}>
                        {materialDepositType}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Divider sx={{ mb: 2, mt: 2 }} />

                <FormControl fullWidth sx={{ mb: 2, mt: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    ??Se utiliza como material para docencia en la FCEN? *
                  </InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label=" ??Se utiliza como material para docencia en la FCEN? *"
                  >
                    {materialUses.map((materialUse, index) => (
                      <MenuItem key={index} value={materialUse}>
                        {materialUse}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Divider sx={{ mb: 2, mt: 2 }} />
                <TextField
                  sx={{ mb: 2, mt: 2 }}
                  fullWidth
                  required
                  id="ad-title"
                  label="Ingrese el nombre de la materia donde se emplea *"
                  variant="outlined"
                />
                <Divider sx={{ mb: 2, mt: 2 }} />
                <TextField
                  sx={{ mb: 4, mt: 2 }}
                  fullWidth
                  required
                  id="ad-title"
                  label="Observaciones/Comentarios"
                  variant="outlined"
                />
                <Divider sx={{ mb: 2, mt: 2 }} />

                <Typography variant={"h6"}>Registros del material</Typography>
                <Divider sx={{ mb: 4, mt: 2 }} />

                <Grid spacing={2} sx={{ mb: 2, mt: 3 }}>
                  <InputLabel id="demo-simple-select-label">
                    Publicaciones donde se utiliza y menciona el material
                  </InputLabel>
                </Grid>
                <Grid container direction="row" spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      sx={{ mb: 2 }}
                      fullWidth
                      required
                      id="ad-title"
                      label="	T??tulo de la publicaci??n"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{ mb: 2 }}
                      fullWidth
                      required
                      id="ad-title"
                      label="	Link o DOI de la publicaci??n"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Divider sx={{ mb: 4, mt: 2 }} />
                <Grid spacing={2} sx={{ mb: 2, mt: 3 }}>
                  <InputLabel id="demo-simple-select-label">
                    Registros en Bases de Datos Gen??micas
                  </InputLabel>
                </Grid>
                <Grid container direction="row" spacing={2}>
                  <Grid item xs={4}>
                    <TextField
                      sx={{ mb: 2 }}
                      fullWidth
                      required
                      id="ad-title"
                      label="	Nombre de la Base"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      sx={{ mb: 2 }}
                      fullWidth
                      required
                      id="ad-title"
                      label="	Link o DOI de la publicaci??n"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      sx={{ mb: 2 }}
                      fullWidth
                      required
                      id="ad-title"
                      label="C??digo/N??mero de registro"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Divider sx={{ mb: 4, mt: 2 }} />
                <Typography variant={"h6"}>
                  Caracter??sticas t??cnicas generales
                </Typography>
                <Divider sx={{ mb: 2, mt: 2 }} />

                <FormControl fullWidth sx={{ mb: 2, mt: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    Medio de cultivo *
                  </InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label=" Medio de cultivo *"
                  >
                    {materialPlacesOfCultivation.map(
                      (materialPlaceOfCultivation, index) => (
                        <MenuItem
                          key={index}
                          value={materialPlaceOfCultivation}
                        >
                          {materialPlaceOfCultivation}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
                <Divider sx={{ mb: 2, mt: 2 }} />
                <TextField
                  sx={{ mb: 2, mt: 2 }}
                  fullWidth
                  required
                  id="ad-title"
                  label="Fecha de adquisici??n o recolecci??n (dd/mm/aaaa)"
                  variant="outlined"
                />
                <Divider sx={{ mb: 2, mt: 2 }} />

                <FormControl fullWidth sx={{ mb: 2, mt: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    Nivel de Bioseguridad *
                  </InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label=" Nivel de Bioseguridad "
                  >
                    {materialBiosecurityLevels.map(
                      (materialBiosecurityLevel, index) => (
                        <MenuItem key={index} value={materialBiosecurityLevel}>
                          {materialBiosecurityLevel}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
                <Divider sx={{ mb: 2, mt: 2 }} />
                <FormControl fullWidth sx={{ mb: 2, mt: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    M??todos de preservaci??n
                  </InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="M??todos de preservaci??n"
                  >
                    {materialPreservationMethods.map(
                      (materialPreservationMethod, index) => (
                        <MenuItem
                          key={index}
                          value={materialPreservationMethod}
                        >
                          {materialPreservationMethod}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
                <Divider sx={{ mb: 2, mt: 2 }} />
              </Grid>

              {/* ACCIONES */}
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

export default DashboardAddMaterial;
