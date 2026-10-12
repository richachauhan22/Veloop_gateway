import { FaArrowRight, FaGift } from 'react-icons/fa';
import styles from './GiveawayHero.module.css';
import image from '/givecard.png';

function GiveawayHero() {
    return(
        <>


      <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.tag}>
          <FaGift /> EXCLUSIVE GIVEAWAYS
        </span>

        <h1>
          Giveaway <span>Rewards</span>
        </h1>

        <p>
          Complete tasks. Earn entries. Get a chance to win exciting rewards.
        </p>

        <button className={styles.joinButton}>
          Join Now <FaArrowRight />
        </button>

        <div className={styles.note}>
         <span className={styles.dot}></span>
          New rewards are waiting for you
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.circle}></div>
        <img
          src={image}
          className={styles.giftImage}
          alt="givecard.png"
         
        />
      </div>
    </section>
  </>
    );
    
}
export default GiveawayHero;