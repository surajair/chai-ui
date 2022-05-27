import { SectionWrapper } from "../../components/SectionWrapper";
import { BsArrowRight } from "react-icons/bs";
export const Calltoaction2 = () => {
  return (
    <>
      <SectionWrapper>
        <div className="text-center ">
          <div className="py-3 px-1">
            <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
              The easiest way to turn
              <br /> your passion into income
            </h1>
          </div>
          <div className="py-3">
            <h3 className="leading-6 lg:text-lg">
              Create screens directly in Method or add your
              <br className="lg:hidden" /> images from Sketch or
              <br className="hidden lg:inline" /> Figma. You can even{" "}
              <br className="lg:hidden" />
              sync designs from your cloud storage!
            </h3>
          </div>
          <div className="flex justify-center py-3">
            <button className="bg-transparent px-3">
              <div className="flex">
                <div className="px-3 py-2">
                  <h1 className="font-semibold">Read More</h1>
                </div>
                <div className="h-10 w-10 rounded-full bg-gray-200 px-2 py-2">
                  <BsArrowRight className="h-6 w-6" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default {
  title: "Marketing/CallToAction/Calltoaction 2",
  component: Calltoaction2,
};
