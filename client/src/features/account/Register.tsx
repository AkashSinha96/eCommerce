import { useForm } from "react-hook-form";
import agent from "../../app/api/agent";

export default function Register() {
  return (
    <div className="flex h-screen justify-center items-center w-1/3 mx-auto">
      <div className=" flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-primary rounded-md ">
        <div className="font-extrabold mx-auto text-2xl text-primary-content">
          Create your free Account
        </div>
        <div className="mt-10 ">
          <div>
            <label className="block font-semibold text-md leading-6 text-primary-content">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-netural-content shadow-sm ring-1 ring-inset ring-primary-focus placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="mt-5">
            <div>
              <label className="block font-semibold text-md leading-6 text-primary-content">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-netural-content shadow-sm ring-1 ring-inset ring-primary-focus placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div>
              <label className="block font-semibold text-md leading-6 text-primary-content">
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-netural-content shadow-sm ring-1 ring-inset ring-primary-focus placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 btn btn-netural normal-case text-lg w-20 hover">
          Submit
        </div>
      </div>
    </div>
  );
}
