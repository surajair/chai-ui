import { SectionWrapper } from "../../components/SectionWrapper";
import { Button } from "react-bootstrap";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
export const Calltoaction5 = () => {
  return (
    <>
      <SectionWrapper>
        <div className=" text-center">
          <div className="bg-secondary lg:bg-primary my-3 mx-auto h-14 w-14 rounded-lg">
            <p className=" text-5xl font-bold text-white">m</p>
          </div>
          <div className="py-3">
            <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
              The fast & visual way to
              <br className="hidden md:inline" /> understand your users
            </h1>
          </div>
          <div className="py-3">
            <h3 className=" leading-6 lg:text-lg">
              Create screens directly in Method or add{" "}
              <br className="md:hidden" /> your images from{" "}
              <br className="hidden md:inline" /> Sketch or Figma. You can{" "}
              <br className="md:hidden" /> even sync designs
            </h3>
          </div>
          <div className="flex justify-center py-5">
            <div>
              <Button className="bg-primary rounded-lg px-3 py-1">
                <div className="flex">
                  <div className="my-auto px-1">
                    <BsApple className="h-6 w-6 text-white" />
                  </div>
                  <div className="px-1">
                    <div>
                      <h1 className="text-xs text-white">Download on the </h1>
                    </div>
                    <div>
                      <h4 className="text-white">App Store</h4>
                    </div>
                  </div>
                </div>
              </Button>
            </div>
            <div className="px-3">
              <Button className="bg-primary rounded-lg px-3 py-1">
                <div className="flex">
                  <div className="my-auto px-1">
                    <FaGooglePlay className="h-6 w-6 text-white" />
                  </div>
                  <div className="px-1">
                    <div>
                      <h1 className="text-xs text-white">Get it on </h1>
                    </div>
                    <div>
                      <h4 className="text-white">Google Play</h4>
                    </div>
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default {
  title: "Marketing/CallToAction/Calltoaction 5",
  component: Calltoaction5,
};
