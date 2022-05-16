import { SectionWrapper } from "../../components/SectionWrapper";

export const Feature13 = () => {
  return (
    <>
      <SectionWrapper>
        <div className="px-5 grid lg:grid-cols-2">
          <div className="py-3">
            <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
              Perfect for sales,
              <br className="hidden md:inline" /> marketing and support
            </h1>
          </div>
          <div className="py-3">
            <h3 className="leading-6 lg:text-lg">
              Create screens directly in Method or add your images
              <br className="hidden md:inline" /> from Sketch or Figma. You can
              even sync designs
              <br className="hidden md:inline" /> from your cloud storage!
            </h3>
          </div>
        </div>
      </SectionWrapper>
      <div className="flex justify-center">
        <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652719060/Block_pvjzah.png" />
      </div>
    </>
  );
};
export default {
  title: "Marketing/Features/Feature 13",
  component: Feature13,
};
