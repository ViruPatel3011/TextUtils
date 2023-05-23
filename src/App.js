import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
     
      <Navbar title="TextUtils" aboutText="About TextUtils"/>
      <div className="container my3">

      <TextForm heading="Enter Your Text to Analyze"/>
      </div>
    </>
  );
}

export default App;
