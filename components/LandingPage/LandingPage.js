import { useState } from "react";
import MedicalShops from "./MedicalShops";
import Clinics from "./Clinics";
import LeftOverlayContent from "./LeftOverlayContent";
import RightOverlayContent from "./RightOverlayContent";

const LandingPage = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const overlayBg =
    "bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900";

  return (
    <div className="h-screen w-screen bg-white from relative overflow-x-clip">
      <div
        id="signin"
        className={`bg-white absolute top-0 left-0 h-full w-full flex-col mt-20 sm:w-1/2 sm:mt-0 sm:overflow-clip flex justify-center items-center transition-all duration-700 ease-in-out z-20 ${
          isAnimated ? "translate-x-full opacity-0" : ""
        }`}
      >
        <MedicalShops />
        <h5 className="text-xl visible sm:invisible hover:text-purple-800 underline" onClick={() =>setIsAnimated(!isAnimated)}>Looking for medical clinics instead?</h5>
      </div>

      <div
        id="signup"
        className={`absolute top-0 left-0 h-full w-full flex-col mt-20 sm:w-1/2 sm:mt-0 sm:overflow-clip flex justify-center items-center transition-all duration-700 ease-in-out ${
          isAnimated
            ? "sm:translate-x-full sm:opacity-100 sm:z-50 sm:animate-show"
            : "opacity-0 z-10"
        }`}
      >
        <div className="h-full w-full flex flex-col justify-center items-center">
          <Clinics />
          <h5 className="text-xl visible sm:invisible hover:text-purple-800 underline" onClick={() =>setIsAnimated(!isAnimated)}>Looking for medical shops instead?</h5>
        </div>
      </div>

      <div
        id="overlay-container"
        className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 ease-in-out z-100 ${
          isAnimated ? "-translate-x-full" : ""
        }`}
      >
        <div
          id="overlay"
          style={{ backgroundImage: `url(${ isAnimated ? 'ClinicsBanner.gif' : 'PharmacyBanner.gif'})`, backgroundSize: 'cover' }}
          className={`relative -left-full h-full w-[200%] hidden sm:block transform transition-transform duration-700 ease-in-out ${
            isAnimated ? "translate-x-1/2" : "translate-x-0"
          }`}
        >
          <div
            id="overlay-left"
            className={`w-1/2 h-full absolute flex justify-center items-center top-0 transform -translate-x-[20%] transition-transform duration-700 ease-in-out ${
              isAnimated ? "translate-x-0" : "-translate-x-[20%]"
            }`}
          >
            <LeftOverlayContent
              isAnimated={isAnimated}
              setIsAnimated={setIsAnimated}
            />
          </div>
          <div
            id="overlay-right"
            className={`w-1/2 h-full absolute flex justify-center items-center top-0 right-0 transform transition-transform duration-700 ease-in-out ${
              isAnimated ? "translate-x-[20%]" : "translate-x-0"
            }`}
          >
            <RightOverlayContent
              isAnimated={isAnimated}
              setIsAnimated={setIsAnimated}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
