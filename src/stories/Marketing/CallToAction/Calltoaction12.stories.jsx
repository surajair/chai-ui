import { SectionWrapper } from "../../components/SectionWrapper";
export const Calltoaction12 = () => {
  return (
    <>
      <SectionWrapper>
        <div className="mx-4 text-center">
          <div className="flex justify-center py-3">
            <div className="px-4 py-4 lg:px-10">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652848200/Shape2_c7lgo2.png" />
            </div>
            <div className="px-4 py-4 lg:px-10">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652848073/Uber_xbfknj.png" />
            </div>
            <div className="px-4 py-4 lg:px-10">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652848073/Path_dg2wrr.png" />
            </div>
            <div className="px-4 py-4 lg:px-10">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652848073/1_runumr.png" />
            </div>
            <div className="hidden px-4 py-4 lg:inline lg:px-10">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652848073/Mashable_Logo_p2tmkw.png" />
            </div>
            <div className="hidden py-4 md:inline lg:px-10">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652847893/Shape_jnnj11.png" />
            </div>
          </div>
          <div className="py-3">
            <h3>
              It is a long established fact that a reader will be distracted by
              the readable content
              <br className="hidden md:inline lg:hidden" /> of a page when
              looking at its <br className="hidden lg:inline" /> layout. The
              point of using Lorem Ipsum is that it has{" "}
              <br className="hidden md:inline lg:hidden" />a more-or-less normal
              distribution of letters, as opposed to
              <br className="hidden lg:inline" /> using 'Content
              <br className="hidden md:inline lg:hidden" /> here, content here,
              making it look like readable English.{" "}
            </h3>
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
  title: "Marketing/CallToAction/Calltoaction 12",
  component: Calltoaction12,
};
