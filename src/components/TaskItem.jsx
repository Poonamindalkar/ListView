import React, { useState } from "react";
import {
  Checkbox,
  Text,
  Label,
  IconButton,
  Dropdown,
} from "@fluentui/react";
import { mergeStyleSets } from "@fluentui/react/lib/Styling";

const styles = mergeStyleSets({
  taskItem: {
    display: "flex",
    alignItems: "center",
    padding: "8px 16px",
    borderBottom: "1px solid #eee",
  },
  taskTitle: {
    flexGrow: 1,
  },
  statusContainer: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  statusLabel: {
    borderRadius: "4px",
    padding: "4px 8px",
    minWidth: "100px",
    textAlign: "center",
  },
  assigneeLabel: {
    marginRight: "8px",
  },
  categoryLabel: {
    padding: "4px 8px",
    borderRadius: "4px",
    marginRight: "8px",
  },
  deleteButton: {
    marginLeft: "auto",
  },
});

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

const TaskItem = ({ task, handleDeleteTask, handleStatusChange }) => {
  const [isEditingStatus, setIsEditingStatus] = useState(false);

  const handleEditStatusClick = () => setIsEditingStatus(!isEditingStatus);

  const handleStatusDropdownChange = (event, item) => {
    handleStatusChange(task.id, item.key);
    setIsEditingStatus(false);
  };

  const statusOptions = [
    { key: "To Do", text: "To Do" },
    { key: "In Progress", text: "In Progress" },
    { key: "Completed", text: "Completed" },
  ];

  return (
    <div className={styles.taskItem}>
      <Checkbox />
      <Text className={styles.taskTitle}>{task.title}</Text>

      {/* Status with Edit Dropdown */}
      <div className={styles.statusContainer}>
        {isEditingStatus ? (
          <Dropdown
            selectedKey={task.status}
            options={statusOptions}
            onChange={handleStatusDropdownChange}
            onDismiss={() => setIsEditingStatus(false)}
            styles={{ dropdown: { minWidth: 120 } }}
          />
        ) : (
          <Label
            className={styles.statusLabel}
            style={{ backgroundColor: statusColors[task.status] }}
          >
            {task.status}
          </Label>
        )}
        <IconButton iconProps={{ iconName: "Edit" }} onClick={handleEditStatusClick} />
      </div>

      <Label className={styles.assigneeLabel}>{task.assignee}</Label>
      <Label
        className={styles.categoryLabel}
        style={{ backgroundColor: categoryColors[task.category] }}
      >
        {task.category}
      </Label>

      <IconButton
        iconProps={{ iconName: "Delete" }}
        className={styles.deleteButton}
        onClick={() => handleDeleteTask(task.id)}
      />
    </div>
  );
};

export default TaskItem;
