import React, { useState } from "react";
import { FORM, INPUT } from "./StyledComponent";

export const Search = ({ setSearch, setIsLoading }) => {
  const [form, setForm] = useState({ nombre: "" });

  function isObjEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isObjEmpty(form.nombre)) {
      window.location.replace("");
      return;
    } else {
      setSearch({ nombre: form.nombre });
      setIsLoading(true);
    }
  };

  return (
    <>
      <FORM onSubmit={handleSubmit}>
        <label htmlFor="nombre"></label>
        <INPUT
          type="text"
          name="nombre"
          id="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <INPUT type="submit" />
      </FORM>
    </>
  );
};
