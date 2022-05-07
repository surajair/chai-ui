import { HiLocationMarker } from "react-icons/hi";
import { IoMdChatbubbles } from "react-icons/io";
import { MdPieChart } from "react-icons/md";
import { SectionWrapper } from "../../components/SectionWrapper";
export const Feature2 = () => {
  return (
    <>
      <SectionWrapper>
        <div className="flex grid-cols-1 flex-col-reverse lg:grid lg:grid-cols-2">
          <div className="my-auto pt-6 lg:px-10 lg:pt-0">
            <div>
              <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
                Method and the
                <br className="hidden lg:inline" />
                tools you love,
                <br className="hidden lg:inline" />
                united
              </h1>
            </div>
            <div className="lg:py-1">
              <h3 className="py-6 leading-6 lg:text-lg">
                Create screens directly in Method or add your images
                <br className="hidden lg:inline" /> from Sketch or Figma. You
                can even sync designs
                <br className="hidden lg:inline" />
                from your cloud storage!
              </h3>
            </div>
            <div className="lg:py-1 ">
              <div className="flex py-3">
                <div className="h-10 w-10 rounded-full bg-gray-300 py-3 px-3">
                  <HiLocationMarker />
                </div>
                <div className="py-1 px-3">
                  <h1 className="text-lg font-semibold lg:text-xl">
                    Property Management
                  </h1>
                </div>
              </div>
              <div className="flex py-3">
                <div className="h-10 w-10 rounded-full bg-gray-300 py-3 px-3">
                  <IoMdChatbubbles />
                </div>
                <div className="py-1 px-3">
                  <h1 className="text-lg font-semibold lg:text-xl">
                    Focus on Communication
                  </h1>
                </div>
              </div>
              <div className="flex py-3">
                <div className="h-10 w-10 rounded-full bg-gray-300 py-3 px-3">
                  <MdPieChart />
                </div>
                <div className="py-1 px-3">
                  <h1 className="text-lg font-semibold lg:text-xl">
                    User Administration
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-4 lg:-mx-4 lg:mr-0 lg:mt-0 ">
            <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1651754274/Safari_hxxynx.png" />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default {
  title: "Marketing/Features/Feature 2",
  component: Feature2,
};
