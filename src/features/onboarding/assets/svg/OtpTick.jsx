import React from "react";

const OtpTick = ({condition, color}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_948_11289)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.833984 9.99967C0.833984 4.93706 4.93804 0.833008 10.0007 0.833008C15.0633 0.833008 19.1673 4.93706 19.1673 9.99967C19.1673 15.0623 15.0633 19.1663 10.0007 19.1663C4.93804 19.1663 0.833984 15.0623 0.833984 9.99967Z"
          fill={condition ? color : "#494949"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.4253 6.70215C14.7507 7.02759 14.7507 7.55522 14.4253 7.88066L9.25267 13.2973C8.92723 13.6228 8.39959 13.6228 8.07416 13.2973L5.57416 10.7973C5.24872 10.4719 5.24872 9.94425 5.57416 9.61882C5.89959 9.29338 6.42723 9.29338 6.75267 9.61882L8.66341 11.5296L13.2467 6.70215C13.5722 6.37671 14.0998 6.37671 14.4253 6.70215Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_948_11289">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default OtpTick;
