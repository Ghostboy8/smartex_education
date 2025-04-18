import React from 'react'
import { FaUserGraduate, FaChalkboardTeacher, FaUserFriends, FaSchool, FaUserTie, FaBuilding } from 'react-icons/fa'

const Feature = () => {
    const features = [
        {
            icon: <FaUserGraduate className='text-blue-500' />,
            text: '🎓 Élèves & Étudiants',
        },
        {
            icon: <FaChalkboardTeacher className='text-green-600' />,
            text: '👨‍🏫 Enseignants',
        },
        {
            icon: <FaUserFriends className='text-pink-500' />,
            text: '👨‍👩‍👧 Parents',
        },
        {
            icon: <FaSchool className='text-purple-500' />,
            text: '🏫 Administrateurs scolaires',
        },
        {
            icon: <FaUserTie className='text-orange-500' />,
            text: '🧑‍💼 Personnel administratif',
        },
        {
            icon: <FaBuilding className='text-red-500' />,
            text: '🏢 Partenaires & Entreprises',
        },
    ];

    return (
        <div className='bg-blue-200 pt-20 pb-20'>
            <div className='w-[80%] mx-auto text-center'>
                <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center'>
                    Les acteurs pris en compte par la solution.
                </h1>
                <div className='grid mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {features.map((feature, index) => (
                        <div
                            data-aos='flip-right'
                            data-aos-anchor-placement='top-bottom'
                            data-aos-delay={`${index * 100}`}
                            key={index}
                            className='flex items-center justify-start p-4 bg-white rounded-lg shadow-md space-x-4'
                        >
                            <div className='text-3xl w-14 h-14 bg-gray-800 bg-opacity-10 flex items-center justify-center rounded-full'>
                                {feature.icon}
                            </div>
                            <span className='font-semibold text-left text-gray-800'>{feature.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Feature
