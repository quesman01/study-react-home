import classes from "./Main.module.css";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";



export  function Main(props) {
  return (
    <>
        <main className={classes.main}>
          <Headline 
            title="About Page" 
            page={props.page} 
            // number={111} 
            // array={[3,2,1]}
            // obj={{foo: "foo", bar: "bar"}}
            // boolean
          >
            code={<code>pages/{props.page}.js</code>}

          </Headline>
        
          {/* boolean単体ではtrue 細かい場合は boolean={true} */}
          {/* compのようにコンポーネントそのものを渡すことができる */}
          <Links/>
        </main>
    </>
  );
}
