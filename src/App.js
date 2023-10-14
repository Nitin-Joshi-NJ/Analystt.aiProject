import { useState,useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button
} from "@mui/material";
import ViewOrderModal from './ViewOrderModal'


function App() {
  const [apiData, setApiData] = useState('');
  const [error, setError] = useState('');
  const [data,setData] = useState('')
  const [open,setOpen] = useState(false)

  const fetchData = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        let data = res?.data
        console.log("data", data);
        setApiData(data);
      })
      .catch((error)=>{
        console.log('error',error.message)
        setError('Error Fetching Data')
      })
  };
    
  

  useEffect(()=>{
    fetchData()
  },[])

  function handleViewOrder(e,value){
    setOpen(true)
    setData(value)
   
  }

  function handleClose(){
    setOpen(false)
  }


  return (
    <>
      {error && <p>{error}</p>}
      {apiData ? (
        <div className="container">
          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              color: "blue",
            }}
          >
            Data fetched through API
          </h3>
          <br />
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <h5>Name</h5>
                  </TableCell>
                  <TableCell>
                    <h5>Contact</h5>
                  </TableCell>
                  <TableCell>
                    <h5>City</h5>
                  </TableCell>
                  <TableCell>
                    <h5>Website</h5>
                  </TableCell>
                  <TableCell>
                    <h5>Action</h5>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {apiData.map((value) => (
                  <TableRow>
                    <TableCell><h6>{value.name}</h6></TableCell>
                    <TableCell><h6>{value.phone}</h6></TableCell>
                    <TableCell><h6>{value.address.city}</h6></TableCell>
                    <TableCell><h6>{value.website}</h6></TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={(e)=>handleViewOrder(e,value)}
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <ViewOrderModal isOpen={open} data={data} isClose={handleClose}/>
        </div>
        
      ) : (
        <h4>Loading Data</h4>
      )}
    </>
  );
}

export default App;
