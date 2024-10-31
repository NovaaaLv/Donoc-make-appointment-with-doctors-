import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.prefentDefault();
  };

  return (
    <form className="min-h-[80vh] flex items-center ">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">{state === "Sign Up" ? "Create Account" : "Login"}</p>
        <p>please {state === "Sign Up" ? "Sign Up" : "Login"} to book appointment</p>

        {state === "Sign Up" && (
          <div className="w-full">
            <p className="capitalize">full name</p>
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => setName(e.target.name)}
              value={name}
              required
              className="w-full border border-zinc-300 rounded mt-1 p-2"
            />
          </div>
        )}
        <div className="w-full">
          <p className="capitalize">email</p>
          <input
            type="email"
            name=""
            id=""
            onChange={(e) => setEmail(e.target.email)}
            value={email}
            required
            className="w-full border border-zinc-300 rounded mt-1 p-2"
          />
        </div>
        <div className="w-full">
          <p className="capitalize">password</p>
          <input
            type="password"
            name=""
            id=""
            onChange={(e) => setName(e.target.name)}
            value={name}
            required
            className="w-full border border-zinc-300 rounded mt-1 p-2"
          />
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-md text-base hover:bg-indigo-800">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p className="capitalize">
            alredy have account ?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-primary underline cursor-pointer "
            >
              {" "}
              login here
            </span>
          </p>
        ) : (
          <p className="capitalize">
            create a new account ?
            <span
              onClick={() => setState("Sign Up")}
              className="text-primary underline cursor-pointer "
            >
              {" "}
              click here{" "}
            </span>{" "}
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
