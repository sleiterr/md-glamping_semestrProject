import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

import SecondaryButton from "../Button/SecondaryButton";
import Input from "./Input";
import TextareaField from "./TextareaField";

const API_URL = "https://example.com";

// const API_URL = import.meta.env.VITE_API_BASE_URL;
// console.log(API_URL);

const ContactForm = () => {
  //   const [navigate] = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Navn er påkrævet"),
    email: Yup.string().email("Ugyldig email").required("Email på påkrævet"),
    subject: Yup.string().required("Skriv venligst din besked"),
    message: Yup.string().required("Skriv venligst din besked"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      //   const formData = new FormData();
      //   formData.append("name", values.name);
      //   formData.append("email", values.email);

      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      });

      //   const data = await res.json();

      if (res.ok) {
        toast.success(`Tak ${values.name}, din besked er sendt!`);
        resetForm();
      } else {
        toast.error(values.message || "Noget gik galt, prøv igen");
      }
      //   navigate("/message-send", { state: { name: values.name } });
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
            <SecondaryButton
              type="submit"
              to="/contact-confirmation"
              className="self-center py-6 px-24 text-5xl md:text-4xl md:py-2 md:px-34"
            >
              Indsend
            </SecondaryButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
