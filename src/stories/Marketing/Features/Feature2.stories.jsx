import { HiLocationMarker } from "react-icons/hi";
import { IoMdChatbubbles } from "react-icons/io";
import { MdPieChart } from "react-icons/md";
export const Feature2 = () => {
  return (
    <>
      <div className="overflow-x-hidden py-14 pl-4">
        <div className="flex grid-cols-1 flex-col-reverse lg:grid lg:grid-cols-2">
          <div className="my-auto space-y-5 pt-6 lg:px-10 lg:pt-0">
            <h1 className="text-3xl font-semibold md:text-4xl">
              Method and the&nbsp;
              <br className="hidden lg:inline" />
              tools you love,
              <br className="hidden lg:inline" />
              united
            </h1>
            <h3 className="lg:text-lg">
              Create screens directly in Method or add your images
              <br className="hidden lg:inline" /> from Sketch or Figma. You can
              even sync designs
              <br className="hidden lg:inline" />
              from your cloud storage!
            </h3>
            <div className="space-y-5">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-300 py-3 px-3">
                  <HiLocationMarker />
                </div>
                <h4 className="px-3 text-lg font-semibold lg:text-xl">
                  Property Management
                </h4>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-300 py-3 px-3">
                  <IoMdChatbubbles />
                </div>
                <h4 className="px-3 text-lg font-semibold lg:text-xl">
                  Focus on Communication
                </h4>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-300 py-3 px-3">
                  <MdPieChart />
                </div>
                <h4 className="px-3 text-lg font-semibold md:text-xl">
                  User Administration
                </h4>
              </div>
            </div>
          </div>
          <div className="-mr-10 lg:-ml-5 lg:mr-0 lg:mt-0 ">
            <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1651754274/Safari_hxxynx.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default {
  title: "Marketing/Features/Feature 2",
  component: Feature2,
};
