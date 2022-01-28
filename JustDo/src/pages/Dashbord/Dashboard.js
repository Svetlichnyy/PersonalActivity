import React, {useState} from 'react';
import Sidebar from "../../components/Sidebar";
import './Dashboard.css'
import CreateTodo from "../../components/modals/CreateTodo/CreateTodo";
import CloseIcon from "@mui/icons-material/Close";
import {Modal} from "@mui/material";
import TaskList from "../../components/TaskList/TaskList";

const Dashboard = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            {/*<Sidebar/>*/}
            <button onClick={handleOpen} className='larger-button'>
                Create task
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <CreateTodo setOpen={setOpen}>
                    <CloseIcon style={{color: 'grey', position: 'absolute', right: '30px', top: '30px', cursor: 'pointer'}} onClick={handleClose} />
                </CreateTodo>
            </Modal>
            <div className='taskList'>
                <TaskList />
            </div>
        </div>
    );
};

export default Dashboard;