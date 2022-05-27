import { GoPrimitiveDot } from "react-icons/go";
import { SectionWrapper } from "../../components/SectionWrapper";
export const Pricing2 = () => {
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
            <div className="mx-3  hidden rounded-lg border-2 py-3 lg:inline">
              <div className="py-1  px-7">
                <h1 className="text-lg  font-bold">Starter</h1>
              </div>
              <div className="py-1 px-7">
                <h3 className="leading-6">
                  Go beyond email and customize your workflow
                </h3>
              </div>
              <div className="flex py-3">
                <div className="px-7">
                  <h1 className="text-5xl font-bold">$19</h1>
                </div>
                <div className="px-3">
                  <div>
                    <p>Per User</p>
                  </div>
                  <div>
                    <p>Per Month</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center px-3 py-3">
                <button className="border-primary h-10 w-64 rounded-lg border-2 lg:w-80">
                  <p className="text-primary">Select Plan</p>
                </button>
              </div>
              <div className="flex justify-center px-3 py-3 hover:rounded-lg hover:border-2">
                <button className="h-10 w-64 lg:w-80">
                  <p className="">Learn More</p>
                </button>
              </div>
            </div>
            <div className="border-primary  mx-3 rounded-lg border-2 py-3">
              <div className="py-1  px-7">
                <h1 className="text-lg  font-bold">Method Plus</h1>
              </div>
              <div className="py-1 px-7">
                <h3 className="leading-6">
                  Go beyond email and customize your workflow
                </h3>
              </div>
              <div className="flex py-3">
                <div className="px-7">
                  <h1 className="text-5xl font-bold">$29</h1>
                </div>
                <div className="px-3">
                  <div>
                    <p>Per User</p>
                  </div>
                  <div>
                    <p>Per Month</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center px-3 py-3">
                <button className="bg-primary h-10 w-64 rounded-lg lg:w-80">
                  <p className="text-white">Select Plan</p>
                </button>
              </div>
              <div className="flex justify-center px-3 py-3">
                <button className="h-10 w-64 hover:rounded-lg hover:border-2 lg:w-80">
                  <p className="">Learn More</p>
                </button>
              </div>
            </div>
            <div className="mx-3  hidden rounded-lg border-2 py-3 md:inline">
              <div className="py-1  px-7">
                <h1 className="text-lg  font-bold">Method Pro</h1>
              </div>
              <div className="py-1 px-7">
                <h3 className="leading-6">
                  Go beyond email and customize your workflow
                </h3>
              </div>
              <div className="flex py-3">
                <div className="px-7">
                  <h1 className="text-5xl font-bold">$39</h1>
                </div>
                <div className="px-3">
                  <div>
                    <p>Per User</p>
                  </div>
                  <div>
                    <p>Per Month</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center px-3 py-3">
                <button className="border-primary h-10 w-64 rounded-lg border-2 lg:w-80">
                  <p className="text-primary">Select Plan</p>
                </button>
              </div>
              <div className="flex justify-center px-3 py-3">
                <button className="h-10 w-64 hover:rounded-lg hover:border-2 lg:w-80">
                  <p className="">Learn More</p>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:hidden">
            <GoPrimitiveDot className="opacity-30" />
            <GoPrimitiveDot />
            <GoPrimitiveDot className="opacity-30" />
            <GoPrimitiveDot className="opacity-30" />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default {
  title: "Marketing/Pricing/Pricing 2",
  component: Pricing2,
};
