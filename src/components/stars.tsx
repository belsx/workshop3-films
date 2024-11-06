// Stars.tsx
import React from "react";
import Star from "./star";

interface StarsProps {
  count: number;
}

const Stars: React.FC<StarsProps> = ({ count }) => {
  // Если рейтинг меньше 1 или больше 5, или не является числом, не отображаем ничего
  if (typeof count !== "number" || count < 1 || count > 5) {
    return null;
  }

  // Создаем массив для отображения звезд
  const stars = Array.from({ length: 5 }, (_, index) => index < count);

  return (
    <ul className="card-body-stars u-clearfix">
      {stars.map((filled, index) => (
        <Star key={index} filled={filled} />
      ))}
    </ul>
  );
};

export default Stars;
