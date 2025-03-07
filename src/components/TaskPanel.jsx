import React from "react";
import {
  Panel,
  PanelType,
  Stack,
  TextField,
  Dropdown,
  PrimaryButton,
} from "@fluentui/react";

const statusColors = {
  "To Do": "#f0f0f0",
  "In Progress": "#cce0ff",
  Completed: "#d4ffd4",
};

const categoryColors = {
  Research: "#fddede",
  Marketing: "#e6f7ff",
  Mobile: "#fff2cc",
  Vision: "#e8f5e9",
};

const TaskPanel = ({
  isPanelOpen,
  handlePanelDismiss,
  newTaskTitle,
  setNewTaskTitle,
  newTaskStatus,
  setNewTaskStatus,
  newTaskAssignee,
  setNewTaskAssignee,
  newTaskCategory,
  setNewTaskCategory,
  handleCreateTask,
  users,
}) => {
  return (
    <Panel
      isOpen={isPanelOpen}
      type={PanelType.medium}
      onDismiss={handlePanelDismiss}
      headerText="Create New Task"
    >
      <Stack tokens={{ childrenGap: 10 }}>
        <TextField
          label="Title"
          value={newTaskTitle}
          onChange={(ev, newValue) => setNewTaskTitle(newValue)}
        />
        <Dropdown
          label="Status"
          options={Object.keys(statusColors).map((status) => ({
            key: status,
            text: status,
          }))}
          selectedKey={newTaskStatus}
          onChange={(ev, item) => setNewTaskStatus(item.key)}
        />
        <Dropdown
          label="Assignee"
          options={users.map((user) => ({ key: user, text: user }))}
          selectedKey={newTaskAssignee}
          onChange={(ev, item) => setNewTaskAssignee(item.key)}
        />
        <Dropdown
          label="Category"
          options={Object.keys(categoryColors).map((category) => ({
            key: category,
            text: category,
          }))}
          selectedKey={newTaskCategory}
          onChange={(ev, item) => setNewTaskCategory(item.key)}
        />
        <PrimaryButton text="Create" onClick={handleCreateTask} />
      </Stack>
    </Panel>
  );
};

export default TaskPanel;