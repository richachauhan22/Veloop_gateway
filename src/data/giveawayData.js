//import OIP from "../../assets/OIP.jpeg";

export const giveawayData = {
    id: "givwaway-1",
    title: "WIN REWARD",
    subtitle: "COMPLETE TASK , EARN MONEY",
    status: "ACTIVE",


    countdown:{
        days:10,
        hours:10,
        minutes:10,
        seconds:10
    },
    stats:{
        totalGiveaways:"55",
        participants:"600+",
        prizesWon:"100+",
    },

    prizes:[
        {
            id:1,
            name:"IPHONE 15 PRO",
            image:"/OIP.jpeg",
            title:"IPHONE 15 PRO",
            description:"Win the latest iPhone 15 Pro and experience cutting-edge technology in your hands.",
            requirement: 250,
            currency: "VEs",
            participants: 1250,
        },
        {
            id:2,
            name:"APPLE WATCH",
            image:"/Apple-Watch.jpg",
            title:"APPLE WATCH",
            description:"Stay connected and track your fitness with the sleek Apple Watch.",
             requirement: 150,
              currency: "VEs",
               participants: 980,
        },
        {
            id:3,
            name   :"AIRPODS PRO",
            image:"/airbuds.jpeg",
            title:"AIRPODS PRO",
            description:"Immerse yourself in high-quality sound with the AirPods Pro.",
            requirement: 180,
              currency: "VEs",
               participants: 500,
        },

        {
             id:4,
            name:"AMAZON 2000 VOUCHER",
            image:"/amazone.jpeg",
            title:"AMAZON 2000 VOUCHER",
            description:" Redeem your Amazon voucher and shop for your favorite items.",
            requirement: 160,
              currency: "VEs",
               participants: 880,
        }
    ]
};

export const currentUser = {
  id: "VE10025",
  balances: {
    VEs: 350,
    SVEs: 1200,
    Tokens: 2500,
  },
  isLoggedIn: true,
};