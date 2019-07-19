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

// export default App;


// import React from 'react';
// import { render } from 'react-dom';
// import { Admin, Resource } from 'react-admin';
// import simpleRestProvider from 'ra-data-simple-rest';

// import { PostList, PostEdit, PostCreate, PostIcon } from './posts';

// render(
//     <Admin dataProvider={simpleRestProvider('http://localhost:3000')}>
//         <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
//     </Admin>,
//     document.getElementById('root')
// );

import React from 'react';
import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => <Admin dataProvider={dataProvider} />;

export default App;