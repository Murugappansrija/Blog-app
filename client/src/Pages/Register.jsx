import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    email_id: "",
    user_name: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleOnchange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value.trim() });
  };
  const errorMessages = (message, sec) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, sec);
  };
  const navigate = useNavigate();
  const handleOnsubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:4000/user/create";

    if (!form.email_id || !form.user_name || !form.password) {
      errorMessages("Please Fill  Field", 3000);
    }

    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (data.statusCode === 200) {
        setSuccessMessage("User Created Successfully");
        setTimeout(() => {
          setSuccessMessage(null);
        }, 1500);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
      if (data.statusCode === 409) {
        errorMessages("Email ID  Exists", 2000);
      }
      if (data.statusCode === 500) {
        errorMessages("Something Wrong", 3000);
      }
      setLoading(false);
    } catch (error) {
      errorMessages(error.message, 3000);
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <div className="h-dvh flex justify-center items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500">
        <div className="container w-4/12 h-5/6 bg-slate-50 rounded-lg">
          <div className="flex gap-3 flex-col items-center">
            <h6 className="mt-4 mb-4 font-bold text-xl">Register</h6>
            <form
              className="flex gap-4 flex-col w-full items-center"
              onSubmit={handleOnsubmit}
            >
              <div className="flex flex-col gap-1 w-3/5">
                <label className="font-semibold">User Name</label>
                <input
                  placeholder="John Doe"
                  className="bg-gray-200 py-1.5 px-4 rounded-xl"
                  name="user_name"
                  value={form.user_name}
                  type="text"
                  onChange={handleOnchange}
                />
              </div>
              <div className="flex flex-col gap-1 w-3/5">
                <label className="font-semibold">Email</label>
                <input
                  placeholder="example12@gmail.com"
                  className="bg-gray-200 py-1.5 px-4 w-full rounded-xl"
                  name="email_id"
                  type="email"
                  value={form.email_id}
                  onChange={handleOnchange}
                />
              </div>
              <div className="flex flex-col gap-1 w-3/5">
                <label className="font-semibold">Password</label>
                <input
                  placeholder="*********"
                  className="bg-gray-200 py-1.5 px-4 w-full rounded-xl"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleOnchange}
                />
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
                    className="rounded-xl p-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500"
                  >
                    Register
                  </button>
                </div>
              )}
            </form>
            <div className="flex flex-col gap-1 w-3/5">
              <button className="rounded-xl p-2 border-2 border-indigo-400">
                Continue With Google
              </button>
            </div>
            <div>
              <span>Have Account </span>
              <Link className="text-blue-600 underline" to={"/login"}>
                login Here
              </Link>
            </div>
            {errorMessage && (
              <div>
                <div className="p-3 border-2 border-red-500 text-red-800">
                  {errorMessage}
                </div>
              </div>
            )}
            {successMessage && (
              <div>
                <div className="p-3 border-2 bg-green-500">
                  {successMessage}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
