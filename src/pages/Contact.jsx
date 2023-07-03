import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Social from "./components/Social";
import { motion } from "framer-motion";

function Contact() {
  const [state, handleSubmit] = useForm("xpzebjqn");

  if (state.succeeded) {
    return (
      <div className="message-sent">
        <p className="message">Message Sent. Thanks for Reaching Out!</p>
        <Social />
      </div>
    );
  }
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
    >
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="firstname"
          id="name"
          placeholder="First Name *"
          required
        />
        <input type="text" name="lastname" id="name" placeholder="Last Name" />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email *"
          required
        />
        <input type="tel" name="phone" id="phone" placeholder="Mobile No" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          id="message"
          name="message"
          placeholder="Write Something *"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
      <Social />
    </motion.div>
  );
}

export default Contact;
