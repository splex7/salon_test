import * as React from "react";
import { List, Datagrid, ChipField, ImageField, TextField, DateField, BooleanField, UrlField, ReferenceField } from 'react-admin';
import MyTextField from './myTextField';

import { Edit, EditButton, SimpleForm, TextInput, BooleanInput, DateInput, SelectInput, ReferenceInput } from 'react-admin';

import { useShowController, ReferenceManyField, Show, ShowButton, TabbedShowLayout, Tab, ArrayField } from 'react-admin';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader, Button, Typography, CardActions  } from '@material-ui/core';

export const PostList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="제목" />
            <TextField source="작자" />
            <TextField source="도시" />
            <TextField source="세부주소" />
            <TextField source="작품속지명" />
            <ChipField source="서사양식" />
            <ChipField source="서사성격" />

            <TextField source="서사분류" />

            <DateField source="발표연도" />
            <ImageField source="첨부자료" />
            <BooleanField source="전문확보" />
            <ReferenceField label="작성자" source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);

export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="도시" />
            <TextInput source="세부주소" />
            <TextInput source="작품속지명" />
            <TextInput source="서사양식" />
            <TextInput source="서사성격" />
            <TextInput source="작자" />
            <TextInput source="서사분류" />
            <TextInput source="제목" />
            <DateInput source="발표연도" />
            <TextInput multiline source="비고" />
            <TextInput multiline source="인용문" />
            <TextInput multiline source="내용" />
            <TextInput source="첨부자료" />
            <BooleanInput source="전문확보" />
            <ReferenceInput source="userId" reference="users"><SelectInput optionText="name" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);

const MyShow = props => {
    const {
        basePath, // deduced from the location, useful for action buttons
        defaultTitle, // the translated title based on the resource, e.g. 'Post #123'
        loaded, // boolean that is false until the record is available
        loading, // boolean that is true on mount, and false once the record was fetched
        record, // record fetched via dataProvider.getOne() based on the id from the location
        resource, // the resource name, deduced from the location. e.g. 'posts'
        version, // integer used by the refresh feature
    } = useShowController(props);
    return (
        <div>
            {React.cloneElement(props.children, {
                basePath,
                record,
                resource,
                version,
            })}
        </div>
    );
}

const useStyles = makeStyles({
    myPerfectLayout: {

        maxWidth: "960px",
        background: "#efefef",
        padding: "10px",
        '& .RaTabbedShowLayout-content-25 span' : {
            display: "flex",
            flexWrap: "wrap",
        },
        '& .ra-field' : {
            padding: "10px",
            margin: "10px",
            outline: "1px solid #eee",
            flex: "1 0 200px",
            flexFlow: "column wrap",
            flexDirection: "column",
            background: "#fdfdfd",

        },
        '& ~123div>span': {
            background: 'red'
        }
        // This is JSS syntax to target a deeper element using css selector, here the svg icon for this button
    },
});


export const PostShow = (props) => {
    const classes = useStyles();
    return(
        <MyShow {...props}>
            <TabbedShowLayout className={classes.myPerfectLayout}>
                <Tab label="도시서사DB">
                    <Card>
                        <CardContent>
                            <TextField source="제목" />
                        </CardContent>
                    </Card>
                    <TextField source="작자" />
                    <TextField source="도시" />
                    <TextField source="세부주소" />
                    <TextField source="작품속지명" />
                    <ChipField source="서사양식" />
                    <ChipField source="서사성격" />

                    <TextField source="서사분류" />

                    <DateField source="발표연도" />

                    <BooleanField label="전문확보여부" source="전문확보" />
                    <ImageField source="첨부자료" />

                </Tab>
                <Tab label="본문 및 인용문">
                    <TextField source="내용" />
                    <TextField source="인용문" />
                    <TextField source="비고" />
                </Tab>
                <Tab label="작성자">
                    <ReferenceField label="작성자" source="userId" reference="users">
                        <TextField source="name" />
                    </ReferenceField>
                </Tab>

            </TabbedShowLayout>
        </MyShow>
    );
}
