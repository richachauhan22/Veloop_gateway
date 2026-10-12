import { useState } from "react";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaQuestionCircle,
  FaChevronDown,
} from "react-icons/fa";

import styles from "./TrustRulesFAQ.module.css";

function TrustRulesFAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How can I participate in a giveaway?",
      answer:
        "Login to your VELOOP account, complete eligible activities, earn the required entries and join an available giveaway.",
    },
    {
      question: "When are winners announced?",
      answer:
        "Winners are announced after the active giveaway reaches its end time and the winner selection process is completed.",
    },
    {
      question: "Can I join a giveaway more than once?",
      answer:
        "Your participation depends on the entry rules and requirements of the specific giveaway.",
    },
    {
      question: "What happens if I win?",
      answer:
        "If your user ID matches a winner, you will be able to complete the applicable prize claim process.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className={styles.section}>
      {/* Trust */}
      <div className={styles.trust}>
        <div className={styles.trustIcon}>
          <FaShieldAlt />
        </div>

        <div>
          <span>TRUST & TRANSPARENCY</span>
          <h2>Clear Rules. Fair Participation.</h2>
          <p>
            Every giveaway clearly explains its entry requirements,
            duration, winner announcement and claim process.
          </p>
        </div>
      </div>

      {/* Rules */}
      <div className={styles.rules}>
        <div className={styles.sectionHeading}>
          <span>GIVEAWAY RULES</span>
          <h2>Before You Participate</h2>
        </div>

        <div className={styles.ruleGrid}>
          <div className={styles.rule}>
            <FaCheckCircle />
            <p>Check the eligibility requirements before joining.</p>
          </div>

          <div className={styles.rule}>
            <FaCheckCircle />
            <p>Make sure you have enough required entries or balance.</p>
          </div>

          <div className={styles.rule}>
            <FaCheckCircle />
            <p>Check the giveaway duration and countdown.</p>
          </div>

          <div className={styles.rule}>
            <FaCheckCircle />
            <p>Read the applicable terms and claim requirements.</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className={styles.faq}>
        <div className={styles.sectionHeading}>
          <span>FAQ</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div className={styles.faqItem} key={index}>
              <button
                type="button"
                className={styles.question}
                onClick={() => toggleFaq(index)}
              >
                <span>
                  <FaQuestionCircle />
                  {faq.question}
                </span>

                <FaChevronDown
                  className={
                    openFaq === index ? styles.rotate : ""
                  }
                />
              </button>

              {openFaq === index && (
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustRulesFAQ;