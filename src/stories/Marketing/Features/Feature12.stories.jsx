import { RiTeamFill } from "react-icons/ri";
import { BsFillPlayFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
export const Feature12 = () => {
  return (
    <>
      <div className="bg-gray-300  dark dark:bg-black dark:text-white py-10">
        <div className="grid lg:grid-cols-2">
          <div className="px-14 py-14 md:px-20 md:py-10">
            <div className="rounded-md w-auto bg-white px-6 md:px-10 py-3">
              <div className="py-3">
                <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
                  Help us change
                  <br className="hidden md:inline" /> how teams
                  <br className="hidden md:inline" /> communicate
                </h1>
              </div>
              <div className="py-3">
                <h3 className="py-6 leading-6 lg:text-lg">
                  You can even sync designs from{" "}
                  <br className="hidden md:inline" /> your cloud storage!
                </h3>
              </div>
              <div className="py-3">
                <hr />
              </div>
              <div className="py-4 md:flex text-left">
                <div className="flex justify-start">
                  <div className="h-14  w-14 rounded-full bg-gray-100 md:mr-10">
                    <div className="mx-4 py-4">
                      <MdEmail className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <h1 className="text-1xl font-semibold lg:text-2xl lg:font-bold">
                    Email Marketing
                  </h1>
                  <p>
                    You can even sync designs
                    <br className="hidden md:inline" /> from{" "}
                    <br className="md:hidden" /> your cloud storage!
                  </p>
                </div>
              </div>
              <div className="py-4 text-left md:flex">
                <div className="flex justify-start">
                  <div className="h-14  w-14 rounded-full bg-gray-100 md:mr-10">
                    <div className="mx-4 py-4">
                      <RiTeamFill className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <div className="">
                  <h1 className="text-1xl font-semibold lg:text-2xl lg:font-bold">
                    Team Accounts
                  </h1>
                  <p>
                    You can even sync designs
                    <br className="hidden md:inline" /> from{" "}
                    <br className="md:hidden" /> your cloud storage!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto my-auto">
              <div className="h-14 w-14 bg-blue-500 rounded-full px-3 py-3">
                  <BsFillPlayFill className="h-8 w-8 text-white"/>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default {
  title: "Marketing/Features/Feature 12",
  component: Feature12,
};
