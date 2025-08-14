"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What are the 4Cs of Diamonds?",
    answer:
      "Diamonds are graded based on Carat (weight), Cut (sparkle), Color (whiteness), and Clarity (flaws/inclusions).",
  },
  {
    question: "Are lab-grown diamonds real diamonds?",
    answer:
      "Yes, they have the same chemical and physical properties as natural diamonds but are created in a lab.",
  },
  {
    question: "What diamond shape is the best?",
    answer: "The best diamond shape depends on personal preference and style.",
  },
  {
    question: "How can I tell if a diamond is real?",
    answer:
      "You can verify a diamond’s authenticity using a diamond tester or professional jeweler.",
  },
  {
    question: "What's the best setting for a diamond ring?",
    answer:
      "The best setting depends on the wearer’s lifestyle and aesthetic preference.",
  },
  {
    question: "Are diamonds a good investment?",
    answer:
      "Diamonds can hold value, but they are not typically considered a liquid investment.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" flex justify-center  md:px-4">
      <div className="w-full max-w-7xl">
        {faqData.map((item, index) => (
          <div key={index} className="my-2 bg-white px-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-8 md:px-6 text-left text-xl xl:text-[24px] font-semibold"
            >
              {item.question}
              <ChevronDown
                className={`w-9 h-9 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden text-md xl:text-xl transition-all duration-300 ${
                openIndex === index ? "max-h-40 py-2 px-2 md:px-6" : "max-h-0"
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
