import React from 'react';

const Task = ({name, description, id, tags, category, deadline, priority, time}) => {
    return (
        <div>
            <p>name: {name}</p>
            <p>description: {description}</p>
            <p>id: {id}</p>
            <p> tags: {tags}</p>
            <p>category: {category}</p>
            {/*<p>{deadline}</p>*/}
            <p>priority: {priority}</p>
            <p>time: {time}</p>
        </div>
    );
};

export default Task;