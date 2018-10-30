import React from 'react';
import Link from './Link'

const Filter = ({current_filter, onFilterClick}) => (
    <p>
        Filter:
        <Link current_filter={current_filter} filter={"SHOW_ALL"} onClick={onFilterClick}>ALL</Link>,
        <Link current_filter={current_filter} filter={"SHOW_COMPLETED"} onClick={onFilterClick}>COMPLETED</Link>,
        <Link current_filter={current_filter} filter={"SHOW_ACTIVE"} onClick={onFilterClick}>ACTIVE</Link>,
    </p>
);

export default Filter;