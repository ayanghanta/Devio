import Link from "next/link";
import LoginForm from "../_components/ui/LoginForm";
function page() {
  return (
    <div className="mx-auto mt-20 max-w-4xl">
      <h1 className="mb-16 text-center font-header text-xl font-semibold text-gray-700">
        Admins Only: Please Enter Credentials to Continue
      </h1>
      <div>
        <div className="mx-auto flex w-3/4 flex-col gap-6">
          <LoginForm />
          <form>
            <button className="flex gap-3 bg-gray-100 px-6 py-3 rounded-md justify-center hover:bg-gray-200 transition duration-300 w-full">
              <p>Sign in with Google</p>
              <img
                src="https://authjs.dev/img/providers/google.svg"
                alt="google image for sign in"
                className="w-6 sm:8"
              />
            </button>
          </form>
          <p className="cursor-pointer text-right text-sm text-gray-500 hover:text-gray-600 hover:underline">
            <Link href="/forgotpassword">Forgot password ?</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
