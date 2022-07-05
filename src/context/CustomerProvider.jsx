import React, { useState, } from "react";
import { myCustomer } from "./myCustomer";

export const CustomerProvider = ({ children }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = ({ name, email }) => {
    console.log("Dados de inscrição", { name, email });
    setName(name);
    setEmail(email);
  };
  return (
    <myCustomer.Provider value={{ name, email, submit: handleSubmit }}>
      {children}
    </myCustomer.Provider>
  );
};
