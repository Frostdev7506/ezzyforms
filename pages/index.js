import Head from "next/head";
import Image from "next/image";
import formImage from "../public/form.png";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex items-center justify-center">
        <form className="bg-white flex rounded-lg w-1/2 font-latoRegular">
          {/* form div */}
          <div className="flex-1 text-gray-700 p-20">
            <h1 className=" text-3xl pb-2 font-latoBold ">Hi there ! 😉</h1>
            <p className="text-lg text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sodales semper urna, ac eleifend justo vehicula eu.
            </p>
            {/* Forms div */}
            <div className="mt-6 ">
              {/* Name input field */}
              <div className="pb-4">
                <label
                  className="block font-latoBold text-sm pb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-700 focus:ring-teal-700"
                  autoComplete="off"
                  placeholder="Enter Your Name"
                />
              </div>
              {/*  Email field */}
              <div className="pb-4">
                <label
                  className="block font-latoBold text-sm pb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-700 focus:ring-teal-700"
                  autoComplete="off"
                  placeholder="Enter Your Email"
                />
              </div>

              {/* Country  field */}
              <div className="pb-4">
                <label
                  className="block font-latoBold text-sm pb-2"
                  htmlFor="country"
                >
                  Email
                </label>
                <select
                  name="country"
                  className="border-2
                  border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-700
                  focus:ring-teal-700"
                  autoComplete="off"
                >
                  <option>United States</option>
                  <option>India</option>
                  <option>UK</option>
                  <option>France</option>
                  <option>Italy</option>
                  <option>Germany</option>
                  <option>Spain</option>
                  <option>Hungary</option>
                  <option>Nepal</option>
                  <option>Kyrat</option>
                  <option>Mexico</option>
                </select>
              </div>

              {/* Terms of Service */}
              <div className="pb-4">
                <label
                  className="block font-latoBold text-sm pb-2"
                  htmlFor="terms"
                >
                  Terms Of Service
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    value="checked"
                    className="w-5 h-5 text-teal-700 border-2 focus:border-teal-700
                  focus:ring-teal-700"
                  />
                  <p className="text-sm font-latoBold text-gray-500">
                    I agree to the Terms and Service that my data will be taken
                    and sold to the highest bidded
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
              >
                Start today!
              </button>
            </div>
          </div>
          <div className=" relative flex-1 ">
            <Image src={formImage} fill className="object-cover rounded-lg" />
          </div>
        </form>
      </main>
    </div>
  );
}
