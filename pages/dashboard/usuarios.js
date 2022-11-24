import DashLayout from "../../components/Dashboard/DashLayout";
import Filter from "../../components/Dashboard/DasboardFilter";
import Table from "../../components/Dashboard/DashUserTable";
import Card from "../../components/Dashboard/DashCard";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Paper, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import styles from "../../styles/DashboardFilters.module.css";

const DashboardUsers = () => {
  return (
    <DashLayout>
      <section>
        <Grid flex xs={12} sx={{ mb: 3 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              CRG
            </Link>
            <Typography color="text.primary">Usuarios</Typography>
          </Breadcrumbs>
        </Grid>

        <Grid container spacing={2} mb={6}>
          <Grid item xs={3}>
            <Card
              number={1}
              text={"Usuarios Administradores"}
              icon={"people"}
              color={"primary"}
            />
          </Grid>
          <Grid item xs={3}>
            <Card
              number={2}
              text={"Usuarios Editores"}
              icon={"people"}
              color={"primary"}
            />
          </Grid>
          <Grid item xs={3}>
            <Card
              number={1}
              text={"Usuarios moderadores"}
              icon={"people"}
              color={"primary"}
            />
          </Grid>
          <Grid item xs={3}>
            <Card
              number={0}
              text={"Usuarios aprobadores"}
              icon={"people"}
              color={"primary"}
            />
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
          xs={12}
          sx={{ mb: 6 }}
        >
          <Button
            href="/dashboard/agregar-usuario"
            variant="contained"
            size="large"
          >
            <AddCircleIcon />
            <Typography ml={1} variant="p">
              Agregar usuario
            </Typography>
          </Button>
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

export default DashboardUsers;
