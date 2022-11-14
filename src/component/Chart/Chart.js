import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props)=>{
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    // here i put the max value for the chart first i extracted the values from array then 
    //put it in the math object with spread operator to have all vales from array  
    const totalMaximum = Math.max(...dataPointValues);
    return (
      <div className='chart'>
        {props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        ))}
      </div>
    );
}
export default Chart;