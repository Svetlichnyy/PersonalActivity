import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



    const MyModal = ({children, open, setOpen}) => {



    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div>
                {localStorage.currentUser
                    ?
                    <Button
                    style={{marginTop: '10px'}}
                    variant="outlined"
                    onClick={handleOpen}
                >
                    Add new post
                </Button>
                :
                    <Button
                        style={{display:'none'}}

                    >
                    </Button>
                }
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        {children}
                    </Box>
                </Modal>
            </div>
        </div>
    );
}

export default MyModal;