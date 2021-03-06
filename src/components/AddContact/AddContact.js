import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import PropTypes from "prop-types";
import styles from "./AddContact.module.css";

const Phonebook = ({ setContacts, contacts }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const inputName = ({ target }) => {
    setName(target.value);
  };

  const inputNumber = ({ target }) => {
    setNumber(target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    setContacts((state) => [...state, { name, number, id: uuidv1() }]);
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.form} autoComplete="off" onSubmit={submitHandler}>
      <input
        className={styles.inputName}
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={inputName}
      ></input>
      <input
        className={styles.inputnumber}
        type="text"
        name="number"
        placeholder="Nubmer"
        value={number}
        onChange={inputNumber}
      ></input>
      <button type="submit">Add contacts</button>
    </form>
  );
};

Phonebook.propTypes = {
  setContacts: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default Phonebook;
