import { Button } from "@mui/material";
import { Avatar, Box, Dialog, Grid, Typography } from "@mui/material";
import React from "react";
import { DELETETask } from "../../store/actions/TaskList";
import { useDispatch } from "react-redux";

function RemoveTask(props) {
  const { openRemoveTask, setOpenRemoveTask, editableTask } = props;
  const dispatch = useDispatch();

  return (
    <Dialog
      open={openRemoveTask}
      onClose={() => setOpenRemoveTask(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        "& .MuiDialog-paper": {
          py: "35px",
          px: "24px",
          width: "312px",
          height: "360px",
          textAlign: "center",
          borderRadius: "12px !important",
        },
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item textAlign={"center"}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              flexDirection: "column",
            }}
          >
            <Avatar
              sx={{
                width: "71px",
                height: "71px",
                borderRadius: "12px",
                textAlign: "center",
              }}
              //   src={profileUrl}
            />
            <Typography
              sx={{
                fontFamily: "Poppins-Medium",
                fontSize: "14px",
                marginTop: "12px",
                fontWeight: 500,
                lineHeight: "20px",
                color: "#000000",
                letterSpacing: "0.1px",
                pt: 0.5,
              }}
            >
              {editableTask?.title}
              {/* {getValue(editableUser?.firstName) +
                " " +
                getValue(editableUser?.lastName)} */}
            </Typography>
          </Box>
        </Grid>

        <Grid item>
          <Typography
            sx={{
              fontFamily: "Poppins-Regular",
              fontSize: "24px",
              fontWeight: 400,
              lineHeight: "32px",
              color: "#1C1B1F",
            }}
          >
            Are you sure you want to delete this Task?
          </Typography>
        </Grid>

        <Grid item mt={1.5} sx={{ marginLeft: "auto" }}>
          <Button
            variant="text"
            sx={{
              borderRadius: "99px",
              width: "99px",
              height: "40px",
            }}
            onClick={() => setOpenRemoveTask(false)}
          >
            <Typography variant="h5" color="#4950C7">
              Cancel
            </Typography>
          </Button>

          <Button
            variant="contained"
            disableElevation
            sx={{
              borderRadius: "99px",
              width: "99px",
              height: "40px",
              backgroundColor: "#131599",
            }}
            onClick={() => {
              dispatch(DELETETask(editableTask.taskId));
              setOpenRemoveTask(false);
            }}
          >
            <Typography variant="h6" color="white">
              Yes
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default RemoveTask;
