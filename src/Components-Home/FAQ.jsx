import React, { useState } from "react";
import "../App.css";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Answer content goes here.",
      isOpen: false,
    },
    {
      question:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Answer content goes here.",
      isOpen: false,
    },
    {
      question:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Answer content goes here.",
      isOpen: false,
    },
    {
      question:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Answer content goes here.",
      isOpen: false,
    },
  ]);

  const toggleFaq = (index) => {
    setFaqs(
      faqs.map((faq, i) => ({
        ...faq,
        isOpen: i === index ? !faq.isOpen : false,
      }))
    );
  };

  return (
    <div className="FAQ-container">
      <div className="FAQs">
        <p className="faq-head">FAQs</p>
        {faqs.map((faq, index) => (
          <div className="FAQ-feeds" key={index}>
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              {faq.question}
              <span className="faq-toggle">{faq.isOpen ? "-" : "+"}</span>
            </div>
            {faq.isOpen && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
        <div className="ask-question">
          <p>FEEL FREE TO ASK YOUR QUESTION</p>
          <div className="FAQ-input">
            <input type="text" placeholder="TYPE HERE" />
            <button className="input-button" type="submit">
              ASK
            </button>
          </div>
        </div>
        <button className="all-faq">VIEW ALL FAQ</button>
      </div>
      <div className="feedback-form">
        <p className="faq-head">Feedback Form</p>
        <form>
          <div className="form-group">
            <input type="text" placeholder="FULL NAME" />
            <div className="form-row">
              <input type="text" placeholder="EMAIL" />
              <input type="text" placeholder="PHONE" />
            </div>
            <textarea placeholder="MESSAGE" />
          </div>
          <div className="consent">
            <input type="checkbox" id="consent" name="consent" required />
            <label htmlFor="consent">
              I agree to receive mail on my email address from Batas Maw or its
              authorized associates to assist me further.
            </label>
          </div>
          <button className="feedback-form-button" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default FAQ;
