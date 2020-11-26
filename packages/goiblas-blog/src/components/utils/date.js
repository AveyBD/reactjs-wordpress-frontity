import React from "react";
import { styled } from "frontity";

const monthNames = [
    "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ",
    "এপ্রিল", "মে", "জুন",
    "জুলাই", "আগস্ট", "সেপ্টেম্বর",
    "অক্টোবর", "নভেম্বর", "ডিসেম্বর"
  ];

const DateFormat = ({date}) => {

    const currentDate = new Date(date);

    const day = currentDate.getDate();
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    return (
        <Time dateTime={currentDate.toLocaleDateString('en-US')}>{day} তারিখ {month} , {year}</Time>
    );
};

export default DateFormat;

const Time = styled.time`
    color: var(--color-text-light);
    font-size: 13px;
`;
