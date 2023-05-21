import React, { useState } from "react";
import DisplayTaskList from "./DisplayTaskList";
import AddIcon from "../../assets/svgs/AddIcon";
import { Box, Grid, Typography } from "@mui/material";
import Button from "../../components/Button/Button";
import { useSelector } from "react-redux";
import AddorEdittask from "./AddorEdittask";
import RemoveTask from "./RemoveTask";

function Task(props) {
  //component state
  const [addorEditTask, setAddorEditTask] = useState({
    open: false,
    ActionMode: null,
  });

  const [openRemoveTask, setOpenRemoveTask] = useState(false);
  const [editableTask, setEditableTask] = useState({});

  //redux state
  const taskList = useSelector((state) => state.TaskList.taskList);

  //function
  const handleRemoveTask = (task) => {
    setOpenRemoveTask(true);
    setEditableTask(task);
  };

  const handleEditTask = (task) => {
    setAddorEditTask({
      open: true,
      ActionMode: "editTask",
    });
    setEditableTask(task);
  };

  return (
    <Grid
      sx={{
        background: "white",
        borderRadius: "24px",
        p: "16px",
      }}
    >
      {addorEditTask.open === false ? (
        <>
          <Grid item xs={12} mb={1}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography
                alignSelf="center"
                sx={{
                  // marginTop: "20px",
                  fontFamily: "Poppins-Medium",
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "24px",
                  color: "#292A3D",
                  letterSpacing: "0.15px",
                }}
              >
                Current Users
              </Typography>

              <Button
                type="button"
                variant="primary"
                size="md"
                onClick={() =>
                  setAddorEditTask({
                    open: true,
                    ActionMode: "addTask",
                  })
                }
                leadIcon={<AddIcon />}
              >
                Add New Task
              </Button>
            </Box>
          </Grid>
          <Grid sx={{ pt: "16px" }}>
            <DisplayTaskList
              taskList={taskList}
              handleRemoveTask={handleRemoveTask}
              handleEditTask={handleEditTask}
            />
          </Grid>
          <RemoveTask
            setOpenRemoveTask={setOpenRemoveTask}
            openRemoveTask={openRemoveTask}
            editableTask={editableTask}
          />
        </>
      ) : (
        <AddorEdittask
          addorEditTask={addorEditTask}
          setAddorEditTask={setAddorEditTask}
          editableTask={editableTask}
        />
      )}
    </Grid>
  );
}

export default Task;
