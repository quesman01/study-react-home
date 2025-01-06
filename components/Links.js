
import classes from "./Links.module.css";
import Image from "next/image";
import React from "react";

const ITEMS =[
  {
    href:"/",
    title: "1",
    description:"d"
  },
  {
    href:"/",
    title: "2",
    description:"dd"
  },
  {
    href:"/",
    title: "3",
    description:"ddd"
  },
  {
    href:"/",
    title: "4",
    description:"dddd"
  }
];

export  function Links() {
  return (
    <>
      <div className={classes.ctas}>
        <a
          className={classes.primary}
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={classes.logo}
            src="/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Deploy now
        </a>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.secondary}
        >
          Read our docs
        </a>
      </div>

      <div className={classes.grid}>
        {ITEMS.map(item => {
          return(
            <React.Fragment key={item.title}>
                <a  href={item.href} className={classes.card}>
                  <h3 className={classes.title}>◇{item.title}</h3>
                  <p className={classes.description}>
                    {item.description}
                  </p>
                </a>
                {/* mapにおいて個々のkeyを指定しないとエラーでるよ */}
              </React.Fragment>
              // react をimportしてFragmentを使用し　keyを使えるようにした
              // #7 html entities(→など)は場合によっては変換されて使えない 対応は動画に
          )
        })}
      </div>

    </>
  );
}
