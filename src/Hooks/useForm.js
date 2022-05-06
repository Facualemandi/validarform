import { useState } from "react";
import {helpHttp} from '../Helper/helperHttps';

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // const handleBlur = (e) => {
  //   handleChange(e);
  //   setErrors(validateForm(form));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    
    if (Object.keys(errors).length === 0) {
      setForm(initialForm);
      setLoading(true);

      helpHttp()
        .post("https://formsubmit.co/ajax/facuinstituto10@gmail.com", {
          body: form,
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setTimeout(() => {
            setResponse(false)
          }, 2000)
        });
    } else {
      setLoading(false);
    }

    // if(form.name && form.email && form.subjet && form.comment){
    //    setForm(initialForm)
    //   }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleSubmit,
    handleChange,
    // handleBlur,
  };
};
