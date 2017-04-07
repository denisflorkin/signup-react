
import React from 'react'
import theme from '../utils/theme'


const { green, darkGray } = theme

const wrapperStyle = {
  width: '24px',
  display: 'flex',
  flexDirection: 'column',
}
const checkmarkStyle = {
  stroke: darkGray,
  stroke: green,
  strokeDashoffset: 745.74853515625,
  strokeDasharray: 745.74853515625,
  animation: 'dash 2s ease-out forwards',
}

export function Checkmark(props) {
  return (
    <div>
      <style>{`
        /* pen by Sean Michael : https://goo.gl/tr38r5 */
        @keyframes dash {
          0% {
            stroke-dashoffset: 745.74853515625;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }`}
      </style>
      <div style={wrapperStyle}>
        <svg version="1.1" id="Layer_1" 
          x="0px" y="0px"
          viewBox="0 0 98.5 98.5" 
          enableBackground="new 0 0 98.5 98.5" 
        >
          <path style={checkmarkStyle}
            fill="none" 
            strokeWidth="6" 
            strokeMiterlimit="10" 
            d="M81.7,17.8C73.5,9.3,62,4,49.2,4 C24.3,4,4,24.3,4,49.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0L45.6,68.2L24.7,47.3"/>
        </svg>
      </div>
    </div>
    )
}
export default Checkmark








