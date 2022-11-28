import React from "react";
import { useFormik } from "formik";
import { registerSchema } from "../../schemas/register";
import Input from "../Input";
import Button from "../Button";

export default function Form() {
  const [showErrors, setShowErrors] = React.useState(false);
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setShowErrors(true);
    handleSubmit(e);
  };
  return (
    <form onSubmit={onSubmit} className="p-5 rounded-sm shadow-xl bg-slate-800">
      <h1 className="text-center text-zinc-100 text-lBBg mb-5">Cadastro</h1>
      <div className="flex flex-col gap-4">
        <Input
          name="name"
          label="Nome"
          value={values.name}
          onChange={handleChange}
          error={showErrors ? errors.name : ""}
        />
        <Input
          name="email"
          label="E-email"
          value={values.email}
          onChange={handleChange}
          error={showErrors ? errors.email : ""}
        />
        <Input
          type="password"
          name="password"
          label="Password"
          value={values.password}
          onChange={handleChange}
          error={showErrors ? errors.password : ""}
        />

        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
}
