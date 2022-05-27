import { SectionWrapper } from "../../components/SectionWrapper";
export const Pricing4 = () => {
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
            <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1653149261/Switcher_02_e3awmp.png" />
          </div>
          <div className="md:flex justify-center lg:py-3">
            <div className="mx-3 rounded-lg border-2 py-3 my-3 text-center">
              <div className="py-1  px-7">
                <h1 className="text-lg  font-bold">Method Plus</h1>
              </div>
              <div className="py-1 px-7">
                <h3 className="leading-6">
                  Go beyond email and customize
                  <br /> your workflow
                </h3>
              </div>
              <div className="flex py-3">
                <div className="px-7">
                  <h1 className="text-5xl font-bold">$59</h1>
                </div>
                <div className="px-3 text-left">
                  <div>
                    <p>Per User</p>
                  </div>
                  <div>
                    <p>Per Month</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-3 rounded-lg border-2 py-3 my-3 text-center">
              <div className="py-1  px-7">
                <h1 className="text-lg  font-bold">Method Pro</h1>
              </div>
              <div className="py-1 px-7">
                <h3 className="leading-6">
                You can even sync designs from<br/> your cloud storage
                </h3>
              </div>
              <div className="flex py-3">
                <div className="px-7">
                  <h1 className="text-5xl font-bold">$89</h1>
                </div>
                <div className="px-3 text-left">
                  <div>
                    <p>Per User</p>
                  </div>
                  <div>
                    <p>Per Month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-3">
            <button className="bg-primary h-12 w-44 rounded-lg">
              <div className="px-3 py-2 text-center text-white">
                <h1 className="font-semibold">Get Started</h1>
              </div>
            </button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default {
  title: "Marketing/Pricing/Pricing 4",
  component: Pricing4,
};
