import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    if (!emailValue || !passwordValue) {
      setError("Please fill in both fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: emailValue,
          password: passwordValue,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      navigate("/Patient");
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleLogin}>
        <div className="justify-center px-6 text-left bg-white rounded-lg shadow-md py-14">
          <div className="flex justify-center mb-4 text-3xl text-blue-900 font-logo2 font-thin">
            medmaster
          </div>
          <div className="items-start mb-6 text-2xl font-semibold text-gray-800 align-left">
            Login
          </div>
          {error && <div className="mb-4 text-center text-red-500">{error}</div>}
          <div className="flex items-center justify-center">
            <label className="relative">
              <input
                type="text"
                placeholder="E-mail"
                className="h-[50px] w-96 px-6 text-xl text-gray-700 bg-white border-black border-[1px] rounded-[4px] border-opacity-50 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 placeholder-red-500 placeholder-opacity-0 transition duration-700"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(emailValue !== "")}
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                autoFocus
              />
              <span
                className={`absolute px-2 text-base transition-all duration-300 ${
                  emailFocus || emailValue !== ""
                    ? "text-xs text-blue-800 -top-2 left-2 bg-white"
                    : "text-gray-500 top-3 text-xl left-6 bg-transparent"
                }`}
              >
                Email address
              </span>
            </label>
          </div>
          <br />
          <div className="flex items-center justify-center">
            <label className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="h-[50px] w-96 px-6 text-xl text-gray-700 bg-white border-black border-[1px] rounded-[4px] border-opacity-50 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 placeholder-red-500 placeholder-opacity-0 transition duration-700"
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(passwordValue !== "")}
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
              />
              <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'} icon-password`}
                onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                style={{ cursor: 'pointer', marginLeft: '-25px' }}
              ></i>
              <span
                className={`absolute px-2 text-base transition-all duration-300 ${
                  passwordFocus || passwordValue !== ""
                    ? "text-xs text-blue-800 -top-2 left-2 bg-white"
                    : "text-gray-500 top-3 text-xl left-6 bg-transparent"
                }`}
              >
                Password
              </span>
            </label>
          </div>
          <br />
          <div className="flex justify-between">
          <button
  type="submit"
  className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
  style={{ background: 'linear-gradient(90deg, #007bff, #010f1f)' }}
  disabled={loading}
>
  {loading ? "Signing in..." : "SIGN IN"}
</button>

          </div>
          <div className="mt-4 text-center">
            <div className="inline-block text-sm font-bold text-black align-baseline hover:text-blue-700">
              Don't have an account?{" "}
              <span className="font-semibold text-blue-500">
                <a href="/register">Create an account</a>
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
