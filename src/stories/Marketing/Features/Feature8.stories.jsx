import { SectionWrapper } from "../../components/SectionWrapper";
import { BsFillBookmarkFill, BsHouseDoorFill } from "react-icons/bs";
import { IoMdBasket } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { HiPuzzle } from "react-icons/hi";
export const Feature8 = () => {
  return (
    <>
      <SectionWrapper>
        <div className="mx-5 py-3 md:mx-10">
          <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
            Get awesome email <br className="hidden md:inline" />
            maketing tool
          </h1>
        </div>
        <div className=" mx-5 grid grid-cols-1 py-3 md:grid-cols-2 lg:grid-cols-3">
          <div className="py-3 md:mx-5">
            <div className="h-14 w-14 rounded-full bg-gray-100">
              <div className="mx-4 py-4">
                <BsFillBookmarkFill className="h-5 w-5" />
              </div>
            </div>
            <div className="py-3">
              <h1 className="text-1xl font-semibold lg:text-2xl lg:font-bold">
                Property Managment
              </h1>
              <p>
                Create screens directly in Method or add <br />
                your images from Sketch or Figma.
              </p>
            </div>
          </div>
          <div className="py-3 md:mx-5">
            <div className="h-14 w-14 rounded-full bg-gray-100">
              <div className="mx-4 py-4">
                <BsHouseDoorFill className="h-5 w-5" />
              </div>
            </div>
            <div className="py-3">
              <h1 className="text-1xl font-semibold lg:text-2xl lg:font-bold">
                User Administration
              </h1>
              <p>
                Create screens directly in Method or add <br />
                your images from Sketch or Figma.
              </p>
            </div>
          </div>
          <div className="py-3 md:mx-5">
            <div className="h-14 w-14 rounded-full bg-gray-100">
              <div className="mx-4 py-4">
                <IoMdBasket className="h-5 w-5" />
              </div>
            </div>
            <div className="py-3">
              <h1 className="text-1xl font-semibold lg:text-2xl lg:font-bold">
                Marketing Automation
              </h1>
              <p>
                Create screens directly in Method or add <br />
                your images from Sketch or Figma.
              </p>
            </div>
          </div>
          <div className="py-3 md:mx-5">
            <div className="h-14 w-14 rounded-full bg-gray-100">
              <div className="mx-4 py-4">
                <HiPuzzle className="h-5 w-5" />
              </div>
            </div>
            <div className="py-3">
              <h1 className="text-1xl font-semibold lg:text-2xl lg:font-bold">
                Api Reference
              </h1>
              <p>
                Create screens directly in Method or add <br />
                your images from Sketch or Figma.
              </p>
            </div>
          </div>
          <div className="py-3 md:mx-5">
            <div className="h-14 w-14 rounded-full bg-gray-100">
              <div className="mx-4 py-4">
                <RiTeamFill className="h-5 w-5" />
              </div>
            </div>
            <div className="py-3">
              <h1 className="text-1xl font-semibold lg:text-2xl lg:font-bold">
                Team Accounts
              </h1>
              <p>
                Create screens directly in Method or add <br />
                your images from Sketch or Figma.
              </p>
            </div>
          </div>
          <div className="py-3 md:mx-5">
            <div className="h-14 w-14 rounded-full bg-gray-100">
              <div className="mx-4 py-4">
                <MdEmail className="h-5 w-5" />
              </div>
            </div>
            <div className="py-3">
              <h1 className="text-1xl font-semibold lg:text-2xl lg:font-bold">
                Email Marketing
              </h1>
              <p>
                Create screens directly in Method or add <br />
                your images from Sketch or Figma.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default {
  title: "Marketing/Features/Feature 8",
  component: Feature8,
};
