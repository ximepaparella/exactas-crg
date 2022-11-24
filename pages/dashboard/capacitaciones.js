import DashLayout from "../../components/Dashboard/DashLayout";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Paper, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import styles from "../../styles/DashboardEditPages.module.css";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const DashboardTraining = () => {
  return (
    <DashLayout>
      <section>
        <Grid flex xs={12} sx={{ mb: 3 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              CRG
            </Link>
            <Typography color="text.primary">Capacitaciones</Typography>
          </Breadcrumbs>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper className={styles.pages} sx={{ width: "100%", mb: 2 }}>
              <Typography variant={"h5"}>Capacitaciones</Typography>
              <Divider sx={{ mb: 4, mt: 2 }} />
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  required
                  id="ad-title"
                  label="Título de la Sección"
                  variant="outlined"
                  value="Capacitaciones"
                />

                <TextareaAutosize
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="Maximum 4 rows"
                  defaultValue="En este sector encontrará la oferta de cursos disponibles; por favor comuníquese con los responsables de cada curso o taller.

                  Capacitaciones específicas
                  
                  El CRG ofrece adicionalmente, capacitaciones desarrolladas a medida de las necesidades del solicitante. Comuníquese con el mail de contacto para consultar sobre este tipo de oferta.
                   "
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

export default DashboardTraining;

export async function getServerSideProps() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/material-provision`;
  const resp = await fetch(url);
  const material = await resp.json();
  console.log("Api Result", material);

  return {
    props: {
      material,
    },
  };
}
