import React from 'react'

function Button({ increment, decrement }) {
    return (
        <React.Fragment>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </React.Fragment>
    );
}

export default React.memo(Button);
