import React from 'react';
import "./style.css";
import Button from './Button';
/* with normal function */
// function App() {

//     return(

//         <div>
//             <h1 style={{ textAlign: 'center' }}>Hello World</h1>
//             <button className = "button">Heyy</button>
//         </div>
//     );
// };

/* with arrow function */
const App = () => {

    return(

        <div>
            <h1 style={{ textAlign: 'center' }}>Hello World</h1>
            {/* <button className = "button">Play Store</button>
            <button className = "button">App Store</button> */}
            <Button title = "App Store"/>
            <Button title = "Play Store"/>
        </div>
    );
};

export default App;