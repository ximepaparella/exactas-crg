import DashLayout from "../../components/Dashboard/DashLayout";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Paper, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import styles from "../../styles/DashboardEditPages.module.css";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const DashboardPreservation = () => {
  return (
    <DashLayout>
      <section>
        <Grid flex xs={12} sx={{ mb: 3 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              CRG
            </Link>
            <Typography color="text.primary">
              Preservación de material
            </Typography>
          </Breadcrumbs>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper className={styles.pages} sx={{ width: "100%", mb: 2 }}>
              <Typography variant={"h5"}>Preservación de material</Typography>
              <Divider sx={{ mb: 4, mt: 2 }} />
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  required
                  id="ad-title"
                  label="Título de la Sección"
                  variant="outlined"
                  value="Preservación de material"
                />

                <TextareaAutosize
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="Maximum 4 rows"
                  defaultValue="El CRG ofrece un servicio de preservación de material mediante tres modalidades:

                  1) Modalidad Cerrada (con costo)
                  
                  Esta modalidad consiste en el depósito de una cepa para su preservación (previa a probación de los curadores correspondientes). Bajo esta modalidad, estas cepas no estarán disponibles para transferencia a terceros. El costo será variable de acuerdo a las condiciones de preservación requeridas.
                  
                  2) Modalidad semicerrada (con costo)
                  
                  Esta modalidad consiste en el depósito en de una cepa (previa a probación de los curadores correspondientes) bajo las condiciones establecidas en un acuerdo de transferencia de material (ATM) a suscribir, en el cual se especifiquen las condiciones bajo las cuales dicha cepa podrá ser transferida a terceros. El costo será variable de acuerdo a las condiciones mutuamente acordadas.
                  
                  3) Modalidad Abierta (sin costo )
                  
                  Esta modalidad consiste en el depósito de una cepa (previa a probación de los curadores correspondientes) bajo las condiciones establecidas en un acuerdo de depósito del CRG a suscribir entre las partes. Dichas cepas podrán ser ofrecidas para su transferencia a terceros sin notificación previa al depositante. Esta modalidad no tiene costo para el depositante.
                  
                  Por favor cree su usuario y siga las instrucciones del sistema
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

export default DashboardPreservation;

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
