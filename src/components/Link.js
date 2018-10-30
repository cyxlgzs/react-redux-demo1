import React from 'react';

const Link = ({current_filter, filter, children, onClick}) => {
    if(current_filter===filter){
        return (<span>{children}</span>);
    }else{
        return (
            <a href="#" onClick={()=>onClick(filter)}>{children}</a>
        );
    }
}

export default Link;