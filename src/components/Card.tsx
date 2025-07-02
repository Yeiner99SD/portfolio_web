// src/components/Card.tsx
import React from "react";
import type { IconType } from "react-icons";

interface CardProps {
  title: string;
  description: string;
  icon: IconType;
}

const Card: React.FC<CardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="border border-yellow-500 rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
      <div className="text-4xl mb-4 text-yellow-500">
        <Icon />
      </div>
      <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

export default Card;
