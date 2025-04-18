import React from 'react';

interface Props {
  icon: React.ReactNode;
  title: string;
  des: string;
 
}

const WhyChoseCard: React.FC<Props> = ({ icon, title, des }) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-xl text-center hover:shadow-xl transition">
      <div className="text-red-600 text-5xl mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{des}</p>
     
    </div>
  );
};

export default WhyChoseCard;
