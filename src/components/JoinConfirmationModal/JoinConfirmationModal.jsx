import { FaGift, FaTimes, FaCheckCircle } from "react-icons/fa";
import styles from "./JoinConfirmationModal.module.css";

function JoinConfirmationModal({
  prize,
  onClose,
  onConfirm,
}) {
  if (!prize) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <div className={styles.icon}>
          <FaGift />
        </div>

        <h2>Join Giveaway?</h2>

        <p className={styles.subtitle}>
          Confirm that you want to participate in this giveaway.
        </p>

        <div className={styles.prizeBox}>
          <img
            src={prize.image}
            alt={prize.name}
          />

          <div>
            <h3>{prize.name}</h3>

            <p>
              Entry Required:{" "}
              <strong>
                {prize.requirement} {prize.currency}
              </strong>
            </p>
          </div>
        </div>

        <div className={styles.info}>
          <FaCheckCircle />
          <span>
            Your balance will be used for this participation.
          </span>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            type="button"
            className={styles.confirmButton}
            onClick={onConfirm}
          >
            Confirm Join
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinConfirmationModal;