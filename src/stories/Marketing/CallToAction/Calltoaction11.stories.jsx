import { Button } from "react-bootstrap";
export const Calltoaction11 = () => {
  return (
    <>
      <div className="dark dark:bg-black dark:text-white">
        <div className="my-auto px-4 pt-10 text-center md:px-10 lg:pt-16 ">
          <div className="py-3 px-3">
            <h2 className="font-bold">Product of the day</h2>
          </div>
          <div className="py-3 px-3">
            <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
              All Your Tools In One <br /> Connected Inbox
            </h1>
          </div>
          <div className="flex justify-center py-3">
            <Button className="bg-primary h-12 w-44 rounded-lg">
              <div className="px-3 py-2 text-center text-white">
                <h1 className="font-semibold">Get Started</h1>
              </div>
            </Button>
          </div>

          <div className="hidden items-end justify-center pt-3 md:inline md:flex">
            <div className="order-1 -mx-32   ">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652877283/1_zm5nwi.png" />
            </div>
            <div className="relative order-2">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652877283/2_axn84r.png" />
            </div>
            <div className="order-3 -mx-32">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652877441/3_lehyiw.png" />
            </div>
          </div>
          <div className="flex items-end justify-center pt-3 md:hidden">
            <div className="order-1 -mx-32">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652877283/11_fsjgpf.png" />
            </div>
            <div className="relative order-2">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652877283/12_ozlvfd.png" />
            </div>
            <div className="order-3 -mx-32">
              <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652877282/13_iwvfbn.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default {
  title: "Marketing/CallToAction/Calltoaction 11",
  component: Calltoaction11,
};
