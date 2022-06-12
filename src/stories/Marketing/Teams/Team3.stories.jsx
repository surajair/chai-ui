import { BsFillPersonFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import { SectionWrapper } from "../../components/SectionWrapper";
export const Team3 = () => {
  return (
    <>
      <SectionWrapper>
        <div className="px-4 md:px-10">
          <div className="py-3">
            <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
              Meet Our Great Team
            </h1>
          </div>
          <div className="py-1">
            <h3 className=" leading-6 lg:text-lg">
              Create screens directly in Method or add your images from Sketch
              or
              <br className="hidden md:inline" /> Figma. You can even sync
              designs from your cloud storage!
            </h3>
          </div>
          <div className="flex md:mx-20 md:grid md:grid-cols-2 lg:mx-0 lg:grid-cols-4">
            <div className=" mx-2 my-5 text-center">
              <div className="">
                <div className="md:bg-primary h-72  w-60 rounded-lg bg-gray-200">
                  <div className="flex px-24 py-32">
                    <BsFillPersonFill className="h-8 w-8 text-black md:text-white" />
                  </div>
                </div>
              </div>
              <div className="text-left">
                <div className="flex">
                  <h1 className="text-lg font-semibold lg:text-xl lg:font-bold">
                    Dany Monson
                  </h1>
                  <FiArrowRight className="ml-20 h-7 w-7 md:ml-20" />
                </div>
                <p>CEO & Founder</p>
              </div>
            </div>
            <div className=" mx-2 my-5 text-center">
              <div className="">
                <div className="md:bg-primary h-72 w-60 rounded-lg bg-gray-200">
                  <div className="flex px-24 py-32">
                    <BsFillPersonFill className="h-8 w-8 text-black md:text-white" />
                  </div>
                </div>
              </div>
              <div className="text-left">
                <div className="flex">
                  <h1 className="text-lg font-semibold lg:text-xl lg:font-bold">
                    Baha Moretz
                  </h1>
                  <FiArrowRight className="ml-24 h-7 w-7" />
                </div>
                <p>Art Director</p>
              </div>
            </div>
            <div className="mx-2 my-5 hidden text-center md:inline">
              <div className="">
                <div className="bg-primary  h-72 w-60 rounded-lg">
                  <div className="flex px-24 py-32">
                    <BsFillPersonFill className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="text-left">
                <div className="flex">
                  <h1 className="text-lg font-semibold lg:text-xl lg:font-bold">
                    Dima Grinchenko
                  </h1>
                  <FiArrowRight className="ml-12 h-7 w-7" />
                </div>
                <p>Front End Developer</p>
              </div>
            </div>
            <div className="mx-2 my-5 hidden text-center md:inline">
              <div className="">
                <div className="bg-primary  h-72 w-60 rounded-lg">
                  <div className="flex px-24 py-32">
                    <BsFillPersonFill className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="text-left">
                <div className="flex">
                  <h1 className="text-lg font-semibold lg:text-xl lg:font-bold">
                    Polly Clark
                  </h1>
                  <FiArrowRight className="ml-28 h-7 w-7" />
                </div>
                <p>Manager</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default {
  title: "Marketing/Teams/Team 3",
  component: Team3,
};
