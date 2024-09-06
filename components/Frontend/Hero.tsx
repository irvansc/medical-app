import SearchBar from "@/components/Frontend/SearchBar";
import TransitionalText from "@/components/Frontend/TransitionalText";
import { PillIcon } from "lucide-react";

const Hero = () => {
  const TEXTS = [
    "Acupuncture",
    "Massage",
    "Chiropractic",
    "Dental",
    "Therapy",
    "Rehabilitation",
    "Cosmetic",
    "Dietitian",
    "Speech Therapy",
    "Physical Therapy",
    "Occupational Therapy",
  ];
  return (
    <div className="bg-white mt-[160px]">
      <div className="relative  pb-[110px] pt-[50px] dark:bg-dark lg:pt-[50px] max-w-6xl mx-auto">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-6/12">
              <div className="hero-content">
                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-gray-800 dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl flex flex-wrap items-center gap-3">
                  <span>Book Your</span>
                  <span>
                    <TransitionalText
                      TEXTS={TEXTS}
                      className="text-blue-500 "
                    />
                  </span>
                  <span>Session Now</span>
                </h1>
                <p className="mb-8 max-w-[480px] text-base text-gray-800 dark:text-gray-800">
                  Health is a state of complete physical, mental, and social
                  well-being, not merely the absence of disease or infirmity.
                </p>
                {/* Search bar */}
                <SearchBar />
                {/* CTA BUTTON */}
                <ul className="flex flex-wrap items-center mt-6">
                  <li>
                    <a
                      href="/#"
                      className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-700 lg:px-7"
                    >
                      Need Doctor Urgently?
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-gray-800 hover:text-blue-500 dark:text-white"
                    >
                      <span className="mr-2">
                        <PillIcon className="flex-shrink-0 h-5 w-5 text-blue-500" />
                      </span>
                      Need a Refill
                    </a>
                  </li>
                </ul>
                <div className="py-4 flex gap-4 pt-8">
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-gray-800">100+</span>
                    <span className="text-sm text-gray-500">
                      Active Specialies
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-gray-800">1800+</span>
                    <span className="text-sm text-gray-500">
                      Active Patients
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-gray-800">60+</span>
                    <span className="text-sm text-gray-500">
                      Active Doctors
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-5/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                    alt="hero"
                    className="max-w-full lg:ml-auto"
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
