import React from 'react'
import { connect } from 'react-redux'

export const Tasklist = ({ tasks, name }) => (
    <div>
        <h2>{name}</h2>
        <div>
            {tasks.map(task => (
                <div>{task.name}</div>
            ))}
        </div>
    </div>
)

function mapStateToProp(state, ownProps) {
    return {
        name: ownProps.name,
        id: ownProps.id,
        tasks: state.tasks.filter(task => task.parent === ownProps.id)
    }
}

export const ConnectedTaskList = connect(mapStateToProp)(Tasklist)