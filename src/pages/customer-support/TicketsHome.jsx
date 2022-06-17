
import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from "../../components/common/Header";
import "./TicketsHome.css";
import { TextField } from "@mui/material";
import { InputLabel, MenuItem, Select, FormControl } from "@mui/material";


function createData(ticketNumber, calories, fat, carbs, protein, button) {
  return { ticketNumber, calories, fat, carbs, protein, button };
}

function handleChangeStatus() {
  console.log("dropdown changed");
}

const rows = [
  createData("T00894", "Billing Issue", 6.0, 24, 4.0, 4.0),
  createData("T00002", "Tire Replacement", 9.0, 37, 4.3),
  createData("T00123", "Scrapes and dent", 16.0, 24, 6.0),
  createData("T00234", "Driver Addition", 3.7, 67, 4.3),
  createData("T00554", "Insurance change", 16.0, 49, 3.9),
];

function TicketsHome() {
  const [state, setState] = useState({
    status: "",
    ticketNo: "",
  });

  return (
    <div className="tickets-home-container">
      <Header />
      <div>
        <div className="first">
          <TextField
            id="ticket-id"
            label="Ticket ID"
            variant="filled"
          ></TextField>
        </div>
        <div className="second">
          <TextField
            id="assigned-to"
            label="Assigned To"
            variant="filled"
          ></TextField>
        </div>
        <div className="second">
          <FormControl variant="filled" sx={{ m: 0, minWidth: 220 }}>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              id="demo-simple-select"
              value={state.status}
              onChange={handleChangeStatus}
            >
              <MenuItem value={"New"}>New</MenuItem>
              <MenuItem value={"Closed"}>Closed</MenuItem>
              <MenuItem value={"Reopened"}>Reopened</MenuItem>
              <MenuItem value={"Assigned"}>Assigned</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="third">
          <button type="submit" className="btn btn-primary">
            Filter
          </button>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ticket #</TableCell>
              <TableCell>Title&nbsp;</TableCell>
              <TableCell>Assigned To</TableCell>
              <TableCell>Created By&nbsp;</TableCell>
              <TableCell>Status&nbsp;</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.ticketNumber}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.ticketNumber}
                </TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.carbs}</TableCell>
                <TableCell>{row.protein}</TableCell>
                <TableCell>
                  <button
                    type="submit"
                    className="btn btn-info"
                    onClick={console.log("Click")}
                  >
                    Edit
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default TicketsHome;
