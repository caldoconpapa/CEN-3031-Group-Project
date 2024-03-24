import welcome from "../assets/welcome.png";
import easy from "../assets/easy-to-use.png";
import Button from "../components/ui/Button";
import delivery from "../assets/delivery.png";
import circleEnvelope from "../assets/circle-envelope.png";
import { NavLink } from "react-router-dom";

function Welcome() {
  return (
    <article className="mb-5 flex h-full flex-col gap-5 sm:mb-20 sm:justify-around">
      <figure className=" flex flex-col items-center gap-10 sm:mx-4 sm:mt-4 sm:flex-row xl:mx-36">
        <img
          src={welcome}
          alt="Volunteers handing out food"
          className="w-full sm:w-1/2 sm:max-w-3xl  "
        />
        <figcaption className=" flex w-80 flex-col items-center gap-5 font-robotoslab sm:flex-grow">
          <p className="sm:text-2xl lg:text-4xl">
            Transforming excess into impact. Join us in reshaping communities
            and ensuring no meal goes to waste.
          </p>
          <NavLink to="/login">
            <Button
              disabled={false}
              className=" hover:bg-green-500 hover:font-bold lg:text-xl "
            >
              Get Started
            </Button>
          </NavLink>
        </figcaption>
      </figure>
      <section className="flex flex-col items-center gap-10 font-robotoslab sm:flex-row sm:items-baseline sm:justify-evenly ">
        <div className="flex w-64 flex-col items-center text-center  ">
          <img src={easy} alt="fingers snapping" className="w-14 md:w-1/2" />
          <h3 className="text-xl font-bold">Easy Donation Posting</h3>
          <p>Quickly share surplus food and make a meaningful impact!</p>
        </div>
        <div className="flex w-64 flex-col items-center text-center ">
          <img
            src={circleEnvelope}
            alt="image of an evelope"
            className="w-14 md:w-1/2"
          />
          <h3 className="text-xl font-bold">
            Instant Messaging for Coordination
          </h3>
          <p>Coordinate pickup details instantly!</p>
        </div>
        <div className="flex w-64  flex-col items-center text-center ">
          <img src={delivery} alt="image of box" className="w-14 md:w-1/2" />
          <h3 className="text-xl font-bold">Simple Donation Claiming</h3>
          <p>Get what you need hassle-free!</p>
        </div>
      </section>
    </article>
  );
}

export default Welcome;