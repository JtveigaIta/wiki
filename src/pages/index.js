import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
          <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container" style={{ textAlign: "center" }}>
              
              <Heading as="h1" className="hero__title">
                {siteConfig.title}
              </Heading>

              <p className="hero__subtitle">{siteConfig.tagline}</p>

              {/* 🎥 VIDEO CENTRALIZADO E MENOR */}
              <div
                style={{
                  width: "30%",
                  minWidth: "280px", // evita ficar pequeno demais no mobile
                  margin: "0 auto 20px auto",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%",
                    height: 0,
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/GBqgbBhnMlc"
                    title="PlaNAR Intro - 5min"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      borderRadius: "12px",
                    }}
                  />
                </div>
              </div>

              {/* 🔘 BOTÃO */}
              <div className={styles.buttons}>
                <a
                  className="button button--secondary button--lg"
                  href="https://youtu.be/GBqgbBhnMlc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PlaNAR Intro - 5min ⏱️
                </a>
              </div>

            </div>
          </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
