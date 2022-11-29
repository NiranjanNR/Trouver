import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const MedicalShops = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="selection:bg-indigo-500 selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-0">
              <h1 className="text-5xl font-bold text-indigo-800">
                Find nearby Medical shops
              </h1>

              <div className="mt-12 flex flex-col justify-center items-center gap-2" action="" method="POST">
                <div className="relative">
                Finding the nearest medical shops for our students to cater their pharmaceutical needs, Also use our maps to locate these medical shops.
                </div>

                <Link
                  href={"/Pharmacy"}
                >
                  <div className="mt-20 px-8 py-4 uppercase rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-80 cursor-pointer">
                    Check it out
                  </div>
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalShops;
