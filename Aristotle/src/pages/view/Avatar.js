import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import randomColor from 'randomcolor';
import { useEffect } from 'react';
const RandomColorAvatar = ({ text }) => {
  // Generate a random background color
//   const [BGcolor,setBGcolor] = useState("");
//   useEffect(()=>{
//     const bgColor = randomColor();
//     setBGcolor(bgColor);
//   },[])
  
  const bgColor = randomColor();

  return (
    <Avatar sx={{ width: '35px', height: '35px', backgroundColor: bgColor }}>
      {text}
    </Avatar>
  );
};

export default RandomColorAvatar;
