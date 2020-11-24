import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateContact(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      if (name === "fname") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lname") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "Email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fname"
          onChange={updateContact}
          type="text"
          placeholder="First name"
          value={contact.fname}
        />
        <input
          name="lname"
          onChange={updateContact}
          type="text"
          placeholder="Last name"
          value={contact.lname}
        />
        <input
          name="Email"
          onChange={updateContact}
          type="text"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
