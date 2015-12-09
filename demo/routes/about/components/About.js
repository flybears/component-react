/**
 * Created by flybear on 15/11/18.
 */

import React from 'react'

class About extends React.Component {
    render() {
        const events = [
            { id: 0, title: 'essay due' }
        ]

        return (
            <div>
                <h2>About</h2>
                <ul>
                    {events.map(event => (
                        <li key={event.id}>{event.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default About