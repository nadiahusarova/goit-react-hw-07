import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "../../redux/contactsSlice";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const formSchema = Yup.object({
    name: Yup.string()
      .required("please fill in the field")
      .min(2, "name must be longer than 1 letter")
      .max(30, " name must be shorter than 30 letter"),
    number: Yup.string()
      .required("please fill in the field")
      .min(7, "number must be longer than 6 numbers")
      .max(12, "number must be shorter than 13 numbers"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (data, actions) => {
    const contactExists = contacts.some(
      (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (contactExists) {
      alert(`${data.name} is already in contacts.`);
    } else {
      dispatch(addContact(data));
      actions.resetForm();
    }
  };

  return (
    <div className={s.formwrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={formSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field name="name" className={s.input} />
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field name="number" className={s.input} />
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
