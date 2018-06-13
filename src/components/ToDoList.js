import React, { Component } from 'react';
import Title from './Title';
import Tasks from './Tasks'
import { todos } from '../seedData'


class ToDoList extends Component {
    constructor() {
        super()
        this.state = {
            tasks: todos
        }
    }

    render() {
        return (<div>
            <Title />
            <ul>
                {this.state.tasks.map((object, index) => <Tasks key={index} name={object.name} isCompleted={object.isCompleted} />)}
            </ul>
        </div>)
    }

}

export default ToDoList