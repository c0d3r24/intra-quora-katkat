import React from 'react';

const Button = ({style, onClick, className, children}) => {

    className = `btn btn-primary ${className}`;

    let {baseStyle} = styles;
    if(style) baseStyle = {...baseStyle, ...style};

    return (
        <button
            onClick={onClick}
            className={className}
            style={baseStyle}
        >
            {children}
        </button>
    )
}

const styles = {
    baseStyle : {backgroundColor: '#5af4ea'}
}

export {Button};