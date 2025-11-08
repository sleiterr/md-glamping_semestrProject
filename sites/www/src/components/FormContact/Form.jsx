import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
// import { toast } from "react-toastify";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

import Input from "./Input";
import TextareaField from "./TextareaField";

const API_URL = import.meta.env.VITE_API_BASE_URL;
console.log(API_URL);

const ContactForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Navn er påkrævet"),
    email: Yup.string().email("Ugyldig email").required("Email på påkrævet"),
    subject: Yup.string().required("Skriv venligst din emne"),
    message: Yup.string().required("Skriv venligst din besked"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.ok) {
        // toast.success(`Tak ${values.name}, din besked er sendt!`);
        resetForm();
        navigate("/contact-confirmation", { state: { name: values.name } });
      } else {
        console.error(data.message || "Noget gik galt, prøv igen");
        // toast.error(values.message || "Noget gik galt, prøv igen");
      }
    } catch (err) {
      console.error(err);
      console.error("Noget gik galt, prøv igen");
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className="">
          <div className="flex flex-col items-center">
            <Input
              name="name"
              label="Name"
              value={values.name}
              onChange={(e) => setFieldValue("name", e.target.value)}
            />
            <Input
              name="email"
              label="Email"
              value={values.email}
              onChange={(e) => setFieldValue("email", e.target.value)}
            />
            <Input
              name="subject"
              label="Hvad drejer henvendelsen sig om?"
              value={values.subject}
              onChange={(e) => setFieldValue("subject", e.target.value)}
            />
            <TextareaField
              name="message"
              label="Besked (Skriv dato’er, hvis det drejer sig om en booking)"
              value={values.message}
              onChange={(e) => setFieldValue("message", e.target.value)}
              rows={6}
            />
            <SendButton
              type="submit"
              className="self-center py-6 px-24 text-5xl md:text-4xl md:py-2 md:px-34"
            >
              Indsend
            </SendButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;

const SendButton = ({ children, className, ...rest }) => {
  return (
    <>
      <button
        type="submit"
        {...rest}
        className={clsx(
          "bg-button-bg py-4 px-8 rounded cursor-pointer mt-12",
          "font-zen font-normal text-secondary text-4xl",
          "rounded-br-[3.125rem] rounded-tl-[3.125rem]",
          "transition duration-300 ease-in-out",
          "hover:bg-button-hover-bg",
          className
        )}
      >
        {children}
      </button>
    </>
  );
};
