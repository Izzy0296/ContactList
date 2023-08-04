import { useState } from "react";
import { useEffect } from "react";

import ContactList from "./ContactList";
import ContactRow from "./ContactRow";


export default function SelectedContact({ selectedContactId }) {
    const [contact, setContact] = useState(null)
    useEffect(() => {
        async function fetchContacts() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                console.log(response)
                const result = await response.json();
                setContact(result);
            } catch (error) {
                console.error(error)
            }
        }
        fetchContacts()
    }, [selectedContactId])
    return (
        <>
            {contact ? <ContactRow contact={contact} /> : ''}
        </>
    )
}