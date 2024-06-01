"use client";
import React, { useState } from "react";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "Do I need to sign a contract?",
      answer:
        "We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions.After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract.",
    },
    {
      question: "How do we ensure quality of deliverables?",
      answer:
        "We are researchers, first. We thoroughly benchmark our proposed solutions against internal and public datasets and baselines after each development sprint. After final delivery, we will continuously enhance our delivery based on your feedbacks.",
    },
    {
      question: "How do I begin collaboration?",
      answer:
        "Please contact us at solutions@lenscorp.ai. We usually respond within 24 Hrs.",
    },
    {
      question: "What sevices do we offer?",
      answer:
        "We build accurate and efficient AI systems for your business. Our ethically-trained solutions are paving a new path forward to create explainable, transparent, and easily customizable. In addition, we grant ownership of all copyrights to the system, software, and model to you.",
    },
    {
      question: "How do you ensure user privacy?",
      answer:
        "We do not share, sell, or rent your competitive information (including any and all data) to any third party.Since we grant exclusive Intellectual Property Rights back to you, we have no intention of violating any user privacy.",
    },
    {
      question: "How can I pay for the services?",
      answer:
        "We split the entire project into multiple milestones.We work on an advanced milestone payment basis with an option to drop off remaining milestones anytime.",
    },
  ];

  return (
    <div className="dark:bg-black py-12 md:pr-32 md:pl-32">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="shadow-md rounded-xl ">
              <button
                className="w-full py-4 px-6 text-left dark:bg-black focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-black dark:text-white">
                    {faq.question}
                  </span>
                  <span className="ml-2 text-black dark:text-white">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </div>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 dark:bg-black">
                  <p className="text-black dark:text-white">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
