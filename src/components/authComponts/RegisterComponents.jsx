import { Formik, Form, ErrorMessage, Field } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { fetchUsers } from "../../redux/feature/user/UserSlice";

const initialValues = {
  email: "",
  userName: "",
  password: "",
  confirmPassword: "",
  phone: "",
  gender: "",
  acceptTerm: false,
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  userName: Yup.string().required("User Name is required"),
  phone: Yup.string().required("Phone Number is required"),
  gender: Yup.string().required("Gender is required"),
  acceptTerm: Yup.bool().oneOf([true], "You must accept the terms"),
  password: Yup.string()
    .min(8, "Password at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export default function RegisterComponents() {
  const handleRegister = (values) => {
    console.log(values);
    // submit to server
  };

  const dispatch = useDispatch();

  return (
    <section
      className="h-screen w-full flex justify-center items-center bg-cover bg-center bg-coffee-light" style={{
        backgroundImage:
          "url('https://thumbs.dreamstime.com/b/coffee-background-space-text-85121087.jpg')",
      }}
      
    >
      <div className=" shadow-lg rounded-lg p-8 w-full max-w-md" >
        <h1 className="text-3xl font-bold text-[#6F4E37] mb-6 text-center">
          Register at Aroma Café
        </h1>
        <Formik 
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(value) => {
            handleRegister(value);
            dispatch(fetchUsers(value));
          }}
        >
          <Form className="w-full" >
            {/* Email Field */}
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-[#6F4E37]"
                htmlFor="email"
              >
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="bg-[#f4e7dc] border border-[#d6baa6] text-[#6F4E37] text-sm rounded-lg focus:ring-[#8B4513] focus:border-[#8B4513] block w-full p-2.5"
                placeholder="name@example.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Username Field */}
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-[#6F4E37]"
                htmlFor="userName"
              >
                User Name
              </label>
              <Field
                type="text"
                id="userName"
                name="userName"
                className="bg-[#f4e7dc] border border-[#d6baa6] text-[#6F4E37] text-sm rounded-lg focus:ring-[#8B4513] focus:border-[#8B4513] block w-full p-2.5"
                placeholder="Your Name"
              />
              <ErrorMessage
                name="userName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Phone Field */}
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-[#6F4E37]"
                htmlFor="phone"
              >
                Phone
              </label>
              <Field
                type="text"
                id="phone"
                name="phone"
                className="bg-[#f4e7dc] border border-[#d6baa6] text-[#6F4E37] text-sm rounded-lg focus:ring-[#8B4513] focus:border-[#8B4513] block w-full p-2.5"
                placeholder="Phone Number"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Gender Field */}
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-[#6F4E37]"
                htmlFor="gender"
              >
                Gender
              </label>
              <Field
                as="select"
                name="gender"
                className="bg-[#f4e7dc] border border-[#d6baa6] text-[#6F4E37] text-sm rounded-lg focus:ring-[#8B4513] focus:border-[#8B4513] block w-full p-2.5"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage
                name="gender"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-[#6F4E37]"
                htmlFor="password"
              >
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="bg-[#f4e7dc] border border-[#d6baa6] text-[#6F4E37] text-sm rounded-lg focus:ring-[#8B4513] focus:border-[#8B4513] block w-full p-2.5"
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Accept Terms */}
            <div className="mb-4">
              <Field type="checkbox" name="acceptTerm" id="acceptTerm" />
              <label
                htmlFor="acceptTerm"
                className="ml-2 text-sm text-[#6F4E37]"
              >
                Accept terms and conditions
              </label>
              <ErrorMessage
                name="acceptTerm"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#8B4513] hover:bg-[#6F4E37] text-white font-bold py-2 px-6 rounded-lg shadow-md"
              >
                Register
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
}
