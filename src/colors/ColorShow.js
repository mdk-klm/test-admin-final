import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import { Show, SimpleShowLayout, TextField } from "react-admin";

const useStyles = makeStyles({
  rowShow: {
    backgroundColor: "purple",
  },
});

export const ColorShow = (props) => {
  const classes = useStyles();
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField className={classes.rowShow} source="id" />
        <TextField className={classes.rowShow} source="name" />
      </SimpleShowLayout>
    </Show>
  );
};
