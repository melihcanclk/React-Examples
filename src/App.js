import { useState, useEffect} from "react";
import Contact from "./components/ContactList/Contact";
import Form from "./components/ContactList/Form";


function App() {

  const [allContact, setAllContact] = useState([]);

  useEffect(() => {
    //console.log(allContact)    
  }, [allContact])

  return (  
  <div>
      <Contact contacts={allContact} />
      <Form contact={allContact} setContact={setAllContact}/>
  </div>
    
  );
}

export default App;
