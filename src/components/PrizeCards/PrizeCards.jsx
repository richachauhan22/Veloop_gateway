
import { useEffect, useState } from "react";
import { FaUser, FaArrowRight } from "react-icons/fa";
import styles from "./PrizeCards.module.css";
import { useNavigate } from "react-router-dom";
import { getPrizes } from "../../services/api";
import { giveawayData } from "../../data/giveawayData";


function PrizeCards() {
  const navigate = useNavigate();

  const [prizes, setPrizes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showingFallback, setShowingFallback] = useState(false);

  const prizeImages = {
    iphone15pro: "/OIP.jpeg",
    applewatch: "/Apple-Watch.jpg",
    airpodspro: "/airbuds.jpeg",
    amazon2000voucher: "/amazone.jpeg",
  };

  function getPrizeImage(prize) {
    const normalizedName = (prize.name || "")
      .normalize("NFKD")
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");
    const imageUrl =
      prizeImages[normalizedName] || prize.image_url || prize.image;

    if (!imageUrl) {
      return "/givecard.png";
    }

    const path = String(imageUrl).trim().replace(/\\/g, "/");

    if (/^(?:https?:|data:|blob:)/i.test(path)) {
      return path;
    }

    const publicPath = path.replace(/^\/?(?:\.\/)?public\//i, "/");
    return publicPath.startsWith("/") ? publicPath : `/${publicPath}`;
  }


  useEffect(() => {
    async function fetchPrizes() {
      try {
        const data = await getPrizes();
        setPrizes(data);
      } catch {
        setPrizes(giveawayData.prizes);
        setShowingFallback(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPrizes();
  }, []);

  return (
    <section className={styles.Section}>
      <div className={styles.heading}>
        <span>EXPLORE REWARDS</span>
        <h2>CHOOSE YOUR GIVEAWAY</h2>
        <p>PICK A REWARD</p>
      </div>

      {loading && <p>Loading prizes...</p>}

      {error && <p role="alert">{error}</p>}

      {showingFallback && (
        <p role="status">
          Live prizes are unavailable. Showing the saved prize list.
        </p>
      )}

      {!loading && !error && prizes.length === 0 && (
        <p>No active prizes available right now.</p>
      )}

      <div className={styles.grid}>
        {prizes.map((prize) => (
          <div className={styles.card} key={prize.id}>
            <div className={styles.imageBox}>
              <img
                src={getPrizeImage(prize)}
                alt={prize.name}
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = "/givecard.png";
                }}
              />
              <span className={styles.activeBadge}>Active</span>
            </div>

            <div className={styles.cardContent}>
              <h3>{prize.name}</h3>

              <p className={styles.description}>
                {prize.description}
              </p>

              <div className={styles.participants}>
                <FaUser />
                <span>{prize.participants} participants</span>
              </div>

              <div className={styles.cardFooter}>
                <div>
                  <small>Entry required</small>
                  <strong>
                    {prize.requirement} {prize.currency}
                  </strong>
                </div>

                <button
                  type="button"
                  className={styles.joinButton}
                  onClick={() => navigate(`/prize/${prize.id}`)}
                >
                  Join <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PrizeCards;
