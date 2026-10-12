import{
    useState,
    useEffect
} from 'react';
import styles from './Countdown.module.css';

function Countdown()
 {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours--;
            } else {
              hours = 23;

              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isEnded =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;


    return(
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <span className={styles.label}>GIVEWAY STATUS</span>
                    <h2>
                        { isEnded ?"GIVEAWAY ENDED": "GIVEAWAY ENDED IN"}
                    </h2>
                    <p>
                        {isEnded ?
                        "Winner Selection will Shortly"
                            : "Dont miss tour Chance"}
                    </p>
                </div>

                {!isEnded && (
          <div className={styles.timer}>
            <div className={styles.timeBox}>
              <strong>{String(timeLeft.days).padStart(2, "0")}</strong>
              <span>Days</span>
            </div>

            <div className={styles.timeBox}>
              <strong>{String(timeLeft.hours).padStart(2, "0")}</strong>
              <span>Hours</span>
            </div>

            <div className={styles.timeBox}>
              <strong>{String(timeLeft.minutes).padStart(2, "0")}</strong>
              <span>Minutes</span>
            </div>

            <div className={styles.timeBox}>
              <strong>{String(timeLeft.seconds).padStart(2, "0")}</strong>
              <span>Seconds</span>
            </div>
          </div>
        )}

        {isEnded && (
          <div className={styles.endedBadge}>
            ENDED
          </div>
        )}
            </div>
        </section>
    );
}
 export default  Countdown;