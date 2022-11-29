import Link from "next/link";
import { useState } from "react";

const Clinics = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="selection:bg-indigo-500 selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-0">
              <h1 className="text-5xl font-bold text-indigo-600">
                Find nearby Clinic
              </h1>

              <form className="mt-12" action="" method="POST">
                <div className="relative">
                Providing the closest and affordable clinics to our students because their health is our priority, Also use our maps to locate these clinics . 
                </div>
                
                <Link
                href={"/Clinics"}>
                <button
                  type="submit"
                  className="mt-20 px-8 py-4 uppercase rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-80 cursor-pointer"
                >
                  Check it out
                </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinics;
