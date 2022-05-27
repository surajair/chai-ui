import { SectionWrapper } from "../../components/SectionWrapper";
export const Calltoaction6 = () => {
  return (
    <>
      <SectionWrapper>
        <div className="text-center">
          <div className="py-3">
            <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
              Invite friends & earn rewards
            </h1>
          </div>
          <div className="py-3">
            <h3 className=" leading-6 lg:text-lg">
              Create screens directly in Method or add
              <br className="lg:hidden" /> your images from Sketch or{" "}
              <br className="hidden md:inline" />
              Figma.
              <p className="hidden lg:inline">
                {" "}
                You can even sync designs from your cloud storage!
              </p>
            </h3>
          </div>
          <div>
            <form>
              <div className="justify-center py-3 lg:flex">
                <div className="px-2 py-2">
                  <input
                    type="text"
                    placeholder="Type Your e-mail"
                    className="h-12 w-72 rounded-lg border-0 bg-gray-200"
                  />
                </div>
                <div className="px-2 py-2">
                  <input
                    type="text"
                    placeholder="UserName"
                    className="h-12 w-72 rounded-lg border-0 bg-gray-200 text-black"
                  />
                </div>
                <div className="px-2 py-2">
                  <button className="bg-primary h-12 w-72 rounded-lg text-white">
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="px-10 py-5 lg:px-48">
            <hr />
          </div>
          <div className="justify-center py-4 lg:flex">
            <div className="flex justify-center">
              <div className="px-6 py-4 lg:order-1">
                <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652847893/Shape_jnnj11.png" />
              </div>
              <div className="px-6 py-4 lg:order-2">
                <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652848073/Uber_xbfknj.png" />
              </div>
              <div className="px-4 py-4 lg:order-3">
                <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652848073/1_runumr.png" />
              </div>
              <div className="px-4 py-4 lg:order-4">
                <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652848073/Path_dg2wrr.png" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="px-6 py-4 lg:order-1">
                <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652848073/Mashable_Logo_p2tmkw.png" />
              </div>
              <div className="px-6 py-4 lg:order-2">
                <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652848200/Shape2_c7lgo2.png" />
              </div>
              <div className="px-6 py-4 lg:order-3">
                <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652848200/Shape3_rkql60.png" />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default {
  title: "Marketing/CallToAction/Calltoaction 6",
  component: Calltoaction6,
};
