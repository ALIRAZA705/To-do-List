import {
    Avatar,
    Box,
    Dialog,
    DialogContent,
    Grid,
    Stack,
    Typography,
    styled,
} from "@mui/material";
import React from "react";
import { DELETETask } from "../../store/actions/TaskList";
import { useDispatch } from "react-redux";
import DeleteIcon from "../../assets/svgs/DeleteIcon";
import Button from "../../components/Button/Button";

const UpperHalf = styled(DialogContent)`
    background: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
    height: 50%;
`;

const LowerHalf = styled(DialogContent)`
    background-color: #343232;
    height: 50%;
`;

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
                    width: "312px",
                    height: "auto",
                    textAlign: "center",
                    backgroundImage:
                        " linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)",

                    borderRadius: "12px !important",
                },
            }}
        >
            <UpperHalf>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#F25F38",
                            width: "20px",
                            height: "20px",
                            p: 1,
                            borderRadius: "100%",
                        }}
                    >
                        <DeleteIcon />
                    </Box>

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
            </UpperHalf>

            <LowerHalf>
                <Typography
                    sx={{
                        fontFamily: "Poppins-Regular",
                        fontSize: "12px",
                        fontWeight: 400,
                        lineHeight: "32px",
                        color: "white",
                        textAlign: "left",
                    }}
                >
                    Are you sure you want to delete this Task?
                </Typography>

                <Stack
                    direction="row"
                    spacing={1}
                    sx={{ justifyContent: "center" }}
                >
                    <Button
                        type="button"
                        variant="outlined"
                        size="sm"
                        style={{
                            color: "white",
                            border: "2px solid #F25F38",
                        }}
                        onClick={() => setOpenRemoveTask(false)}
                    >
                        Cancel
                    </Button>

                    <Button
                        type="button"
                        variant="primary"
                        size="sm"
                        onClick={() => {
                            dispatch(DELETETask(editableTask.taskId));
                            setOpenRemoveTask(false);
                        }}
                    >
                        <Typography variant="subtitle" color="white">
                            Yes
                        </Typography>
                    </Button>
                </Stack>
            </LowerHalf>
        </Dialog>
    );
}

export default RemoveTask;
