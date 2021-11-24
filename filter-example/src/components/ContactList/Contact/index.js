function Contact( {contacts} ) {

    return (
        <div>
            <ul>
                {contacts.map((contact, i) => 
                    <li key={i}>
                        {contact.name} {contact.surname}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Contact;