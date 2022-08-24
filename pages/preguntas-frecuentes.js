import Layout from "../components/Layout";
import Link from "next/link";

export default function PreguntasFrecuentes() {
  return (
    <Layout
      title="Preguntas Frecuentes"
      description="Sitio Web de La Universidad de Buenos Aires"
    >
      <section className="section-before">
        <h1 className="heading-1">Preguntas Frecuentes</h1>
        <p>
          Esta sección de Preguntas frecuentes proporciona respuestas a
          preguntas básicas sobre el Centro de Recursos Genéticos (CRG) y sus
          actividades. Si no encuentra una respuesta a su pregunta, por favor
          envíe su consulta a través del
          <Link href="/contacto">
            <a> formulario de contacto.</a>
          </Link>
        </p>

        <h3 className="heading-3">
          ¿Cómo se realiza el depósito del material biológico en el CRG?
        </h3>
        <p>
          Para depositar material biológico en el CRG, Ud. deberá primero contar
          con un usuario en el sistema del CRG. Para ello, ingrese a www…………. y
          siga los pasos para crear dicho usuario.
        </p>
        <p>
          Un vez dado de alta su usuario, éste le permitirá ingresar al
          <Link href="/contacto">
            <a> formulario de ingreso </a>
          </Link>
          donde se le solicitará información detallada del material y se le
          informará acerca de los costos y las condiciones del depósito. Una vez
          que haya cumplimentado la información requerida se le informará vía
          correo electrónico si es necesario enviar información adicional, si el
          depósito es aceptado y, en caso afirmativo, el procedimiento para el
          envío físico del material.
        </p>
        <h3 className="heading-3">
          ¿Qué documentación se requiere para realizar el depósito del material
          biológico?
        </h3>
        <p>
          La documentación requerida dependerá del tipo de material, su
          procedencia y el tipo de depósito solicitado. En caso de que el
          material a depositar sea material coleccionado a campo, la aprobación
          de su depósito dependerá también del año y la jurisdicción en que se
          haya realizado la colección.
        </p>
        <p>
          Por favor envíe a través del
          <Link href="/contacto">
            <a> formulario de contacto </a>
          </Link>
          estos datos (tipo de material, año y jurisdicción de colecta y el tipo
          de depósito solicitado) para que podamos bridarle mayor información
          respecto de la documentación requerida para el depósito del material.
        </p>

        <h3 className="heading-3">
          ¿Cuándo se asigna el número de identificación final del CRG para los
          materiales depositados?
        </h3>
        <p>
          Una vez recibido el material, evaluada su pureza, contrastado con la
          información recibida y firmados los ATM correspondientes, se enviará
          por mail el número de identificación del CRG definitivo
          correspondiente al depósito aceptado.
        </p>
        <h3 className="heading-3">¿Cómo se envía el material?</h3>
        <p>
          Los cultivos deben ser recientes y estar empaquetados para evitar que
          se rompan. Se deberá evitar la exposición excesiva al calor y al frío,
          así como los retrasos de transporte.
        </p>
        <p>
          De ser posible, deberá evitarse la utilización de placas de Petri como
          recipientes primarios; siendo preferible el uso de tubos con tapón de
          rosca. Asimismo, se puede usar material de vidrio, pero su utilización
          conlleva un mayor riesgo de rotura el cual podría minimizarse con un
          embalaje adecuado. En el caso de los plásmidos, los misms deben ser
          enviados en un cultivo de plásmido/hospedante (caja de Petri, líquido,
          punción o criopreservado) o DNA plasmídico (mínimo 1 µg o 10x de la
          concentración requerida para la transformación) .
        </p>
        <p>
          Los organismos del Grupo de Riesgo 2 requieren un empaque de acuerdo
          con las Regulaciones Modelo de la ONU para el empaque y envío
          correctos de Mercancías Peligrosas{" "}
          <Link href="https://www.eccosite.org/transport-regulations/">
            <a> (https://www.eccosite.org/transport-regulations/). </a>
          </Link>
          Esto implica que se debe utilizar un tipo especial de embalaje y que
          el paquete debe ser transportado por un mensajero reconocido.
        </p>
        <p>
          Es responsabilidad del remitente cumplir con las regulaciones
          nacionales; en el caso de envíos desde el extranjero, deberá cumplir
          con las regulaciones que imponga el país de origen para la exportación
          de material biológico. En estos casos se deberán incluir los
          correspondientes permisos y certificados de exportación.
        </p>
        <h3 className="heading-3">¿Qué son los grupos de riesgo?</h3>
        <p>
          Para identificar a qué grupo de riesgo corresponde un organismo dado,
          le sugerimos consultar en{" "}
          <Link href="https://www.visavet.es/es/bioslab/grupos-de-riesgo.php.">
            <a> https://www.visavet.es/es/bioslab/grupos-de-riesgo.php </a>
          </Link>
        </p>
        <h3 className="heading-3">¿Cómo se solicita material biológico?</h3>
        <p>
          Para solicitar material biológico, Ud. deberá primero contar con un
          usuario en el sistema del CRG. Para ello, ingrese a www…………. y siga
          los pasos para crear dicho usuario.
        </p>
        <p>
          Un vez dado de alta su usuario, ingrese a la página www……………………………. y
          complete los pasos requeridos para solicitar el material biológico de
          su interés dentro del
          <Link href="/catalogo">
            <a> Catalogo </a>
          </Link>
          del CRG.
        </p>
        <h3 className="heading-3">
          ¿En qué forma entrega el CRG el material biológico?
        </h3>
        <p>
          La forma de suministro dependerá del tipo de material biológico
          solicitado y de la colección a la cual pertenezca dicho material.
        </p>
        <p>
          Por favor envíe a través del
          <Link href="/contacto">
            <a> Formulario de Contacto </a>
          </Link>
          su consulta respecto de las formas de suministro del material
          biológico de su interés.
        </p>
        <h3 className="heading-3">¿El CRG brinda servicio de preservación?</h3>
        <p>
          El CRG brinda un servicio pago de preservación de material biológico.
          Dicho servicio no implica la necesaria sesión del material al CRG.
        </p>
        <h3 className="heading-3">¿Qué es una cepa tipo?</h3>
        <p>
          Se designa una cepa tipo en la descripción de una nueva especie
          (Código Internacional de Nomenclatura para algas, hongos y plantas y
          Nomenclatura Internacional de Código para Bacterias). Ésta es la única
          cepa de referencia nomenclatural de una especie. La cepa tipo es el
          representante nomenclatural validado de una especie, pero no es
          necesariamente el representante más típico de su especie.
        </p>
        <h3 className="heading-3">
          ¿Cuál es el marco legal en el que se encuadra el material biológico en
          Argentina?
        </h3>
        <p>
          En Argentina el marco legal a ser aplicado dependerá de ciertas
          características del material biológico, como por ejemplo:
        </p>

        <p>
          – si el material biológico está compuesto por organismos modificados
          genéticamente o no;
        </p>

        <p>– si ha sido coleccionado en la naturaleza;</p>

        <p>
          – su procedencia geográfica (en particular en qué jurisdicción se
          accedió al material);
        </p>

        <p>– el año en el que fue colectado;</p>

        <p>– el tipo de material biológico;</p>

        <p>
          En caso de que el material proceda de una colección de recursos
          genéticos, el marco legal aplicable dependerá de las condiciones del
          acuerdo de transferencia de material suscripto.
        </p>
        <h3 className="heading-3">¿Qué es el permiso de colección o acceso?</h3>
        <p>
          El permiso de colección constituye la documentación que acredita la
          tenencia legal del material biológico; el mismo es otorgado por la
          jurisdicción donde se realiza la colecta del material biológico,
          independientemente de que sea público o privado.
        </p>
        <p>
          Para consultas sobre autoridades de aplicación consultar en
          <Link href="https://proyectosinv.conicet.gov.ar/solicitud-colecta-cientifica/">
            <a>
              https://proyectosinv.conicet.gov.ar/solicitud-colecta-cientifica/
            </a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
