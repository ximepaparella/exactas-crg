import DashLayout from "../../components/Dashboard/DashLayout";
import Filter from "../../components/Dashboard/DasboardFilter";
import Table from "../../components/Dashboard/DashTable";
import Card from "../../components/Dashboard/DashCard";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Paper, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import styles from "../../styles/DashboardFilters.module.css";

const DashboardMaterials = () => {
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
              number={200}
              text={"Microrganismos celulares"}
              icon={"material"}
              color={"primary"}
            />
          </Grid>
          <Grid item xs={3}>
            <Card
              number={300}
              text={"Hongos"}
              icon={"material"}
              color={"primary"}
            />
          </Grid>
          <Grid item xs={3}>
            <Card
              number={20}
              text={"Plásmidos"}
              icon={"material"}
              color={"primary"}
            />
          </Grid>
          <Grid item xs={3}>
            <Card
              number={10}
              text={"Bacterias"}
              icon={"material"}
              color={"primary"}
            />
          </Grid>
        </Grid>

        <Grid flex xs={12} sx={{ mb: 6 }}>
          <Paper className={styles.filter} sx={{ width: "100%", mb: 2, p: 2 }}>
            <Filter />
            <Button variant="contained" size="large">
              <AddCircleIcon />
              <Typography ml={1} variant="p">
                Agregar material
              </Typography>
            </Button>
          </Paper>
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

export default DashboardMaterials;
