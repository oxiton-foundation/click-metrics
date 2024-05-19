import React from 'react';
import './DonutChart.css';

interface DonutChartProps {
  percentage: number;
  color: string;
}

const DonutChart: React.FC<DonutChartProps> = ({ percentage, color }) => {
  const radius = 5.91549430918954; // Radius for the donut
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = `${circumference * (percentage / 100)} ${circumference * (1 - percentage / 100)}`;

  return (
    <svg width="100" height="90" viewBox="10 15 1 32" className="donut">
      <circle
        className="donut-ring"
        cx="21"
        cy="21"
        r={radius}
        fill="transparent"
        stroke="#d2d3d4"
        strokeWidth="3"
      />
      <circle
        className="donut-segment"
        cx="21"
        cy="21"
        r={radius}
        fill="transparent"
        stroke={color}
        strokeWidth="3"
        strokeDasharray={strokeDasharray}
        strokeDashoffset="25"
      />
      <text x="21" y="21" className="donut-text" textAnchor="middle" dy=".3em">{`${percentage}%`}</text>
    </svg>
  );
};

export default DonutChart;
