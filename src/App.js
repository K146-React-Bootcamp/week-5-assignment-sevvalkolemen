import { useMemo } from "react";
import Counter from "./component/counter";
import Header from "./component/header";

function App() {
  // useMemo içerisine yazılan arrow function -dependency array- ile yeniden render işleminin önünce geçildi.
  const data = useMemo(() => {
    return { name: "Sevval" };
  }, []);

  return (
    <>
      <Header />
      <div className="container mt-5">
        <Counter data={data} />
      </div>
    </>
  );
}

export default App;
