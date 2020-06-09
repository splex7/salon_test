import * as React from "react";
import { SimpleList, List, Datagrid, ChipField, ImageField, TextField, DateField, BooleanField, UrlField, ReferenceField } from 'react-admin';

import { Create, Edit, EditButton, ShowButton, SimpleForm, TextInput, BooleanInput, DateInput, SelectInput, ReferenceInput } from 'react-admin';
import { ArrayInput, NumberInput, AutocompleteInput, RadioButtonGroupInput, SimpleFormIterator } from 'react-admin';

import { Filter } from 'react-admin';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader, Button, Typography, CardActions  } from '@material-ui/core';

import { useMediaQuery } from '@material-ui/core';


export const PostList = props => {

    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return(
        <List filters={<PostFilter />} {...props}>

            {isSmall ? (
                //use simpleList for mobile
                <SimpleList
                    primaryText={record => `${record.도시}:${record.작품속지명}`}
                    secondaryText={record => `${record.작자}의 ${record.제목}`}
                    tertiaryText={record => `${record.서사양식}`}
                    linkType="show"
                />
            ) : (
                //use Datagrid for Desktop
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

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="검색" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="도시" />
            <TextInput source="세부주소" />
            <TextInput source="작품속지명" />
            <SelectInput source="서사양식" choices={[
                { id: '소설', name: '소설' },
                { id: '시', name: '시' },
                { id: '수필', name: '수필' },
                { id: '비평', name: '비평' },
                { id: '희곡', name: '희곡' },
                { id: '사진', name: '사진' },
                { id: '영상', name: '영상' },
                { id: '연극', name: '연극' },
                { id: '문화', name: '문화' },
                { id: '관광', name: '관광' },
            ]} />
            <SelectInput source="서사성격" choices={[
                { id: '문학', name: '문학' },
                { id: '비문학', name: '비문학' },
            ]} />
            <TextInput source="작자" />
            <TextInput source="서사분류" />
            <TextInput source="제목" />
            <DateInput source="발표연도" />
            <ArrayInput source="인용문">
              <SimpleFormIterator>
                  <TextInput label="본문내용" multiline source="content" />
                  <NumberInput label="페이지" source="page" />
              </SimpleFormIterator>
            </ArrayInput>
            <TextInput multiline source="내용" />
            <TextInput multiline source="비고" />
            <TextInput source="첨부자료" />
            <BooleanInput source="전문확보" />
        </SimpleForm>
    </Create>
);

export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="도시" />
            <TextInput source="세부주소" />
            <TextInput source="작품속지명" />
            <SelectInput source="서사양식" choices={[
                { id: '소설', name: '소설' },
                { id: '시', name: '시' },
                { id: '수필', name: '수필' },
                { id: '비평', name: '비평' },
                { id: '희곡', name: '희곡' },
                { id: '사진', name: '사진' },
                { id: '영상', name: '영상' },
                { id: '연극', name: '연극' },
                { id: '문화', name: '문화' },
                { id: '관광', name: '관광' },
            ]} />
            <SelectInput source="서사성격" choices={[
                { id: '문학', name: '문학' },
                { id: '비문학', name: '비문학' },
            ]} />
            <TextInput source="작자" />
            <TextInput source="서사분류" />
            <TextInput source="제목" />
            <DateInput source="발표연도" />
            <ArrayInput source="인용문">
              <SimpleFormIterator>
                  <TextInput label="본문내용" multiline source="content" />
                  <NumberInput label="페이지" source="page" />
              </SimpleFormIterator>
            </ArrayInput>
            <TextInput multiline source="내용" />
            <TextInput multiline source="비고" />
            <TextInput source="첨부자료" />
            <BooleanInput source="전문확보" />

        </SimpleForm>
    </Edit>
);
