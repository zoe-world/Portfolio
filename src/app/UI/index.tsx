import Routing from "pages";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import "./style.scss";

function App() {
  return (
    <div className="pf-app">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<p>에러임</p>}>{<Routing />}</Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
