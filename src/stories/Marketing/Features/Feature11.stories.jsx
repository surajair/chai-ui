import { SectionWrapper } from "../../components/SectionWrapper";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
export const Feature11 = () => {
  return (
    <>
      <SectionWrapper>
        <div className=" grid md:grid-cols-2">
          <div className=" md:-my-16 ">
            <div className="hidden md:mx-auto md:inline md:flex md:justify-center">
              <div className="my-auto pr-6 ">
                <GoPrimitiveDot className="opacity-30" />
                <GoPrimitiveDot className="opacity-30" />
                <GoPrimitiveDot />
                <GoPrimitiveDot className="opacity-30" />
              </div>
              <div className="flex justify-center">
                <div >
                  <img
                    src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652714078/Widget_3_wmprhm.png"
                    className="flex items-start"
                  />
                  <img
                    src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652714078/Widget_01_wwsucc.png"
                    className="my-10"
                  />
                  <img
                    src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652714078/Widget_2_suv9cm.png"
                    className="flex items-end"
                  />
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <div className="flex justify-center">
                <div className="px-4">
                  <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1651821057/Widget_04_xijeu8.png" />
                </div>
                <div className="-mr-10">
                  <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1651822934/Widget_04_aayeke.png" />
                </div>
              </div>
              <div className="my-3 flex px-4">
                <GoPrimitiveDot className="opacity-30" />
                <GoPrimitiveDot className="opacity-30" />
                <GoPrimitiveDot />
                <GoPrimitiveDot className="opacity-30" />
              </div>{" "}
            </div>
          </div>
          <div className="px-4 md:mx-auto md:my-auto">
            <div className="py-3">
              <h1 className="text-3xl font-bold leading-7 drop-shadow-lg md:text-5xl 2xl:text-6xl">
                Go beyond email <br className="hidden md:inline" />
                marketing with <br className="hidden md:inline" />
                true marketing <br className="hidden md:inline" />
                automation
              </h1>
            </div>
            <div className="py-3">
              <h3 className="leading-6 lg:text-lg">
                You can even sync designs from
                <br className="hidden md:inline" /> your cloud storage!
              </h3>
            </div>
            <div className="py-3">
              <hr className="w-auto" />
            </div>
            <div className="my-4 flex lg:py-3">
              <div className="mr-4">
                <div>
                  <BsFillPlayCircleFill className="h-10 w-10 text-blue-500 md:h-12 md:w-12" />
                </div>
              </div>
              <div>
                <p>See how it works.</p>
                <h1 className="text-1xl font-semibold lg:text-2xl lg:font-bold">
                  Watch Video
                </h1>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default {
  title: "Marketing/Features/Feature 11",
  component: Feature11,
};
