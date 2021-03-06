import React, { useState } from 'react';
const Array = ({ text }) => {
  const [tableTHData, setTableTHData] = useState([
    { label: 'seq', order: 'asc', show: false },
    { label: 'time', order: 'asc', show: true },
    { label: 'ip', order: 'asc', show: false },
    { label: 'device', order: 'asc', show: true },
    { label: 'hostname', order: 'asc', show: true },
    { label: 'pathname', order: 'asc', show: true },
    { label: 'sourcecode', order: 'asc', show: true },
    { label: 'mediumcode', order: 'asc', show: true },
    { label: 'campaigncode', order: 'asc', show: true },
    { label: 'termcode', order: 'asc', show: true },
    { label: 'contentscode', order: 'asc', show: true },
    { label: 'userdata', order: 'asc', show: true },
    { label: 'extradata', order: 'asc', show: false }
  ]);
  return (
    <React.Fragment>
      {tableTHData[0].label}
      <div>{text}</div>
    </React.Fragment>
  );
}

export default Array;