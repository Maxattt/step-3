import React from "react";
import ReactDOM from 'react-dom/client';
//const element = React.createElement('hi', null, 'Hello React World');
const element = (
    <div>
        <h1>My Todo List</h1>
        <input placeholder="search" />
        <ul>
            <li>Install React</li>
            <li>Study React</li>
            <li>Use React</li>
            <li>Build React App</li>
        </ul>
    </div>
    );
    const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root); // React 18 method
reactRoot.render(element);
