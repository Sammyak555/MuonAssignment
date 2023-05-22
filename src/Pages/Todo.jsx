import React from 'react'
import "../Styles/Todo.css"

const Todo = () => {
    return (
        <div className='mainBox'>
            {/* <div id="container">
                <div className='leftSidebar'>1</div>
                <div className='sectionBox'>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </div> */}
            <div className='container'>
                <div className='leftsidebar'>
                    <div></div>
                    <h1 className='user'>Name</h1>
                </div>
                <div className='rightbig'>
                <div className='solidbox'>
                </div>
                <div className='listnedit'>
                    <div className='todolist'></div>
                    <div className='editbox'></div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Todo