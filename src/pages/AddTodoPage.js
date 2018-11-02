import {connect} from 'react-redux';
import AddTodo from '../components/AddTodo.js';
import {addTodo} from '../actions';


const mapStateToProps = (state) => {
    //console.log(state);
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitClick: (text) => {
            dispatch(addTodo(text));
        }
    }
}

const AddTodoPage = connect(mapStateToProps, mapDispatchToProps)(AddTodo);


export default AddTodoPage;