export const Calltoaction13 = () => {
  return (
    <>
      <div className="dark py-0 dark:bg-black dark:text-white lg:py-14">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2">
          <div className="bg-gray-100 text-center lg:text-left">
            <div className="mx-14 py-3">
              <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
                Newsletter
              </h1>
            </div>
            <div className="mx-14 py-3">
              <h3 className=" leading-6 lg:text-lg">
                Create screens directly in Method or add{" "}
                <br className="hidden lg:inline" />
                your images from Sketch or Figma.
              </h3>
            </div>
            <form>
              <div className="justify-center py-3 md:flex lg:justify-start">
                <div className="py-3 md:pl-14">
                  <input
                    type="text"
                    placeholder="Type Your e-mail"
                    className="h-12 w-72 rounded-lg border-0 bg-gray-200"
                  />
                </div>
                <div className="px-14 py-3   md:px-3">
                  <button className="bg-primary h-12 w-72 rounded-lg text-white lg:w-56">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="h-64 bg-gray-200"></div>
        </div>
      </div>
    </>
  );
};

export default {
  title: "Marketing/CallToAction/Calltoaction 13",
  component: Calltoaction13,
};
