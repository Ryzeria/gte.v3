"use client";
import geomatikaLogo from "@/assets/logo-geomatika.png";
import itsLogo from "@/assets/logo-its.png";
import mncLogo from "@/assets/logo-mnc.png";
import diesLogo from "@/assets/logo-dies.png";
import elmechLogo from "@/assets/logo-elmech.png";
import drpmLogo from "@/assets/logo-drpm.png";
import { motion } from "framer-motion";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div
          className="flex overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, black, transparent)" }}
        >
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={geomatikaLogo} alt="Geomatika logo" className="logo-ticker-image" />
            <Image src={itsLogo} alt="ITS logo" className="logo-ticker-image" />
            <Image src={mncLogo} alt="MNC logo" className="logo-ticker-image" />
            <Image src={diesLogo} alt="Dies logo" className="logo-ticker-image" />
            <Image src={elmechLogo} alt="Elmech logo" className="logo-ticker-image" />
            <Image src={drpmLogo} alt="DRPM logo" className="logo-ticker-image" />

            <Image src={geomatikaLogo} alt="Geomatika logo" className="logo-ticker-image" />
            <Image src={itsLogo} alt="ITS logo" className="logo-ticker-image" />
            <Image src={mncLogo} alt="MNC logo" className="logo-ticker-image" />
            <Image src={diesLogo} alt="Dies logo" className="logo-ticker-image" />
            <Image src={elmechLogo} alt="Elmech logo" className="logo-ticker-image" />
            <Image src={drpmLogo} alt="DRPM logo" className="logo-ticker-image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
