// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  return (

<>

<Navbar title="TextUtils2" home="HOME" About="About"/>
<div className="container my-3" >

<Textform heading="Enter the text"/>

</div>

</>

  );
}

export default App;
