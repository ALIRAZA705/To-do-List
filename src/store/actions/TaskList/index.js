import {
  RESET_TASK_LIST,
  TASK_LIST,
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
} from "../../constants/TaskList";

// for employee information

export const ResetTaskListSuccess = (payload) => {
  return {
    type: RESET_TASK_LIST,
    payload,
  };
};

export const TaskList = (data) => {
  return {
    type: TASK_LIST,
    payload: data,
  };
};

export const AddTask = (data) => {
  console.log("ddddddddddddddddddddd", data);
  return {
    type: ADD_TASK,
    payload: data,
  };
};

export const EditTask = (data) => {
  return {
    type: EDIT_TASK,
    payload: data,
  };
};

export const DELETETask = (data) => {
  return {
    type: DELETE_TASK,
    payload: data,
  };
};
