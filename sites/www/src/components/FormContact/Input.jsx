import React from "react";
import clsx from "clsx";
import { Field, ErrorMessage } from "formik";

const InputField = ({ label, name, ...rest }) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          htmlFor={name}
          className="font-zen font-light text-secondary text-2xl text-center leading-none mb-2"
        >
          {label}
        </label>
      )}
      <Field
        id={name}
        name={name}
        {...rest}
        className={clsx(
          "font-normal text-base text-secondary px-3 h-10 md:px-4 md:h-12",
          "rounded-3xl border border-white",
          "shadow focus:outline-none transition-shadow duration-300 focus:ring-2 focus:ring-cyan-400 resize-none"
        )}
      />
      <div className="min-h-8 mt-1 md:min-h-10">
        <ErrorMessage name={name} component="div" className="text-red-500" />
      </div>
    </div>
  );
};

export default InputField;
