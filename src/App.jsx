// import Machinelearning from './components/machinelearning'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Learn from './components/Learn'
import Features from './components/Features'
import Footer from './components/Footer'


function App() {
  return (
    <div style={{display:"flex"}} >
      <Sidebar/>
      <div className="mainclass">
        <Navbar/>
        <Header/>
        <Learn/>
        <Features/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
