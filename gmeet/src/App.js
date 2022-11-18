import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BestSelling from './Component/BestSelling';
import Green from './Component/Green';
import Product from './Component/Product';
import Section from './Component/Section'
import SectionTwo from './Component/SectionTwo';
import KitchenSinkExample from "./Component/Menu"
import Header from './Component/Header';
import Mission from './Component/Mission';
import Footer from './Footer/Footer';
import { useState } from 'react';
function App() {
  const[state , setState] = useState(0)
  return (
    <>
    <Header/>
    <Green/>
    <Product state={state}/>
    <Section/>
    <SectionTwo/> 
    <BestSelling/>
    <KitchenSinkExample setState={setState} state={state} />
    <Mission/>
    <Footer/>
    </>
  );
}

export default App;
