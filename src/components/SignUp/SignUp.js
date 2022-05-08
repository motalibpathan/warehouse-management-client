import { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import SignUpImg from "../../images/car-register.jpg";
import { getAccessToken } from "../../utilities/utilities";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleLogin = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      getAccessToken(email);
    } else {
      toast.error("Password and confirm password does not matched");
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
          <img src={SignUpImg} alt="" />
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-4/5">
            <form onSubmit={handleLogin} className="w-full ">
              <h1 className="text-2xl font-bold my-3 text-center">
                Create an account
              </h1>
              <input
                className="w-full border-2 p-2 my-2 rounded"
                type="text"
                placeholder="Name"
                name="name"
                required
              />
              <input
                className="w-full border-2 p-2 my-2 rounded"
                type="email"
                placeholder="Email"
                name="email"
                required
              />
              <input
                className="w-full border-2 p-2 my-2 rounded"
                type="password"
                placeholder="Password"
                name="password"
                required
              />
              <input
                className="w-full border-2 p-2 my-2 rounded"
                type="password"
                placeholder="confirm Password"
                name="confirmPassword"
                required
              />
              <input
                className="w-full p-3 bg-red-500 text-white mt-3 rounded cursor-pointer"
                type="submit"
                value="Signup"
              />
            </form>
            {error && <p className="text-red-500 pt-3">{error.message}</p>}
            {updateError && (
              <p className="text-red-500 pt-3">{updateError.message}</p>
            )}
            <p className="pt-3">
              Already have account?{" "}
              <Link className="text-red-500 underline" to={"/login"}>
                Login
              </Link>{" "}
              instead.
            </p>
            <SocialLogin />
          </div>
        </div>
      </div>
      {(loading || updating) && <Loading />}{" "}
    </>
  );
};

export default SignUp;
