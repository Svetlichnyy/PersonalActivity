import React, {useState} from 'react';
import "../../UI/Form/Form.css"
import {Box} from "@mui/material";
import "./CreateTodo.css"
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import CloseIcon from "@mui/icons-material/Close";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {ReactComponent as HomeIcon} from "../../../assets/images/bx-color-house.svg";
import {ReactComponent as MeetingIcon} from "../../../assets/images/bx-color-meeting.svg";
import {ReactComponent as WorkIcon} from "../../../assets/images/bx-color-work.svg";
import {ReactComponent as SportIcon} from "../../../assets/images/bx-color-workout.svg";
import {useDispatch} from "react-redux";
import {saveTodo} from "../../TodoSlice";

const CreateTodo = ({children, setOpen}) => {

    const dispatch = useDispatch()

    const addTodo = () =>{
        console.log(`Adding ${ToDoData}`)
        dispatch(saveTodo({
            name: ToDoData.name,
            description: ToDoData.description,
            tags: tags,
            time: time,
            deadline: value,
            category: category,
            priority: priority,
            id: Date.now()
        }))
    }

    const [time, setTime] = useState('');
    const handleChangeTime = (e) => {
        setTime(e.target.value);
        setToDoData({...ToDoData, notification: e.target.value})
    };
    const [category, setCategory] = useState('');
    const handleChangeCategory = (e) => {
        setCategory(e.target.value);
        setToDoData({...ToDoData, category: e.target.value})
    };
    const [priority, setPriority] = useState('');
    const handleChangePriority = (e) => {
        setPriority(e.target.value);
        setToDoData({...ToDoData, priority: e.target.value})
    };

    const [value, setValue] = useState(new Date());

    const [tags, setTags] = useState(['yourTags']);

    const selectedTags = tags => {
        setToDoData({...ToDoData, tags: tags})
    };



    const addTag = (e) => {
        if (e.key === "Enter") {
            if (e.target.value.length > 0) {
                selectedTags([...tags, e.target.value])
                setTags([...tags, e.target.value]);
                e.target.value = "";
            }
        }
    };

    const removeTag = (removedTag) => {
        const newTags = tags.filter((tag) => tag !== removedTag);
        setTags(newTags);
    };


    const [ToDoData, setToDoData] = useState({
        name: '',
        deadline: value,
        tags: tags,
        category: '',
        notification: '',
        priority: '',
        description: ''
    })



    return (
        <div className="create-todo">
            <Box className="form-box">
                <div className="form">
                    <div className='header'>
                        <div className='form-title'>Task Creation</div>
                        <br/>
                    </div>
                    {children}
                    <div className="input-container">
                        <div className='login-email'>
                            <label className='form-email'>
                                <input
                                    onChange={(e) => setToDoData({...ToDoData, name: e.target.value})}
                                    placeholder="Enter Task Name"
                                    className='form-email-input tag-input'
                                />
                                <span className='form-email-label'>Task Name</span>
                            </label>
                        </div>
                        <div className="tag-container">
                            <div className='tag-container-title'>Add Tags</div>
                            {tags.map((tag, index) => {
                                return (
                                    <div key={index} className="tag" style={{scrollSnapAlign:"start"}}>
                                        #{tag} <CloseIcon className='tag-close' onClick={() => removeTag(tag)} />
                                    </div>
                                );
                            })}
                            <input onKeyDown={addTag} />
                        </div>
                        <div className='login-email'>
                            <label className='form-email'>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel className='label-notification all-labels' id="time-label">Notification</InputLabel>
                                        <Select
                                            labelId="time-label"
                                            id="category-label-select"
                                            value={time}
                                            label="Time"
                                            onChange={handleChangeTime}
                                        >
                                            <MenuItem value='in 5 minutes' className="menu-item">
                                                in 5 minutes
                                            </MenuItem>
                                            <MenuItem value='in 15 minutes' className="menu-item">
                                                in 15 minutes
                                            </MenuItem>
                                            <MenuItem value='in 30 minutes' className="menu-item">
                                                in 30 minutes
                                            </MenuItem>
                                            <MenuItem value='in 1 hour' className="menu-item">
                                                in 1 hour
                                            </MenuItem>
                                            <MenuItem value='in 1 day' className="menu-item">
                                                in 1 day
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                {/*<span className='form-email-label'>E-Mail</span>*/}
                            </label>
                        </div>
                        <div className='login-email' >
                            <label className='form-email' >
                                <LocalizationProvider  dateAdapter={AdapterDateFns}>
                                    <DateTimePicker
                                        renderInput={(props) => <TextField {...props} />}
                                        label="Set Deadline"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                            setToDoData({...ToDoData, deadline: newValue})
                                        }}
                                    />
                                </LocalizationProvider>
                                {/*<span className='form-email-label'>Set Deadline</span>*/}
                            </label>
                        </div>
                        <div className='login-email'>
                            <label className='form-email'>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="category-label">Category</InputLabel>
                                        <Select
                                            labelId="category-label"
                                            id="category-label-select"
                                            value={category}
                                            label="Category"
                                            onChange={handleChangeCategory}
                                        >
                                            <MenuItem value='home' className="menu-item">
                                                <HomeIcon className="menu-item-icon"/>       Home
                                            </MenuItem>
                                            <MenuItem value='Meetings' className="menu-item">
                                                <MeetingIcon className="menu-item-icon"/>        Meetings
                                            </MenuItem>
                                            <MenuItem value='Work' className="menu-item">
                                                <WorkIcon className="menu-item-icon"/>        Work
                                            </MenuItem>
                                            <MenuItem value='Sport' className="menu-item">
                                                <SportIcon className="menu-item-icon"/>        Sport
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </label>
                        </div>
                        <div className='login-email'>
                            <label className='form-email'>
                                <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel className="all-labels " id="category-label">Set Color Priority</InputLabel>
                                        <Select
                                            labelId="category-label"
                                            id="category-label-select"
                                            value={priority}
                                            label="Priority"
                                            onChange={handleChangePriority}
                                        >
                                            <MenuItem value='Important' className="menu-item">
                                                <div className="circle" style={{backgroundColor:"#E44233"}}/>      Important
                                            </MenuItem>
                                            <MenuItem value='Middle' className="menu-item">
                                                <div className="circle" style={{backgroundColor:"#03A0E8"}}/>      Middle
                                            </MenuItem>
                                            <MenuItem value='Neutral' className="menu-item">
                                                <div className="circle" style={{backgroundColor:"#D7D7D7"}}/>      Neutral
                                            </MenuItem>
                                            <MenuItem value='Low' className="menu-item">
                                                <div className="circle" style={{backgroundColor:"#FDCB42"}}/>      Low
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </label>
                        </div>

                    </div>
                    <div className='description-container'>
                        <label className='form-description'>
                        <textarea
                            onChange={(e) => setToDoData({...ToDoData, description: e.target.value})}
                            placeholder="Enter your text"
                            className='form-description-input'
                        >

                            </textarea>
                            <span className='form-description-label'>Description</span>
                        </label>
                    </div>
                    <div className='footer'>
                        <button className='main-button form-prev-todo'
                                onClick={() => {
                                    setOpen(false)
                                }}>
                        </button>
                        <button className='main-button form-next-todo'
                                onClick={() => {
                                    addTodo()
                                    console.log("Adding todo...")
                                    setOpen(false)
                                }}
                        >
                            Create task
                        </button>
                    </div>

                </div>

            </Box>
        </div>
    );
};

export default CreateTodo;