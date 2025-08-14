import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";
import { NextResponse } from "next/server";
import { emailPattern, message as responseMessage } from "@/utils/lib";
import { contactDetailsReceivedEmail, contactUsEmail } from "@/utils/template";
import { sendMail } from "@/utils/mailer";
import { companyEmail, CONTACT_REQUEST_PATH } from "@/utils/environments";
import { fetchWrapperService } from "@/utils/fetch-wrapper";

const window = new JSDOM("").window;
const DOMPurifyInstance = DOMPurify(window);

const sanitizeValue = (value) => {
  return DOMPurifyInstance.sanitize(value);
};

export async function POST(request) {
  try {
    const bodyData = await request.json();
    let { name, email, phoneNumber, message, inquiryType } = bodyData;

    name = sanitizeValue(name) ? name.trim() : null;
    email = sanitizeValue(email) ? email.trim() : null;
    phoneNumber = sanitizeValue(phoneNumber) ? Number(phoneNumber) : null;
    message = sanitizeValue(message) ? message.trim() : null;
    inquiryType = sanitizeValue(inquiryType) ? inquiryType.trim() : null;

    if (name && email && phoneNumber) {
      const emailResult = emailPattern.test(email);
      if (emailResult) {
        // Send Mail to company owner
        const { subject: cdSubject, description: cdDesc } =
          contactDetailsReceivedEmail({
            name,
            email,
            phoneNumber,
            message,
            inquiryType,
          });
        const cdMailPayload = {
          toMail: companyEmail,
          subject: cdSubject,
          body: cdDesc,
        };

        await sendMail(cdMailPayload);

        // Prepare request payload
        const insertPattern = {
          name,
          email,
          phoneNumber,
          message,
          inquiryType,
          createdDate: new Date().toLocaleDateString(),
        };

        const createPattern = {
          url: CONTACT_REQUEST_PATH,
          insertPattern,
        };

        await fetchWrapperService.create(createPattern).catch((e) => {
          return NextResponse.json({
            status: 400,
            message: responseMessage.custom(
              "An error occurred during contact request creation."
            ),
          });
        });
        const response = NextResponse.json({
          status: 200,
          message: responseMessage.SUCCESS,
        });

        // Send Mail to customer
        try {
          const { subject, description } = contactUsEmail({ userName: name });
          const mailPayload = {
            toMail: email,
            subject,
            body: description,
          };

          sendMail(mailPayload);
        } catch (error) {
          console.log("Error sending email", error);
        }

        return response;
      } else {
        return NextResponse.json({
          status: 400,
          message: responseMessage.EMAIL_VALIDATION,
        });
      }
    } else {
      return NextResponse.json({
        status: 400,
        message: responseMessage.INVALID_DATA,
      });
    }
  } catch (error) {
    console.log(error?.message, "e");
    return NextResponse.json({
      status: 500,
      message: responseMessage.SERVER_ERROR,
    });
  }
}
