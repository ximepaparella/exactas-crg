import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "../../styles/DashboardFilters.module.css";

const materialTypeName = [
  { label: "Microorganismos – Bacterias adquiridas" },
  {
    label:
      "Microorganismos – Bacterias nativas (provenientes de aislamientos realizados en su laboratorio)",
  },
  { label: "Microorganismos – Bacterias modificadas" },
  { label: "Microorganismos – Hongos adquiridos" },
  {
    label:
      "Microorganismos – Hongos nativos (provenientes de aislamientos realizados en su laboratorio)",
    year: 1957,
  },
  { label: "Microorganismos – Hongos modificados" },
  { label: "Otros microorganismos" },
  {
    label: "Líneas celulares",
  },
  { label: "Plásmidos" },
];

const country = [
  { label: "Afganistán" },
  { label: "Albania" },
  { label: "Alemania" },
  { label: "Andorra" },
  { label: "Angola" },
  { label: "Antigua y Barbuda" },
  { label: "Arabia Saudita" },
  { label: "Argelia" },
  { label: "Argentina" },
  { label: "Armenia" },
  { label: "Australia" },
  { label: "Austria" },
  { label: "Azerbaiyán" },
  { label: "Bahamas" },
  { label: "Bangladés" },
  { label: "Barbados" },
];

const bls = [
  {
    label: "BSL 1",
  },
  {
    label: "BSL 2",
  },
  {
    label: "BSL 3",
  },
  {
    label: "BSL 4",
  },
];
const DasboardFilter = () => {
  return (
    <>
      Filtrar por:
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={materialTypeName}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Tipo de Organismo" />
        )}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={country}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="País" />}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={materialTypeName}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Tipo de Organismo" />
        )}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={bls}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Nivel de Bioseguridad" />
        )}
      />
    </>
  );
};

export default DasboardFilter;
