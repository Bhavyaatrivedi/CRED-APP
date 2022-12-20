import React from 'react'
import "./mobileScroll.css"

const scrollData = [
    {
        heading :'we’ve got your back.',
        description:"gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.",
        mobile_img:"https://web-images.credcdn.in/_next/assets/images/home-page/features/fold1.png",
    },
    {
        heading: "begin your winning streak.",
        description:
          "use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.",
        mobile_img:
          "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold2.png",
      },
      {
        heading: "for your eclectic taste.",
        description:
          "get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.",
        mobile_img:
          "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold3.png",
      },
      {
        heading: "more cash in your pockets.",
        description:
          "switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord.",
        mobile_img:
          "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold4.png",
      },
];




const MobileScroll = () => {
    return (
        <div className = "max-width flex mobile-scroll">
            <div className="scroll-full-screen-wrapper">
                    {scrollData.map((screen , i)=> (
                        <div className = "scroll-full-screen">
                        
                        </div>
                    ))}
            </div>
            <div>

            </div>
        </div>
    )
}

export default MobileScroll