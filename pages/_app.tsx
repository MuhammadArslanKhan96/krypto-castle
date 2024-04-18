//@ts-nocheck
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { Web3ModalProvider } from "@/components/Web3Instance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Web3ModalProvider>
      <NextUIProvider>
        <Header />
        <div className="4xl1:flex 4xl1:justify-center 4xl1:items-center">
        <div className="4xl1:max-w-[1440px]">
        <Component {...pageProps} />
        </div>
        </div>
        {/* <Footer /> */}
        <ToastContainer />
      </NextUIProvider>
    </Web3ModalProvider>
  );
}
