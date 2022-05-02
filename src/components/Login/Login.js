import React, { useEffect, useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import LoginImg from "../../images/car-login.jpg";
import Loading from "../Loading/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Sent email");
    } else {
      toast.warn("please enter your email address");
    }
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  return (
    <>
      <div className="md:container mx-auto md:flex items-center my-7 md:min-h-[500px] min-h-[400px] p-5">
        <div className="w-1/2 md:block hidden">
          <img src={LoginImg} alt="" />
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div>
            <form onSubmit={handleLogin} className="w-full ">
              <h1 className="text-2xl font-bold my-3 text-center">
                Please Login
              </h1>
              <input
                className="w-full border-2 p-2 my-2 rounded"
                type="email"
                ref={emailRef}
                placeholder="Email"
                name="email"
                required
              />
              <input
                className="w-full border-2 p-2 my-2 rounded"
                type="password"
                ref={passwordRef}
                placeholder="Password"
                required
              />
              <input
                className="w-full p-3 bg-red-500 text-white mt-3 rounded cursor-pointer"
                type="submit"
                value="Login"
              />
            </form>
            {error && <p className="text-red-500 pt-3">{error.message}</p>}
            <p className="pt-3">
              Forgot password?{" "}
              <button
                disabled={sending}
                className="text-red-500 underline"
                onClick={handleResetPassword}
              >
                Reset Password
              </button>
            </p>
            <p className="pt-3">
              New to Carmax?{" "}
              <Link className="text-red-500 underline" to={"/signup"}>
                Sign up
              </Link>{" "}
              instead.
            </p>
          </div>
        </div>
      </div>
      {(loading || sending) && <Loading />}{" "}
    </>
  );
};

export default Login;
