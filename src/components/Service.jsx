// import React from 'react'
const services = [
    {
        id: 1,
        image: "/images/service-icon/payment.png",
        policy: "Payment",
        title: "Secure System"
    },
    {
        id: 2,
        image: "/images/service-icon/delivery.png",
        policy: "Free Delivery",
        title: "from $50"
    },
    {
        id: 3,
        image: "/images/service-icon/days.png",
        policy: "365 Days",
        title: "For free return"
    },
    {
        id: 4,
        image: "/images/service-icon/customer.png",
        policy: "99% Customer",
        title: "Feedbacks"
    },
    {
        id: 5,
        image: "/images/service-icon/best.png",
        policy: "Only Best",
        title: "Brands"
    },
]

const Service = () => {
  return (
    <div>
        <div className='service-wrapper container'>
            {
                services?.map(item => <div key={item?.id} className='service-icon'>
                <img src={item?.image} alt="service-icon" />
                <h5>{item?.policy}</h5>
                <h5>{item?.title}</h5>
            </div>)
            }
            
        </div>
    </div>
  )
}

export default Service