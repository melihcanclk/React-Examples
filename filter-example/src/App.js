import { useState, useEffect} from "react";
import Contact from "./components/ContactList/Contact";
import Form from "./components/ContactList/Form";
import './App.css'


function App() {

  const [allContact, setAllContact] = useState([
    {name : "Ahmet", surname : "Can"},
    {name : "foo", surname : "foo"}
  ]);

  useEffect(() => {}, [allContact])

  return (  
    <div className="App">
        <Contact contacts={allContact} />
        <Form contact={allContact} setContact={setAllContact}/>
    </div>
    
  );
}

export default App;
