import Hero from "@/components/Hero";
import contactUsHero from "@/assets/images/contact-us/hero-banner.webp";
import phone from "@/assets/images/icons/phone.svg";
import location from "@/assets/images/icons/location.svg";
import openingHours from "@/assets/images/icons/opening-hour.svg";
import { ContactForm } from "@/components/dynamiComponents";
import { companyAddress, companyPhoneNo } from "@/utils/environments";
import Marquee from "@/components/Marquee";
import CustomImage from "@/components/customImage";
export default function ContactUs() {
  return (
    <>
      <Hero
        title={"We’re Here to Help"}
        imageSrc={contactUsHero}
        textAlignment="center"
        titleAttr=""
        altAttr=""
      />
      <section className="container py-10 md:py-14 xl:py-24 2xl:py-36">
        <div className="border border-[#DFDFDF] rounded-[25px] lg:rounded-[40px] flex flex-col lg:flex-row w-full ">
          <div className="bg-white lg:w-[40%] rounded-t-[25px] lg:rounded-tr-none lg:rounded-l-[40px] p-8 lg:p-10">
            <div className="flex items-center gap-2">
              <CustomImage
                srcAttr={openingHours}
                titleAttr=""
                altAttr=""
                className="w-5 lg:w-6 object-cover"
              />
              <h3 className="font-semibold text-black md:text-md 2xl:text-[24px]">
                Opening Hours:
              </h3>
            </div>
            <div className="flex w-full mt-2">
              <ul className="md:text-md w-1/3  2xl:text-[20px]  text-[#323334]">
                <li>Monday :</li>
                <li>Tueday : </li>
                <li>Wednesday :</li>
                <li>Thursday :</li>
                <li>Friday :</li>
                <li>Saturday :</li>
                <li>Sunday :</li>
              </ul>
              <ul className="md:text-md w-1/3  2xl:text-[20px]  text-[#323334]">
                <li>11:00 am to 6 pm</li>
                <li>11:00 am to 6 pm</li>
                <li>Closed</li>
                <li>11:00 am to 6 pm</li>
                <li>11:00 am to 6 pm</li>
                <li>10:30 am to 2 pm</li>
                <li>Closed</li>
              </ul>
            </div>

            <div className="border-y-[1px] border-[#DFDFDF] flex items-center gap-2 py-4 2xl:py-6 my-4 2xl:my-6 lg:w-[60%]">
              <CustomImage
                srcAttr={phone}
                titleAttr=""
                altAttr=""
                className="w-5 lg:w-6 object-cover"
              />
              <p className="md:text-md  lg:text-lg  2xl:text-[24px] font-semibold text-black">
                Call Us: {companyPhoneNo}
              </p>
            </div>
            <div className="flex items-start gap-2 ">
              <CustomImage
                srcAttr={location}
                titleAttr=""
                altAttr=""
                className="w-5 lg:w-6 object-cover"
              />
              <p className="md:text-md  lg:text-lg  2xl:text-[24px] font-semibold text-black">
                {companyAddress}
              </p>
            </div>
          </div>
          <div className="lg:w-[60%] h-auto  ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6021.880083005206!2d-80.66192472769886!3d41.004685525904335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8833fa471e95158f%3A0xc9eccbe11e133a89!2sTele%20Gold!5e0!3m2!1sen!2sin!4v1742374739089!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[400px] lg:h-full rounded-b-[25px] lg:rounded-bl-none lg:rounded-r-[40px]"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </section>
      <section className="container py-10 md:py-14 xl:py-24 2xl:py-36">
        <div className="relative lg:w-fit text-center lg:text-start text-[#383838]">
          <h3 className="font-bendungan text-3xl lg:text-6xl z-40">
            Send a message...
          </h3>
          <p className="lg:absolute lg:right-0 mt-6 font-medium">
            Feel free to contact us any time. we will get back to you as soon as
            we can!
          </p>
        </div>
        <div className="mt-10 lg:mt-32">
          <ContactForm />
        </div>
      </section>
      <section className="pb-3 md:pb-10 xl:pb-16 2xl:pb-36">
        <Marquee variant="contact" />
      </section>
    </>
  );
}
