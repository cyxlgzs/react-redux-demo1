import {connect} from 'react-redux';
import Filter from '../components/Filter';
import {filterTodos} from '../actions'

const mapStateToProps = (state) => {
    return {
        current_filter: state.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFilterClick:(filter)=>{
            dispatch(filterTodos(filter));
        }
    }
}
const FilterPage = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterPage;