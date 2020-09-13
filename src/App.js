// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin'

import { UserList } from './users';
import { PostShow } from './postShow';
import { PostList, PostEdit, PostCreate} from './posts';
import { addUploadFeature } from './addUploadFeature';

import PostIcon from '@material-ui/icons/MenuBook';


import Dashboard from './Dashboard';
import CustomLoginPage from './CustomLoginPage';
import { lightTheme } from './theme';

// firebase ..
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
  FirebaseRealTimeSaga
} from 'react-admin-firebase';

import config from './config';

const options = {
  persistence: 'local',
}//local:닫아도 로그인이 유지됨.

const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);
const uploadCapableDataProvider = addUploadFeature(dataProvider);

// const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/splex7/fake-json-db');
const App = () => (
    <Admin theme={lightTheme} loginPage={CustomLoginPage} dashboard={Dashboard} authProvider={authProvider} dataProvider={uploadCapableDataProvider}>
        <Resource name ="posts" list={PostList} create={PostCreate} edit={PostEdit} show={PostShow} icon={PostIcon} />
        <Resource name ="users" />
    </Admin>
);
export default App;
