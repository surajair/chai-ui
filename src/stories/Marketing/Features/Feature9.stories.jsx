import { SectionWrapper } from "../../components/SectionWrapper";
import { MdEmail } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { BsFillBookmarkFill } from "react-icons/bs";
export const Feature9 = () => {
  return (
    <>
      <SectionWrapper>
        <div className="md:px-12 lg:grid  lg:grid-cols-3">
          <div className="col-span-2">
            <div className="px-5 py-3 text-center lg:text-left">
              <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
                We believe in helping
                <br className="hidden md:inline" /> people pay attention
                <br className="hidden md:inline" /> to what matters
              </h1>
            </div>
            <div className="px-5 py-3 text-center lg:text-left">
              <h3 className=" leading-6 lg:text-lg">
                Create screens directly in Method or add{" "}
                <br className="hidden md:inline" /> your images from Sketch or
                Figma.
              </h3>
            </div>
            <div className="flex justify-center px-5 py-3 lg:justify-start">
              <div className="bg-primary h-12 w-40 rounded-lg py-3 px-8">
                <a href="" className="font-xl text-center text-white">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="my-auto">
            <div className="justify-center py-4 text-center lg:flex lg:text-left">
              <div className="flex justify-center">
                <div className="h-14  w-14 rounded-full bg-gray-100 lg:mr-10">
                  <div className="mx-4 py-4">
                    <MdEmail className="h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="">
                <h1 className="text-1xl font-semibold lg:text-2xl lg:font-bold">
                  Email Marketing
                </h1>
                <p>You can even sync designs from your cloud storage!</p>
              </div>
            </div>
            <div className="py-4 text-center lg:flex lg:text-left">
              <div className="flex justify-center">
                <div className="h-14  w-14 rounded-full bg-gray-100 lg:mr-10">
                  <div className="mx-4 py-4">
                    <BsFillBookmarkFill className="h-5 w-5" />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-1xl font-semibold lg:text-2xl lg:font-bold">
                  Property Management
                </h1>
                <p>You can even sync designs from your cloud storage!</p>
              </div>
            </div>
            <div className="py-4 text-center lg:flex lg:text-left">
              <div className="flex justify-center">
                <div className="h-14  w-14 rounded-full bg-gray-100 lg:mr-10">
                  <div className="mx-4 py-4">
                    <RiTeamFill className="h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="">
                <h1 className="text-1xl font-semibold lg:text-2xl lg:font-bold">
                  Team Accounts
                </h1>
                <p>You can even sync designs from your cloud storage!</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default {
  title: "Marketing/Features/Feature 9",
  component: Feature9,
};
