import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Artigo Científico',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Acesse o artigo completo publicado no TechRxiv sobre o projeto PlaNAR.
        <br /><br />
        <a
          href="https://www.techrxiv.org/doi/full/10.36227/techrxiv.176283639.98510048/v1"
          target="_blank"
          rel="noopener noreferrer"
        >
          📄 Ler artigo
        </a>
      </>
    ),
  },
  {
    title: 'Curso Udemy',
    Svg: require('@site/static/img/utm_uas_jtveiga.svg').default,
    description: (
      <>
        Curso completo sobre simulação UAS/UTM, drones autônomos e gestão de tráfego aéreo.
        <br /><br />
        <a
          href="https://www.udemy.com/course/planar-sim-uas-utm/?referralCode=C5E5B55EA9F5809D63E0"
          target="_blank"
          rel="noopener noreferrer"
        >
          🎓 Acessar curso
        </a>
      </>
    ),
  },
  {
    title: 'Repositório MRCF',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Código-fonte do projeto MRCF com implementação e experimentos.
        <br /><br />
        <a
          href="https://github.com/JtveigaIta/mrcf"
          target="_blank"
          rel="noopener noreferrer"
        >
          💻 Ver no GitHub
        </a>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
