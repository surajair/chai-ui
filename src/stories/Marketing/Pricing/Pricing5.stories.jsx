import { SectionWrapper } from "../../components/SectionWrapper";
import { GoPrimitiveDot } from "react-icons/go";

export const Pricing5 = () => {
    return (
      <>
        <SectionWrapper>
        <div className="px-4">
          <div className="py-3 text-center">
            <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
              Pricing Options
            </h1>{" "}
          </div>
          <div className="py-3 text-center">
            <h3 className=" leading-6 lg:text-lg">
              Create screens directly in Method or add your images from Sketch
              or
              <br className="hidden md:inline" /> Figma. You can even sync
              designs from your cloud storage!
            </h3>
          </div>
          <div className="flex justify-center py-3">
            <div className="mx-3  text-center hidden rounded-lg border-2 py-3 md:inline">
              <div className="py-1  px-7">
                <h1 className="text-lg  font-bold">Starter</h1>
              </div>
              <div className=" py-3">
                <div className="px-7">
                  <h1 className="text-5xl font-bold">Free</h1>
                </div>
                <div className="py-3">
                  <div>
                    <p>2 Emails</p>
                  </div>
                  <div>
                    <p>2 Databases</p>
                  </div>
                  <div>
                    <p>50Gb Bandwidtch</p>
                  </div>
                  <div>
                    <p>10Gb Storage</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center px-3 py-3">
                <button className="border-primary h-10 w-64 rounded-lg border-2">
                  <p className="text-primary">Select Plan</p>
                </button>
              </div>
              <div className="flex justify-center px-3 py-3">
                <button className="h-10 w-64">
                  <p className="">Learn More</p>
                </button>
              </div>
            </div>
            <div className="mx-3  text-center rounded-lg border-2 py-3">
              <div className="py-1  px-7">
                <h1 className="text-lg  font-bold">Method Plus</h1>
              </div>
              <div className=" py-3">
                <div className="px-7">
                  <h1 className="text-5xl font-bold">$29</h1>
                </div>
                <div className="py-3">
                  <div>
                    <p>10 Emails</p>
                  </div>
                  <div>
                    <p>5 Databases</p>
                  </div>
                  <div>
                    <p>80Gb Bandwidtch</p>
                  </div>
                  <div>
                    <p>15Gb Storage</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center px-3 py-3">
                <button className="border-primary h-10 w-64 rounded-lg border-2">
                  <p className="text-primary">Select Plan</p>
                </button>
              </div>
              <div className="flex justify-center px-3 py-3">
                <button className="h-10 w-64">
                  <p className="">Learn More</p>
                </button>
              </div>
            </div>
            <div className="mx-3  text-center hidden rounded-lg border-2 py-3 lg:inline">
              <div className="py-1  px-7">
                <h1 className="text-lg  font-bold">Method Pro</h1>
              </div>
              <div className=" py-3">
                <div className="px-7">
                  <h1 className="text-5xl font-bold">$39</h1>
                </div>
                <div className="py-3">
                  <div>
                    <p>15 Emails</p>
                  </div>
                  <div>
                    <p>10 Databases</p>
                  </div>
                  <div>
                    <p>125Gb Bandwidtch</p>
                  </div>
                  <div>
                    <p>25Gb Storage</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center px-3 py-3">
                <button className="border-primary h-10 w-64 rounded-lg border-2">
                  <p className="text-primary">Select Plan</p>
                </button>
              </div>
              <div className="flex justify-center px-3 py-3">
                <button className="h-10 w-64">
                  <p className="">Learn More</p>
                </button>
              </div>
            </div>
            <div className="mx-3  text-center hidden lg:inline rounded-lg border-2 py-3">
              <div className="py-1  px-7">
                <h1 className="text-lg  font-bold">Method Business</h1>
              </div>
              <div className=" py-3">
                <div className="px-7">
                  <h1 className="text-5xl font-bold">$49</h1>
                </div>
                <div className="py-3">
                  <div>
                    <p>20 Emails</p>
                  </div>
                  <div>
                    <p>20 Databases</p>
                  </div>
                  <div>
                    <p>200Gb Bandwidtch</p>
                  </div>
                  <div>
                    <p>50Gb Storage</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center px-3 py-3">
                <button className="border-primary h-10 w-64 rounded-lg border-2">
                  <p className="text-primary">Select Plan</p>
                </button>
              </div>
              <div className="flex justify-center px-3 py-3 ">
                <button className="h-10 w-64">
                  <p className="">Learn More</p>
                </button>
              </div>
            </div>
            </div>
            <div className="flex text-gray-700 lg:hidden justify-center">
              <GoPrimitiveDot className="opacity-30 md:hidden"/>
              <GoPrimitiveDot/>
              <GoPrimitiveDot className="opacity-30"/>
              <GoPrimitiveDot className="opacity-30 md:hidden"/>
            </div>
          </div>
        </SectionWrapper>
        </>
  );
};

export default {
  title: "Marketing/Pricing/Pricing 5",
  component: Pricing5,
};

