// in src/App.js
import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { PostList, PostEdit, PostShow} from './posts';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import Dashboard from './Dashboard';
import MyLayout from './MyLayout';

import authProvider from './authProvider';
import LoginPage from './LoginPage';


const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/splex7/fake-json-db');
const App = () => (
  <Admin loginPage={LoginPage} dashboard={Dashboard} authProvider={authProvider} layout={MyLayout}  dataProvider={dataProvider}>
    <Resource name ="posts" list={PostList} edit={PostEdit} show={PostShow} icon={PostIcon} />
    <Resource name ="users" list={UserList} icon={UserIcon} />
  </Admin>
);
export default App;
