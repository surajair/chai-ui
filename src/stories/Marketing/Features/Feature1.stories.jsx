import { SectionWrapper } from "../../components/SectionWrapper";
import { SectionSubHeading } from "../../components/SectionSubHeading";
import { AiOutlineArrowRight, AiFillPlayCircle } from "react-icons/ai";

export const Feature1 = () => {
  return (
    <>
      <SectionWrapper>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2">
          <div className="">
            <h1 className="text-2xl font-semibold drop-shadow-lg dark:text-white lg:text-5xl">
              A new and better way
              <br className="hidden lg:inline" /> to acquire engage and
              <br className="hidden lg:inline" /> retain customers
            </h1>
            <div className="py-2">
              <SectionSubHeading>
                Create screens directly in Method or add your images
                <br className="hidden lg:inline" /> from sketch or Figma. You
                caneven sync designs
                <br className="hidden lg:inline" /> from your cloud storage!
              </SectionSubHeading>
            </div>
            <div className="py-2">
              <div className="bg-primary flex h-12 w-40 rounded-lg py-3 pl-3">
                <a href="" className="font-xl text-white">
                  Learn More
                </a>
                <a className="my-auto mx-auto text-white">
                  <AiOutlineArrowRight />
                </a>
              </div>
            </div>
          </div>
          <div className="my-auto flex justify-center ">
            <div className=" w-96 rounded bg-gray-200">
              <div className="text-primary py-32  px-44">
                <AiFillPlayCircle />
              </div>
            </div>
          </div>
        </div>
        <div className="py-4">
          <hr className={"dark:border-gray-800"} />
        </div>
        <div className="grid grid-cols-1 text-left lg:grid-cols-3">
          <div className="py-3">
            <h1 className="text-xl font-semibold dark:text-white lg:text-2xl">
              Email Marketing
            </h1>
            <p className="py-3 text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
          </div>
          <div className="py-3 lg:mx-4">
            <h1 className="text-xl font-semibold dark:text-white lg:text-2xl">
              Marketing Automation
            </h1>
            <p className="py-3 text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
          </div>
          <div className="py-3 lg:mx-4">
            <h1 className="text-xl font-semibold dark:text-white lg:text-2xl">
              Engage Customers
            </h1>
            <p className="py-3 text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default {
  title: "Marketing/Features/Feature 1",
  component: Feature1,
};
