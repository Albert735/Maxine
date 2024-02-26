import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Videos from "./Components/Videos";
import Branding from "./Components/Branding";
import Aboutme from "./Components/Aboutme";
import Footer from "./Components/Footer";
import Bottom from "./Components/Bottom";


function App() {
  return (
    <div className="bg-[#101010] text-white">
      <Navbar />
      <Home/>
      <Videos/>
      <Branding/>
      <Aboutme/>
      <Footer/>
      <Bottom/>
    </div>
  );
}

export default App;
