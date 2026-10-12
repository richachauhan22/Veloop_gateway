
import styles from "./Participate.module.css";

import { FaUserPlus,FaTasks,FaCoins,FaTrophy} from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaUserPlus />,
    title: "Create an account",
    description: "Sign up and join the giveaway to start participating.",
  },
  {
    id: 2,
    icon: <FaTasks />,
    title: "Complete tasks",
    description: "Finish the required actions to unlock more chances to win.",
  },
  {
    id: 3,
    icon: <FaCoins />,
    title: "Earn rewards",
    description: "Collect points and bonuses to boost your participation level.",
  },
  {
    id: 4,
    icon: <FaTrophy />,
    title: "Win prizes",
    description: "Stay active and be eligible for exciting giveaway rewards.",
  },
];

function Participate() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.heading}>
        <span>HOW IT WORK</span>
        <h2>How to Participate</h2>
        <p>Follow these simple steps to participate.</p>
      </div>

      <div className={styles.steps}>
        {steps.map((step) => (
          <div className={styles.step} key={step.id}>
            <div className={styles.iconWrapper}>
              {step.icon}
              <span>{step.id}</span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Participate;