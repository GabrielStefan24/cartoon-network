import { signOut } from "next-auth/react";
import useCurrentUser from "@/Hooks/useCurrentUser";
import { useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";

function useMenuAnimation(showProfile) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "div",
      {
        scale: showProfile ? 1 : 0,
        opacity: showProfile ? 1 : 0,
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );
  }, [showProfile]);

  return scope;
}

const AccountMenu = ({ showProfile }) => {
  const { data: user } = useCurrentUser();
  const scope = useMenuAnimation(showProfile);

  return (
    <div
      className={`w-56 absolute top-13 right-0  flex-col  flex ${
        showProfile ? "block" : "hidden"
      }`}
      ref={scope}
    >
      <div className="bg-black/95 py-5 border-gray-800 border-2">
        <p className="text-white text-sm px-3">{user?.username}</p>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <button
          type="button"
          onClick={() => signOut()}
          className="px-3 text-center text-white text-sm cursor-pointer hover:text-slate-300 "
        >
          Sign out
        </button>
      </div>
    </div>
  );
};


export default AccountMenu;
