"use client";
import React, { useCallback } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { emailPattern } from "@/utils/lib";
import { Button } from "./button";
import { useDispatch, useSelector } from "react-redux";
import { sendSubscribeDetails } from "@/services";
import Spinner from "./spinner";
import Alert from "./alert";
import { useAlertTimeout } from "@/utils/hooks";
import { setSubscribeMessage } from "@/store/slices/commonSlice";
const inputClassName =
  "peer block w-full placeholder:tracking-[5px]  p-3 md:p-3 2xl:p-4 text-[14px]  bg-transparent font-inter lg:text-base placeholder:text-slate placeholder:text-opacity-70 sm:text-sm border-[#BBBBBB]  border-b focus:outline-none ";

const EmailComponent = () => {
  const dispatch = useDispatch();

  const { subscribeLoading, subscribeMessage } = useSelector(
    ({ common }) => common
  );

  useAlertTimeout(subscribeMessage, () =>
    dispatch(setSubscribeMessage({ message: "", type: "" }))
  );

  const onSubmit = useCallback(async (val, { resetForm }) => {
    const res = await dispatch(sendSubscribeDetails(val));
    if (res) resetForm();
  }, []);

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: yup.object({
        email: yup
          .string()
          .matches(emailPattern, "Email is not valid")
          .required("Email is required"),
      }),
      enableReinitialize: true,
      onSubmit,
    });
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit}
          onKeyDown={handleKeyPress}
          className="flex flex-col gap-3 lg:gap-4 sm:gap-3 pt-2 lg:pt-5"
        >
          <div>
            <input
              className={inputClassName}
              id="email"
              type="email"
              name="email"
              placeholder="ENTER EMAIL"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.email || ""}
            />
            {touched?.email && errors?.email && (
              <p className="text-left text-sm text-rose-500 ml-4 mt-1">
                {errors?.email}
              </p>
            )}
          </div>

          {subscribeMessage?.message ? (
            <Alert
              message={subscribeMessage?.message}
              type={subscribeMessage.type}
            />
          ) : null}
          <Button
            type="submit"
            title={"Submit"}
            variant="contained"
            color="black"
            disabled={subscribeLoading}
            className={`relative group w-fit my-2 lg:mt-3 !text-white !rounded-none font-inter !py-2 px-6 overflow-hidden border cursor-pointer transition-all duration-500 ${
              subscribeLoading
                ? "!border-black !bg-[#fff5df] !hover:bg-[#fff5df] pointer-events-none"
                : "!bg-[#fff5df] !border-black"
            }`}
          >
            {/* Button Text */}
            <span
              className={`relative z-10 transition-colors duration-500 ${
                subscribeLoading ? "" : "group-hover:text-black"
              }`}
            >
              {subscribeLoading ? <Spinner /> : "SUBMIT"}
            </span>

            {/* Hover Background Effect */}
            {!subscribeLoading && (
              <div className="absolute inset-0 bg-black z-0 transition-all duration-500 transform translate-x-0 group-hover:translate-x-full"></div>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};
export default EmailComponent;
