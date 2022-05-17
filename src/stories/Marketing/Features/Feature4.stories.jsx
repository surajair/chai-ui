import { SectionWrapper } from "../../components/SectionWrapper";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
export const Feature4= () => {
  return <>
  <SectionWrapper>
  <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="lg:mx-9 py-3 text-left">
                <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">Perfect for sales,<br className="hidden lg:inline"/> marketing and support</h1>
            </div>
            <div className="lg:mx-9 py-3 text-left">
                <p className="leading-6 lg:text-lg "> Create screens directly in Method or add your images <br className="hidden lg:inline"/>from Sketch or Figma. You can even sync designs <br className="hidden lg:inline"/>from your cloud storage!</p>
            </div>
        </div>
        <div className="bg-gray-300 lg:mx-9 rounded py-3 lg:my-8">
            <img className="h-60 w-auto" src=""/>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="flex lg:mx-9 my-4 lg:py-3">
                <div className="mr-4">
                    <div className="bg-gray-100 rounded-full h-14 w-14">
                        <div className="mx-4 py-4">
                          <BsFillBookmarkFill  className="h-5 w-5"/>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="font-semibold text-1xl lg:font-bold lg:text-2xl">Property Managment</h1>
                    <p>You can even sync designs from your cloud storage!</p>
                </div>
            </div>
            <div className="flex lg:mx-9 my-4 lg:py-3">
                <div className="mr-4">
                    <div className="bg-gray-100 rounded-full h-14 w-14">
                        <div className="mx-4 py-4 ">
                            <MdEmail className="h-6 w-6"/>                                                             
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="font-semibold text-1xl lg:font-bold lg:text-2xl">Email Marketing</h1>
                    <p>You can even sync designs from your cloud storage!</p>
                </div>
            </div>
            <div className="flex lg:mx-9 my-4 lg:py-3">
                <div className="mr-4">
                    <div className="bg-gray-100 rounded-full h-14 w-14">
                        <div className="mx-4 py-4">
                            <MdPermContactCalendar className="h-6 w-6"/>                             
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="font-semibold text-1xl lg:font-bold lg:text-2xl">Engage Customers</h1>
                    <p>You can even sync designs from your cloud storage!</p>
                </div>
            </div>
        </div>
    </div>
</SectionWrapper>
</>;
};

export default {
  title: "Marketing/Features/Feature 4",
  component: Feature4,
};
