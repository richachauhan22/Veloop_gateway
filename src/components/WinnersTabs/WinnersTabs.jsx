import { useState } from "react";
import { FaTrophy, FaGift } from "react-icons/fa";
import styles from "./WinnersTabs.module.css";

const previousWinners = [
  {
    id: 1,
    userId: "VE****42",
    prize: "iPhone 15 Pro",
    giveaway: "September Giveaway",
  },
  {
    id: 2,
    userId: "VE****18",
    prize: "Apple Watch",
    giveaway: "September Giveaway",
  },
  {
    id: 3,
    userId: "VE****76",
    prize: "AirPods Pro",
    giveaway: "August Giveaway",
  },
  {
    id: 4,
    userId: "VE****31",
    prize: "Amazon ₹2,000 Voucher",
    giveaway: "August Giveaway",
  },
];

function WinnersTabs() {
  const [activeTab, setActiveTab] = useState("current");

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <span>WINNER HISTORY</span>
        <h2>Giveaway Winners</h2>
        <p>Check current winner announcements and previous winners.</p>
      </div>

      <div className={styles.tabs}>
        <button
          type="button"
          className={activeTab === "current" ? styles.activeTab : ""}
          onClick={() => setActiveTab("current")}
        >
          Current Giveaway
        </button>

        <button
          type="button"
          className={activeTab === "previous" ? styles.activeTab : ""}
          onClick={() => setActiveTab("previous")}
        >
          Previous Winners
        </button>
      </div>

      {activeTab === "current" && (
        <div className={styles.currentBox}>
          <div className={styles.iconBox}>
            <FaTrophy />
          </div>

          <h3>Winners will be announced after the giveaway ends</h3>

          <p>
            Keep participating and complete the eligible activities.
            The winners will be revealed after the countdown ends.
          </p>
        </div>
      )}

      {activeTab === "previous" && (
        <div className={styles.winnerGrid}>
          {previousWinners.map((winner) => (
            <div className={styles.winnerCard} key={winner.id}>
              <div className={styles.prizeIcon}>
                <FaGift />
              </div>

              <div>
                <span>WINNER</span>
                <h3>{winner.userId}</h3>
                <p>{winner.prize}</p>
                <small>{winner.giveaway}</small>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default WinnersTabs;