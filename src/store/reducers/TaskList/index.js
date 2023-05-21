//employee constants
import {
  RESET_TASK_LIST,
  TASK_LIST,
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
} from "../../constants/TaskList";

let initial = [
  {
    taskId: 1,
    title: "Sign In",
    description: "After Login Should redirect to Dashboard page",
    completionStatus: { key: "Completed", value: "completed" },
  },
  {
    taskId: 2,
    title: "Sign Up",
    description: "After Singup Should redirect to Dashboard page",
    completionStatus: { key: "In Complete", value: "inComplete" },
  },
  {
    taskId: 3,
    title: "Sign Out",
    description: "After Singout Should redirect to login page",
    completionStatus: { key: "In Progress", value: "inProgress" },
  },
];

const INIT_STATE = {
  taskList: initial,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case RESET_TASK_LIST:
      return INIT_STATE;

    case TASK_LIST:
      return [...state.taskList];

    case ADD_TASK:
      console.log(
        "aaaaaaaaaaaaaaaaaaaaaaaaaaa",
        action.payload,
        state.taskList,

        [...state.taskList, action.payload]
      );
      return {
        ...state,
        taskList: [...state.taskList, action.payload],
      };

    case EDIT_TASK:
      return {
        ...state,
        taskList: state.taskList.map((task) =>
          task.taskId === action.payload.taskId ? action.payload : task
        ),
      };

    case DELETE_TASK:
      console.log("dddddddddddddddddddddd");
      return {
        ...state,
        taskList: state.taskList.filter(
          (task) => task.taskId !== action.payload
        ),
      };

    default:
      return state;
  }
};
