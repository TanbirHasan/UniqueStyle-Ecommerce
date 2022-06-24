import React from 'react';
import { useNavigate } from "react-router-dom";
import {
  useSignInWithGoogle,
  useSendPasswordResetEmail,

  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from '../firebase.config';
 import { Formik } from "formik";
import validate from '../components/Validate';

const Register = () => {

  const navigate  = useNavigate()
  const [signInWithGoogle, guser, gloading,gerror] = useSignInWithGoogle(auth);
const [createUserWithEmailAndPassword, user, loading, error] =
  useCreateUserWithEmailAndPassword(auth);

  if (loading || gloading ) {
    return <span>loading</span>;
  }
  if (user) {
    navigate("/");
  }

 
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          Vpassword: "",
        }}
        validate={values => {
          const errors = {};
          /* validating first name */
          if (!values.firstName) {
            errors.firstName = "First name is required";
          } else if (values.firstName.length < 1) {
            errors.firstName = "Invalid First name";
          } 

          /* validating last name */
          if (!values.lastName) {
            errors.lastName = "Last name is required";
          } else if (values.lastName.length < 1) {
            errors.lastName = "Invalid Last name";
          } 

          /* validating email using regex to pass email */
          if (!values.email) {
            errors.email = "Email address is required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          /* validating passwords */
          if (!values.password) {
            errors.password = "Password is required";
          } else if (values.password.length <= 6) {
            errors.password = "Password length is weak 😩";
          } 

        //   /* validating password verification with initial */
        //   if (!values.Vpassword) {
        //     errors.Vpassword = "Invalid password verification";
        //   } else if (values.Vpassword !== values.password) {
        //     errors.Vpassword = "Passwords don't match 😟";
        //   } else {
        //     errors.Vpassword = "Passwords match 👏";
        //   }

          return errors;
        }}
        onSubmit={(values, { setSubmitting,resetForm }) => {

            console.log(values.email)
            console.log(values.password)
          
          setTimeout(() => {


             createUserWithEmailAndPassword(values.email, values.password);
            setSubmitting(true);
            

            resetForm();
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
              <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                  <h1 className="mb-8 text-3xl text-center">Registration 🚀</h1>
                  <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                  />
                  {touched.firstName && errors.firstName ? (
                    <div>{errors.firstName}</div>
                  ) : ""}

                  <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                  {touched.lastName && errors.lastName ? (
                    <div>{errors.lastName}</div>
                  ) : ""}

                  <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {touched.email && errors.email ? (
                    <div>{errors.email}</div>
                  ) : ""}

                  <input
                    type="password"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Password (5 characters and above)"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {touched.password && errors.password ? (
                    <div>{errors.password}</div>
                  ) : ""}

               

                  <button
                    type="submit"
                    className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
                  >
                    Create Account 🚀
                  </button>

                 
                </div>

                <div className="text-grey-dark mt-6">
                  Already have an account?
                  <a
                    className="no-underline border-b border-blue text-blue"
                    href="../login/"
                  >
                    Log in
                  </a>
                  .
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Register;