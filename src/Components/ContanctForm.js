import React from "react";
import { useForm } from "../Hooks/useForm";
import "../Styles/Form.css";
import "../Styles/ValidationForms.css";
import Loaders from "./Loaders";
import Message from "./Message";

const initialForm = {
  name: "",
  email: "",
  subjet: "",
  comment: "",
};

const validationsForm = (form) => {
  let errors = {};

  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name) {
    errors.name = "El nombre es obligatorio.";
  } else if (!regexName.test(form.name)) {
    errors.name = "El nombre no puede llevar números.";
  }

  if (!form.email) {
    errors.email = "El Email es obligatorio.";
  } else if (!regexEmail.test(form.email)) {
    errors.email = "Email Incorrecto.";
  }

  if (!form.subjet) {
    errors.subjet = "El Asunto es obligatorio.";
  } else if (!regexName.test(form.subjet)) {
    errors.subjet = "El asunto no puede llevar números.";
  }

  if (!form.comment) {
    errors.comment = "El Comentario es obligatorio.";
  } else if (!regexComments.test(form.comment)) {
    errors.comment = "El comentrio no puede tener más de 255 caracteres.";
  }
  console.log(errors);

  return errors;
};

const ContanctForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleSubmit,
    handleChange,
    // handleBlur,
  } = useForm(initialForm, validationsForm);

  return (
    <>
      <h2> Formulario de contacto </h2>

      <form className="form" onSubmit={handleSubmit}>
        <input
          className="asd"
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          //   onBlur={handleBlur}
          value={form.name}
          //   required
        />

        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type={"email"}
          name="email"
          placeholder="Email"
          onChange={handleChange}
          //   onBlur={handleBlur}
          value={form.email}
          //   required
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="text"
          name="subjet"
          placeholder="Asunto..."
          onChange={handleChange}
          //   onBlur={handleBlur}
          value={form.subjet}
          //   required
        />

        {errors.subjet && <p className="error">{errors.subjet}</p>}

        <textarea
          className="textarea"
          name="comment"
          cols="50"
          rows="5"
          placeholder="EScribe algún Comentario"
          onChange={handleChange}
          //   onBlur={handleBlur}
          value={form.comment}
          //   required
        ></textarea>

        {errors.comment && <p className="error">{errors.comment}</p>}

        <input className="send" type={"submit"} value="Send" />
      </form>

      {loading && <Loaders />}
      {response &&  <Message msg='Los datos han sido enviado con exito!'/>}
    </>
  );
};

export default ContanctForm;
