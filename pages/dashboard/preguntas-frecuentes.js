import DashLayout from "../../components/Dashboard/DashLayout";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Paper, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import styles from "../../styles/DashboardEditPages.module.css";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const DashboardFaqs = () => {
  return (
    <DashLayout>
      <section>
        <Grid flex xs={12} sx={{ mb: 3 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              CRG
            </Link>
            <Typography color="text.primary">Preguntas Frecuentes</Typography>
          </Breadcrumbs>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper className={styles.pages} sx={{ width: "100%", mb: 2 }}>
              <Typography variant={"h5"}>Preguntas Frecuentes</Typography>
              <Divider sx={{ mb: 4, mt: 2 }} />
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  required
                  id="ad-title"
                  label="Título de la Sección"
                  variant="outlined"
                  value="¿Cómo se realiza el depósito del material biológico en el CRG?"
                />

                <TextareaAutosize
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="Maximum 4 rows"
                  defaultValue="Para depositar material biológico en el CRG, Ud. deberá primero contar con un usuario en el sistema del CRG. Para ello, ingrese a www…………. y siga los pasos para crear dicho usuario.

                  Un vez dado de alta su usuario, éste le permitirá ingresar al formulario de ingreso donde se le solicitará información detallada del material y se le informará acerca de los costos y las condiciones del depósito. Una vez que haya cumplimentado la información requerida se le informará vía correo electrónico si es necesario enviar información adicional, si el depósito es aceptado y, en caso afirmativo, el procedimiento para el envío físico del material."
                  style={{
                    width: 1168,
                    height: 200,
                    marginTop: 16,
                    borderColor: "#ccc",
                    borderRadius: 5,
                  }}
                />
              </Grid>
              <Divider sx={{ mb: 4, mt: 2 }} />
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  required
                  id="ad-title"
                  label="Título de la Sección"
                  variant="outlined"
                  value="¿Qué documentación se requiere para realizar el depósito del material biológico?"
                />

                <TextareaAutosize
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="Maximum 4 rows"
                  defaultValue="La documentación requerida dependerá del tipo de material, su procedencia y el tipo de depósito solicitado. En caso de que el material a depositar sea material coleccionado a campo, la aprobación de su depósito dependerá también del año y la jurisdicción en que se haya realizado la colección.

                  Por favor envíe a través del formulario de contacto estos datos (tipo de material, año y jurisdicción de colecta y el tipo de depósito solicitado) para que podamos bridarle mayor información respecto de la documentación requerida para el depósito del material.
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
              <Divider sx={{ mb: 4, mt: 2 }} />
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  required
                  id="ad-title"
                  label="Título de la Sección"
                  variant="outlined"
                  value="¿Cuándo se asigna el número de identificación final del CRG para los materiales depositados?"
                />

                <TextareaAutosize
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="Maximum 4 rows"
                  defaultValue="Una vez recibido el material, evaluada su pureza, contrastado con la información recibida y firmados los ATM correspondientes, se enviará por mail el número de identificación del CRG definitivo correspondiente al depósito aceptado."
                  style={{
                    width: 1168,
                    height: 200,
                    marginTop: 16,
                    borderColor: "#ccc",
                    borderRadius: 5,
                  }}
                />
              </Grid>{" "}
              <Divider sx={{ mb: 4, mt: 2 }} />
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  required
                  id="ad-title"
                  label="Título de la Sección"
                  variant="outlined"
                  value="¿Cómo se envía el material?"
                />

                <TextareaAutosize
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="Maximum 4 rows"
                  defaultValue="Los cultivos deben ser recientes y estar empaquetados para evitar que se rompan. Se deberá evitar la exposición excesiva al calor y al frío, así como los retrasos de transporte.

                  De ser posible, deberá evitarse la utilización de placas de Petri como recipientes primarios; siendo preferible el uso de tubos con tapón de rosca. Asimismo, se puede usar material de vidrio, pero su utilización conlleva un mayor riesgo de rotura el cual podría minimizarse con un embalaje adecuado. En el caso de los plásmidos, los misms deben ser enviados en un cultivo de plásmido/hospedante (caja de Petri, líquido, punción o criopreservado) o DNA plasmídico (mínimo 1 µg o 10x de la concentración requerida para la transformación) .
                  
                  Los organismos del Grupo de Riesgo 2 requieren un empaque de acuerdo con las Regulaciones Modelo de la ONU para el empaque y envío correctos de Mercancías Peligrosas (https://www.eccosite.org/transport-regulations/). Esto implica que se debe utilizar un tipo especial de embalaje y que el paquete debe ser transportado por un mensajero reconocido.
                  
                  Es responsabilidad del remitente cumplir con las regulaciones nacionales; en el caso de envíos desde el extranjero, deberá cumplir con las regulaciones que imponga el país de origen para la exportación de material biológico. En estos casos se deberán incluir los correspondientes permisos y certificados de exportación."
                  style={{
                    width: 1168,
                    height: 200,
                    marginTop: 16,
                    borderColor: "#ccc",
                    borderRadius: 5,
                  }}
                />
              </Grid>
              <Divider sx={{ mb: 4, mt: 2 }} />
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  required
                  id="ad-title"
                  label="Título de la Sección"
                  variant="outlined"
                  value="¿Qué son los grupos de riesgo?"
                />

                <TextareaAutosize
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="Maximum 4 rows"
                  defaultValue="Para identificar a qué grupo de riesgo corresponde un organismo dado, le sugerimos consultar en https://www.visavet.es/es/bioslab/grupos-de-riesgo.php"
                  style={{
                    width: 1168,
                    height: 200,
                    marginTop: 16,
                    borderColor: "#ccc",
                    borderRadius: 5,
                  }}
                />
              </Grid>
              <Divider sx={{ mb: 4, mt: 2 }} />
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  required
                  id="ad-title"
                  label="Título de la Sección"
                  variant="outlined"
                  value="¿Cómo se solicita material biológico?"
                />

                <TextareaAutosize
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="Maximum 4 rows"
                  defaultValue="Para solicitar material biológico, Ud. deberá primero contar con un usuario en el sistema del CRG. Para ello, ingrese a www…………. y siga los pasos para crear dicho usuario.

                  Un vez dado de alta su usuario, ingrese a la página www……………………………. y complete los pasos requeridos para solicitar el material biológico de su interés dentro del Catalogo del CRG."
                  style={{
                    width: 1168,
                    height: 200,
                    marginTop: 16,
                    borderColor: "#ccc",
                    borderRadius: 5,
                  }}
                />
              </Grid>
              <Divider sx={{ mb: 4, mt: 2 }} />
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  required
                  id="ad-title"
                  label="Título de la Sección"
                  variant="outlined"
                  value="¿En qué forma entrega el CRG el material biológico?"
                />

                <TextareaAutosize
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="Maximum 4 rows"
                  defaultValue="La forma de suministro dependerá del tipo de material biológico solicitado y de la colección a la cual pertenezca dicho material.

                  Por favor envíe a través del Formulario de Contacto su consulta respecto de las formas de suministro del material biológico de su interés."
                  style={{
                    width: 1168,
                    height: 200,
                    marginTop: 16,
                    borderColor: "#ccc",
                    borderRadius: 5,
                  }}
                />
              </Grid>
              <Divider sx={{ mb: 4, mt: 2 }} />
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  required
                  id="ad-title"
                  label="Título de la Sección"
                  variant="outlined"
                  value="¿El CRG brinda servicio de preservación?"
                />

                <TextareaAutosize
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="Maximum 4 rows"
                  defaultValue="El CRG brinda un servicio pago de preservación de material biológico. Dicho servicio no implica la necesaria sesión del material al CRG."
                  style={{
                    width: 1168,
                    height: 200,
                    marginTop: 16,
                    borderColor: "#ccc",
                    borderRadius: 5,
                  }}
                />
              </Grid>
              <Divider sx={{ mb: 4, mt: 2 }} />
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  required
                  id="ad-title"
                  label="Título de la Sección"
                  variant="outlined"
                  value="¿Qué es una cepa tipo?"
                />

                <TextareaAutosize
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="Maximum 4 rows"
                  defaultValue="Se designa una cepa tipo en la descripción de una nueva especie (Código Internacional de Nomenclatura para algas, hongos y plantas y Nomenclatura Internacional de Código para Bacterias). Ésta es la única cepa de referencia nomenclatural de una especie. La cepa tipo es el representante nomenclatural validado de una especie, pero no es necesariamente el representante más típico de su especie."
                  style={{
                    width: 1168,
                    height: 200,
                    marginTop: 16,
                    borderColor: "#ccc",
                    borderRadius: 5,
                  }}
                />
              </Grid>
              <Divider sx={{ mb: 4, mt: 2 }} />
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  required
                  id="ad-title"
                  label="Título de la Sección"
                  variant="outlined"
                  value="¿Cuál es el marco legal en el que se encuadra el material biológico en Argentina?"
                />

                <TextareaAutosize
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="Maximum 4 rows"
                  defaultValue="En Argentina el marco legal a ser aplicado dependerá de ciertas características del material biológico, como por ejemplo:

                  – si el material biológico está compuesto por organismos modificados genéticamente o no;
                  
                  – si ha sido coleccionado en la naturaleza;
                  
                  – su procedencia geográfica (en particular en qué jurisdicción se accedió al material);
                  
                  – el año en el que fue colectado;
                  
                  – el tipo de material biológico;
                  
                  En caso de que el material proceda de una colección de recursos genéticos, el marco legal aplicable dependerá de las condiciones del acuerdo de transferencia de material suscripto."
                  style={{
                    width: 1168,
                    height: 200,
                    marginTop: 16,
                    borderColor: "#ccc",
                    borderRadius: 5,
                  }}
                />
              </Grid>
              <Divider sx={{ mb: 4, mt: 2 }} />
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  required
                  id="ad-title"
                  label="Título de la Sección"
                  variant="outlined"
                  value="¿Qué es el permiso de colección o acceso?"
                />

                <TextareaAutosize
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="Maximum 4 rows"
                  defaultValue="El permiso de colección constituye la documentación que acredita la tenencia legal del material biológico; el mismo es otorgado por la jurisdicción donde se realiza la colecta del material biológico, independientemente de que sea público o privado.

                  Para consultas sobre autoridades de aplicación consultar enhttps://proyectosinv.conicet.gov.ar/solicitud-colecta-cientifica/"
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

export default DashboardFaqs;

export async function getStaticProps() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/about-us`;
  const resp = await fetch(url);
  const about = await resp.json();
  console.log("Api Result", about);

  return {
    props: {
      about,
    },
  };
}
