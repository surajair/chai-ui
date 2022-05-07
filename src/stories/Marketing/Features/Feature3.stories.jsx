import { AiOutlineFire } from "react-icons/ai";
import { SectionHeading } from "../../components/SectionHeading";
import { SectionSubHeading } from "../../components/SectionSubHeading";
import { SectionWrapper } from "../../components/SectionWrapper";
export const Feature3 = () => {
  return (
    <>
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-row lg:-ml-2 ">
            <div className="hidden lg:inline">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1651759497/Widget_02_odl0vv.png" />
            </div>
            <div className="hidden px-5 lg:inline">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1651759498/Widget_01_ispq1y.png" />
            </div> 
            <div className="lg:hidden px-3">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1651821057/Widget_04_xijeu8.png" />
            </div>
            <div className="lg:hidden ml-5 -mr-10">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1651822934/Widget_04_aayeke.png" />
            </div>
          </div>
          <div className="px-3 py-3">
            <div className=" lg:py-2">
              <SectionHeading>
                The best awesome <br className="hidden lg:inline" />
                email marketing tool
              </SectionHeading>
            </div>
            <div className="lg:py-2">
              <SectionSubHeading>
                Create screens directly in Method or add your images
                <br className="hidden lg:inline" /> from Sketch or Figma. You
                can even sync designs
                <br className="hidden lg:inline" /> from your cloud storage!
              </SectionSubHeading>
            </div>
            <div className="lg:py-2">
              <div className="bg-primary flex h-12 w-40 rounded-lg py-3 ">
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
      </SectionWrapper>
    </>
  );
};

export default {
  title: "Marketing/Features/Feature 3",
  component: Feature3,
};
