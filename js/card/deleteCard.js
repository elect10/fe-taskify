import { addHistory } from "../../utils/storage/historyManager.js";
import { removeTask } from "../../utils/storage/taskManager.js";

export const deleteCard = () => {
  document.querySelector(".warning-modal").remove();
  const dyingTask = document.querySelector(".task[ready-for-deleted]");
  const colForDyingTask = dyingTask
    .closest(".column")
    .getAttribute("data-column-key");

  addHistory(
    parseInt(dyingTask.getAttribute("data-timestamp")),
    "DELETE",
    dyingTask.querySelector(".task-title").innerText,
    colForDyingTask,
    "empty"
  );
  removeTask(
    dyingTask.closest(".column").getAttribute("data-column-key"),
    dyingTask.getAttribute("data-timestamp")
  );
  dyingTask.closest(".column").querySelector(".column-count").textContent--;
  dyingTask.remove();
};
