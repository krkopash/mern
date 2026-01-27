import React from "react";

import { BarChart, Bar, XAxis,CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

type ChartData ={
    name: string,
    value: number
}

const data:ChartData[]=[
    {name: 'Item1', value: 222},
    {name: 'Item2', value: 111},
    {name: 'Item3', value:333},
    {name: 'Item4', value: 444},
    {name: 'Item5', value:555},
    {name: 'Item6', value:123}
];

const Charts : React.FC=()=>{
    return (
    <div>
        <h3>Charts:</h3>
        <br/><br/> 
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid/>
        <XAxis dataKey="name" />
        
        <Tooltip />
        <Bar dataKey="value" fill="#b4ccf5" />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};

export default Charts;