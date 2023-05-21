import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "../../assets/svgs/DeleteIcon";
import EditIcon from "../../assets/svgs/EditIcon";
import Button from "../../components/Button/Button";
import { Stack, Typography } from "@mui/material";

function createData(title, description, completionStatus) {
  return { title, description, completionStatus };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

export default function DisplayTaskList(props) {
  const { taskList, handleRemoveTask, handleEditTask } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography
                alignSelf="center"
                sx={{
                  // marginTop: "20px",
                  fontFamily: "Poppins-Medium",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "#292A3D",
                  letterSpacing: "0.15px",
                }}
              >
                Title
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography
                alignSelf="center"
                sx={{
                  // marginTop: "20px",
                  fontFamily: "Poppins-Medium",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "#292A3D",
                  letterSpacing: "0.15px",
                }}
              >
                Description
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography
                alignSelf="center"
                sx={{
                  // marginTop: "20px",
                  fontFamily: "Poppins-Medium",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "#292A3D",
                  letterSpacing: "0.15px",
                }}
              >
                Completion Status
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography
                alignSelf="center"
                sx={{
                  // marginTop: "20px",
                  fontFamily: "Poppins-Medium",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "#292A3D",
                  letterSpacing: "0.15px",
                }}
              >
                Actions
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {taskList.map((task) => (
            <TableRow
              key={task.taskId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Typography
                  alignSelf="center"
                  sx={{
                    fontFamily: "Poppins-Medium",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    color: "#292A3D",
                    letterSpacing: "0.15px",
                  }}
                >
                  {task.title}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography
                  alignSelf="center"
                  sx={{
                    fontFamily: "Poppins-Medium",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    color: "#292A3D",
                    letterSpacing: "0.15px",
                  }}
                >
                  {task.description}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography
                  alignSelf="center"
                  sx={{
                    fontFamily: "Poppins-Medium",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "24px",
                    color: "#292A3D",
                    letterSpacing: "0.15px",
                  }}
                >
                  {task.completionStatus.key}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Stack
                  direction="row"
                  spacing={2}
                  display="flex"
                  justifyContent="flex-end"
                >
                  <Button
                    type="button"
                    variant="primary"
                    style={{
                      color: "#131599",
                      backgroundColor: "#F1EFFF",
                      border: "none",
                    }}
                    onClick={() => {
                      handleEditTask(task);
                    }}
                    size="sm"
                    leadIcon={
                      <EditIcon
                        color="#131599"
                        style={{ width: "16px", height: "16px" }}
                      />
                    }
                  >
                    Edit Profile
                  </Button>

                  <Button
                    type="button"
                    variant="outlined"
                    size="sm"
                    style={{
                      color: "#BA1A1A",
                      fontSize: "14px",
                      fontFamily: "Poppins-Medium",
                      lineHeight: "20px",
                    }}
                    onClick={() => handleRemoveTask(task)}
                    leadIcon={<DeleteIcon />}
                  >
                    Remove User
                  </Button>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
