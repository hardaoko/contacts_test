import { Route, Routes } from "react-router-dom";
import { Contacts } from "../../pages/Contacts/Contacts";
import { Login } from "../../pages/Login/Login";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";


export const ModalSwitch = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<ProtectedRoute/>}>
            <Route  path='/' element={<Contacts/>}/>
          </Route>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

