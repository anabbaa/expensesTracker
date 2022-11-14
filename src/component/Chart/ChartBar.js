import React from "react";
import "./ChartBar.css";
const ChartBar = (props)=>{
    let barFillHeight = '0%';
    // here i assure to have the height of div bar with the height of amount i 
    //would have
    if (props.maxValue > 0) {
      barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }
    return (
      <div className='chart-bar'>
        <div className='chart-bar__inner'>
          <div
            className='chart-bar__fill'
            style={{ height: barFillHeight }}
          ></div>
        </div>
        <div className='chart-bar__label'>{props.label}</div>
      </div>
    );
}
export default ChartBar;