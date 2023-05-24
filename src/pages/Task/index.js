import React, { useState } from "react";
import DisplayTaskList from "./DisplayTaskList";
import AddIcon from "../../assets/svgs/AddIcon";
import { Box, Grid, Tab, Tabs, Typography, styled } from "@mui/material";
import Button from "../../components/Button/Button";
import { useSelector } from "react-redux";
import AddorEdittask from "./AddorEdittask";
import RemoveTask from "./RemoveTask";

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{
            children: <span className="MuiTabs-indicatorSpan" />,
        }}
    />
))({
    "& .MuiTabs-indicator": {
        display: "flex",
        justifyContent: "center",
        bottom: 10,
        backgroundColor: "transparent",
    },
    "& .MuiTabs-indicatorSpan": {
        maxWidth: 40,
        width: "100%",
        backgroundColor: "#26B086",
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: "none",
        fontWeight: 600,
        fontSize: theme.typography.pxToRem(15),

        marginBottom: "-5px",
        py: "0px",
        marginRight: theme.spacing(1),
        color: "rgba(255, 255, 255, 0.7)",
        "&:hover": {
            color: "#264FB0",
            opacity: 1,
        },
        "&.Mui-selected": {
            color: "#fff",
        },
        "&.Mui-focusVisible": {
            backgroundColor: "rgba(100, 95, 228, 0.32)",
        },
    })
);

function Task(props) {
    //component state
    const [addorEditTask, setAddorEditTask] = useState({
        open: false,
        ActionMode: null,
    });

    const [openRemoveTask, setOpenRemoveTask] = useState(false);
    const [editableTask, setEditableTask] = useState({});
    const [tab, setTab] = React.useState("all");

    //redux state
    const taskList = useSelector((state) => state.TaskList.taskList);
    console.log("here is list", taskList);

    //function

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

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

    const filteredTasks =
        tab === "all"
            ? taskList
            : taskList.filter((task) => task.completionStatus.value === tab);

    return (
        <Grid
            sx={{
                // background: "#fff",
                // border: "1px solid #fff",
                borderRadius: "24px",
                pl: "32px",
                // mt: 8,
            }}
        >
            {addorEditTask.open === false ? (
                <>
                    <Grid
                        item
                        pt={5}
                        xs={12}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            "@media (min-width: 800px)": {
                                flexDirection: "row",
                            },
                        }}
                    >
                        <Grid item xs={12} sm={8}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    backgroundColor: "#343232",
                                    // px: 0.3,
                                    py: 0,
                                    height: "40px",
                                    borderRadius: "36px",
                                    alignItems: "center",
                                }}
                            >
                                <Typography
                                    color="white"
                                    variant="body2"
                                    fontFamily="Poppins-Bold"
                                    sx={{
                                        backgroundColor: "#26B086",
                                        px: 2,
                                        py: 1.25,
                                        borderRadius: "24px",
                                        width: "auto",
                                    }}
                                >
                                    Status
                                </Typography>
                                <StyledTabs
                                    value={tab}
                                    onChange={handleChange}
                                    textColor="primary"
                                    indicatorColor="primary"
                                    allowScrollButtonsMobile
                                    aria-label="secondary tabs example"
                                >
                                    <StyledTab value="all" label="All" />
                                    <StyledTab
                                        value="completed"
                                        label="Completed"
                                    />
                                    <StyledTab
                                        value="inProgress"
                                        label="In Progress"
                                    />
                                    <StyledTab
                                        value="notStarted"
                                        label="Not Started"
                                    />
                                </StyledTabs>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={4} mt={1}>
                            <Button
                                type="button"
                                variant="primary"
                                size="xs"
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
                        </Grid>
                    </Grid>
                    <Grid>
                        <DisplayTaskList
                            taskList={filteredTasks}
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
