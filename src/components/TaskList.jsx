import React from "react";
import { Stack, Text, PrimaryButton } from "@fluentui/react";
import TaskItem from "./TaskItem";

const TaskList = ({ group, taskList, handleAddTaskClick, handleDeleteTask, handleStatusChange }) => {
  return (
    <div style={{ marginTop: "20px", border: "1px solid #ddd", borderRadius: "4px", padding: "10px" }}>
      <Stack horizontal verticalAlign="center" styles={{ root: { marginBottom: "10px" } }}>
        <Text variant="large">
          {group} ({taskList.length} Tasks)
        </Text>
      </Stack>

      {taskList.map((task) => (
        <TaskItem key={task.id} task={task} handleDeleteTask={handleDeleteTask} handleStatusChange={handleStatusChange} />
      ))}

      {/* Move Create Button to the Bottom, Left-Aligned */}
      <Stack horizontal styles={{ root: { marginTop: "10px" } }}>
        <PrimaryButton text="+ Create" onClick={() => handleAddTaskClick(taskList[0]?.sprint || "Default Sprint")} />
      </Stack>
    </div>
  );
};

export default TaskList;
