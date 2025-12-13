import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const formikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = (values) => {
    console.log(values);
    alert("Formik registration successful");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <h2>Register (Formik)</h2>

        <Field type="text" name="username" placeholder="Username" />
        <ErrorMessage name="username" component="div" />

        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />

        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default formikForm;
