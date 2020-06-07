import * as React from "react";
import { SimpleList, List, Datagrid, ChipField, ImageField, TextField, DateField, BooleanField, UrlField, ReferenceField } from 'react-admin';
import MyTextField from './myTextField';

import { Edit, EditButton, SimpleForm, TextInput, BooleanInput, DateInput, SelectInput, ReferenceInput } from 'react-admin';

import { useShowController, ReferenceManyField, Show, ShowButton, TabbedShowLayout, Tab, ArrayField } from 'react-admin';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader, Button, Typography, CardActions  } from '@material-ui/core';

import { useMediaQuery } from '@material-ui/core';


export const PostList = props => {

    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return(
        <List {...props}>

            {isSmall ? (
                <SimpleList
                    primaryText={record => `${record.도시}:${record.작품속지명}`}
                    secondaryText={record => `${record.작자}의 ${record.제목}`}
                    tertiaryText={record => `${record.서사양식}`}
                />
            ) : (
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
            )}
        </List>
    );
}
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
