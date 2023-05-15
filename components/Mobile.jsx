import { useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(showMenu) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "ul",
      {
        scale: showMenu ? 1 : 0,
        opacity: showMenu ? 1 : 0,
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      showMenu
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: showMenu ? staggerMenuItems : 0,
      }
    );
  }, [showMenu]);

  return scope;
}
const Mobile = ({ showMenu, setFilter }) => {
  const scope = useMenuAnimation(showMenu);

  return (
    <div
      className={` sm:w-60 w-40 absolute top-8 left-0  flex-col rounded-2xl   ${
        showMenu ? "block" : "hidden"
      }`}
      ref={scope}
    >
      <ul className=" bg-black/95 flex flex-col gap-6 py-5 ">
        <li
          className="px-4 hover:text-slate-300 text-white text-center text-base"
          onClick={() => setFilter("Sci-fi")}
        >
          Sci-fi
        </li>
        <li
          className="px-4 hover:text-slate-300 text-white text-center text-base"
          onClick={() => setFilter("Adventure")}
        >
          Adventure
        </li>
        <li
          className="px-4 hover:text-slate-300 text-white text-center text-base"
          onClick={() => setFilter("Thriller")}
        >
          Thriller
        </li>
        <li
          className="px-4 hover:text-slate-300 text-white text-center text-base"
          onClick={() => setFilter("Action")}
        >
          Action
        </li>
        <li
          className="px-4 hover:text-slate-300 text-white text-center text-base"
          onClick={() => setFilter("Comedy")}
        >
          Comedy
        </li>
        <li
          className="px-4 hover:text-slate-300 text-white text-center text-base"
          onClick={() => setFilter(null)}
        >
          All
        </li>
      </ul>
    </div>
  );
};

export default Mobile;
