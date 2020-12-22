import * as React from "react";
import {
  BooleanField,
  ChipField,
  Datagrid,
  EditButton,
  ImageField,
  List,
  ReferenceArrayField,
  ShowButton,
  SingleFieldList,
  TextField,
} from "react-admin";
import { makeStyles } from '@material-ui/core/styles';
import MemeFilter from "./MemeFilter";
import classnames from 'classnames';


const MemeList = (props) => {
  return (
    <List {...props} filters={<MemeFilter />} exporter={false}>
      <Datagrid rowClick={"show"}>
        <TextField source="id" />
        <TextField source="name"color={"primary"} />
        <TextField source="bottomText" />
        <ImageField source="image" />
        <TextField source="rank" />
        <ReferenceArrayField
          label="Tags"
          source="tagsId"
          reference="tags"
          allowEmpty
        >
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ReferenceArrayField>
        <BooleanField source="isDead" />
        <TextField source="color"/>
        <ShowButton />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default MemeList;
