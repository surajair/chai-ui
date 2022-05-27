import { SectionWrapper } from "../../components/SectionWrapper";
import { RiFlashlightFill } from "react-icons/ri";
export const Pricing1 = () => {
  return (
    <>
      <SectionWrapper>
        <div className="px-10">
          <div className="grid lg:grid-cols-2 ">
            <div className="py-3">
              <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
                Build the right plan
                <br /> for your team
              </h1>
            </div>
            <div className=" py-3 lg:flex lg:h-10 lg:justify-end lg:py-0">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1653113822/Switcher_01_srn4uv.png" />
            </div>
          </div>
          <div className="py-5">
            <hr />
          </div>
          <div className="grid md:grid-cols-4">
            <div className="flex">
              <div className="py-2">
                <h1 className="text-lg font-bold">Started</h1>
              </div>
              <div className="ml-40 md:hidden">
                <h1 className="text-4xl font-bold">$59</h1>
              </div>
            </div>
            <div className="py-2 md:mx-auto">
              <h3 className="leading-6 lg:text-lg">1 Non-Commercial Site</h3>
              <h3 className="leading-6 lg:text-lg">Method Branding</h3>
              <h3 className="leading-6 lg:text-lg">100GB System Storage</h3>
            </div>
            <div className="hidden text-right md:inline">
              <h1 className="text-5xl font-bold lg:text-6xl">$59</h1>
            </div>
            <div className="py-2 md:text-right">
              <button className="rounded-lg border-2 px-3">
                <div className="flex">
                  <div className="my-auto h-6 w-6 rounded-full bg-black px-1 py-1">
                    <RiFlashlightFill className="h-4 w-4 text-white" />
                  </div>
                  <div className="px-3 py-2">
                    <h1 className="font-semibold text-black">Get Now</h1>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="py-3">
            <hr />
          </div>
          <div className="grid md:grid-cols-4">
            <div className="flex">
              <div className="py-2">
                <h1 className="text-lg font-bold">Method Plus</h1>
              </div>
              <div className="ml-40 md:hidden">
                <h1 className="text-4xl font-bold">$79</h1>
              </div>
            </div>
            <div className="py-2 md:mx-auto">
              <h3 className="leading-6 lg:text-lg">10 Non-Commercial Site</h3>
              <h3 className="leading-6 lg:text-lg">Custom Branding</h3>
              <h3 className="leading-6 lg:text-lg">500GB System Storage</h3>
            </div>
            <div className="hidden text-right md:inline">
              <h1 className="text-5xl font-bold lg:text-6xl">$79</h1>
            </div>
            <div className="py-2 md:text-right">
              <button className="bg-primary rounded-lg px-3">
                <div className="flex">
                  <div className="my-auto h-6 w-6 rounded-full bg-white px-1 py-1">
                    <RiFlashlightFill className="text-primary h-4 w-4" />
                  </div>
                  <div className="px-3 py-2">
                    <h1 className="font-semibold text-white">Get Now</h1>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="py-3">
            <hr />
          </div>
          <div className="grid md:grid-cols-4">
            <div className="flex">
              <div className="py-2">
                <h1 className="text-lg font-bold">Method Pro</h1>
              </div>
              <div className="ml-40 md:hidden">
                <h1 className="text-4xl font-bold">$99</h1>
              </div>
            </div>
            <div className="py-2 md:mx-auto">
              <h3 className="leading-6 lg:text-lg">30 Non-Commercial Site</h3>
              <h3 className="leading-6 lg:text-lg">Method Branding</h3>
              <h3 className="leading-6 lg:text-lg">1TB System Storage</h3>
            </div>
            <div className="hidden text-right md:inline">
              <h1 className="text-5xl font-bold lg:text-6xl">$99</h1>
            </div>
            <div className="py-2 md:text-right">
              <button className="rounded-lg border-2 px-3">
                <div className="flex">
                  <div className="my-auto h-6 w-6 rounded-full bg-black px-1 py-1">
                    <RiFlashlightFill className="h-4 w-4 text-white" />
                  </div>
                  <div className="px-3 py-2">
                    <h1 className="font-semibold text-black">Get Now</h1>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default {
  title: "Marketing/Pricing/Pricing 1",
  component: Pricing1,
};
