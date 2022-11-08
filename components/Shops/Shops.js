import React from 'react'
import Card from './Card'

const Shops = () => {
    const sampleData = [
        {
            id: 1,
            name: "Amrita Clinic",
            doc: "Dr.Raju",
            location: "Kulasekharapuram, Kerala 690546",
            Specialisation: "general practitioner", 
             Timings:"7:30-9:00",
             Fee : "Rs.140",
            Appointment_no: "9446961828",
            Appointment_Type: "On arrival appointment",
            image: "https://thumbs.dreamstime.com/b/smiling-receptionist-clinic-young-practitioner-doctor-working-reception-desk-answering-phone-calls-scheduling-72629826.jpg"
        },
        {
            id: 2,
            name: "Daya Clinic",
            doc:"Dr.Reshma, Dr.Meghna",
            location: "kalarivadhikal junction, kottakal puram",
            Specialisation: "general practitioner", 
             Timings:"9:00 AM-1:00 PM, 3:00 PM-9:00 PM",
             Fee : "Rs.60",
            Appointment_no: "9947821706",
            Appointment_Type:"On arrival appointment", 
            image: "https://www.commonwealthfund.org/sites/default/files/styles/hero_image_desktop/public/Seeley_Competition_Consolidation_081221.png?h=56d0ca2e&itok=eWpefygd"
        },
        {
            id: 3,
            name: "Dr Bright",
            doc:"Dr K Bright",
            location: "Near Amrita Ayurveda School Rd, Vallikavu, Kerala 690546",
            Specialisation: "general practitioner", 
             Timings:"7.30 AM-8.30 AM, 4.30 PM-8.30 PM",
             Fee : "Rs.250",
            Appointment_no: "9495475030",
            Appointment_Type:"On arrival appointment", 
            image: "https://www.commonwealthfund.org/sites/default/files/styles/hero_image_desktop/public/Seeley_Competition_Consolidation_081221.png?h=56d0ca2e&itok=eWpefygd"
        },
        {
            id: 4,
            name: "Dr Safa's Clinic",
            doc:"Dr Safa",
            location: "kalarivadhikal junction, kottakal puram",
            Specialisation: "general practitioner", 
             Timings:"8:00 AM-1:00 PM ; 4:00 PM-9:00 PM",
             Fee : "Rs.120",
            Appointment_no: "9895263630",
            Appointment_Type:"On arrival appointment", 
            image: "https://www.commonwealthfund.org/sites/default/files/styles/hero_image_desktop/public/Seeley_Competition_Consolidation_081221.png?h=56d0ca2e&itok=eWpefygd"
        },
        {
            id: 5,
            name: "Irania Hospital",
            doc:"Dr Iranisha",
            location: "Varavila, Changankulangara Vallikunnam Road, Vavvakkavu, Kerala 690528",
            Specialisation: "Physician", 
             Timings:"7:00 AM-9.30 PM",
             Fee : "Rs.100",
            Appointment_no: "0476 2898888",
            Appointment_Type:"On arrival appointment", 
            image: "https://www.commonwealthfund.org/sites/default/files/styles/hero_image_desktop/public/Seeley_Competition_Consolidation_081221.png?h=56d0ca2e&itok=eWpefygd"
        },
        {
            id: 6,
            name: "Dr Vidya's Clinic",
            doc:"Dr Vidya L",
            location: "Near Mangalath Auto Park, Vallikavu-Ochira Road, Clappana, Kerala 690546",
            Specialisation: "Paediatrician", 
             Timings:"4.30 PM-7:00 PM",
             Fee : "Children:Rs.150, Adults:Rs.160",
            Appointment_no: "9497339233",
            Appointment_Type:"On arrival appointment", 
            image: "https://www.commonwealthfund.org/sites/default/files/styles/hero_image_desktop/public/Seeley_Competition_Consolidation_081221.png?h=56d0ca2e&itok=eWpefygd"
        }
    ]
    return (
        <div className='m-10 xl:h-[100vh]'>
            <div className='flex justify-center mb-6 mt-'>
                <div className=''>
                    <div className='text-sky-400 text-center text-lg mb-6 '>Our Services</div>
                    <div className='head fontme tracking-wide xl:text-4xl text-4xl'>Available Clinics</div>
                </div>
            </div>
            <div className='px-5 grid 2xl:grid-cols-4 2xl:gap-2 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 mt:16 '>
                {sampleData.map((item) => (
                    <Card shop={item} key={item.id} />
                ))}
            </div>

        </div>
    )
}

export default Shops