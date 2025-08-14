"use client";

import { emailPattern, phoneRegex } from "@/utils/lib";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useFormik } from "formik";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import Alert from "./alert";
import { Button } from "./button";

import selling from "@/assets/images/contact-us/selling.svg";
import buying from "@/assets/images/contact-us/buying.svg";
import repairDesign from "@/assets/images/contact-us/repair-design.svg";
import { Spinner } from "./dynamiComponents";
import { sendContactDetails } from "@/services";
import { setContactMessage } from "@/store/slices/commonSlice";
import { useAlertTimeout } from "@/utils/hooks";
import CustomImage from "./customImage";

const inputClassName =
  "block w-full rounded-full p-3 md:p-3 md:px-5 2xl:p-4 2xl:px-8 text-[14px] lg:text-base placeholder:text-slate placeholder:text-[#898C92] sm:text-sm 2xl:text-lg  border border-[#DFDFDF] focus:outline-none";

const inquiryType = [
  {
    title: "selling",
    icon: selling,
    titleAttr: "",
    altAttr: "",
  },
  {
    title: "buying",
    icon: buying,
    titleAttr: "",
    altAttr: "",
  },
  {
    title: "repair or design",
    icon: repairDesign,
    titleAttr: "",
    altAttr: "",
  },
];
export default function ContactForm() {
  const dispatch = useDispatch();

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  const [selectedInquiry, setSelectedInquiry] = useState("selling");
  const { contactMessage, contactLoading } = useSelector(
    ({ common }) => common
  );

  useAlertTimeout(contactMessage, () =>
    dispatch(setContactMessage({ message: "", type: "" }))
  );

  const onSubmit = useCallback(async (val, { resetForm }) => {
    const res = await dispatch(sendContactDetails(val));
    if (res) {
      resetForm();
      setSelectedInquiry("selling");
    }
  }, []);

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      inquiryType: "selling",
      message: "",
    },
    validationSchema: yup.object({
      name: yup.string().trim().required("Name is required"),
      email: yup
        .string()
        .matches(emailPattern, "Email is not valid")
        .required("Email is required"),
      phoneNumber: yup
        .string()
        .matches(phoneRegex, "Phone number is not valid")
        .required("Phone number is required"),
      message: yup.string().trim().notRequired(),
    }),
    enableReinitialize: true,
    onSubmit,
  });
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  const handleInquirySelect = (type) => {
    setSelectedInquiry(type);
    setFieldValue("inquiryType", type);
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const contactCardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <form onSubmit={handleSubmit} onKeyDown={handleKeyPress}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <div>
          <input
            className={inputClassName}
            id="name"
            type="text"
            name="name"
            placeholder="FULL NAME"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.name || ""}
          />
          {touched?.name && errors?.name && (
            <p className="text-left text-sm 2xl:text-lg text-rose-500 ml-4">
              {errors?.name}
            </p>
          )}
        </div>
        <div>
          <input
            className={inputClassName}
            id="email"
            type="text"
            name="email"
            placeholder="MAIL@COMPANY.COM"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.email || ""}
          />
          {touched?.email && errors?.email && (
            <p className="text-left text-sm 2xl:text-lg text-rose-500 ml-4">
              {errors?.email}
            </p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 lg:mt-6 gap-4 lg:gap-6">
        <div>
          <input
            className={inputClassName}
            id="phoneNumber"
            type="text"
            name="phoneNumber"
            placeholder="(713) 555-5555"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.phoneNumber || ""}
          />
          {touched?.phoneNumber && errors?.phoneNumber && (
            <p className="text-left text-sm 2xl:text-lg text-rose-500 ml-4">
              {errors?.phoneNumber}
            </p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2  place-items-center gap-6 md:grid-cols-none md:flex md:justify-center  lg:gap-x-20 my-6 lg:my-10">
        {inquiryType.map((type, index) => {
          const isSelected = selectedInquiry === type.title;
          return (
            <div
              key={`inquiry-type-${index}`}
              className="w-fit cursor-pointer flex flex-col items-center"
              onClick={() => handleInquirySelect(type.title)}
            >
              <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={contactCardAnimation}
                className={`bg-white  flex justify-center items-center rounded-full ${
                  isSelected ? "border-[2px] border-[#323334]" : ""
                }`}
              >
                <motion.div
                  whileHover={{
                    rotateY: 360,
                    transition: {
                      duration: 2,
                      type: "spring",
                    },
                  }}
                  className="p-8"
                >
                  <CustomImage
                    srcAttr={type.icon}
                    titleAttr={type.srcAttr}
                    altAttr={type.altAttr}
                    className="w-7 lg:w-10"
                  />
                </motion.div>
              </motion.div>
              <h4 className="font-medium uppercase mt-2 text-center">
                {type.title}
              </h4>
            </div>
          );
        })}
      </div>
      <div>
        <textarea
          rows="6"
          className={`!rounded-3xl ${inputClassName}`}
          id="message"
          name="message"
          placeholder="Hello.."
          onChange={handleChange}
          onBlur={handleBlur}
          value={values?.message || ""}
        />
      </div>

      {contactMessage?.message ? (
        <div className="mt-4">
          {" "}
          <Alert message={contactMessage?.message} type={contactMessage.type} />
        </div>
      ) : null}

      <Button
        type="submit"
        title={"Send message"}
        variant="contained"
        color="primary"
        disabled={contactLoading}
        className={`w-fit my-3 lg:mt-6 !py-6 uppercase rounded-full !bg-[#323334] text-white   hover:!bg-white hover:text-[#323334] hover:!border-2 hover:!border-[#DFDFDF]  transition-all duration-300 ${
          contactLoading
            ? "!border-black-600/30 bg-black-600/20 hover:bg-black-600/20 pointer-events-none"
            : "!border-white/60"
        }`}
      >
        {contactLoading ? (
          <Spinner className={"!filter !invert"} />
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
