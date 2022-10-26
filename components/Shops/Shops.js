import React from 'react'
import Card from './Card'

const Shops = () => {
    const sampleData = [
        {
            id: 1,
            name: "Amrita Clinic",
            location: "Kulasekharapuram, Kerala 690546",
            description: "asd",
            Specialisation: "Specialisation: general, vomiting", 
             Timings:"Timings: 7:30-9:00",
             Fee : "Fee: Rs.140",
            Appointment_no: "Appointment_no: 9446961828",
            Appointment_Type:"Appointment_Type: on arrival appointment", 
            image: "data:image/png;base64,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"
        },
        {
            id: 2,
            name: "Narayanakatil Medicals",
            location: "Thrissur",
            description: "asdasdasdasdasdas",
            image: "https://www.commonwealthfund.org/sites/default/files/styles/hero_image_desktop/public/Seeley_Competition_Consolidation_081221.png?h=56d0ca2e&itok=eWpefygd"
        },
        {
            id: 3,
            name: "Narayanakatil Medicals",
            location: "Thrissur",
            description: "asdasdasdasdasdas",
            image: "https://www.commonwealthfund.org/sites/default/files/styles/hero_image_desktop/public/Seeley_Competition_Consolidation_081221.png?h=56d0ca2e&itok=eWpefygd"
        },
        {
            id: 4,
            name: "Narayanakatil Medicals",
            location: "Thrissur",
            description: "asdasdasdasdasdas",
            image: "https://www.commonwealthfund.org/sites/default/files/styles/hero_image_desktop/public/Seeley_Competition_Consolidation_081221.png?h=56d0ca2e&itok=eWpefygd"
        }
    ]
  return (
    <div>
        <div className='px-5 grid 2xl:grid-cols-4 2xl:gap-2 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1  '>
            {sampleData.map((item) => (
            <Card shop={item} key={item.id} />
          ))}
        </div>
        
        </div>
  )
}

export default Shops