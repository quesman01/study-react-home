import { Libre_Franklin } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import classes from "./Header.module.css";



export  function Header() {
    // default を削除し、HomeをFooterに
  return (
    <>
        {/* <header className={`${classes.header} ${classes.anchor}`} > */}
        <header className={classes.header} >
            <Link href="/" className={classes.anchor}>
                Index
            </Link>
            <Link href="/about"  className={classes.anchor}>
                about
            </Link>
        </header>
    </>
  );
}
