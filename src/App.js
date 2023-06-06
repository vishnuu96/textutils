// import logo from './logo.svg';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import TextForm from "./components/Textform"



function App() {
  return (
    <>
     <Navbar title="TextUtils" aboutText="About TextUtils" />
     {/* <Navbar  /> */}
     <div className="container my-3">
     <Textform heading="Enter the text to analyze"/>
     {/* <About/> */}

     </div>
    
    </>
  );
}

export default App;
