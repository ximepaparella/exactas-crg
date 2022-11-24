import { IconButton, Typography } from "@mui/material";
import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import styles from "../../styles/DashboardCard.module.css";
import { People } from "@mui/icons-material";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import AssignmentReturnedIcon from "@mui/icons-material/AssignmentReturned";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";

const DashCard = ({ number, icon, text, color }) => (
  <article className={styles.card}>
    <div className={styles.header}>
      <IconButton color={color} aria-label="upload picture" component="label">
        {(() => {
          if (icon === "people") {
            return <PeopleIcon />;
          } else if (icon === "material") {
            return <CoronavirusIcon />;
          } else if (icon === "ask") {
            return <ContactSupportIcon />;
          } else {
            return <AssignmentReturnedIcon />;
          }
        })()}
      </IconButton>
      <Typography ml={2} variant="h4">
        {number}
      </Typography>
    </div>
    <Typography variant="p">{text}</Typography>
  </article>
);

export default DashCard;
