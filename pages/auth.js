import Input from "../components/Input";
import { useCallback, useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Auth = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [view, setView] = useState("login");

  const toggleView = useCallback(() => {
    setView((currentView) => (currentView === "login" ? "register" : "login"));
  }, []);
  const login = useCallback(async () => {
    await signIn("crd", {
      email,
      password,
      redirect: false,
      callbackUrl: "/",
    })
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [email, password, router]);
  const register = useCallback(async () => {
    axios
      .post("/api/register", {
        email,
        username,
        password,
      })
      .then(() => {
        login();
      })
      .catch((error) => {
        console.log(error);
      });
  }, [email, username, password, login]);

  return (
    <div className=" bg-no-repeat relative  bg-[url('/images/BackgroundCN.webp')] w-full h-full bg-center bg-cover">
      <div className="bg-black w-full h-full md:bg-opacity-60">
        <nav className="p-12 ">
          <img
            src="/images/LogoCN.webp"
            alt="Logo of Cartoon Network"
            className="w-2/12  xl:w-1/12 "
          />
        </nav>
        <div className="flex justify-center">
          <div className="px-14 py-14 bg-black/90  mt-4  md:max-w-xl rounded-xl w-full">
            <h2 className="text-white text-4xl mb-10 font-semibold">
              {view === "login" ? "Sign in" : "Create account"}
            </h2>
            <div className="flex flex-col gap-4">
              <Input
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                id="Email"
                type="email"
                value={email}
              />
              {view === "register" && (
                <Input
                  label="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  id="username"
                  value={username}
                />
              )}

              <Input
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button
              onClick={view === "login" ? login : register}
              className="text-white w-full bg-purple-700 p-4 mt-6 rounded-md hover:bg-purple-600 transition ease-in-out"
            >
              {" "}
              {view === "login" ? "Login" : "Register"}
            </button>

            <p className=" text-neutral-500 mt-6 text-center text-xl">
              {view === "login"
                ? "Use the test account or "
                : "Already have an account? "}
              <span
                className="text-white hover:underline cursor-pointer"
                onClick={toggleView}
              >
                {view === "login" ? "create one yourself" : " Sign in"}
              </span>
            </p>
            <p className="text-xl text-white text-center mt-6 ">
              {view === "login" && (
                <span>
                  {" "}
                  Test Account <br />
                  Email : guest2023@yahoo.com <br />
                  Password : 12345678
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
