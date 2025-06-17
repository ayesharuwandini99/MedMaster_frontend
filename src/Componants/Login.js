import { useState } from "react";
import { useNavigate , Link} from "react-router-dom";

function Login() {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

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

      navigate("/");

      console.log("Login successful:", data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 font-Inter">
        <div className="justify-center px-6 text-left bg-white rounded-lg shadow-md py-14">
          <div className="flex justify-center text-3xl font-bold text-blue-900 font-font2">
           MedMaster
          </div>
          <br />
          <div className="justify-center mb-6 text-2xl font-semibold text-gray-700 font-font1">
            Login
          </div>
          {error && (
            <div className="mb-4 text-center text-red-500">{error}</div>
          )}
          <div className="flex items-center justify-center">
            <label className="relative">
              <input
                type="text"
                className="h-[55px] w-[400px] px-4 text-md text-gray-700 bg-white border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(emailValue !== "")}
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
              <span
                className={`absolute px-2 text-base transition-all duration-300 font-font2 ${
                  emailFocus || emailValue !== ""
                    ? "text-xs text-gray-900 -top-2 left-2 bg-white"
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
                type="password"
                className="h-[55px] w-[400px] px-4 text-md text-gray-700 bg-white border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(passwordValue !== "")}
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
              />
              <span
                className={`absolute px-2 text-base transition-all duration-300 font-font2 ${
                  passwordFocus || passwordValue !== ""
                    ? "text-xs text-gray-900 -top-2 left-2 bg-white"
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
              className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded focus:outline-none focus:shadow-outline"
            >
              SIGN IN
            </button>
          </div>
          <div className="mt-4 text-center">
            <div className="inline-block text-sm font-bold text-black align-baseline hover:text-blue-700">
              Don't have an account?{" "}
              <span className="font-semibold text-blue-500">
              <Link to="/Register" className="text-red-500 hover:underline">
            Sign up
          </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
