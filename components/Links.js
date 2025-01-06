
import classes from "./Links.module.css";
import Image from "next/image";

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

    </>
  );
}
