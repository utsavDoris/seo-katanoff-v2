import axios from "axios";
import { sanitizeObject } from "@/utils/sanitize";
import {
  setContactLoading,
  setContactMessage,
  setSubscribeLoading,
  setSubscribeMessage,
} from "@/store/slices/commonSlice";
import { messageType } from "@/utils/lib";

export const sendContactDetails = (payload) => async (dispatch) => {
  try {
    dispatch(
      setContactMessage({
        message: "",
        type: "",
      })
    );
    dispatch(setContactLoading(true));
    const response = await axios.post(
      `/api/contact-us`,
      sanitizeObject(payload)
    );
    const { status } = response?.data || {};
    if (status == 200) {
      dispatch(
        setContactMessage({
          message:
            "Thank you for contacting us. We'll get back to you shortly.",
          type: messageType.SUCCESS,
        })
      );

      return true;
    }
    dispatch(
      setContactMessage({
        message: "Failed to contacting us.",
        type: messageType.ERROR,
      })
    );
    return false;
  } catch (error) {
    console.log(error);
    dispatch(
      setContactMessage({
        message: "Something went wrong",
        type: messageType.ERROR,
      })
    );
  } finally {
    dispatch(setContactLoading(false));
  }
};


export const sendSubscribeDetails = (payload) => async (dispatch) => {
  try {
    dispatch(
      setSubscribeMessage({
        message: "",
        type: "",
      })
    );
    dispatch(setSubscribeLoading(true));
    const response = await axios.post(
      `/api/subscribe`,
      sanitizeObject(payload)
    );
    const { status } = response?.data || {};
    if (status == 200) {
      dispatch(
        setSubscribeMessage({
          message:
            "Thank you for subscribing! You’re now connected with us to receive updates about our exquisite jewelry collections.",
          type: messageType.SUCCESS,
        })
      );

      return true;
    }
    dispatch(
      setSubscribeMessage({
        message: "Failed to subscribing.",
        type: messageType.ERROR,
      })
    );
    return false;
  } catch (error) {
    dispatch(
      setSubscribeMessage({
        message: "Something went wrong",
        type: messageType.ERROR,
      })
    );
  } finally {
    dispatch(setSubscribeLoading(false));
  }
};
