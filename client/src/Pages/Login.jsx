import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email_id: "",
    password: "",
  });
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };
  const handleShowPassword = () => {
    setVisible(!visible);
  };

  const errorHelper = (message, sec ) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, sec);
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:4000/user/signIn";
    try {
      if (
        !form.password ||
        !form.email_id ||
        form.email_id === "" ||
        form.password === ""
      ) {
        return errorHelper("Fill Fields", 2000);
      }
   
     
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (data.statusCode === 404) {
        return errorHelper("Invalid Credentials",2000);
      }
      if (data.statusCode === 200) {
        navigate("/");
      }
    } catch (error) {
      errorHelper("Something went to Wrong");
      setLoading(false);
    }
  };
  return (
    <React.Fragment>
      <div className="h-dvh flex justify-center items-center ">
        <div className="w-full sm:w-full md:w-6/12 xl:w-4/12 h-4/6 rounded-md bg-slate-100 container">
          <div className="flex gap-3 flex-col items-center">
            <h6 className="mt-4 mb-4 font-bold text-xl">Login</h6>
            <form
              className="flex gap-4 flex-col w-full items-center"
              onSubmit={handleOnSubmit}
            >
              <div className="flex flex-col gap-1 w-3/5">
                <label className="font-semibold">Email</label>
                <input
                  placeholder="example12@gmail.com"
                  className=" py-1.5 px-4 w-full rounded-md border-slate-200"
                  name="email_id"
                  type="email"
                  value={form.email_id}
                  onChange={handleOnChange}
                />
              </div>
              <div className="flex flex-col gap-1 w-3/5">
                <label className="font-semibold">Password</label>
                <div className="relative">
                  <input
                    placeholder="*********"
                    className="py-1.5 px-4 w-full rounded-md pr-10 border-slate-200" // Add padding to the right to make space for the button
                    name="password"
                    type={visible ? "text" : "password"}
                    value={form.password}
                    onChange={handleOnChange}
                  />
                  <button
                    type="button"
                    onClick={handleShowPassword}
                    className=" absolute inset-y-0 right-0 flex items-center px-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none"
                  >
                    {visible ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              {loading === true ? (
                <div
                  className="m-12 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              ) : (
                <div className="flex flex-col gap-1 w-3/5">
                  <button
                    disabled={loading}
                    className="rounded-md p-2 text-white"
                    style={{ backgroundColor: "#1F75FE" }}
                    // bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500
                  >
                    LogIn
                  </button>
                </div>
              )}
            </form>
            <div className="flex flex-col gap-1 w-3/5">
              <button className="rounded-md p-2 border-2 border-indigo-400">
                Continue With Google
              </button>
            </div>
            <div>
              <span> Don't Have Account </span>
              <Link className="text-blue-600 underline" to={"/register"}>
                Register Here
              </Link>
            </div>
            {errorMessage && (
              <div className="mt-0">
                <div className=" mt-0 p-2 border-2 border-red-500 text-red-800">
                  {errorMessage}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
