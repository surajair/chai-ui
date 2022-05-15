import { SectionWrapper } from "../../components/SectionWrapper";
import { MdEmail, MdShoppingBasket } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { HiPuzzle } from "react-icons/hi";
export const Feature10 = () => {
  return (
    <>
      <SectionWrapper>
        <div className="md:px-12">
          <div className="md:text-center ">
            <h1 className="text-2xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
              Email marketing software
              <br className="lg:hidden" /> built{" "}
              <br className="hidden lg:inline" />
              for bloggers like you
            </h1>
          </div>
          <div className="grid py-5 lg:grid-cols-3">
            <div className=" py-4 md:text-center">
              <div className="flex py-3 md:justify-center">
                <div className="h-14  w-14 rounded-full bg-gray-100">
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
                  Create screens directly in Method or add{" "}
                  <br className="hidden lg:inline" /> your images from Sketch or
                  Figma. You <br className="hidden lg:inline" /> can even sync
                  designs
                </p>
              </div>
            </div>
            <div className="py-4 md:text-center">
              <div className="flex py-3 md:justify-center">
                <div className="h-14  w-14 rounded-full bg-gray-100">
                  <div className="mx-4 py-4">
                    <HiPuzzle className="h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="">
                <h1 className="text-1xl font-semibold lg:text-2xl lg:font-bold">
                  API Reference
                </h1>
                <p>
                  Create screens directly in Method or add{" "}
                  <br className="hidden lg:inline" /> your images from Sketch or
                  Figma. You <br className="hidden lg:inline" /> can even sync
                  designs
                </p>
              </div>
            </div>
            <div className="py-4 md:text-center">
              <div className="flex py-3 md:justify-center">
                <div className="h-14  w-14 rounded-full bg-gray-100">
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
                  Create screens directly in Method or add{" "}
                  <br className="hidden lg:inline" /> your images from Sketch or
                  Figma. You <br className="hidden lg:inline" /> can even sync
                  designs
                </p>
              </div>
            </div>
            <div className="py-4 md:text-center">
              <div className="flex py-3 md:justify-center">
                <div className="h-14  w-14 rounded-full bg-gray-100">
                  <div className="mx-4 py-4">
                    <BsFillBookmarkFill className="h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="">
                <h1 className="text-1xl font-semibold lg:text-2xl lg:font-bold">
                  Property Management
                </h1>
                <p>
                  Create screens directly in Method or add{" "}
                  <br className="hidden lg:inline" /> your images from Sketch or
                  Figma. You <br className="hidden lg:inline" /> can even sync
                  designs
                </p>
              </div>
            </div>
            <div className="py-4 md:text-center">
              <div className="flex py-3 md:justify-center">
                <div className="h-14  w-14 rounded-full bg-gray-100">
                  <div className="mx-4 py-4">
                    <AiFillHome className="h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="">
                <h1 className="text-1xl font-semibold lg:text-2xl lg:font-bold">
                  User Administration
                </h1>
                <p>
                  Create screens directly in Method or add{" "}
                  <br className="hidden lg:inline" /> your images from Sketch or
                  Figma. You <br className="hidden lg:inline" /> can even sync
                  designs
                </p>
              </div>
            </div>
            <div className="py-4 md:text-center">
              <div className="flex py-3 md:justify-center">
                <div className="h-14  w-14 rounded-full bg-gray-100">
                  <div className="mx-4 py-4">
                    <MdShoppingBasket className="h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="">
                <h1 className="text-1xl font-semibold lg:text-2xl lg:font-bold">
                  Marketing Automation
                </h1>
                <p>
                  Create screens directly in Method or add{" "}
                  <br className="hidden lg:inline" /> your images from Sketch or
                  Figma. You <br className="hidden lg:inline" /> can even sync
                  designs
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default {
  title: "Marketing/Features/Feature 10",
  component: Feature10,
};
