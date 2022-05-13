import { AiOutlineFire } from "react-icons/ai";
import { SectionWrapper } from "../../components/SectionWrapper";
export const Feature3 = () => {
  return (
    <>
      <SectionWrapper>
        <div className="lg:grid lg:grid-cols-2">
          <div className="hidden md:relative md:inline md:flex md:flex-row">
            <div className="md:item-center  z-0 my-auto md:left-0 md:-ml-4 md:flex md:justify-end md:overflow-hidden md:pr-10">
              <img
                className="h-auto w-full object-cover object-right"
                src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1651759497/Widget_02_odl0vv.png"
              />
            </div>
            <div className="my-auto px-5">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652083029/Widget_01_lqlfrv.png" />
            </div>
          </div>
          <div className="flex md:hidden">
            <div className="px-10">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1651821057/Widget_04_xijeu8.png" />
            </div>
            <div className="ml-5 -mr-7">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1651822934/Widget_04_aayeke.png" />
            </div>
          </div>
          <div className="my-auto px-3 py-3">
            <div className=" md:py-2">
              <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
                The best awesome <br className="hidden md:inline" />
                email marketing tool
              </h1>
            </div>
            <div className="md:py-2">
              <h3 className="md:text-md py-6 leading-6">
                Create screens directly in Method or add your images
                <br className="hidden md:inline" /> from Sketch or Figma. You
                can even sync designs
                <br className="hidden md:inline" /> from your cloud storage!
              </h3>
            </div>
            <div className="md:py-2">
              <div className="bg-primary flex h-12 w-40 rounded-md py-3 ">
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
