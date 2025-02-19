"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import emailjs from '@emailjs/browser';
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";

const footerMaps = [
  {
    title: "DEPARTEMEN TEKNIK GEOMATIKA ITS",
    address: "Gedung Teknik Geomatika, Kampus ITS, Keputih, Sukolilo, Keputih, Sukolilo, Surabaya 60111, Jawa Timur 60117, Indonesia",
    phone: "Phone : 031-5929486 / Fax : 031-5929487",
    email: "geomatika@its.ac.id",
    mapLink: "https://maps.google.com/maps?q=Departemen%20Teknik%20Geomatika%20ITS%20Sukolilo%20Surabaya&output=embed",
  },
];

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const form = formRef.current;
      if (!form) return;

      const formElement = form as HTMLFormElement;
      const formData = new FormData(formElement);

      const templateParams = {
        from_name: `${formData.get('firstName')} ${formData.get('lastName')}`,
        from_email: formData.get('email'),
        company: formData.get('company') || 'Not specified',
        country: formData.get('country'),
        message: formData.get('enquiry'),
        reply_to: formData.get('email'),
      };

      console.log('Sending email with params:', templateParams);

      const result = await emailjs.send(
        'service_4x2bqzm',
        'template_qcqkrl4',
        templateParams,
        'CTc1ddBDcfurCHHAq'
      );

      console.log('EmailJS Response:', result);

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Terima kasih! Pesan Anda telah berhasil dikirim.'
        });
        formElement.reset();
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Maaf, terjadi kesalahan. Silakan coba lagi nanti.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="support"
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">
            Unlock Accurate Tidal Measurements Today
          </h2>
          <p className="section-des mt-5">
            Experience the power of Geomarine Tidal Expert for precise tidal
            monitoring and analysis. Perfect for research and coastal
            management.
          </p>

          <motion.img
            src={starImage.src}
            alt="star image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{ translateY }}
          />
          <motion.img
            src={springImage.src}
            alt="spring image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{ translateY }}
          />
        </div>

        {/* Contact and Product Inquiry Section */}
        <div className="flex flex-wrap md:flex-nowrap mt-16 gap-8">
          {/* Product Inquiry Form */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold mb-4">Product Inquiry</h3>
            {submitStatus.type && (
              <div className={`mb-4 p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : 'bg-red-100 text-red-700 border border-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Company</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Enter your company name"
                    className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Country</label>
                  <select 
                    name="country"
                    className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Enquiry</label>
                <textarea
                  name="enquiry"
                  placeholder="Type your message here..."
                  className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isSubmitting 
                    ? 'opacity-75 cursor-not-allowed' 
                    : 'hover:bg-blue-700 active:bg-blue-800'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : 'Submit'}
              </button>
            </form>
          </div>

          {/* Contact and Map */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p>{footerMaps[0].title}</p>
              <p>{footerMaps[0].address}</p>
              <p>{footerMaps[0].phone}</p>
              <p>Email: <a href={`mailto:${footerMaps[0].email}`} className="text-blue-600 hover:underline">{footerMaps[0].email}</a></p>
            </div>
            <iframe
              src={footerMaps[0].mapLink}
              className="w-full h-64 mt-4 border rounded-md"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};