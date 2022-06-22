import { useState } from "react";
import UserAccount from "./components/account/UserAccount";
import Navbar from "./components/navbar/Navbar";

// import './index.css';


const App = () => {
  const [Account, setAccount] = useState(null);
 

  return (
    <div>
       {
          Account?  <Navbar  />  : <UserAccount Account={Account} setAccount={setAccount}/>
         }
         
     
    </div>
  )
}

export default App;