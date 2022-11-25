const MATERIAL_TYPE_NAME = [
  "Microorganismos – Bacterias adquiridas",
  "Microorganismos – Bacterias nativas (provenientes de aislamientos realizados en su laboratorio)",
  "Microorganismos – Bacterias modificadas",
  "Microorganismos – Hongos adquiridos",
  "Microorganismos – Hongos nativos (provenientes de aislamientos realizados en su laboratorio)",
  "Microorganismos – Hongos modificados",
  "Otros microorganismos",
  "Líneas celulares",
  "Plásmidos",
];

const MATERIAL_STATE = [
  "Material original",
  "Material modificado a partir de un material original",
  "Desconocido",
];

const MATERIAL_TYPE_OF_HOLDING = [
  "Comprado a banco o entidad similar",
  "Recolectado del medioambiente",
  "Préstamo documentado",
  "Otro",
];

const MATERIAL_BACTERIA_SPECIE = ["Una especie", "Otra especie"];

const MATERIAL_OTHER_SPECIE = ["'Acalyptospora", "faltan miles"];

const MATERIAL_BACTERIA_FUNCIONAL_GROUP = [
  "Agricultura",
  "Bacterias lácticas",
  "Bioproducción",
  "Bioenergía",
  "Extremofilas",
  "Bacterias anaerobicas",
];

const MATERIAL_MUSHROOMS_FUNCIONAL_GROUP = [
  "Hongos formadores de Micorrizas (V'AM)",
  "Hongos formadores de ectomicorrizas",
  "Patógenos vegetales",
  "'Asociados a Insectos",
  "Hongos liquenizantes",
  "Levaduras",
  "Endofitos",
  "Endofitos de pastos",
  "Degradadores",
  "Coprófilos",
  "Epífitos",
  "Hongos de la ambrosia",
  "Hongos comestibles",
  "Productores de Micotoxinas",
  "Controladores biológicos",
  "Hongos de suelo",
  "Hongos 'Ambientales",
];

const MATERIAL_OTHERS_FUNCIONAL_GROUP = [
  "Ciliophora/Ciliados",
  "Chlorophyta",
  "Bacillariophyta",
  "Diatomeas",
  "Chrysophyta",
  "Dinophyta",
  "Xanthophyta",
  "Euglenophyta",
  "Cianobacteria",
  "Haptophyta",
  "Rhodophyta",
  "'Algas de agua dulce (freshwater microalgae)",
  "'Algas marinas (marine microalgae)",
  "'Algas de suelo (soil microalgae)",
  "'Algas de ambientes extremos (extreme environment microalgae)",
  "'Algas productoras de carotenos",
  "'Algas productoras (y acumuladoras) de astaxantina",
  "'Algas productoras (y acumuladoras) de lípidos",
  "'Algas productoras (y acumuladoras) de ácidos grasos de la serie omega",
  "Bioremediación",
];

const MATERIAL_PAYMENT_STATUS = [" Pago", "Pendiente de Pago", "Rechazado"];

const MATERIAL_DEPOSIT_COLLECTION = [
  "Colección de cultivos de hongos filamentosos nativos (BAFCcult)",
  "Colección de cultivos de microalgas del Laboratorio de Biología de Protistas",
  "Colección de hongos endofiticos y saprobios de raíz",
  "Banco de Glomeromycota in vitro",
];

const MATERIAL_PLACE_OF_CULTIVATION = [
  "Agar Malta",
  "Agar Malta Glucosado",
  "Agar Malta Extracto de levadura",
  "Agar papa Glucosado",
  "Agar Saboureaud",
  "Agar Czapeck",
  "Agar avena",
  "Agua peptonada",
  "Caldo común",
  "Caldo Cerebro Corazón",
  "Caldo Saboureaud",
  "Agar Mac Conckey",
  "Medio Basal de Bold (BBM) estándar",
  "Medio Basal de Bold (BBM) estándar + vitaminas",
  "Standard Volvox Medium (SVM)",
  "Medio bifásico Tierra-agua",
  "Medio Cramer and Myers",
  "Infusión vegetal rica en bacterias (Patterson 1982)",
  "Medio de Jaworski (JM)",
  "Medio F/2",
  "Blue Green Medium (BG11)",
  "Otros",
];

const MATERIAL_BIOSECURITY_LEVEL = [
  "BSL 1",
  "BSL 2",
  "BSL 3",
  "BSL 4",
  "Desconocido / A determinar",
];

const MATERIAL_PRESERVATION_METHODS = [
  "Subcultivo",
  "Congelación Ordinaria",
  "Secado en Suelo, Arena",
  "Secado en Tiras o Discos de Papel Filtro",
  "Secado en Tapones Presecados",
  "Secado en Discos de agar",
  "Secado en Silica Gel",
  "Secado en Perlas de Vidrio o Porcelana",
  "Métodos a Largo Plazo",
  "Liofilización",
  "Congelación –70°C",
  "Almacenamiento en Nitrógeno Líquido",
  "Otros",
];

