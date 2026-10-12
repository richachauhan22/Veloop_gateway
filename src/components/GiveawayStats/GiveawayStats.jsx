import { FaGift,FaUser,FaTrophy } from "react-icons/fa";
import styles from "./GiveawayStats.module.css";
import {giveawayData} from "../../data/giveawayData";



 function GiveawayStats(){
    const stats=[
        {
            id:1,
            title:"Total Giveaways",
            value: giveawayData.stats.totalGiveaways,
            icon:<FaGift/>,

        },
        {
            id:2,
            title:"Total Participants",
            value: giveawayData.stats.participants,
            icon:<FaUser/>,
        },
        {
            id:3,
            title:"Total Winners",
            value: giveawayData.stats.prizesWon,
            icon:<FaTrophy/>,
        }
    ];
                 
     return(
      


   <section className={styles.statsSection}>
      <div className={styles.statsGrid}>
        {stats.map((item) => (
          <div className={styles.statCard} key={item.id}>
            <div className={styles.iconBox}>{item.icon}</div>

            <div>
              <h2>{item.value}</h2>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

       
     );





 }
 export default GiveawayStats;