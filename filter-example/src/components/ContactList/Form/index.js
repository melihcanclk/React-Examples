import { useState, useEffect } from "react";

function Form( { contact, setContact } ) {
    const [form, setform] = useState({name:"", surname : ""});

    useEffect(() => {
        setform({name:"", surname : ""});
    }, [contact])

    const onChangeInput = (e) => {
        setform({...form, [e.target.name] : e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(form.name === "" || form.surname === "")
            return false
        setContact(([...contact,form]));
    }

    return ( 
        <form onSubmit={onSubmit}>
            <div>
                <input name="name" value={form.name} onChange={onChangeInput}/>
            </div>
            <div>
                <input name="surname" value={form.surname} onChange={onChangeInput}/>
            </div>
            <div>
                <button>
                    Add
                </button>
            </div>
        </form>
    );
}

export default Form;