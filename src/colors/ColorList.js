import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import { Datagrid, List, TextField } from "react-admin";

const useStyles = makeStyles({
  row: {
    color: "purple",
  },
});

const ColorList = (props) => {
  const classes = useStyles();

  return (
    <List {...props}>
      <Datagrid rowClick={"show"}>
        <TextField className={classes.row} source="id" />
        <TextField className={classes.row} source="name" />
      </Datagrid>
    </List>
  );
};

export default ColorList;
