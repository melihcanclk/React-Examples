import { useState } from "react/cjs/react.development";
import './style.module.css'

function Contact( {contacts} ) {

    const [filteredText, setFilteredText] = useState("");

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((i) => 
            item[i].toString().toLowerCase().includes(filteredText.toLowerCase())
        );
    })

    return (
        <div>
            <input value={filteredText} onChange={(e) => setFilteredText(e.target.value)} />
            <ul className="Filtered-list">
                {filtered.map((contact, i) => // return i (id) content from mapping function and attach to key value of list values
                    <li key={i}>
                        {contact.name} {contact.surname}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Contact;