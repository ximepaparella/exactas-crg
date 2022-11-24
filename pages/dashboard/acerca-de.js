import DashLayout from "../../components/Dashboard/DashLayout";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Paper, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import styles from "../../styles/DashboardEditPages.module.css";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const DashboardMaterials = () => {
  return (
    <DashLayout>
      <section>
        <Grid flex xs={12} sx={{ mb: 3 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              CRG
            </Link>
            <Typography color="text.primary">Historia</Typography>
          </Breadcrumbs>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper className={styles.pages} sx={{ width: "100%", mb: 2 }}>
              <Typography variant={"h5"}>Historia</Typography>
              <Divider sx={{ mb: 4, mt: 2 }} />
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  required
                  id="ad-title"
                  label="Título de la Sección"
                  variant="outlined"
                  value="Historia"
                />

                <TextareaAutosize
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="Maximum 4 rows"
                  defaultValue="Dentro de la Facultad de Ciencias Exactas y Naturales de la Universidad de Buenos Aires (FCEN-UBA), el desarrollo sostenido en el tiempo de líneas de investigación en microorganismos, plásmidos y líneas celulares, ha derivado en la conformación de colecciones informales, dando de esta forma marco y sostén a una importante cantidad de recursos genéticos de diferente índole.

                  Los laboratorios en los cuales se han ido conformando dichas colecciones “informales”, los cuales se detallan a continuación, han confluido en una iniciativa hacia la búsqueda de optimizar la preservación de los materiales allí albergados, buscando unificar su gestión y promover la transferencia de dichos materiales hacia diferentes sectores de la sociedad.
                  
                  – el laboratorio de Microbiología de Suelos (Departamento de Biodiversidad y Biología Experimental –DBBE- de la FCEN-UBA) ha resguardado una de las colecciones nacionales más importantes de Micorizas vesiculo arbusculares (Banco de Glomeromycota In Vitro);
                  
                  – el laboratorio de Biotecnología ambiental y ecología bacteriana y el Laboratorio de Estudios genéticos y fisiológicos de bacterias de interés biotecnológico (Departamento de Química Biológica –QB- de la FCEN-UBA) han resguardado cepas bacterianas nativas y plásmidos;
                  
                  – el laboratorio de Biología de Protistas (DBBE) ha resguardado cultivos de microalgas y ciliados
                  
                  – los laboratorios de Micología y de Fitopatología (DBBE) han resguardado una amplia colección de hongos filamentosos nativos.
                  
                  Es en este contexto se creó el CENTRO DE RECURSOS GENÉTICOS (CRG) de la FCEN-UBA (Res (CD) 1560/18) cuyos objetivos centrales son la preservación de los recursos genéticos bajo resguardo de la FCEN-UBA y la promoción del uso sustentable de dichos recursos, asegurando así una distribución justa y equitativa de los beneficios derivados de su uso y contribuyendo también al desarrollo científico técnico del país."
                  style={{
                    width: 1168,
                    height: 200,
                    marginTop: 16,
                    borderColor: "#ccc",
                    borderRadius: 5,
                  }}
                />
              </Grid>
              <Divider sx={{ mb: 4, mt: 2 }} />
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  required
                  id="ad-title"
                  label="Título de la Sección"
                  variant="outlined"
                  value="Mision"
                />

                <TextareaAutosize
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="Maximum 4 rows"
                  defaultValue="El CRG tiene como misión garantizar la gestión y conservación de los recursos genéticos resguardados por la FCEN-UBA. Asimismo, busca generar un ámbito de integración, preservando y gestionando el uso de los recursos genéticos (RRGG) e incrementando las capacidades institucionales en el área articulando con los diferentes actores involucrados en la temática."
                  style={{
                    width: 1168,
                    height: 200,
                    marginTop: 16,
                    borderColor: "#ccc",
                    borderRadius: 5,
                  }}
                />
              </Grid>
              <Divider sx={{ mb: 4, mt: 2 }} />
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  required
                  id="ad-title"
                  label="Título de la Sección"
                  variant="outlined"
                  value="Vision"
                />

                <TextareaAutosize
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="Maximum 4 rows"
                  defaultValue="El CRG busca consolidarse como una entidad de referencia a nivel nacional e internacional que propicie la conservación y el uso sustentable de los RRGG y la distribución justa y equitativa de los beneficios derivados, comportándose como un facilitador de recursos genéticos, así como de las herramientas de gestión que permitan su uso y aprovechamiento

                  El CRG busca ofrecer espacios integradores y dinámicos de articulación, respondiendo a las demandas de la Institución y de la sociedad en su conjunto, participando con un rol activo en el desarrollo de innovaciones biotecnológicas."
                  style={{
                    width: 1168,
                    height: 200,
                    marginTop: 16,
                    borderColor: "#ccc",
                    borderRadius: 5,
                  }}
                />
              </Grid>{" "}
              <Divider sx={{ mb: 4, mt: 2 }} />
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  required
                  id="ad-title"
                  label="Título de la Sección"
                  variant="outlined"
                  value="Objetivos"
                />

                <TextareaAutosize
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="Maximum 4 rows"
                  defaultValue="Propiciar la conservación de la biodiversidad.
                  Preservar y valorizar los recursos genéticos bajo resguardo de la FCEN
                  Promover el uso sustentable de dichos recursos genéticos, propiciando la distribución justa y equitativa de los beneficios derivados de su uso"
                  style={{
                    width: 1168,
                    height: 200,
                    marginTop: 16,
                    borderColor: "#ccc",
                    borderRadius: 5,
                  }}
                />
              </Grid>
              <Divider sx={{ mb: 4, mt: 2 }} />
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  required
                  id="ad-title"
                  label="Título de la Sección"
                  variant="outlined"
                  value="Funciones"
                />

                <TextareaAutosize
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="Maximum 4 rows"
                  defaultValue="Resolución de creación del Centro de Recursos Genéticos (CRG) de la FCEN-UBA
                  Reglamento de Gestión
                  Reglamento técnico
                  Acuerdo de Transferencia modelo"
                  style={{
                    width: 1168,
                    height: 200,
                    marginTop: 16,
                    borderColor: "#ccc",
                    borderRadius: 5,
                  }}
                />
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </section>
    </DashLayout>
  );
};

export default DashboardMaterials;

export async function getStaticProps() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/about-us`;
  const resp = await fetch(url);
  const about = await resp.json();
  console.log("Api Result", about);

  return {
    props: {
      about,
    },
  };
}
