import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";


export  function Headline(props) {
    console.log(props.title);
    return (
    <React.Fragment>
        <p className={styles.title}>{props.page} Page</p>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={108}
            priority
          />

<ol>
            <li>
              Get started by editing <code>pages/{props.page}.js</code>.
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>


    </React.Fragment>
    // React.Fragment はimport reactは必要だが　単純に<></>でもいい
  );
}
