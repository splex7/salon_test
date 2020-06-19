import * as React from "react";
import { CloneButton, SimpleList, List, Datagrid, ChipField, ImageField, TextField, DateField, BooleanField, UrlField, ReferenceField } from 'react-admin';
import { ImageInput, Create, Edit, EditButton, ShowButton, SimpleForm, TextInput, BooleanInput, DateInput, SelectInput, ReferenceInput } from 'react-admin';
import { SelectArrayInput, FormWithRedirect, NullableBooleanInput, Toolbar, DeleteButton, SaveButton, ArrayInput } from 'react-admin';
import { NumberInput, AutocompleteInput, RadioButtonGroupInput, SimpleFormIterator } from 'react-admin';
import { Filter } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Paper, Card, CardContent, CardHeader, Button, Typography, CardActions  } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom';

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="제목" source="제목" defaultValue="" />
        <TextInput label="작자" source="작자" defaultValue="" />
        <TextInput label="내용" source="내용" defaultValue="" />
        <TextInput label="인용문" source="인용문" defaultValue="" />
    </Filter>
);


export const PostList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return(
        <List filters={<PostFilter />} {...props}>

            {isSmall ? (

                <SimpleList
                    primaryText={record => `${record.도시}:${record.작품속지명}`}
                    secondaryText={record => `${record.작자}의 ${record.제목}`}
                    tertiaryText={record => `${record.서사양식}`}
                    linkType="show"
                />
            ) : (

                <Datagrid>
                    <TextField source="도시" />
                    <TextField source="세부주소" />
                    <TextField source="제목" />
                    <TextField source="작자" />
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
                    <EditButton label="수정"/>
                    <ShowButton label="보기"/>
                    <CloneButton label="복제"/>
                </Datagrid>
            )}
        </List>
    );
}



const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.제목}"` : ''}</span>;
};

export const PostCreate = props => {
    const classes = useStyles();
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <Create {...props}>
            {isSmall ? (
                <SimpleEditForm/>
            ) : (
                <StandardEditForm />
            )}
        </Create>
    )
}



const useStyles = makeStyles({
    inlineBlock: { display: 'inline-flex', marginRight: '1rem' },
});



export const PostEdit = props => {
    const classes = useStyles();
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <Edit {...props}>
            {isSmall ? (
                <SimpleEditForm/>
            ) : (
                <StandardEditForm />
            )}
        </Edit>
    )
}

const segments = [
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
];


const SimpleEditForm = ( props, classes ) => (
    <SimpleForm {...props} >
        <TextInput source="도시"  />
        <TextInput source="세부주소" formClassName={classes.inlineBlock}/>
        <TextInput source="작품속지명" formClassName={classes.inlineBlock} />
        <SelectInput formClassName={classes.inlineBlock} source="서사양식" choices={[
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
        <SelectInput formClassName={classes.inlineBlock} source="서사성격" choices={[
            { id: '문학', name: '문학' },
            { id: '비문학', name: '비문학' },
        ]} />
        <TextInput formClassName={classes.inlineBlock} source="작자" />


        <TextInput formClassName={classes.inlineBlock} source="서사분류" />
        <TextInput formClassName={classes.inlineBlock} source="제목" />
        <DateInput source="발표연도" />
        <ArrayInput source="인용문">
          <SimpleFormIterator>
              <TextInput label="본문내용" multiline source="content" />
              <NumberInput label="페이지" source="page" />
          </SimpleFormIterator>
        </ArrayInput>
        <TextInput multiline source="내용" />
        <TextInput multiline source="비고" />
        <ImageInput source="pictures" label="관련이미지" accept="image/*">
            <ImageField source="src" title="title" />
        </ImageInput>
        <NullableBooleanInput source="전문확보" />
        <TextInput variant="outlined" disabled source="id" />
    </SimpleForm>
)

const StandardEditForm = props => (
    <FormWithRedirect
        {...props}
        render={formProps => (
            <form>
                <Box p="1em">
                    <Box display="flex">

                        <Box flex={2} mr="1em">
                            <Typography variant="h6" gutterBottom>도시서사DB</Typography>
                            <Box display="flex">
                                <Box flex={1} mr="0.5em">
                                    <TextInput source="도시" resource="post" fullWidth />
                                </Box>
                                <Box flex={2} ml="0.5em">
                                    <TextInput source="세부주소" resource="post" fullWidth />
                                </Box>
                            </Box>
                            <Box display="flex">
                                <Box flex={1} mr="0.5em">
                                    <TextInput source="작품속지명" resource="post" fullWidth />
                                </Box>
                                <Box flex={1} mr="0.5em" ml="0.5em">
                                    <SelectInput source="서사양식" resource="post" choices={segments} fullWidth />
                                </Box>
                                <Box flex={1} mr="0.5em" ml="0.5em">
                                    <SelectInput source="서사성격" choices={[
                                        { id: '문학', name: '문학' },
                                        { id: '비문학', name: '비문학' },
                                    ]} fullWidth />
                                </Box>
                                <Box flex={1} ml="0.5em">
                                    <TextInput source="서사분류" resource="post" fullWidth />
                                </Box>
                            </Box>
                            <Box display="flex">
                                <Box flex={1} mr="0.5em">
                                    <TextInput source="작자" resource="post" fullWidth />
                                </Box>
                                <Box flex={1} mr="0.5em" ml="0.5em">
                                    <TextInput source="제목" resource="post" fullWidth />
                                </Box>
                                <Box flex={1} mr="0.5em" ml="0.5em">
                                    <TextInput source="발표매체" resource="post" fullWidth />
                                </Box>
                                <Box flex={1} ml="0.5em">
                                    <DateInput source="발표연도" resource="post" fullWidth />
                                </Box>
                            </Box>
                            <TextInput multiline source="내용" resource="post" fullWidth />
                            <ArrayInput source="인용문" resource="post" fullWidth >
                                <SimpleFormIterator >
                                    <TextInput label="본문내용" multiline source="content" fullWidth />
                                    <NumberInput label="페이지" source="page" />
                                </SimpleFormIterator>
                            </ArrayInput>
                            <TextInput multiline source="비고" resource="post" fullWidth />
                            <TextInput multiline source="출처" resource="post" fullWidth />
                        </Box>

                        <Box flex={1} ml="1em">
                            <Typography variant="h6" gutterBottom>메타정보 </Typography>
                            <TextInput disabled source="id" resource="post" fullWidth />
                            <ImageInput source="pictures" label="관련이미지" accept="image/*">
                                <ImageField source="src" title="title" />
                            </ImageInput>
                            <NullableBooleanInput source="전문확보" resource="post" fullWidth />
                        </Box>

                    </Box>
                </Box>
                <Toolbar>
                    <Box display="flex" justifyContent="space-between" width="100%">
                        <SaveButton
                        redirect="list"
                        saving={formProps.saving}
                        handleSubmitWithRedirect={formProps.handleSubmitWithRedirect}
                        />
                    </Box>
                </Toolbar>
            </form>
        )}
    />
);
