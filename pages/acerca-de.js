import Layout from "../components/Layout";
import Link from "next/link";

export default function AcercaDe() {
  return (
    <Layout
      title="Acerca de"
      description="Sitio Web de La Universidad de Buenos Aires"
    >
      <section className="section-before">
        <h1 className="heading-1">Acerca de</h1>
        <h2 className="heading-2">Historia</h2>
        <p>
          Dentro de la{" "}
          <Link href="https://exactas.uba.ar/">
            <a>
              Facultad de Ciencias Exactas y Naturales de la Universidad de
              Buenos Aires{" "}
            </a>
          </Link>
          (FCEN-UBA), el desarrollo sostenido en el tiempo de líneas de
          investigación en microorganismos, plásmidos y líneas celulares, ha
          derivado en la conformación de colecciones informales, dando de esta
          forma marco y sostén a una importante cantidad de recursos genéticos
          de diferente índole.
        </p>

        <p>
          Los laboratorios en los cuales se han ido conformando dichas
          colecciones “informales”, los cuales se detallan a continuación, han
          confluido en una iniciativa hacia la búsqueda de optimizar la
          preservación de los materiales allí albergados, buscando unificar su
          gestión y promover la transferencia de dichos materiales hacia
          diferentes sectores de la sociedad.
        </p>

        <p>
          – el laboratorio de Microbiología de Suelos (Departamento de
          Biodiversidad y Biología Experimental –DBBE- de la FCEN-UBA) ha
          resguardado una de las colecciones nacionales más importantes de
          Micorizas vesiculo arbusculares (Banco de Glomeromycota In Vitro);
        </p>

        <p>
          – el laboratorio de Biotecnología ambiental y ecología bacteriana y el
          Laboratorio de Estudios genéticos y fisiológicos de bacterias de
          interés biotecnológico (Departamento de Química Biológica –QB- de la
          FCEN-UBA) han resguardado cepas bacterianas nativas y plásmidos;
        </p>

        <p>
          – el laboratorio de Biología de Protistas (DBBE) ha resguardado
          cultivos de microalgas y ciliados
        </p>

        <p>
          – los laboratorios de Micología y de Fitopatología (DBBE) han
          resguardado una amplia colección de hongos filamentosos nativos.
        </p>

        <p>
          Es en este contexto se creó el CENTRO DE RECURSOS GENÉTICOS (CRG) de
          la FCEN-UBA (Res (CD) 1560/18) cuyos objetivos centrales son la
          preservación de los recursos genéticos bajo resguardo de la FCEN-UBA y
          la promoción del uso sustentable de dichos recursos, asegurando así
          una distribución justa y equitativa de los beneficios derivados de su
          uso y contribuyendo también al desarrollo científico técnico del país.
        </p>

        <h2 className="heading-2">Misión</h2>
        <p>
          El CRG tiene como misión garantizar la gestión y conservación de los
          recursos genéticos resguardados por la FCEN-UBA. Asimismo, busca
          generar un ámbito de integración, preservando y gestionando el uso de
          los recursos genéticos (RRGG) e incrementando las capacidades
          institucionales en el área articulando con los diferentes actores
          involucrados en la temática.
        </p>
        <h2 className="heading-2">Visión</h2>
        <p>
          El CRG busca consolidarse como una entidad de referencia a nivel
          nacional e internacional que propicie la conservación y el uso
          sustentable de los RRGG y la distribución justa y equitativa de los
          beneficios derivados, comportándose como un facilitador de recursos
          genéticos, así como de las herramientas de gestión que permitan su uso
          y aprovechamiento
        </p>
        <p>
          El CRG busca ofrecer espacios integradores y dinámicos de
          articulación, respondiendo a las demandas de la Institución y de la
          sociedad en su conjunto, participando con un rol activo en el
          desarrollo de innovaciones biotecnológicas.
        </p>
        <h2 className="heading-2">Objetivos</h2>
        <ul>
          <li>Propiciar la conservación de la biodiversidad.</li>
          <li>
            Preservar y valorizar los recursos genéticos bajo resguardo de la
            FCEN
          </li>
          <li>
            Promover el uso sustentable de dichos recursos genéticos,
            propiciando la distribución justa y equitativa de los beneficios
            derivados de su uso
          </li>
        </ul>
        <h2 className="heading-2">Funcionamiento</h2>
        <ul>
          <li>
            <Link href="">
              <a>
                Resolución de creación del Centro de Recursos Genéticos (CRG) de
                la FCEN-UBA
              </a>
            </Link>
          </li>
          <li>Reglamento de Gestión</li>
          <li>Reglamento técnico</li>
          <li>Acuerdo de Transferencia modelo</li>
        </ul>
      </section>
    </Layout>
  );
}
