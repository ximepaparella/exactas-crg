import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tools from "./DashTools";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import ArticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key="dashboard" disablePadding>
          <ListItemButton component="a" href="/dashboard">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {[
          "Acerca De",
          "Provisión de Material",
          "Preservación de material",
          "Capacitaciones",
          "Asesoría",
          "Otros",
          "Industria",
          "Normativa",
          "Preguntas Frecuentes",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Grid container justifyContent="center" alignItems="center" spacing={1}>
        <Grid alignItems="center" xs={2}>
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button
                color="secondary"
                sx={{
                  color: "white",
                }}
                onClick={toggleDrawer(anchor, true)}
              >
                <MenuIcon />
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="125"
            viewBox="0 0 304 77"
            style={{ backgroundColor: "#ffffff00" }}
            height="35"
            x="0"
            y="0"
            version="1.1"
            xmlSpace="preserve"
          >
            <g>
              <path
                fill="#fff"
                d="M139.385 26.546c.158-.84.34-1.65.547-2.43.884-3.416 2.16-6.27 3.825-8.52 1.645-2.25 3.681-3.957 6.067-5.082s5.06-1.687 8.041-1.687c2.468 0 4.73.374 6.787 1.124 2.057.75 3.805 1.875 5.265 3.417 1.46 1.54 2.612 3.478 3.435 5.853.697 2.013 1.097 4.323 1.203 6.934h9.507c-.127-3.9-.775-7.34-1.95-10.35-1.315-3.354-3.166-6.145-5.51-8.353-2.345-2.208-5.122-3.875-8.33-4.979-3.208-1.083-6.664-1.645-10.407-1.645-4.524 0-8.576.791-12.154 2.354-3.579 1.583-6.623 3.937-9.111 7.103-2.488 3.166-4.401 7.123-5.738 11.873a46.786 46.786 0 00-1 4.388h9.523zm17.925 50.27c1.417 0 2.785-.088 4.1-.267 2.794-.353 5.36-1.052 7.705-2.087 3.537-1.562 6.499-3.937 8.905-7.103 2.427-3.166 4.257-7.103 5.512-11.852.189-.712.145-1.526-.07-2.394.398-1.391.625-2.293.625-2.293V35.882l-3.763-.002v-.227h-11.847v7.999h6.115l-.006 2.856c0 3.965-.443 7.784-1.318 10.984-.669 1.727-1.476 3.253-2.425 4.576-3.146 4.412-7.658 6.663-13.533 6.75h-.35c-5.876-.086-10.386-2.337-13.532-6.75-1.636-2.279-2.852-5.155-3.656-8.632h-9.528c.153.707.316 1.397.495 2.07 1.254 4.75 3.085 8.687 5.511 11.853 2.407 3.166 5.368 5.54 8.906 7.103 3.43 1.516 7.346 2.308 11.745 2.354h.41zm-88.083-23.38l-.002 22.047h9.296l-.002-22.047h-9.292zm28.587-17.735l-3.505.014 3.544 7.773 13.43 31.995h10.283l-14.499-33.516c4.031-1.375 7.178-3.687 9.42-6.936 2.241-3.229 3.372-7.062 3.372-11.52 0-2.957-.452-5.644-1.357-8.06a16.539 16.539 0 00-4.093-6.229c-1.81-1.728-4.072-3.082-6.766-4.04-2.694-.959-5.8-1.459-9.317-1.459h-29.1l.001 22.823h9.292l.002-15.053h19.435c3.97 0 6.993 1.062 9.09 3.187 2.098 2.125 3.147 5.04 3.147 8.748 0 1.834-.308 3.52-.884 5.041-.576 1.52-1.399 2.812-2.468 3.896-1.07 1.083-2.345 1.895-3.846 2.478-1.522.584-3.33.858-5.181.858zM5.74 53.436c1.173 5.702 3.13 10.35 5.879 13.944 4.792 6.29 11.866 9.436 21.245 9.436 3.66 0 7.033-.563 10.118-1.625 3.085-1.083 5.738-2.75 7.96-5 2.22-2.249 3.968-5.082 5.223-8.498.89-2.422 1.468-5.179 1.73-8.257H48.63c-.188 1.653-.495 3.169-.918 4.55-.76 2.416-1.83 4.436-3.208 6.04-1.399 1.604-3.064 2.812-5.039 3.604-1.974.791-4.175 1.187-6.602 1.187-6.354 0-11.064-2.229-14.128-6.728-1.558-2.276-2.714-5.159-3.478-8.653H5.742zm5.879-43.151c-3.112 4.081-5.21 9.503-6.303 16.261h9.507c.722-4.53 2.026-8.181 3.912-10.95 3.064-4.499 7.774-6.77 14.128-6.77 2.345 0 4.505.417 6.438 1.23 1.933.833 3.599 2.04 4.977 3.666 1.357 1.624 2.406 3.666 3.146 6.124.594 1.97.948 4.206 1.066 6.7h9.528c-.152-3.872-.772-7.283-1.853-10.262-1.255-3.458-3.003-6.312-5.224-8.603-2.221-2.291-4.874-4-7.959-5.145C39.898 1.41 36.525.828 32.865.828c-9.379 0-16.453 3.166-21.245 9.457z"
              ></path>
              <path
                fill="#ff3cac"
                d="M0 30.157H19.744V50.153999999999996H0z"
              ></path>
              <path
                fill="#ffd50b"
                d="M63.179 30.157H82.923V50.153999999999996H63.179z"
              ></path>
              <path
                fill="#08bebe"
                d="M125.042 30.157H144.786V50.153999999999996H125.042z"
              ></path>
            </g>
          </svg>
        </Grid>
        <Grid xs={8}></Grid>
        <Grid container justifyContent="flex-end" alignItems="center" xs={2}>
          <Tools />
        </Grid>
      </Grid>
    </>
  );
}
