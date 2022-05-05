import React from "react";
import { SectionHeading } from "../../components/SectionHeading";
import { SectionSubHeading } from "../../components/SectionSubHeading";
import { AiOutlineArrowRight , AiFillPlayCircle} from 'react-icons/ai';

export const Feature1Dark= () => {
  return <>
  <div className="p-7 lg:p-14 bg-black text-white">
    <div className="lg:grid grid-cols-1 lg:grid-cols-2 flex flex-col-reverse">
      <div >
          <SectionHeading>A new and better way<br/> to acquire engage and<br/> retain customers</SectionHeading>
          <SectionSubHeading>Create screens directly in Method or add your images from sketch or Figma. You can even sync designs from your cloud storage!</SectionSubHeading>
          <div className="flex bg-primary w-40 h-12 py-3 pl-3 rounded-lg">
          <a href="" className="text-white font-xl" >Learn More </a>
          <a className="my-auto mx-auto text-white">
          <AiOutlineArrowRight/></a>
          </div>
      </div>
      <div className="pt-5 lg:pt-24  flex justify-center">
          <div className="bg-gray-200 w-96 h-64 rounded">
               <div className="py-28 px-44  text-blue-500"><AiFillPlayCircle/></div>
          </div>
      </div>
    </div>
    <div className="py-5">
      <hr/>
    </div>
    <div className="grid grid-cols-1 text-left lg:grid-cols-3 lg:text-left">
      <div className=" lg:mx-4 my-4">
          <h1 className="font-semibold text-xl lg:text-2xl">Email Marketing</h1>
          <p className="text-lg">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
      </div>
      <div className="lg:mx-4 my-4">
          <h1 className="font-semibold text-xl lg:text-2xl">Marketing Automation</h1>
          <p className="text-lg">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
      </div>
      <div className="lg:mx-4 my-4">
          <h1 className="font-semibold text-xl lg:text-2xl">Engage Customers</h1>
          <p className="text-lg">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
      </div>
    </div>
</div>
</>;
};

export default {
  title: "Marketing/Features/Feature 1 Dark",
  component: Feature1Dark,
};
