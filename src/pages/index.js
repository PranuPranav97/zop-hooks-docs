import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <a
            className="button button--secondary button--lg"
            href="https://github.com/PranuPranav97/zop-hooks">
            <img src="img/github-octopus.svg" height={20} />
          </a>{" "}
          &nbsp;&nbsp;
          <a
            className="button button--secondary button--lg"
            href="https://www.npmjs.com/package/zop-hooks">
            &nbsp;&nbsp;
            <img src="img/npm.svg" height={20} />
          </a>
        </div>
        <br />
        <div>
          Zophooks is a powerful React Hooks Library to make your React
          Development Journey easy.
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
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
