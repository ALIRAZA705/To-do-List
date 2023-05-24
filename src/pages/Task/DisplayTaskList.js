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
import { Box, Stack, Typography } from "@mui/material";
import NoDataImage from "../../assets/pngs/rainy-day.png";

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
        <TableContainer
            component={Paper}
            sx={{
                minWidth: "auto",
                mt: 2,
                background: "none",
                borderRadius: "18px !important",
                border: "3px solid grey",
                // boxShadow: "0 5px 10px 0 rgba(0, 0, 0, 0.1)",
                boxShadow: "none",
            }}
        >
            {taskList.length > 0 ? (
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography
                                    alignSelf="center"
                                    sx={{
                                        // marginTop: "20px",
                                        fontFamily: "Poppins-Bold",
                                        fontSize: "13px",
                                        fontWeight: 400,
                                        lineHeight: "24px",
                                        color: "#292A3D",
                                        letterSpacing: "-0.5px",
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
                                        fontFamily: "Poppins-Bold",
                                        fontSize: "13px",
                                        fontWeight: 400,
                                        lineHeight: "24px",
                                        color: "#292A3D",
                                        letterSpacing: "-0.5px",
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
                                        fontFamily: "Poppins-Bold",
                                        fontSize: "13px",
                                        fontWeight: 400,
                                        lineHeight: "24px",
                                        color: "#292A3D",
                                        letterSpacing: "-0.5px",
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
                                        fontFamily: "Poppins-Bold",
                                        fontSize: "13px",
                                        fontWeight: 400,
                                        lineHeight: "24px",
                                        color: "#292A3D",
                                        letterSpacing: "-0.5px",
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
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
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
                                            variant="outlined"
                                            style={{
                                                color: "#264FB0",
                                                // backgroundColor: "#F1EFFF",
                                                border: "2px solid #26B086",
                                            }}
                                            onClick={() => {
                                                handleEditTask(task);
                                            }}
                                            size="xs"
                                            leadIcon={
                                                <EditIcon
                                                    color="#fff"
                                                    style={{
                                                        width: "16px",
                                                        height: "16px",
                                                    }}
                                                />
                                            }
                                        ></Button>

                                        <Button
                                            type="button"
                                            variant="secondary"
                                            size="xs"
                                            style={{
                                                color: "#fff",
                                            }}
                                            onClick={() =>
                                                handleRemoveTask(task)
                                            }
                                            leadIcon={<DeleteIcon />}
                                        >
                                            Remove
                                        </Button>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            ) : (
                <Box
                    display="flex"
                    flexDirection="column"
                    rowGap={2}
                    margin="auto"
                    justifyContent="center"
                    alignItems="center"
                    my={4}
                >
                    <img
                        src={NoDataImage}
                        alt="No Data"
                        height="auto"
                        width="160vh"
                    />
                    <Typography variant="subtitle2">
                        No tasks here boss
                    </Typography>
                </Box>
            )}
        </TableContainer>
    );
}
