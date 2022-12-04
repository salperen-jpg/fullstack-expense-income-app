import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import styled from 'styled-components';

const Chart = ({ stats }) => {
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <Wrapper>
      <div style={{ width: '100%', height: 500 }} className='chart-container'>
        <PieChart width={400} height={400} style={{ textAlign: 'center' }}>
          <Pie
            data={stats}
            cx='50%'
            cy='50%'
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={200}
            fill='#8884d8'
            dataKey='total'
          >
            {stats.map((entry, index) => (
              <Cell
                key={index}
                fill={entry.name === 'Incomes' ? '#006D00' : '#FF3737'}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className='box-container'>
        <div>
          <div className='box red'></div>
          <span className='text'>expense</span>
        </div>
        <div>
          <div className='box green'></div>
          <span className='text'>income</span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: relative;
  .chart-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box-container {
    position: absolute;
    top: 0;
    right: 50%;
    transform: translateX(50%);
    display: flex;
    gap: 1rem;
  }

  .box-container > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .box {
    width: 1rem;
    height: 1rem;
    background-color: gray;
    border-radius: 3px;
    box-shadow: var(--shadow-1);
  }
  .red {
    background-color: #ff3737;
  }
  .green {
    background-color: #006d00;
  }
  .text {
    color: var(--gray-500);
    text-transform: capitalize;
    letter-spacing: 2px;
  }
`;

export default Chart;
