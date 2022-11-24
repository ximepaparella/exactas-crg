import DashLayout from "../../components/Dashboard/DashLayout";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Table from "../../components/Dashboard/DashTable";
import Card from "../../components/Dashboard/DashCard";
import { Paper, Grid } from "@mui/material";

const Dashboard = () => {
  return (
    <DashLayout>
      <section>
        <Grid flex xs={12} sx={{ mb: 3 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              CRG
            </Link>
            <Typography color="text.primary">Dashboard</Typography>
          </Breadcrumbs>
        </Grid>

        <Grid container spacing={2} mb={6}>
          <Grid item xs={3}>
            <Card
              number={24}
              text={"Usuarios activos"}
              icon={"people"}
              color={"info"}
            />
          </Grid>
          <Grid item xs={3}>
            <Card
              number={250}
              text={"Materiales ingresados"}
              icon={"material"}
              color={"secondary"}
            />
          </Grid>
          <Grid item xs={3}>
            <Card
              number={20}
              text={"Solicitudes de material"}
              icon={"ask"}
              color={"error"}
            />
          </Grid>
          <Grid item xs={3}>
            <Card
              number={10}
              text={"Contactos"}
              icon={"contacto"}
              color={"warning"}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Table />
          </Grid>
        </Grid>
      </section>
    </DashLayout>
  );
};

export default Dashboard;
