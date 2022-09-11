import React from 'react'

import Konten from './komponen/Konten'

export default class ReactApp extends React.Component {
    render() {
        return (
            <div className='container mx-auto bg-gray-light rounded-xl shadow border p-8 m-10'>
                <Konten />
                </div>
        )
    }
}