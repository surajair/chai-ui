import React from "react";
import { AiOutlineFire } from "react-icons/ai";
import { SectionHeading } from "../../components/SectionHeading";
import { SectionSubHeading } from "../../components/SectionSubHeading";
export const Feature3 = () => {
  return (
    <>
      <div className="py-24 text-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-row-reverse">
            <div>
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1651759497/Widget_02_odl0vv.png" />
            </div>
            <div className="px-5">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1651759498/Widget_01_ispq1y.png" />
            </div>
          </div>
          <div className="ml-7 mr-14 lg:-my-10 lg:mr-44">
            <SectionHeading>
              The best awesome email marketing tool
            </SectionHeading>
            <SectionSubHeading>
              Create screens directly in Method or add your images from Sketch
              or Figma. You can even sync designs from your cloud storage!
            </SectionSubHeading>
            <div className="bg-primary flex h-12 w-40 rounded-lg  py-3">
              <a className="my-auto mx-3 text-white">
                <AiOutlineFire />
              </a>
              <a href="" className="font-xl text-white">
                Get Started{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default {
  title: "Marketing/Features/Feature 3",
  component: Feature3,
};
