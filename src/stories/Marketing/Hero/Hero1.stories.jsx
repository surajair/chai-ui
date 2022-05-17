import { HeroHeading } from "../../components/HeroHeading";
import { PrimaryBtn } from "../../components/Button";
import { FaBars } from "react-icons/all";

export const Hero1 = () => {
  return (
    <div className="p-14">
      <div className="flex justify-center">
        <div className="h-16 w-16 rounded-lg bg-blue-600 py-3 px-1">
          <FaBars className={"h-full w-full"} />
        </div>
      </div>
      <div className="py-14 px-36 text-center">
        <div>
          <HeroHeading>
            The New Standart In <br /> Online Payments
          </HeroHeading>
          <p className="pt-8 text-lg lg:mx-8">
            It is a long established fact that a reader will be distracted{" "}
            <br /> by the readable content of a page when looking at its <br />{" "}
            layout. The point of using Lorem Ipsum
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <a
          className="mx-3 rounded-lg border-2 border-black bg-blue-600 px-5 py-2 text-xl text-white hover:shadow-xl"
          href=""
        >
          Get Started
        </a>
        <PrimaryBtn label={"Learn More"} />
      </div>
    </div>
  );
};

export default {
  title: "Marketing/Hero/Hero 1",
  component: Hero1,
};
