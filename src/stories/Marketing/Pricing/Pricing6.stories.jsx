import { SectionWrapper } from "../../components/SectionWrapper";
export const Pricing6 = () => {
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
          <div className="justify-center py-3 lg:flex">
            <div className="mx-3  py-3 text-center">
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
            <hr />
            <div className="mx-3  py-3 text-center">
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
            <hr />
            <div className="mx-3  py-3 text-center">
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
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default {
  title: "Marketing/Pricing/Pricing 6",
  component: Pricing6,
};
