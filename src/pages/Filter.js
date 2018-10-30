import {connect} from 'react-redux';
import Filter from '../components/Filter';
import {filterTodos, externalActionTest} from '../actions'

const mapStateToProps = (state) => {
    return {
        current_filter: state.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFilterClick:(filter)=>{
            dispatch(filterTodos(filter));
            if(filter=='SHOW_ALL'){
                dispatch(externalActionTest('external...'));
            }
        }
    }
}
const FilterPage = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterPage;