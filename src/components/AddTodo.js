import React from 'react';

const AddTodo = ({onSubmitClick}) => {
    let input;

    return (
        <div>
            <form onSubmit={ e =>{
                e.preventDefault();
                if(!input.value.trim()){return}
                onSubmitClick(input.value);
                input.value = "";
            }
                }>
                <input ref={text=>{input=text}}/>
                <button type="submit">
                    AddTodo
                </button>
            </form>
        </div>
    );
}

export default AddTodo;