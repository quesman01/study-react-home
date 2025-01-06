import React from "react";
import Image from "next/image";
import classes from "src/components/Headline/Headline.module.css";


export  function Headline(props) {
    // console.log(props);
    return (
    <React.Fragment>
        <p className={classes.title}>{props.page} Page</p>
          <Image
            className={classes.logo}
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
