import React from "react";
import { SectionHeading } from "../../components/SectionHeading";
import { SectionSubHeading } from "../../components/SectionSubHeading";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdChatbubbles } from "react-icons/io";
import { MdPieChart } from "react-icons/md";
export const Feature2 = () =>{
    return <>
        <div className="scroll-py-20 lg:py-14 pl-14 text-black">
            <div className="lg:grid grid-cols-1 lg:grid-cols-2 flex flex-col-reverse">
                <div className="pt-2 pr-10">
                    <SectionHeading>Method and the tools you love, united</SectionHeading>
                    <SectionSubHeading >Create screens directly in Method or add your images from Sketch or Figma. You can even sync designs from your cloud storage!</SectionSubHeading>
                    <div className="">
                        <div className="flex py-3">
                            <div className="bg-gray-300 rounded-full h-10 w-10 py-3 px-3">
                                <HiLocationMarker/>
                            </div>
                            <div className="py-1 px-3">
                                <h1 className="text-lg lg:text-xl font-semibold">Property Management</h1>
                            </div>
                        </div>
                        <div className="flex py-3">
                            <div className="bg-gray-300 rounded-full h-10 w-10 py-3 px-3">
                            <IoMdChatbubbles/>
                            </div>
                            <div className="py-1 px-3">
                                <h1 className="text-lg lg:text-xl font-semibold">Focus on Communication</h1>
                            </div>
                        </div>
                        <div className="flex py-3">
                            <div className="bg-gray-300 rounded-full h-10 w-10 py-3 px-3">
                                <MdPieChart/>
                            </div>
                            <div className="py-1 px-3">
                                <h1 className="text-lg lg:text-xl font-semibold">User Administration</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:py-10 ">
                    <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1651754274/Safari_hxxynx.png"/>
                </div>
            </div>
        </div>
    </>;
};

export default {
    title: "Marketing/Features/Feature 2",
    component: Feature2,
};