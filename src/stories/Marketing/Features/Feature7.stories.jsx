import { SectionWrapper } from "../../components/SectionWrapper";
import { BsFillPlayCircleFill } from "react-icons/bs";
export const Feature7 = () => {
  return (
    <>
      <SectionWrapper>
        <div className="md:grid md:grid-cols-2 flex flex-col-reverse">
          <div className="px-4 md:mx-auto md:my-auto">
            <div className="py-3">
              <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
                Save time <br className="hidden md:inline" /> managing social{" "}
                <br className="hidden md:inline" /> media for your{" "}
                <br className="hidden md:inline" />
                business
              </h1>
            </div>
            <div className="py-3">
              <h3 className=" leading-6 lg:text-lg">
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
                  <BsFillPlayCircleFill className="h-10 w-10 md:h-12 md:w-12 text-blue-500" />
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
          <div>
              <div className="hidden md:inline">
                  <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652443746/Features_ckhq1d.png"/>
              </div>
              <div className="md:hidden flex justify-center">
                  <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652443953/Group_26_bhaahv.png"/>
              </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default {
  title: "Marketing/Features/Feature 7",
  component: Feature7,
};
