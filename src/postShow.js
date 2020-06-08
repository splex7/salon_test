import * as React from "react";
import { List, Datagrid, ChipField, ImageField, TextField, DateField, BooleanField, UrlField, ReferenceField } from 'react-admin';
import { useGetOne, useShowController, ReferenceManyField, Show, ShowButton, TabbedShowLayout, SimpleShowLayout, Tab, ArrayField } from 'react-admin';

//Design
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

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

const useStyles = makeStyles((theme) => ({
  root: {

    '& > div > span': {
        display: 'flex',
        justifyContent: 'flex-start',
        flexFlow: 'row wrap',
        alignItems: 'stretch',
      },
    '& .ra-field': {
        padding: theme.spacing(1),
        margin : theme.spacing(1),
        flex : '1 1 30%',
        outline: '1px solid #aaa',


    },
  },
  purpleBoldText: {
    color: theme.palette.secondary.main,
    fontWeight: '800',
    fontSize: '1.2rem',
  },
}));

export const PostShow = (props) => {
    const classes = useStyles();
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return(
        <MyShow {...props}>
            {isSmall ? (
              <SimpleShowLayout>
                <TextField source="제목"  />
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
                <TextField source="내용" />
                <TextField source="인용문" />
                <TextField source="비고" />
                <ReferenceField label="작성자" source="userId" reference="users">
                  <TextField source="name" />
                </ReferenceField>
              </SimpleShowLayout>
            ) : (
              <TabbedShowLayout className={classes.root} >
                <Tab label="도시서사DB">
                  <TextField source="제목" className={classes.purpleBoldText} />
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
            )}
        </MyShow>
    );
}

export default PostShow;
