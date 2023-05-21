import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
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
    key: "In Complete",
    value: "In Complete",
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
      <Paper {...props} square style={{ marginTop: 4, zIndex: 999 }}>
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
      dispatch(AddTask({ ...task, taskId: Math.floor(Math.random() * 100) }));
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
      sx={{ padding: "16px" }}
      rowSpacing={4}
      mb={4}
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
            <ArrowBackIosNewIcon sx={{ color: "#02006E", fontSize: "12px" }} />
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
            Add Task
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
                  marginTop: "1vw",
                },
              }}
              onChange={(event, option) => {
                handleStatus(option, "permissions");
              }}
              PaperComponent={CustomPopperComponent}
              options={completionStatusOPtions.map((option) => option)}
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
                          fontFamily: "Poppins-Regular",
                          fontWeight: 450,
                          fontSize: "14px",
                          lineHeight: "20px",
                          letterSpacing: "0.1px",
                          color: "#292A3D",
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
        sx={{ mt: 1 }}
      >
        <Grid item>
          <Button
            // variant="contained"
            // fullWidth={true}
            variant="text"
            sx={{
              borderRadius: "99px",
              width: "99px",
              height: "40px",
            }}
            onClick={() =>
              setAddorEditTask({
                open: false,
                ActionMode: null,
              })
            }
          >
            <Typography variant="h5" color="#3D43BB">
              Cancel
            </Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            disableElevation
            sx={{
              borderRadius: "99px",
              width: "99px",
              height: "40px",
            }}
            onClick={() => {
              handleAddTask();
              setAddorEditTask({
                open: false,
                ActionMode: null,
              });
            }}
          >
            <Typography variant="h6" color="white">
              Add
            </Typography>
          </Button>
        </Grid>

        {/* {addUser?.ok == false ? ( */}

        {/* ) : null} */}
      </Grid>
    </Grid>
  );
}

export default AddorEdittask;
