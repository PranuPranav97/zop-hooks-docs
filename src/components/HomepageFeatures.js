import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("../../static/img/easy-to-use.svg").default,
    description: (
      <>
        Zophooks eliminates the hassle of complex installation and configuration
        processes. With a straightforward installation procedure, you can get
        started quickly without the need for extensive technical expertise.
      </>
    ),
  },
  {
    title: "Fast",
    Svg: require("../../static/img/fast.svg").default,
    description: (
      <>
        Zop Hooks enables your React Development Journey with Faster custom
        hooks.
      </>
    ),
  },
  {
    title: "Powered by React",
    Svg: require("../../static/img/react.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. So don't worry
        about the build process.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
