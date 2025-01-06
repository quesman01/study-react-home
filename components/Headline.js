import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";


export  function Headline(props) {
    // console.log(props);
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
              Get started by editing {props.children}.
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          {/* <button onClick={props.onClick}>ボタン</button> */}
    </React.Fragment>
    // React.Fragment はimport reactは必要だが　単純に<></>でもいい
  );
}
