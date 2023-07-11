  
import { Route, Routes } from 'react-router-dom';
import './App.css'; 
import Main from './MainComponent/Main'; 
// import FormComponentRGS from './Component/FormForREG/Form';
// import FormComponentLOG from './Component/FormForLOG/FormLOG';
// import NotFound from './Pages/NotFound/NotFound';
 
 
function App() {
  return ( <> 
  {/* <Routes> 
        <Route path="/signup" element={<FormComponentRGS/>}></Route> 
        <Route path="/" element={<FormComponentLOG/>}></Route>  
        <Route path="/main" element={<Main/>}></Route> 
        <Route path="*" element={<NotFound />}></Route>

  </Routes> */}
    <Main></Main>
    </>
  )
}

export default App;
