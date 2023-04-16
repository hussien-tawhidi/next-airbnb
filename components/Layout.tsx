import Head from "next/head";
import Navbar from "./navbar";
import Register from "./modal/Register";
import ToasterProvider from "./providers/ToasterProvider";

export default function Layout({ children, title }: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <ToasterProvider/>
        <Register />
        <Navbar />
        {children}
      </main>
    </>
  );
}
