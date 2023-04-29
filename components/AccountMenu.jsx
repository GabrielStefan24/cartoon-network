import { signOut } from "next-auth/react";
import useCurrentUser from "@/Hooks/useCurrentUser";

const AccountMenu = ({ showProfile }) => {
  const { data: user } = useCurrentUser();

  return (
    showProfile && (
      <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
        <div className="flex flex-col gap-3">
          <div className="px-3  flex  items-center justify-center w-full">
            <p className="text-white text-sm ">{user?.username}</p>
          </div>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          onClick={() => signOut()}
          className="px-3 text-center text-white text-sm cursor-pointer hover:text-slate-300"
        >
          Sign out
        </div>
      </div>
    )
  );
};

export default AccountMenu;
