import { Navbar } from "./Navbar";
import { CustomForm } from "./Form";

import "./App.css";
import "antd/dist/antd.css";

/** @type {{search: React.CSSProperties}} */

function App() {
  return (
    <div className="wrap">
      <h1>Testing</h1>
      <Navbar />

      {/* <div className="login-form"> */}
      <CustomForm />
      {/* </div> */}
    </div>
  );
}

export default App;