const MICROORGANISM_LEVEL_OF_IDENTIFICATION = [
  "Phylum",
  "Clase",
  "Orden",
  "Familia",
  "Género",
  "Especie",
];

const MICROORGANISM_METHOD_OF_IDENTIFICATION = [
  "Morfológica",
  "Metabólica",
  "Genómica",
];

const CELULAR_LINES_TECHNICAL_CHARACTERISTICS = [
  "Establecidas y tumorales",
  "Cultivos primarios",
  "Hibridomas",
];

const CELULAR_LINES_CHARACTERISTICS = [
  "Sobreexpresión de proteínas  expresión de versiones mutadas de proteínas",
  "Edición del genoma por CRISPR/Cas9",
  "Líneas Knock out",
  "Otra",
];

const CELULAR_CHARACTERIZATION_METHOD = [
  "Expresión proteica",
  "Actividad enzimática",
  "Secuenciación genómica",
  "Otra",
];

const PLASMIDS_CHARACTERISTICS = [
  "Plásmido de clonado",
  "Plásmido de expresión en procariotas",
  "Plásmido de expresión en eucariotas",
  "Otras",
];

const PLASMIDS_REPLICATION_ORIGIN = [
  "pUC",
  "pBR322",
  "pET",
  "pGEX",
  "pColE1",
  "pR6K",
  "pACYC",
  "pSC101",
  "pBluescript",
  "pGEM",
  "Otro",
];

const PLASMID_CHARACTERIZATION_METHOD = [
  "N/A – Material comprado",
  "Secuencia completa",
  "Secuencia parcial",
  "Cortes con enzimas de restriccion",
  "Otro",
];

const MATERIAL_RECOLECTION_PLACE = ["Provincia", "Parque Nacional"];

const MATERIAL_DEPOSIT_TYPE = [
  "Sin transferencia / Solo almacenamiento",
  "Transferencia permitida solamente a otros investigadores FCEN",
  "Abierto a uso académico/de investigación",
  " Abierto a cualquier uso",
];

const MATERIAL_USE = ["Si", "No", "No Aplica"];

const NATIONAL_PARKS = [
  "Baritú",
  "Bosques Petrificados",
  "Calilegua",
  "Campo de los Alisos",
  "Campos del Tuyú",
  "Chaco, Copo",
  "El Impenetrable",
  "El Leoncito",
  "El Palmar",
  "El Rey",
  "Iguazú",
  "Islas de Santa Fe",
  "Lago Puelo",
  "Laguna Blanca",
  "Lanín",
  "Lihué Calel",
  "Los Alerces",
  "Los Arrayanes",
  "Los Cardones",
  "Los Glaciares",
  "Mburucuyá",
  "Monte León",
  "Nahuel Huapi",
  "Patagonia",
  "Perito Moreno",
  "Predelta",
  "Quebrada del Condorito",
  "Río Pilcomayo",
  "San Guillermo",
  "Sierra de las Quijadas",
  "Talampaya",
  "Tierra del Fuego",
  "Traslasierra",
];

export default {
  MATERIAL_TYPE_NAME,
  MATERIAL_STATE,
  MATERIAL_TYPE_OF_HOLDING,
  MATERIAL_BACTERIA_SPECIE,
  MATERIAL_OTHER_SPECIE,
  MATERIAL_BACTERIA_FUNCIONAL_GROUP,
  MATERIAL_MUSHROOMS_FUNCIONAL_GROUP,
  MATERIAL_OTHERS_FUNCIONAL_GROUP,
  MATERIAL_PAYMENT_STATUS,
  MATERIAL_DEPOSIT_COLLECTION,
  MATERIAL_PLACE_OF_CULTIVATION,
  MATERIAL_BIOSECURITY_LEVEL,
  MATERIAL_PRESERVATION_METHODS,
  MICROORGANISM_LEVEL_OF_IDENTIFICATION,
  MICROORGANISM_METHOD_OF_IDENTIFICATION,
  CELULAR_LINES_TECHNICAL_CHARACTERISTICS,
  CELULAR_LINES_CHARACTERISTICS,
  CELULAR_CHARACTERIZATION_METHOD,
  PLASMIDS_CHARACTERISTICS,
  PLASMIDS_REPLICATION_ORIGIN,
  PLASMID_CHARACTERIZATION_METHOD,
  MATERIAL_RECOLECTION_PLACE,
  NATIONAL_PARKS,
  MATERIAL_DEPOSIT_TYPE,
  MATERIAL_USE,
};
