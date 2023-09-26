import { BrowserRouter, Routes, Route } from "react-router-dom";
import  HomePage  from './pages/HomePg';
import DetailsPage  from './pages/DetailsPg';
import Header from './components/Headr';



export default function App() {
  return(
    <BrowserRouter>
     <Header/>
      <Routes>    
        <Route path ="/" element = {<HomePage />}> </Route>
        <Route path = "/:id"  element = {<DetailsPage />} > </Route>
       </Routes>
    </BrowserRouter>
  )
}