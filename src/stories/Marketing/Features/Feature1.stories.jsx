import React from "react";
import { SectionWrapper } from "../../components/SectionWrapper";
import { SectionSubHeading } from "../../components/SectionSubHeading";
import { AiOutlineArrowRight, AiFillPlayCircle } from "react-icons/ai";

export const Feature1 = () => {
  return (
    <>
      <SectionWrapper className="dark dark:bg-black dark:text-white">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2">
          <div className="lg:px-10 py-43">
            <h1 className="text-2xl lg:text-5xl font-semibold drop-shadow-lg">
              A new and better way
              <br className="hidden lg:inline" /> to acquire engage and
              <br className="hidden lg:inline" /> retain customers
            </h1>
            <div className="py-3">
              <SectionSubHeading>
                Create screens directly in Method or add your images
                <br className="hidden lg:inline" /> from sketch or Figma. You caneven sync designs
                <br className="hidden lg:inline" /> from your cloud storage!
              </SectionSubHeading>
            </div>
            <div className="py-3">
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
          <div className="flex justify-center py-5 lg:py-7 ">
            <div className="h-72 w-96 rounded bg-gray-200">
              <div className="py-32 px-44  text-blue-500">
                <AiFillPlayCircle />
              </div>
            </div>
          </div>
        </div>
        <div className="py-4">
          <hr />
        </div>
        <div className="grid grid-cols-1 text-left lg:grid-cols-3 lg:text-left">
          <div className="py-3 lg:mx-4">
            <h1 className="text-xl font-semibold lg:text-2xl">
              Email Marketing
            </h1>
            <p className="py-3 text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
          </div>
          <div className="py-3 lg:mx-4">
            <h1 className="text-xl font-semibold lg:text-2xl">
              Marketing Automation
            </h1>
            <p className="py-3 text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
          </div>
          <div className="py-3 lg:mx-4">
            <h1 className="text-xl font-semibold lg:text-2xl">
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
