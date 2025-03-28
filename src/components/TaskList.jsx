import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../redux/tasksSlice";
import { List, ListItem, ListItemText, Button, Typography, Box } from "@mui/material";
import Weather from "./Weather";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  if (!Array.isArray(tasks)) {
    return <Typography color="error">Error: Tasks data is invalid!</Typography>;
  }

  return (
    <List>
      {tasks.length === 0 ? (
        <Typography>No tasks available</Typography>
      ) : (
        tasks.map((task) => (
          <Box key={task.id} className={`task-box ${task.priority.toLowerCase()}`}>
            <ListItem className="task-item">
              <ListItemText 
                primary={task.text} 
                secondary={`Priority: ${task.priority} | Category: ${task.category}`} 
              />

              
              {task.category === "Outdoor" && task.location && (
                <Box className="weather-container">
                  <Typography variant="body2">
                    Location: {task.location}
                  </Typography>
                  <Weather location={task.location} />
                </Box>
              )}

              <Button 
                onClick={() => dispatch(removeTask(task.id))} 
                variant="contained" 
                className="delete-button"
              >
                Delete
              </Button>
            </ListItem>
          </Box>
        ))
      )}
    </List>
  );
};

export default TaskList;
