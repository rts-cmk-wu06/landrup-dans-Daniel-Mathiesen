import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = ({ setToken }) => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [badLogin, setBadLogin] = useState(false);

  let navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    setIsLoggingIn(true);
    setBadLogin(false);
    const form = e.target;
    const username = form[0].value;
    const password = form[1].value;

    // console.log(username + ' ' + password);

    axios
      .post("http://localhost:4000/auth/token", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          setToken(response.data.token);
          axios
            .get("http://localhost:4000/api/v1/users/5", {
              headers: { Authorization: `Bearer ${response.data.token}` },
            })
            .then((response) => {
              if (response.status === 200) {
                setIsLoggingIn(false);
                navigate("/activities");
              }
            });
        }
      })
      .catch((error) => {
        setIsLoggingIn(false);
        setBadLogin(true);
      });
  }

  return (
    <div className="w-screen h-screen bg-welcome-splash bg-no-repeat bg-cover bg-center flex items-center justify-center">
      <div className="w-[750px] h-[480px] absolute bg-landrupPurple opacity-50 -left-40 top-48 -rotate-[27deg]" />
      <div className="login_wrapper flex flex-col items-center z-10 py-10 min-w-[295.15px]">
        <div className="input_wrapper pb-8 px-10">
          <h1 className="text-white text-4xl pb-2">Log ind</h1>
          <form className="" action="" onSubmit={handleLogin}>
            <input
              className="outline-none p-2 mb-2 w-full"
              type="text"
              placeholder="brugernavn"
            />
            <input
              className="outline-none p-2 w-full"
              type="password"
              placeholder="adgangskode"
            />
            {badLogin && (
              <p className="text-center text-white py-4">
                Brugernavn eller adgangskode er forkert
              </p>
            )}
            <div className="w-full flex justify-center">
              <button className="bg-landrupPurple text-white py-4 mt-4 px-20 rounded-xl">
                {!isLoggingIn ? "Log ind" : "Logger ind"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
