import React from 'react';

const Modal = ({hidden, children}) => {



    return (
        <div hidden={hidden} className="container-fluid" style={styles.baseStyle}>
            {children}
        </div>
    )
}

const styles = {
    baseStyle : {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top:0,
        background: 'rgba(0,0,0,.4)'
    }
}

export {Modal};