/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import { motion as m } from "framer-motion";
import ReactConfetti from "react-confetti";

export default function success() {
  const router = useRouter();

  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen flex items-center justify-center"
    >
      <div className="bg-white  rounded-lg w-1/2 font-latoRegular p-16 text-gray-700">
        <h1 className="text-3xl pb-4 fot-latoBold">
          Thanks for submitting the form 🌟{router.query.name}
        </h1>
        <p className="text-lg text-gray-500">
          We have sent you an Email at {router.query.email}. We will get back to
          you as soon as we can!
        </p>
      </div>
      <ReactConfetti />
    </m.main>
  );
}
