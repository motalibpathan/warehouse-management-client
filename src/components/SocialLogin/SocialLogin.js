import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { getAccessToken } from "../../utilities/utilities";
import Loading from "../Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
  };

  useEffect(() => {
    if (user) {
      getAccessToken(user.user.email);
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  return (
    <div className="mt-2">
      {error && <p className="text-red-500 py-2">{error.message}</p>}
      <button
        onClick={() => handleGoogleSignIn()}
        className="w-full p-2 bg-white border-2 rounded flex justify-center items-center"
      >
        <img
          className="mr-2"
          width={30}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
          alt="google"
        />
        Sign in with google
      </button>
      {loading && <Loading />}
    </div>
  );
};

export default SocialLogin;
