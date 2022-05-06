import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FormContact } from './pages/FormContact';
import { FormLevelProgram } from './pages/FormLevelProgram';
import { FormName } from './pages/FormName';


export const Router = () => {
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FormName />}></Route>
            <Route path="/second" element={<FormLevelProgram />}></Route>
            <Route path="/third" element={<FormContact />}></Route>
          </Routes>
        </BrowserRouter>
    );
}