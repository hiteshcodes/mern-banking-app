import "bootstrap/dist/css/bootstrap.min.css";
import Customers from "./Customers";

import Navbar from "./Navbar";

function App() {
  return (
    <div className="">
      <header className="App-header">
        <Navbar />
      </header>
      <Customers />
    </div>
  );
}

export default App;
