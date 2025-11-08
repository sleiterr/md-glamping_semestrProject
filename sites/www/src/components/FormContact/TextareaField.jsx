import { Field, ErrorMessage } from "formik";
import clsx from "clsx";

const TextareaField = ({ label, name, ...rest }) => (
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
      as="textarea"
      id={name}
      name={name}
      {...rest}
      className={clsx(
        "font-normal text-base text-secondary p-3 h-51.75",
        "rounded-3xl border border-white",
        "shadow focus:outline-none transition-shadow duration-300 focus:ring-2 focus:ring-cyan-400 resize-none"
      )}
    />
    <div className="mt-2">
      <ErrorMessage name={name} component="div" className="text-red-500" />
    </div>
  </div>
);

export default TextareaField;
