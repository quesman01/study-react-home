import classes from "src/components/Main/Main.module.css";
import { Links } from "src/components/Links/Links";
import { Headline } from "src/components/Headline/Headline";

export function Main(props) {
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
        <Links />
      </main>
    </>
  );
}
