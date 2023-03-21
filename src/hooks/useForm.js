import validate from "@/utils/validate";
import { useState } from "react";

const useForm = (rules = {}, initialForm = {}) => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState({});

  const register = (name) => ({
    value: form[name] || "",
    error: error[name],
    onChange: (e) => {
      setForm({ ...form, [name]: e.target.value });
      if (Array.isArray(rules[name]) && rules[name].length > 0) {
        setError({ ...error, [name]: "" });
      }
    },
  });

  const _validate = () => {
    const errObj = validate(rules, form);
    setError(errObj);
    return Object.keys(errObj).length === 0;
  };

  const reset = () => {
    setForm({});
  };

  return {
    register,
    validate: _validate,
    form,
    reset,
  };
};

export default useForm;
