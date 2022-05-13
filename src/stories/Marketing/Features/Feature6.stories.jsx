import { SectionWrapper } from "../../components/SectionWrapper";
import { BsArrowRight , BsFillBookmarkFill } from "react-icons/bs";
import { MdPermContactCalendar , MdEmail } from "react-icons/md";

export const Feature6 = () => {
  return (
    <>
      <SectionWrapper>
        <div className="grid-cols-1 grid lg:grid-cols-2">
          <div className="px-5 py-3">
            <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
              The best customer <br className="hidden md:inline" />
              experiences are built
              <br className="hidden md:inline" /> with Method
            </h1>
          </div>
          <div className="px-5 py-3">
            <h3 className=" leading-6 lg:text-lg">
              Create screens directly in Method or add your images <br className="hidden md:inline"/>from Sketch
              or Figma. You can even sync designs <br className="hidden md:inline"/>from your cloud storage!
            </h3>
          </div>
        </div>
        <div className="flex justify-start px-5 py-3">
            <div className="bg-primary flex h-12 w-56 rounded-lg py-3 px-8">
              <a href="" className="lg:font-xl text-center text-white">
                Explore Products
              </a>
              <BsArrowRight className="text-white mx-1 h-7"/>
            </div>
          </div>
          <hr className="my-5"/>
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
      </SectionWrapper>
    </>
  );
};

export default {
  title: "Marketing/Features/Feature 6",
  component: Feature6,
};
