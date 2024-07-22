import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRef } from "react";
import { useReducer } from "react";
import { useEffect } from "react";

export const ACTIONS = {
  add_contact: "add-contact",
  delete_contact: "delete-contact",
};

function reducer(contacts, action) {
  switch (action.type) {
    case ACTIONS.add_contact:
      return [
        ...contacts,
        newContact(action.payload.name, action.payload.email),
      ];
    case ACTIONS.delete_contact:
      return contacts.filter((contact) => contact.id !== action.payload.id);
    default:
      return contacts;
  }
}

function newContact(name, email) {
  return { id: Date.now(), name: name, email: email };
}

const getInitialContacts = () => {
  const initialContacts = localStorage.getItem("contacts");
  return initialContacts ? JSON.parse(initialContacts) : [];
};

function App() {
  const [search, setSearch] = useState("");
  const [contacts, dispatch] = useReducer(reducer, getInitialContacts());
  const [add, setAdd] = useState(false);
  const nameRef = useRef("");
  const emailRef = useRef("");

  // Checking if the contacts contain the searched name's data or not!
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <main>
      <div className="container">
        <div className="input-box">
          <input
            type="text"
            placeholder="Search name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => setAdd(true)}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>

        <div className="contacts-container">
          {filteredContacts.length === 0 && <h2>Nothing to show</h2>}

          {filteredContacts.map((contact, index) => {
            return (
              <div className="contact" key={index}>
                <div className="user-icon">
                  <i className="fa-solid fa-user"></i>
                </div>
                <div className="details">
                  <p>{contact.name}</p>
                  <span>{contact.email}</span>
                </div>
                <div className="button-box">
                  
                  <button
                    onClick={() =>
                      dispatch({
                        type: ACTIONS.delete_contact,
                        payload: { id: contact.id },
                      })
                    }
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {add && (
        <div className="add-page">
          <i
            onClick={() => setAdd(false)}
            className="fa-solid fa-xmark"
          ></i>

          <input
            ref={nameRef}
            type="text"
            placeholder="Enter name"
            autoFocus
          />
          <input ref={emailRef} type="email" placeholder="Enter email" />
          <button
            onClick={() => {
              if (nameRef.current.value && emailRef.current.value) {
                dispatch({
                  type: ACTIONS.add_contact,
                  payload: {
                    name: nameRef.current.value,
                    email: emailRef.current.value,
                  },
                });
                nameRef.current.value = "";
                emailRef.current.value = "";
                setAdd(false);
              } else {
                alert("Please fill in both fields.");
              }
            }}
          >
            Add
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
