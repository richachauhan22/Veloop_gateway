
import JoinConfirmationModal from "../../components/JoinConfirmationModal/JoinConfirmationModal";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaCheckCircle, FaGift } from "react-icons/fa";

import styles from "./GiveawayDetails.module.css";
import { giveawayData, currentUser } from "../../data/giveawayData";

function GiveawayDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

const [showJoinModal, setShowJoinModal] = useState(false);

const [balances, setBalances] = useState(() => {
  try {
    const saved = localStorage.getItem("veloopup_balances");
    return saved ? JSON.parse(saved) : currentUser.balances;
  } catch {
    return currentUser.balances;
  }
});

const [joinedPrizes, setJoinedPrizes] = useState(() => {
  try {
    const saved = localStorage.getItem("veloopup_joined_prizes");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
});



useEffect(() => {
  localStorage.setItem("veloopup_balances", JSON.stringify(balances));
}, [balances]);

useEffect(() => {
  localStorage.setItem(
    "veloopup_joined_prizes",
    JSON.stringify(joinedPrizes)
  );
}, [joinedPrizes]);








const joined = joinedPrizes.includes(String(id));

  const prize = giveawayData.prizes.find(
    (item) => String(item.id) === String(id)
  );

  if (!prize) {
    return (
      <section className={styles.notFound}>
        <h2>Giveaway Not Found</h2>
        <button onClick={() => navigate("/")}>
          Back to Giveaways
        </button>
      </section>
    );
  }

  const userBalance = currentUser.balances[prize.currency] || 0;

  const hasEnoughBalance = userBalance >= prize.requirement;

console.log("Selected prize:", prize);
console.log("Requirement:", prize?.requirement);
console.log("Currency:", prize?.currency); 


const handleJoin = () => {
  if (!currentUser.isLoggedIn) {
    alert("Please login to participate.");
    return;
  }

  if (!hasEnoughBalance) {
    alert(
      `Insufficient ${prize.currency}. You need ${prize.requirement} ${prize.currency}.`
    );
    return;
  }

  if (joinedPrizes.includes(prize.id)) {
    alert("You have already joined this giveaway.");
    return;
  }

  setShowJoinModal(true);
};

  function handleConfirmJoin() {
    setJoinedPrizes([...joinedPrizes, prize.id]);
    setShowJoinModal(false);
  }

  return (
    <section className={styles.page}>
      <button
        type="button"
        className={styles.backButton}
        onClick={() => navigate("/")}
      >
        <FaArrowLeft />
        Back to Giveaways
      </button>

      <div className={styles.detailsCard}>
        <div className={styles.imageSection}>
          <img src={prize.image} alt={prize.name} />
        </div>

        <div className={styles.content}>
          <span className={styles.status}>ACTIVE GIVEAWAY</span>

          <h1>{prize.name}</h1>

          <p className={styles.description}>
            {prize.description}
          </p>

          <div className={styles.entryBox}>
            <span>Entry Requirement</span>

            <strong>
              {prize.requirement} {prize.currency}
            </strong>

            <small>
              Your balance: {userBalance} {prize.currency}
            </small>
          </div>

          <div className={styles.infoGrid}>
            <div>
              <span>Participants</span>
             <strong>{(prize.participants ?? 0).toLocaleString()}</strong>
            </div>

            <div>
              <span>Duration</span>
              <strong>12 Days</strong>
            </div>

            <div>
              <span>Eligibility</span>
              <strong>Eligible Users</strong>
            </div>

            <div>
              <span>Winner Selection</span>
              <strong>After Giveaway Ends</strong>
            </div>
          </div>

          <div className={styles.rules}>
            <h3>
              <FaGift /> Before You Join
            </h3>

            <p>
              <FaCheckCircle />
              Make sure you have enough {prize.currency}.
            </p>

            <p>
              <FaCheckCircle />
              Participation is subject to the giveaway rules.
            </p>

            <p>
              <FaCheckCircle />
              Winner will be announced after the giveaway ends.
            </p>

            <p>
              <FaCheckCircle />
              Winners must complete the applicable claim process.
            </p>
          </div>

         <button
  type="button"
  className={styles.joinButton}
  onClick={handleJoin}
  disabled={joined}
>
  {joined
    ? "You're Participating ✓"
    : `Join for ${prize.requirement} ${prize.currency}`}
</button>
        </div>
      </div>


      {showJoinModal && (
  <JoinConfirmationModal
    prize={prize}
    onClose={() => setShowJoinModal(false)}
    onConfirm={handleConfirmJoin}
  />
)} 
    </section>
  );
}

export default GiveawayDetails;