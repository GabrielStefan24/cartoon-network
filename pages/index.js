import Nav from "@/components/Nav";
import { getUserData } from "@/library/userData";

import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  const { user } = await getUserData(context);

  return {
    props: {
      user,
    },
  };
}

export default function Home({ user }) {
  return (
    <>
      <Nav />
    </>
  );
}
