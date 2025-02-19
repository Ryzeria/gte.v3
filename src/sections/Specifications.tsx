"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const specifications = [
  {
    title: "Geomarine Tidal Expert",
    details: [
      {
        feature: "Tidal Observation",
        description: "Pressure Transducer Option",
      },
      {
        feature: "Type",
        description: "Vented strain gauge with stainless steel mounting bracket",
      },
      {
        feature: "Range",
        description: "Standard 10dBar (~10m), with 20m cable Other ranges and lengths available",
      },
      {
        feature: "Pressure Accuracy",
        description: "±0.1% of full scale",
      },
      {
        feature: "Radar Level Sensor Option",
        description: "See data sheet for full details",
      },
      {
        feature: "Minimum Range",
        description: "0.8m",
      },
      {
        feature: "Maximum Range",
        description: "20m",
      },
      {
        feature: "Beam Angle",
        description: "±6°",
      },
      {
        feature: "Frequency",
        description: "25 GHz",
      },
      {
        feature: "Radar Accuracy",
        description: "±10 mm",
      },
      {
        feature: "Precision",
        description: "1 mm",
      },
    ],
  },
  {
    title: "Geomarine Tide Logger",
    details: [
      {
        feature: "Logging Unit Housing & Bracket",
        description: "Injection moulded housing rated to IP67",
      },
      {
        feature: "Power",
        description: "Alkaline cells provide power for up to a year of autonomous sampling",
      },
      {
        feature: "Memory",
        description: "512 MB SD card memory (effectively unlimited data storage)",
      },
      {
        feature: "Sampling",
        description: "Custom sampling mode (Burst & Continuous Sampling Mode)",
      },
      {
        feature: "Switching",
        description: "Power switch on unit",
      },
      {
        feature: "Resolution",
        description: "Data logged to 1mm resolution",
      },
      {
        feature: "Comms",
        description: "Integral wireless module for short range wireless communication RS232/RS485 for cabled communication",
      },
      {
        feature: "Dimensions",
        description: "Housing: 52 mm x 144.5 mm x 197 mm",
      },
      {
        feature: "Weight",
        description: "~15 kg including batteries",
      },
    ],
  },
  {
    title: "Geomarine Tide Analyzer",
    details: [
      {
        feature: "Telemetry",
        description: "Radio (see UHF telemetry data sheet for full details)",
      },
      {
        feature: "Frequency",
        description: "Selectable frequency UHF synthesized radio transceiver, (403...473MHz)",
      },
      {
        feature: "Software",
        description: "System is supplied with TideMaster Express Windows based PC software, for instrument setup, data extraction and display.",
      },
      {
        feature: "Analysis Features",
        description: "Tidal constituent analysis, vertical datum control, and remote web-based control",
      },
    ],
  },
];

export const Specifications = () => {
  return (
    <section id="specifications" className="py-24 bg-white">
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-heading">
          <h2 className="section-title">Specifications</h2>
          <p className="section-des mt-5">
            Explore the advanced features and technical specifications of the Geomarine Tidal Expert and its complementary devices.
          </p>
        </div>

        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-start lg:justify-center">
          {specifications.map(({ title, details }) => (
            <motion.div
              key={title}
              className={twMerge("p-10 rounded-3xl border border-[#F1F1F1] shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full")}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-bold text-black">{title}</h3>
              <ul className="flex flex-col gap-4 mt-8">
                {details.map(({ feature, description }) => (
                  <li key={feature} className="text-sm flex items-start gap-3">
                    <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <div className="leading-tight">
                      <strong>{feature}:</strong> {description}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};