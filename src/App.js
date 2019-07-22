// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import { ExecutionList, ExecutionIcon} from "./executions";
import { InstanceList, InstanceIcon } from "./instances";
import { UserList, UserIcon } from "./users";

const dataProvider = jsonServerProvider('http://localhost:1715');

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="instances" list={InstanceList} icon={InstanceIcon} />
        <Resource name="executions" list={ExecutionList} icon={ExecutionIcon} />
        <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
);

export default App;