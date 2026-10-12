import {FaUser, FaArrowRight} from "react-icons/fa";
import styles from "./PrizeCards.module.css";
import { useNavigate } from "react-router-dom";
import {giveawayData} from "../../data/giveawayData";

   
function PrizeCards(){
    const navigate = useNavigate();
    return(
        <section className={styles.Section}>
             <div className={styles.heading}>
                <span >EXPLORE REWARDS</span>
                <h2> CHOOSE YOUR GIVEAWAY</h2>
                <p>PICK A REAWARD</p>
             </div>
            <div className={styles.grid}>
                 {giveawayData.prizes.map((prize )=>(
                    <div className={styles.card} key={prize.id}>
                        <div className={styles.imageBox}>
                            <img src={prize.image} alt={prize.name} />
                            <span className={styles.activeBadge}>Active</span>
                        </div>
                        <div className={styles.cardContent}>
                            <h3>{prize.name}</h3>
                            <p className={styles.description}>{prize.description}</p>
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

                <button type="button" className={styles.joinButton} onClick={() => navigate(`/prize/${prize.id}`)}>
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
    export  default  PrizeCards;
