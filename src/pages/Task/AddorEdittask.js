import {
    Autocomplete,
    Box,
    FormControl,
    Grid,
    IconButton,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import Button from "../../components/Button/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TextField from "../../components/TextField/TextField";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddTask, EditTask } from "../../store/actions/TaskList";

let completionStatusOPtions = [
    {
        key: "Completed",
        value: "completed",
    },
    {
        key: "Not Started",
        value: "notStarted",
    },
    {
        key: "In Progress",
        value: "inProgress",
    },
];

let initialTaskDetails = {
    //   taskId: Math.floor(Math.random() * 100),
    completionStatus: { key: null, value: null },
    title: "",
    description: "",
};

function AddorEdittask(props) {
    const dispatch = useDispatch();
    //props
    const { addorEditTask, setAddorEditTask, editableTask } = props;

    //component state
    const [task, setTask] = useState(initialTaskDetails);

    // functions
    const CustomPopperComponent = (props) => {
        return (
            <Paper
                {...props}
                square
                style={{
                    marginTop: 4,
                    zIndex: 999,
                    backgroundColor: "#343232",
                    borderRadius: "12px",
                }}
            >
                {props.children}
            </Paper>
        );
    };

    const handleInputChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    const handleStatus = (option) => {
        setTask({
            ...task,
            completionStatus: option,
        });
    };

    const handleAddTask = () => {
        if (addorEditTask?.ActionMode == "editTask") {
            dispatch(EditTask(task));
        } else {
            dispatch(
                AddTask({ ...task, taskId: Math.floor(Math.random() * 100) })
            );
        }
    };

    //methods

    useEffect(() => {
        if (addorEditTask?.ActionMode == "editTask") {
            setTask(editableTask);
        }
    }, [addorEditTask]);

    return (
        <Grid
            container
            direction="row"
            sx={{
                padding: "16px",
            }}
            rowSpacing={4}
            mt={2}
        >
            <Grid item>
                <Stack direction="row">
                    <IconButton
                        onClick={() =>
                            setAddorEditTask({
                                open: false,
                                ActionMode: null,
                            })
                        }
                    >
                        <ArrowBackIosNewIcon
                            sx={{ color: "#02006E", fontSize: "12px" }}
                        />
                    </IconButton>
                    <Typography
                        sx={{
                            color: "#14151F",
                            fontFamily: "Poppins-Medium !important",
                            fontSize: "16px",
                            fontWeight: 500,
                            lineHeight: "32px",
                        }}
                    >
                        {addorEditTask?.ActionMode == "editTask"
                            ? " Edit task"
                            : "Add new task"}
                    </Typography>
                </Stack>
            </Grid>

            <Grid item container direction="row" xs={12} spacing={2}>
                <Grid item xs={6}>
                    <FormControl variant="outlined" fullWidth error>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                border: "1px solid #B2B4E2",
                                borderRadius: "12px",
                            }}
                        >
                            <TextField
                                //   error={checkError("firstName", "textField")}
                                value={task.title}
                                onChange={(e) => handleInputChange(e)}
                                label={"Task Title"}
                                variant="filled"
                                type={"text"}
                                name="title"
                                sx={{
                                    width: "100%",
                                }}
                            />
                        </Box>
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <FormControl variant="outlined" fullWidth error>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                border: "1px solid #B2B4E2",
                                borderRadius: "12px",
                            }}
                        >
                            <TextField
                                // error={checkError("lastName", "textField")}
                                value={task.description}
                                onChange={(e) => handleInputChange(e)}
                                label={"Task Description"}
                                variant="filled"
                                type={"text"}
                                name="description"
                                sx={{
                                    width: "100%",
                                }}
                            />
                        </Box>
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <FormControl variant="outlined" fullWidth error>
                        <Autocomplete
                            id="free-solo-demo"
                            value={task.completionStatus}
                            freeSolo
                            sx={{
                                "& label + .MuiInput-formControl": {
                                    // marginTop: "1vw",
                                },
                            }}
                            onChange={(event, option) => {
                                handleStatus(option, "permissions");
                            }}
                            PaperComponent={CustomPopperComponent}
                            options={completionStatusOPtions.map(
                                (option) => option
                            )}
                            getOptionLabel={(option) => option.key || ""}
                            renderOption={(
                                props,
                                option,

                                { selected }
                            ) => {
                                return (
                                    <li {...props}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flex: 1,
                                                flexDirection: "column",
                                                spacing: 2,
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    mb: 0.5,
                                                    fontFamily:
                                                        "Poppins-Regular",
                                                    fontWeight: 450,
                                                    fontSize: "14px",
                                                    lineHeight: "20px",
                                                    letterSpacing: "0.1px",
                                                    color: "white",
                                                }}
                                            >
                                                {option.key}
                                            </Typography>
                                        </Box>
                                    </li>
                                );
                            }}
                            renderInput={(params) => (
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        border: "1px solid #B2B4E2",
                                        borderRadius: "12px",
                                    }}
                                >
                                    <TextField
                                        //   error={checkError("permissions", "dropdown")}
                                        {...params}
                                        label={"Select Status"}
                                        variant="filled"
                                        type={"text"}
                                        name={"completionStatus"}
                                        sx={{
                                            width: "100%",
                                        }}
                                    />
                                </Box>
                            )}
                        />
                    </FormControl>
                </Grid>
            </Grid>

            <Grid
                item
                container
                direction="row"
                justifyContent={"flex-end"}
                alignItems={"center"}
                columnSpacing={2}
                rowSpacing={2}
                sx={{ mt: 2 }}
            >
                <Grid item>
                    <Button
                        type="button"
                        variant="outlined"
                        size="md"
                        style={{
                            color: "white",
                            // backgroundColor: "#F1EFFF",
                            border: "2px solid #F25F38",
                        }}
                        onClick={() =>
                            setAddorEditTask({
                                open: false,
                                ActionMode: null,
                            })
                        }
                    >
                        Cancel
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        type="button"
                        variant="primary"
                        size="sm"
                        onClick={() => {
                            handleAddTask();
                            setAddorEditTask({
                                open: false,
                                ActionMode: null,
                            });
                        }}
                    >
                        Add Task
                    </Button>
                </Grid>

                {/* {addUser?.ok == false ? ( */}

                {/* ) : null} */}
            </Grid>
        </Grid>
    );
}

export default AddorEdittask;
