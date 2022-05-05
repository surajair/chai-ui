import React from "react";
import { SectionHeading } from "../../components/SectionHeading";
import { SectionSubHeading } from "../../components/SectionSubHeading";
import { AiOutlineArrowRight, AiFillPlayCircle } from "react-icons/ai";

export const Feature1 = () => {
  return (
    <>
      <div className="p-7 text-black  lg:p-14">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2">
          <div>
            <SectionHeading>
              A new and better way
              <br /> to acquire engage and
              <br /> retain customers
            </SectionHeading>
            <SectionSubHeading>
              Create screens directly in Method or add your images from sketch
              or Figma. You can even sync designs from your cloud storage!
            </SectionSubHeading>
            <div className="bg-primary flex h-12 w-40 rounded-lg py-3 pl-3">
              <a href="" className="font-xl text-white">
                Learn More{" "}
              </a>
              <a className="my-auto mx-auto text-white">
                <AiOutlineArrowRight />
              </a>
            </div>
          </div>
          <div className="flex justify-center pt-5 lg:pt-24 ">
            <div className="h-64 w-96 rounded bg-gray-200">
              <div className="py-28 px-44  text-blue-500">
                <AiFillPlayCircle />
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <hr />
        </div>
        <div className="grid grid-cols-1 text-left lg:grid-cols-3 lg:text-left">
          <div className="my-4 lg:mx-4">
            <h1 className="text-xl font-semibold lg:text-2xl">
              Email Marketing
            </h1>
            <p className="text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
          </div>
          <div className="my-4 lg:mx-4">
            <h1 className="text-xl font-semibold lg:text-2xl">
              Marketing Automation
            </h1>
            <p className="text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
          </div>
          <div className="my-4 lg:mx-4">
            <h1 className="text-xl font-semibold lg:text-2xl">
              Engage Customers
            </h1>
            <p className="text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default {
  title: "Marketing/Features/Feature 1",
  component: Feature1,
};
