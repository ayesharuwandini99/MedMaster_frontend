import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate for programmatic navigation

const RegistrationForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [firstNameFocus, setFirstNameFocus] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("The passwords do not match");
    } else {
      setError("");
      try {
        const response = await fetch(
          "http://localhost:5000/api/users/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName: formData.firstName,
              lastName: formData.lastName,
              userId: formData.email,
              phoneNumber: formData.phone,
              password: formData.password,
            }),
          }
        );

        if (response.ok) {
          navigate("/login");
        } else {
          const errorData = await response.json();
          setError(
            errorData.message || "Registration failed, please try again."
          );
        }
      } catch (err) {
        setError("An error occurred while registering, please try again.");
        console.error(err);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg font-Inter"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center mb-4">medmaster </div>
        <h2 className="items-start mb-6 text-2xl font-semibold text-gray-800 align-left">
          Register
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="relative">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              onFocus={() => setFirstNameFocus(true)}
              onBlur={() => setFirstNameFocus(formData.firstName !== "")}
              className="h-[50px] w-full px-4 text-md text-gray-500 bg-white border-gray-300 border-[1px] rounded-[4px] outline-none focus:border-[#da3772] placeholder-opacity-0 transition duration-700"
            />
            <span
              className={`absolute px-2 text-base transition-all duration-300 ${
                firstNameFocus || formData.firstName !== ""
                  ? "text-xs text-gray-900 -top-2 left-2 bg-white"
                  : "text-gray-500 top-3 left-6 bg-transparent"
              }`}
            >
              First Name *
            </span>
          </label>

          <label className="relative">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              onFocus={() => setLastNameFocus(true)}
              onBlur={() => setLastNameFocus(formData.lastName !== "")}
              className="h-[50px] w-full px-4 text-md text-gray-500 bg-white border-gray-300 border-[1px] rounded-[4px] outline-none focus:border-[#da3772] placeholder-opacity-0 transition duration-700"
            />
            <span
              className={`absolute px-2 text-base transition-all duration-300 ${
                lastNameFocus || formData.lastName !== ""
                  ? "text-xs text-gray-900 -top-2 left-2 bg-white"
                  : "text-gray-500 top-3 left-6 bg-transparent"
              }`}
            >
              Last Name *
            </span>
          </label>

          <label className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(formData.email !== "")}
              className="h-[50px] w-full px-4 text-md text-gray-500 bg-white border-gray-300 border-[1px] rounded-[4px] outline-none focus:border-[#da3772] placeholder-opacity-0 transition duration-700"
            />
            <span
              className={`absolute px-2 text-base transition-all duration-300 ${
                emailFocus || formData.email !== ""
                  ? "text-xs text-gray-900 -top-2 left-2 bg-white"
                  : "text-gray-500 top-3 left-6 bg-transparent"
              }`}
            >
              Email *
            </span>
          </label>

          <label className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              onFocus={() => setPhoneFocus(true)}
              onBlur={() => setPhoneFocus(formData.phone !== "")}
              className="h-[50px] w-full px-4 text-md text-gray-500 bg-white border-gray-300 border-[1px] rounded-[4px] outline-none focus:border-[#da3772] placeholder-opacity-0 transition duration-700"
            />
            <span
              className={`absolute px-2 text-base transition-all duration-300 ${
                phoneFocus || formData.phone !== ""
                  ? "text-xs text-gray-900 -top-2 left-2 bg-white"
                  : "text-gray-500 top-3 left-6 bg-transparent"
              }`}
            >
              Phone *
            </span>
          </label>

          <label className="relative">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(formData.password !== "")}
              className="h-[50px] w-full px-4 text-md text-gray-500 bg-white border-gray-300 border-[1px] rounded-[4px] outline-none focus:border-[#da3772] placeholder-opacity-0 transition duration-700"
            />
            <span
              className={`absolute px-2 text-base transition-all duration-300 ${
                passwordFocus || formData.password !== ""
                  ? "text-xs text-gray-900 -top-2 left-2 bg-white"
                  : "text-gray-500 top-3 left-6 bg-transparent"
              }`}
            >
              Password *
            </span>
          </label>

          <label className="relative">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              onFocus={() => setConfirmPasswordFocus(true)}
              onBlur={() =>
                setConfirmPasswordFocus(formData.confirmPassword !== "")
              }
              className="h-[50px] w-full px-4 text-md text-gray-500 bg-white border-gray-300 border-[1px] rounded-[4px] outline-none focus:border-[#da3772] placeholder-opacity-0 transition duration-700"
            />
            <span
              className={`absolute px-2 text-base transition-all duration-300 ${
                confirmPasswordFocus || formData.confirmPassword !== ""
                  ? "text-xs text-gray-900 -top-2 left-2 bg-white"
                  : "text-gray-500 top-3 left-6 bg-transparent"
              }`}
            >
              Confirm Password *
            </span>
            {error && (
              <p className="text-xs font-semibold text-left text-red-500">
                {error}
              </p>
            )}
          </label>
        </div>
        <button
          type="submit"
          className="p-3 mt-6 text-white transition duration-300 bg-[#da3772] rounded-lg hover:bg-pink-600"
        >
          Create Account
        </button>
        <p className="items-center justify-center p-5 text-sm font-semibold text-center text-bold">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
