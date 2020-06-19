// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin'

import { UserList } from './users';
import { PostShow } from './postShow';
import { PostList, PostEdit, PostCreate} from './posts';
import  addUploadFeature  from './addUploadFeature'

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import Dashboard from './Dashboard';
import MyLayout from './MyLayout';


import LoginPage from './LoginPage';
import CustomLoginPage from './CustomLoginPage'
import lightTheme from './theme';

// firebase ..
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
  FirebaseRealTimeSaga
} from 'react-admin-firebase';

import config from './config';

const options = {};

const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

const uploadCapableDataProvider = addUploadFeature(dataProvider);

// const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/splex7/fake-json-db');
const App = () => (
    <Admin theme={lightTheme} loginPage={CustomLoginPage} dashboard={Dashboard} authProvider={authProvider} layout={MyLayout}  dataProvider={uploadCapableDataProvider}>
        <Resource name ="posts" list={PostList} create={PostCreate} edit={PostEdit} show={PostShow} icon={PostIcon} />
        <Resource name ="users" list={UserList} icon={UserIcon} />
    </Admin>
);
export default App;
