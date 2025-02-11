import React, { Component, useState }  from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode' ;
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';
import {GoogleLogin} from '@react-oauth/google';
import { Avatar } from '@mui/material';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import randomColor from 'randomcolor';
import RandomColorAvatar from './Avatar';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import CircularProgress from '@mui/material/CircularProgress';
import {

  ChatHeader
} from '../../component/ChatRoom';
import logo from "../../download.jpeg"

 
const Page = () => {
  const clienId ="207164305759-3tglb40552fjs21m184fre058tghdd9t.apps.googleusercontent.com";
  const SCOPES = "https://www.googleapis.com/auth/gmail.readonly";
  const BGcolor = randomColor();
  const [tokenClient,settokenClient]= useState({});
  const [user,setuser]=useState(false)
  const [loading , setloading] = useState(false)
  const [gmails,setGmails] = useState({})
  function handleresponse(response){
    console.log("Encoded JWT token" + response.credential)
  }
  function handlesubmit(){
    tokenClient.requestAccessToken();
    
  }
  useEffect(()=>{
    setuser(false)
    
    google.accounts.id.initialize({
      client_id: clienId,
      callback: handleresponse
    });
    google.accounts.id.renderButton(
      document.getElementById("signin"),
      {
        theme:"outline",size:"large"
      }
    );
    settokenClient(google.accounts.oauth2.initTokenClient({
      client_id : clienId,
      scope:SCOPES,
      callback:async(response)=>{
          setloading(true)
          console.log(response);
          try {
            const axiosResponse = await axios.get('http://localhost:8000/gmail-api', {
              headers: {
                Authorization: `Bearer ${response.access_token}`, // Pass the JWT token in the Authorization header
              },
            });
           
            console.log('API Response:', axiosResponse.data);

            const gmailResponse = await axios.post('http://localhost:8080/getGmail',{
              data : axiosResponse.data,
            });
            setuser(true)
            setloading(false);
            setGmails(gmailResponse.data);
            
            console.log(gmailResponse);
            
            // Handle the API response as needed
          } catch (error) {
            console.error('Error calling API:', error);
            // Handle the error
          }
      }
    }));
    

  },[]);
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        color: '#404D61', // Your desired text color
        fontFamily:'Roboto, sans-serif',
        fontWeight : '500'
      },
    
    }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.common.white,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
    
  }));
  function createData(
  name,
  mail,
  summarize,
) 
{
  return { name,mail,summarize};
}

const rows = [
  createData('Aravindh', 'chinnasamy@gmail.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
  createData('Muthu Karuppan', 'chinnasamy@gmail.com', "Lorem ipsum consectetur adipiscing elit."),
  createData('Veenas Kumar', 'chinnasamy@gmail.com', "Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
  createData('Ashwin', 'chinnasamy@gmail.com', "Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
  createData('Gokul', 'chinnasamy@gmail.com', "Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
  createData('Mano', 'chinnasamy@gmail.com', "Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
  createData('Gokul', 'chinnasamy@gmail.com', "Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
  createData('Kalai', 'chinnasamy@gmail.com', "Lorem ipsum dolor sit amet, consectetur adipiscing elit."),

];
  
  return(
   <div>

    
    {
      user== false && loading==false  ?
      <>
      
    <div className="tw-container tw-flex tw-place-items-center tw-justify-center tw-h-screen dark:bg-gray-800 ">
    <button onClick={handlesubmit} className="tw-flex place-items-center px-4 py-2 border flex-gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 tw-mb-10" >
        <div style={{flexDirection:"row", display:"flex",}} className='flex gap-2'>
        <img className='tw-w-6 tw-h-6' src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
        <span>Login with Google</span>
        </div>  
    </button>

    </div>
      </>: user==false && loading==true ? 
      <div className='tw-flex tw-items-center tw-justify-center tw-h-screen'>
          <div className='text-center'>
          <CircularProgress color="inherit"/>
          </div>
      </div>
    
      : <>
      <div className='tw-container rounded border-2'>
      <div className='pt-4 pb-4 tw-bg-slate-700 place-items-start tw-rounded-t-lg'>
          <h4 className='tw-pl-3 text-white'>Aristotle Gmail Craft</h4>
      </div>
      <div>
        {/* <div className='pt-2 pb-4  tw-align-items-right'>
            <button> hello  </button>
        </div> */}
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        {/* <TableHead >
          <TableRow >
            <StyledTableCell style={{backgroundColor:'#1f2937',fontWeight:'bold'}}>Name</StyledTableCell>
            <StyledTableCell align="center" style={{backgroundColor:'#1f2937',fontWeight:'bold'}}>Email</StyledTableCell>
            <StyledTableCell align="center" style={{backgroundColor:'#1f2937',fontWeight:'bold'}}>Summaraize</StyledTableCell>
       
          </TableRow>
        </TableHead> */}
        <TableBody>
          {gmails.map((row) => (
            <StyledTableRow key={row.From}  hover='true'>
              <StyledTableCell align="left" style={{width:'5%'}} sx={{paddingTop:"10px",paddingBottom:"10px"}}>
                <input type='checkbox' />
              </StyledTableCell>
              <StyledTableCell component="th" className='text-slate-700' scope="row" align='left' width="20%" sx={{paddingTop:"10px",paddingBottom:"10px"}}>
                <div className="tw-flex flex-row tw-space-x-3 tw-place-items-center">
                    <div className='tw-w-8 tw-h-8 mr-2'>
                     
                     <RandomColorAvatar text={row.From[0]}/>
                    </div>
                    <div className='ml-2 tw-text-slate-700'>
                    {row.From}  
                    </div>
                </div>
                
              </StyledTableCell>

              <StyledTableCell className="text-slate-700" align="left" style={{width:'48%'}} sx={{paddingTop:"10px",paddingBottom:"10px"}}>{row["Email Subject"]}</StyledTableCell>
              <StyledTableCell   align="left" style={{width:'17%',color:"green",fontFamily:"sans-serif"}} sx={{paddingTop:"10px",paddingBottom:"10px"}}>
              <div className='tw-flex tw-justify-between tw-text-slate-700 tw-text-green tw-space-x-2'>
                  <GradeRoundedIcon color='green'/>
                  {
                  row["Sentiment Label"]
                  }
                </div>
                </StyledTableCell>
              <StyledTableCell align="left" style={{width:'10%',fontFamily:"sans-serif"}} sx={{paddingTop:"10px",paddingBottom:"10px"}}>
                <div className='tw-flex tw-justify-between tw-text-slate-700 '>
                  <AttachFileOutlinedIcon  />
                  {row.Date}
                </div>

              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
    </>
    
    }
    
  </div>
  )
   
};
export default Page;
