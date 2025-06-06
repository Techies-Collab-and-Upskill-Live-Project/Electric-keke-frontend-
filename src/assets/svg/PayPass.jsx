import React from "react";

const PayPass = ({ width, height }) => {
  return (
    <svg
      width={width || "20"}
      height={height || "24"}
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1165_14256)">
        <path
          d="M15.144 1.28516C17.0247 4.54271 18.0149 8.23794 18.0149 11.9994C18.0149 15.7609 17.0247 19.4562 15.144 22.7137M10.4297 3.6423C11.8967 6.18319 12.669 9.06547 12.669 11.9994C12.669 14.9334 11.8967 17.8157 10.4297 20.3566M5.92969 5.80658C6.99043 7.66339 7.54887 9.76967 7.54887 11.9137C7.54887 14.0578 6.99043 16.1641 5.92969 18.0209M1.42969 8.1423C2.19415 9.29928 2.59944 10.6357 2.59944 11.9994C2.59944 13.3632 2.19415 14.6996 1.42969 15.8566"
          stroke="white"
          strokeWidth="2.57143"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1165_14256">
          <rect width="20" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PayPass;
