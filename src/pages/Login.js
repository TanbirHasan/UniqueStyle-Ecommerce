import React, { useRef, useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import {
  useSignInWithGoogle,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useAuthState,
} from "react-firebase-hooks/auth";
import auth from "../firebase.config";
import { Formik } from "formik";
import validate from "../components/Validate";
import Loading from "../components/Loading";

const Login = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth)

   let errorMessage;

  const emailref = useRef()
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
const [signInWithEmailAndPassword, newuser, loading, error] =
  useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [forget,setForget] = useState(false);

  if (loading || gloading) {
    return <Loading></Loading>;
  }
  if (newuser) {
    navigate("/");
  }

      if (error) {
        errorMessage = <p className="text-red">{error?.message.slice(10)}</p>;
      }

  const resetPassword = async () => {
     const email = emailref.current.value;
     if (email) {
       await sendPasswordResetEmail(email);
       alert("Sent email");
     } else {
       alert("please enter your email address");
     }

  }
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
          /* validating first name */

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

          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values.email);
          console.log(values.password);

          setTimeout(() => {
            signInWithEmailAndPassword(values.email, values.password);
            setSubmitting(true);

            if (!user) {
              setForget(true);
            }

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
                  <h1 className="mb-8 text-3xl text-center">Login ▶</h1>

                  <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    ref={emailref}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {touched.email && errors.email ? (
                    <div>{errors.email}</div>
                  ) : (
                    ""
                  )}

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
                  ) : (
                    ""
                  )}

                  <button
                    type="submit"
                    className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
                  >
                    Login
                  </button>
                  {forget && (
                    <p>
                      Forget Password?
                      <button onClick={resetPassword}>Click Here</button>
                    </p>
                  )}
                </div>
                {errorMessage}

                <div className="text-grey-dark mt-6">
                  New Here?
                  <Link
                    to="/register"
                    className="no-underline border-b border-blue text-blue"
                  >
                    Please Register
                  </Link>
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

export default Login;
