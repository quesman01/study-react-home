import Head from "next/head";
import { Geist, Geist_Mono, Maiden_Orange } from "next/font/google";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer/Footer";
import { Main } from "@/src/components/Main/Main";
import { Header } from "src/components/Header/Header";
import { useCallback, useEffect, useState } from "react";

// #8 相対パスから絶対パスへの変更 設定よりユーザーは全体、ワークスペースは今のやつのみ

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const handleClick = (e,foo)=>{
//   console.log(e.target.href);
//   e.preventDefault();
//   alert(foo);
// }

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isshow, setIshhow] = useState(true);
  
  // let foo =1;

  const handleClick = useCallback((e) =>{
    // foo = foo + 1;
    if (count < 10){
      setCount( (prevcount) => prevcount +1 );
    }
  },[count]);

  useEffect(()=>{
    // console.log(`マウント時: ${count}`);
    document.body.style.backgroundColor = "lightblue"
    return () => {
      // console.log(`アンマウント時: ${count}`);
      document.body.style.backgroundColor = ""
    }
  },[count])
  // 下の関数にいれてるが、上からの順番なのでこのままfooを下に書くとエラーがでる
  // コンポーネントの外だと上下ないが (e, foo)という形で呼び出す必要がある
  
  // // #9
  // #9 または

  // function handleClick  (e)  {
  //   console.log(e.target.href);
  //   // e.preventDefault();
  //   alert(123);
  // }

  const handleChange = useCallback((e) => {
    if(e.target.value.length > 5){
      alert("5文字以内にしてください")
      return;
    }
     setText(e.target.value.trim())
  },[]);

  const handleDisplay = useCallback(() =>{
    setIshhow((previsshow) =>  !previsshow);
  }, []);

  return (
    <>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {isshow ? <h1 className={styles.math}>{count}</h1> :null}
        <button
        className={styles.btn}
          href="/about"
          onClick={handleClick}
          // // onClick={(e) =>{
          // //   handleClick(e,foo);
          // //   // コンポーネントの外だと2つの引数が必要
          // // }}
        >
          ボタン
        </button>
        {/* #9 function(e) または　(e)=> */}
        <button className={styles.btn}
          onClick={handleDisplay}>
            {isshow ? "非常時": "表示"}
        </button>
        {/* #13 jsx(React)において　return文の中ではif文は使えない */}
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <input 
          type="text" 
          value={text} 
          onChange={handleChange}/>

        <Main page="index" />
        <Footer />
      </div>
    </>
  );
}
