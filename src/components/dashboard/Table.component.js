import React from "react";
import { Button, Badge, Chip } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import MUIDataTable from "mui-datatables";

const Table = ({ handleOpen }) => {
  const renderDotCell = value => {
    if (value) {
      return (
        <Badge color="primary" variant="dot">
          <React.Fragment />
        </Badge>
      );
    }
  };

  const renderScoreCell = value => {
    const criticalLimit = 25;
    const criticalText = "Critical";

    if (value <= criticalLimit) {
      return (
        <React.Fragment>
          <Typography variant="caption">{`${value}% `} </Typography>

          <Chip color="secondary" size="small" label={criticalText} />
        </React.Fragment>
      );
    }

    return value;
  };

  const renderStatusCell = value => {
    if (value === 0) {
      return (
        <Button onClick={handleOpen} variant="contained" color="primary">
          Check Now
        </Button>
      );
    }
    if (value === 1) {
      return (
        <Button variant="contained" color="secondary">
          Approved
        </Button>
      );
    }

    if (value === 2) {
      return (
        <Button
          variant="contained"
          style={{ backgroundColor: "#6c96f7", color: "#fff" }}
        >
          Processing
        </Button>
      );
    }

    return value;
  };

  const columns = [
    "#",
    {
      name: "",
      options: {
        customBodyRender: renderDotCell
      }
    },
    "Time",
    "First Name",
    "Last Name",
    "Location",
    "Authentication Document",
    {
      name: "Score",
      options: {
        customBodyRender: renderScoreCell
      }
    },
    {
      name: "Status",
      options: {
        customBodyRender: renderStatusCell
      }
    }
  ];

  let data = [
    ["1", "", "1 hour ago", "Joe", "James", "Egypt", "Passport", "20", 1],
    ["2", true, "1 hour ago", "Joe", "James", "Egypt", "Passport", "26", 0],
    ["3", "", "1 hour ago", "Joe", "James", "Egypt", "Passport", "30", 2],
    ["4", true, "1 hour ago", "Joe", "James", "Egypt", "Passport", "15", 0]
  ];

  data = [...data, ...data, ...data];

  return (
    <MUIDataTable
      data={data}
      columns={columns}
      options={{
        filter: false,
        search: false,
        download: false,
        print: false,
        viewColumns: false,
        selectableRows: "none"
      }}
    />
  );
};

export default Table;
