import React from 'react'
import Card1 from './Card1'

const Shops1 = () => {
    const sampleData = [
        {
            id: 1,
            name: "NANDU MEDICALS",
            location: "Vallikavu, kollam",
            description: "Provides English Medicines",
            Timings1:"Monday 9am–8pm",
            Timings2:"Tuesday 9am–8pm",
            Timings3:"Wednesday 9am–8pm",
            Timings4:"Thursday 9am–8pm",
            Timings5:"Friday 9am–8pm",
            Timings6:"Saturday 9am–8pm",
            Timings7:"Sunday 9am–8pm",
            
            Contact_no: "098472 12342",
            image: "https://logoisus.com/wp-content/uploads/2021/09/MEDICAL.jpg"

        },
        {
            id: 2,
            name: "MY SIMPLE MED",
            location: "Alumpeedika - Vallikavu Road, kollam",
            description: "Provides English Medicines",
            Timings1:"Monday 9am–7pm",
            Timings2:"Tuesday 9am–7pm",
            Timings3:"Wednesday 9am–7pm",
            Timings4:"Thursday 9am–7pm",
            Timings5:"Friday 9am–7pm",
            Timings6:"Saturday 9am–7pm",
            Timings7:"Sunday Closed",
            
            Contact_no: "9446961828",
            image: "https://logoisus.com/wp-content/uploads/2021/09/MEDICAL.jpg"
        },
        {
            id: 3,
            name: "SRI GOVINDA MEDICALS",
            location: "Vallikavu Road, kollam",
            description: "Provides English Medicines",
            Timings1:"Monday 8am–9pm",
            Timings2:"Tuesday 8am–9pm",
            Timings3:"Wednesday 8am–9pm",
            Timings4:"Thursday 8am–9pm",
            Timings5:"Friday 8am–9pm",
            Timings6:"Saturday 8am–9pm",
            Timings7:"Sunday 8am-9pm",
            Contact_no: "0476 289 9938",
            image: "https://logoisus.com/wp-content/uploads/2021/09/MEDICAL.jpg"
        },
        {
            id: 4,
            name: "MY SIMPLE MED",
            location: "Alumpeedika - Vallikavu Road, kollam",
            description: "Provides English Medicines",
            Timings1:"Monday 9am–7pm",
            Timings2:"Tuesday 9am–7pm",
            Timings3:"Wednesday 9am–7pm",
            Timings4:"Thursday 9am–7pm",
            Timings5:"Friday 9am–7pm",
            Timings6:"Saturday 9am–7pm",
            Timings7:"Sunday Closed",
            image: "https://logoisus.com/wp-content/uploads/2021/09/MEDICAL.jpg"
        }
        ,
        {
            id: 5,
            name: "JAN AUSHADI MEDICALS",
            location: "Vallikavu - Vavvakavu Rd, kollam",
            description: "Provides English Medicines",
            Timings1:"Monday 9.30am–8pm",
            Timings2:"Tuesday 9.30am–8pm",
            Timings3:"Wednesday 9.30am–8pm",
            Timings4:"Thursday 9.30am–8pm",
            Timings5:"Friday 9.30am–8pm",
            Timings6:"Saturday 9.30am–8pm",
            Timings7:"Sunday Closed",
            image: "https://logoisus.com/wp-content/uploads/2021/09/MEDICAL.jpg"
        }
        ,
        {
            id: 6,
            name: "KARUNA MEDICAL SHOP",
            location: "Azheekka, kollam",
            description: "Provides English Medicines",
            Timings1:"Monday 8am–7pm",
            Timings2:"Tuesday 8am–7pm",
            Timings3:"Wednesday 8am–7pm",
            Timings4:"Thursday 8am–7pm",
            Timings5:"Friday 8am–7pm",
            Timings6:"Saturday 8am–7pm",
            Timings7:"Sunday 8am-7pm",
            image: "https://logoisus.com/wp-content/uploads/2021/09/MEDICAL.jpg"
        }
    ]
  return (
    <div>
        <div className='px-3 grid 2xl:grid-cols-4 2xl:gap-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  '>
            {sampleData.map((item) => (
            <Card1 shop={item} key={item.id} />
          ))}
        </div>
        
        </div>
  )
}

export default Shops1