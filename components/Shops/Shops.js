import React from 'react'
import Card from './Card'

const Shops = () => {
    const sampleData = [
        {
            id: 1,
            name: "Narayanakatil Medicals",
            location: "Thrissur",
            description: "asdasdasdasdasdas",
            image: "https://www.commonwealthfund.org/sites/default/files/styles/hero_image_desktop/public/Seeley_Competition_Consolidation_081221.png?h=56d0ca2e&itok=eWpefygd"
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