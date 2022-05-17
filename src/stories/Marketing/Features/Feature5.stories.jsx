import { SectionWrapper } from "../../components/SectionWrapper";
import { GoPrimitiveDot } from "react-icons/go";
export const Feature5 = () => {
  return (
    <>
      <SectionWrapper>
        <div>
          <div className=" mx-auto py-3 text-center">
            <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
              The easiest way to turn
              <br className="hidden lg:inline " /> your passion into income
            </h1>
          </div>
          <div className=" py-3">
            <div className="-mx-auto hidden md:flex  md:justify-between ">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652082801/Widgets_cyazx5.png" />
            </div>
            <div className="flex justify-center md:hidden ">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652083029/Widget_01_lqlfrv.png" />
            </div>
          </div>
          <div className="flex  justify-center py-3 md:hidden ">
            <GoPrimitiveDot className="text-gray-200" />
            <GoPrimitiveDot />
            <GoPrimitiveDot className="text-gray-200" />
            <GoPrimitiveDot className="text-gray-200" />
          </div>
          <div className="py-3 text-center">
            <h3 className="py-6 leading-6 lg:text-lg">
              Create screens directly in Method or add
              <br className="inline md:hidden" /> your images from Sketch or{" "}
              <br className="hidden md:inline" />
              Figma. You can
              <br className="inline md:hidden" /> even sync designs from your
              cloud storage!
            </h3>
          </div>
          <div className="flex justify-center py-3">
            <div className="bg-primary flex h-12 w-40 rounded-lg py-3 px-8">
              <a href="" className="font-xl text-center text-white">
                Read More
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default {
  title: "Marketing/Features/Feature 5",
  component: Feature5,
};
