import { useEffect, useState } from "react";
import { FaTrophy, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./WinnerSlider.module.css";

const winners = [
  {
    id: 1,
    userId: "VE****25",
    prize: "Amazon ₹500 Voucher",
    date: "Recently",
  },
  {
    id: 2,
    userId: "VE****81",
    prize: "AirPods Pro",
    date: "2 days ago",
  },
  {
    id: 3,
    userId: "VE****42",
    prize: "Apple Watch",
    date: "4 days ago",
  },
  {
    id: 4,
    userId: "VE****17",
    prize: "Amazon ₹2,000 Voucher",
    date: "6 days ago",
  },
];

function WinnerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % winners.length);
    }, 3500);

    return () => clearInterval(slider);
  }, []);

  const previousWinner = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + winners.length) % winners.length
    );
  };

  const nextWinner = () => {
    setCurrentIndex((prev) => (prev + 1) % winners.length);
  };

  const winner = winners[currentIndex];

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <span>WINNER ANNOUNCEMENTS</span>
        <h2>Recent Winners</h2>
        <p>See who recently won exciting VELOOP rewards.</p>
      </div>

      <div className={styles.slider}>
        <button
          type="button"
          className={styles.arrow}
          onClick={previousWinner}
          aria-label="Previous winner"
        >
          <FaChevronLeft />
        </button>

        <div className={styles.winnerCard}>
          <div className={styles.trophy}>
            <FaTrophy />
          </div>

          <div className={styles.winnerInfo}>
            <span className={styles.winnerLabel}>WINNER</span>

            <h3>{winner.userId}</h3>

            <p>
              Won <strong>{winner.prize}</strong>
            </p>

            <small>{winner.date}</small>
          </div>
        </div>

        <button
          type="button"
          className={styles.arrow}
          onClick={nextWinner}
          aria-label="Next winner"
        >
          <FaChevronRight />
        </button>
      </div>

      <div className={styles.dots}>
        {winners.map((item, index) => (
          <button
            type="button"
            key={item.id}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ""
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Show winner ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default WinnerSlider;