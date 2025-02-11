import React, { Component }  from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';
import {
  ChatHeader
} from '../../component/ChatRoom';

 

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(
//   name: String,
//   mail:String,
//   summarize: String,
// ) {
//   return { name,mail,summarize};
// }

// const rows = [
//   createData('Aravindh', 'chinnasamy@gmail.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
//   createData('Aravindh', 'chinnasamy@gmail.com', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),
//   createData('Aravindh', 'chinnasamy@gmail.com', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),
// ];

const GmailSummarize = () => {
  const location = useLocation();
  const gmaildata = location.state?.gmaildata;
  return (
    <div>
      <ChatHeader
                      initial_model="AristotleAI Gmail Summarizer"
                  />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead >
          <TableRow >
            <StyledTableCell style={{backgroundColor:'#1f2937',fontWeight:'bold'}}>Name</StyledTableCell>
            <StyledTableCell align="center" style={{backgroundColor:'#1f2937',fontWeight:'bold'}}>Email</StyledTableCell>
            <StyledTableCell align="center" style={{backgroundColor:'#1f2937',fontWeight:'bold'}}>Summaraize</StyledTableCell>
       
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" style={{width:'20%'}}>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left" style={{width:'20%'}}>{row.mail}</StyledTableCell>
              <StyledTableCell align="left" style={{width:'80%'}}>{row.summarize}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}


export default GmailSummarize;