import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [error, setError] = useState("");
  const [firstNameFocus, setFirstNameFocus] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
  const [roleFocus, setRoleFocus] = useState(false);

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
              role: formData.role,
            }),
          }
        );

        if (response.ok) {
          // Navigate based on role
          switch (formData.role) {
            case "Doctor":
              navigate("/Doctor");
              break;
            case "Patient":
              navigate("/Patients");
              break;
            case "Pharmacist":
              navigate("/Pharme");
              break;
            default:
              navigate("/login");
          }
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      <form
        className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-2xl font-Inter"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center mb-4 text-3xl font-thin text-blue-900 font-logo2">
          MedMaster
        </div>
        <h2 className="items-start mb-6 text-2xl font-semibold text-gray-800 align-left">
          Create Your Account
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <label className="relative">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              onFocus={() => setFirstNameFocus(true)}
              onBlur={() => setFirstNameFocus(formData.firstName !== "")}
              className="h-[50px] w-full px-4 text-md text-gray-700 bg-white border border-gray-300 rounded-lg outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-400"
            />
            <span
              className={`absolute px-2 text-sm font-semibold transition-all duration-800 ${
                firstNameFocus || formData.firstName !== ""
                  ? "text-xs text-pink-500 -top-2 left-3 bg-white"
                  : "text-gray-500 top-3 left-4"
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
              className="h-[50px] w-full px-4 text-md text-gray-700 bg-white border border-gray-300 rounded-lg outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-400"
            />
            <span
              className={`absolute px-2 text-sm font-semibold transition-all duration-300 ${
                lastNameFocus || formData.lastName !== ""
                  ? "text-xs text-pink-500 -top-2 left-3 bg-white"
                  : "text-gray-500 top-3 left-4"
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
              className="h-[50px] w-full px-4 text-md text-gray-700 bg-white border border-gray-300 rounded-lg outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-400"
            />
            <span
              className={`absolute px-2 text-sm font-semibold transition-all duration-300 ${
                emailFocus || formData.email !== ""
                  ? "text-xs text-pink-500 -top-2 left-3 bg-white"
                  : "text-gray-500 top-3 left-4"
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
              className="h-[50px] w-full px-4 text-md text-gray-700 bg-white border border-gray-300 rounded-lg outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-400"
            />
            <span
              className={`absolute px-2 text-sm font-semibold transition-all duration-300 ${
                phoneFocus || formData.phone !== ""
                  ? "text-xs text-pink-500 -top-2 left-3 bg-white"
                  : "text-gray-500 top-3 left-4"
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
              className="h-[50px] w-full px-4 text-md text-gray-700 bg-white border border-gray-300 rounded-lg outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-400"
            />
            <span
              className={`absolute px-2 text-sm font-semibold transition-all duration-300 ${
                passwordFocus || formData.password !== ""
                  ? "text-xs text-pink-500 -top-2 left-3 bg-white"
                  : "text-gray-500 top-3 left-4"
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
              className="h-[50px] w-full px-4 text-md text-gray-700 bg-white border border-gray-300 rounded-lg outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-400"
            />
            <span
              className={`absolute px-2 text-sm font-semibold transition-all duration-300 ${
                confirmPasswordFocus || formData.confirmPassword !== ""
                  ? "text-xs text-pink-500 -top-2 left-3 bg-white"
                  : "text-gray-500 top-3 left-4"
              }`}
            >
              Confirm Password *
            </span>
          </label>

          <label className="relative">
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              onFocus={() => setRoleFocus(true)}
              onBlur={() => setRoleFocus(formData.role !== "")}
              className="h-[50px] w-full px-4 text-md text-gray-700 bg-white border border-gray-300 rounded-lg outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-400"
            >
              <option value="">Select Role</option>
              <option value="Doctor">Doctor</option>
              <option value="Patient">Patient</option>
              <option value="Pharmacist">Pharmacist</option>
            </select>
            <span
              className={`absolute px-2 text-sm font-semibold transition-all duration-300 ${
                roleFocus || formData.role !== ""
                  ? "text-xs text-pink-500 -top-2 left-3 bg-white"
                  : "text-gray-500 top-3 left-4"
              }`}
            >
              Role *
            </span>
          </label>

          {error && (
            <div className="mt-2 text-xs font-semibold text-left text-red-500">
              {error}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-6 text-lg font-semibold text-white transition duration-300 bg-pink-500 rounded-lg shadow-md hover:bg-pink-600 hover:shadow-lg"
        >
          Create Account
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
