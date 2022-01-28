import React from 'react';
import Task from "../../components/UI/Task/Task";
import {useSelector} from "react-redux";
import { selectTodoList } from '../TodoSlice'

const TaskList = () => {

    const todoList = useSelector(selectTodoList)

    return (
        <div>
            {
                todoList.map(item => (
                    <Task
                        name = {item.name}
                        description = {item.description}
                        id = {item.id}
                        tags = {item.tags}
                        time = {item.time}
                        deadline = {item.deadline}
                        category = {item.category}
                        priority = {item.priority}
                    />
                ))
            }
        </div>
    );
};

export default TaskList;