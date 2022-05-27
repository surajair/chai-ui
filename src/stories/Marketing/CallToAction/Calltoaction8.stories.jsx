import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
export const Calltoaction8 = () => {
  return (
    <>
      <div className="dark -ml-4 px-4 pt-14 dark:bg-black dark:text-white">
        <div className="grid lg:grid-cols-2">
          <div className="hidden md:inline md:flex">
            <div className="flex items-end justify-start">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652853869/iPad_Pro_mjnowi.png" />
            </div>
            <div className="-ml-64 flex items-end">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652853869/iPhone_XS_cf1iqx.png" />
            </div>
          </div>
          <div className="flex py-2 md:hidden">
            <div className="flex items-end justify-start">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652854378/iPad_Pro_1_zz4ldo.png" />
            </div>
            <div className="-mb-6 -ml-48 flex items-end">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652854378/iPhone_XS_2_zsbg6p.png" />
            </div>
          </div>
          <div className="my-auto px-5 pt-6 md:px-10 ">
            <div className="py-3">
              <h2 className="font-bold">Product of the day</h2>
            </div>
            <div className="py-3">
              <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
                The best customer
                <br className="hidden lg:inline" /> experiences are built{" "}
                <br className="hidden lg:inline" />
                with Method
              </h1>
            </div>
            <div className="py-3">
              <h3 className=" leading-6 lg:text-lg">
                Create screens directly in Method or add your images
                <br className="hidden lg:inline" /> from Sketch or Figma. You
                can even sync designs
                <br className="hidden lg:inline" />
                from your cloud storage!
              </h3>
            </div>
            <div className="flex justify-center py-5 lg:justify-start">
              <div>
                <button className="bg-primary rounded-lg py-1 lg:px-3">
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
                </button>
              </div>
              <div className="px-3">
                <button className="bg-primary rounded-lg py-1 lg:px-3">
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default {
  title: "Marketing/CallToAction/Calltoaction 8",
  component: Calltoaction8,
};
