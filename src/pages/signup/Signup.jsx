/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { imageUpload } from "../../utils/utils";
import useAuth from "../../hooks/useAuth";
import { getToken, saveUser } from "../../api/Auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";

const Signup = () => {
  const { createUser, signInWithGoogle, updateUserProfile, loading } =
    useAuth();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  //form submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0]; //can't send image like this to imgbb

    try {
      //need to make a formData instance that means with a form system : see utils.js
      //1. upload image
      const imageData = await imageUpload(image);
      console.log(imageData);
      //2. creating user
      const result = await createUser(email, password);

      //3. save username and profile photo
      await updateUserProfile(name, imageData?.data?.display_url);
      console.log(imageData?.data?.display_url);
      //4. save userdata in database
      const dbResponse = await saveUser(result?.user);
      console.log(dbResponse);

      //result.user.email
      // console.log(result);

      //5. get token
      await getToken(result?.user?.email);
      //give a toast message
      toast.success("user account created succesfully!");
      navigate("/");
    } catch (error) {
      toast.error("Error during signup:", error);
      setError(error.message || "An error occurred during signup.");
    }
  };

  //handle google sign up
  const handleGoogleSignUp = async () => {
    try {
      //1. creating user using google
      const result = await signInWithGoogle();

      //2. save userdata in database
      const dbResponse = await saveUser(result?.user);
      console.log(dbResponse);
      //3. get token
      await getToken(result?.user?.email);
      //give a toast message
      toast.success("user account created succesfully!");
      navigate("/");
    } catch (error) {
      toast.error("Error during signup:", error);
      setError(error.message || "An error occurred during signup.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-10 bg-gray-800">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to Urban Estate</p>
        </div>
        <form
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-purple-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-purple-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-purple-500 bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-purple-900 hover:bg-purple-800 w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer" onClick={handleGoogleSignUp}>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-purple-900 text-gray-600 font-semibold"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Signup;
