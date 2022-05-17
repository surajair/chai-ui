import { Button } from "react-bootstrap";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
export const Calltoaction1 = () => {
  return (
    <>
      <div className="dark px-7 py-7 dark:bg-black dark:text-white  lg:px-10 lg:py-10">
        <div className="grid lg:grid-cols-2">
          <div className="mx-auto">
            <img
              src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652766474/iPhone_XS_1_ua6pqs.png"
              className="lg:hidden"
            />
            <img
              src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652764123/iPhone_h3vlwi.png"
              className="hidden lg:inline"
            />
          </div>
          <div className="text-center lg:my-auto lg:text-left">
            <div className="py-3">
              <h2 className="font-bold">Product of the day</h2>
            </div>
            <div className="py-3">
              <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
                The fast & visual way
                <br className="hidden" /> to <br className="hidden lg:inline" />
                understand your users
              </h1>
            </div>
            <div className="py-3">
              <h3 className="leading-6 lg:text-lg">
                Create screens directly in Method or add your{" "}
                <br className="lg:hidden" />
                images <br className="hidden lg:inline" />
                from Sketch or Figma. You can even <br className="lg:hidden" />
                sync designs
                <br className="hidden lg:inline" /> from your cloud storage!
              </h3>
            </div>
            <div className="-mx-3 my-8 flex justify-center lg:mx-0 lg:justify-start">
              <div>
                <Button className="bg-primary rounded-lg px-3 py-1">
                  <div className="flex">
                    <div className="px-1 py-2">
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
                    <div className="px-1 py-2">
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
        </div>
      </div>
    </>
  );
};

export default {
  title: "Marketing/CallToAction/Calltoaction 1",
  component: Calltoaction1,
};
