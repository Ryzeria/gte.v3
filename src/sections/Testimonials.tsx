"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "The Geomarine Tidal Expert has revolutionized our approach to coastal monitoring. The precision and accuracy in tidal measurement is exceptional!",
    imageSrc: avatar1.src,
    name: "Prof. Mokhamad Nurcahyadi, ST, M.Sc, Ph.D",
    username: "Professor",
  },
  {
    text: "We've successfully integrated the tidal analyzer in our research projects, and it has provided invaluable insights into tidal fluctuations.",
    imageSrc: avatar2.src,
    name: "Candida Aulia De Silva Nusantara, S.T., M.T.",
    username: "Lecturer",
  },
  {
    text: "Using the Geomarine Tidal Expert for real-time data logging has improved our ability to respond to tidal changes quickly and effectively.",
    imageSrc: avatar3.src,
    name: "Dr. Muhammad Aldila Syariz, S.T., M.S., Ph.D",
    username: "Researcher",
  },
  {
    text: "The integration of radar and pressure sensors gives us unmatched data accuracy. It's a must-have tool for any coastal management team.",
    imageSrc: avatar4.src,
    name: "Irena Hana Hariyanto, S.T., M.T.",
    username: "Lecturer",
  },
  {
    text: "Whether for research or coastal management, the Geomarine Tidal Expert has become an indispensable part of our equipment.",
    imageSrc: avatar5.src,
    name: "Dr. Khomsin, ST, MT",
    username: "Hydrographic Surveyor",
  },
  {
    text: "The user-friendly interface and reliable data output make the Geomarine Tidal Expert the perfect tool for monitoring tidal changes over long periods.",
    imageSrc: avatar6.src,
    name: "Danar Guruh Pratomo, ST, MT, Ph.D",
    username: "Surveyor",
  },
  {
    text: "With its cost-effective and accurate tidal monitoring capabilities, the Geomarine Tidal Expert has exceeded all expectations for our environmental studies.",
    imageSrc: avatar7.src,
    name: "Achmad Fahriza",
    username: "Product Engineer",
  },
  {
    text: "The high-quality data provided by the Geomarine Tidal Expert is a game-changer for our tidal analysis projects. Highly recommend!",
    imageSrc: avatar8.src,
    name: "Satya Budi Arnia",
    username: "Engineer",
  },
  {
    text: "Real-time tidal data is essential for our coastal operations, and the Geomarine Tidal Expert delivers just that with its precision and reliability.",
    imageSrc: avatar9.src,
    name: "Erlangga Candra Pramoedya",
    username: "Master Student",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, imageSrc, name, username }) => (
                <div className="card" key={username}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <Image
                      width={40}
                      height={40}
                      src={imageSrc}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 tracking-tight">{username}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section id="customers" className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>

          <h2 className="section-title mt-5">What our users say</h2>
          <p className="section-des mt-5">
            From accurate tidal measurements to seamless data logging, this is what experts and users are saying about the Geomarine Tidal Expert
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};