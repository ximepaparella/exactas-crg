import DashLayout from "../../components/Dashboard/DashLayout";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Table from "../../components/Dashboard/DashTable";
import { Paper, Container, Grid } from "@mui/material";

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

        <Paper
          elevation={3}
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            mb: 3,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={4}>
              xs=4
            </Grid>
            <Grid item xs={4}>
              xs=4
            </Grid>
            <Grid item xs={4}>
              xs=4
            </Grid>
            <Grid item xs={4}>
              xs=4
            </Grid>
          </Grid>
        </Paper>

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
