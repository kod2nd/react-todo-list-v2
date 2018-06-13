import React from 'react';

const Tasks = (props) => {
    console.log(props.isCompleted)
    return <li>{props.name}</li>;
    }
export default Tasks