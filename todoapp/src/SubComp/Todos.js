import React from 'react'

const Todos = ({todos,todoDelete}) => {
    const todosHtmlList = todos.length ? (todos.map((todo)=>{
        const {id, content} = todo;
        return(
            <div className="collection-item" key={id}>
                <span onClick={()=>{todoDelete(id)}}>{content}</span>
            </div>
        )
    })) : ( <p className="center"> There is nothing to do</p> );
    return(
        <div className="todos collection">
            {todosHtmlList}
        </div>
    )
}

export default Todos