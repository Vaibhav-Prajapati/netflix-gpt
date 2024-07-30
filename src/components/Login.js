import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    console.log("message", message);
    setErrorMessage(message);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="netflix-img"
        />
      </div>
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="bg-black px-12 py-1 absolute w-3/12 my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="my-3 p-3 w-full bg-gray-800"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="my-3 p-3 w-full bg-gray-800"
          ref={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="my-3 p-3 w-full bg-gray-800"
          ref={password}
        />
        <p className="text-red-500 font-bold py-1"> {errorMessage}</p>
        <button
          className="my-3 p-2 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={handleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registed. Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
