import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height:450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ViewOrderModal({isOpen,isClose,data}) {

  return (
    <div>
      {/* <Button onClick={setOpen}>Open modal</Button> */}
      <Modal
        open={isOpen}
        onClose={isClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2" style={{color:'green',fontWeight:'bolder'}}>
              {data?.name}
          </Typography>
          <Typography id="modal-modal-description" variant='h6' sx={{ mt: 2 }}>
          Username: {data?.username}
          </Typography>
          <Typography id="modal-modal-description" variant='h6' sx={{ mt: 2 }}>
            Email: {data?.email}
          </Typography>
          <Typography id="modal-modal-description" variant='h6' sx={{ mt: 2 }}>
            Address: {data?.address?.street}{data?.address?.suite}{data?.address?.city}
          </Typography>
          <Typography id="modal-modal-description" variant='h6' sx={{ mt: 2 }}>
           Contact: {data?.phone}
          </Typography>
          <Typography id="modal-modal-description" variant='h6' sx={{ mt: 2 }}>
           Zipcode: {data?.address?.zipcode}
          </Typography>
          <Typography id="modal-modal-description" variant='h6' sx={{ mt: 2 }}>
           Company Name: {data?.company?.name}
          </Typography>
          <Typography id="modal-modal-description" variant='h6' sx={{ mt: 2 }}>
           Catchphrase: {data?.company?.catchPhrase}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
