import { moveTask } from "../../utils/storage/taskManager.js";
import { addHistory } from "../../utils/storage/historyManager.js";

export const dragStartCard = (target) => {
  target.classList.add("dragging");

  const startColumnKey = target
    .closest(".column")
    .getAttribute("data-column-key");

  target.setAttribute("data-start-column", startColumnKey);
};

export const dragoverCard = (e) => {
  e.preventDefault();
  const draggingCard = document.querySelector(".dragging");
  const columns = document.querySelectorAll(".column");

  if (!draggingCard || !columns) return;

  columns.forEach((column) => {
    if (e.target.closest(".column") === column) {
      const cards = [...column.querySelectorAll(".task:not(.dragging)")];
      const afterCard = cards.find((card) => {
        const rect = card.getBoundingClientRect();
        return e.clientY <= rect.top + rect.height / 2;
      });

      if (afterCard) {
        column.insertBefore(draggingCard, afterCard);
      } else {
        column.appendChild(draggingCard);
      }
    }
  });
};

export const dragendCard = (target) => {
  const draggingCard = document.querySelector(".dragging");

  moveTask(
    parseInt(draggingCard.getAttribute("data-timestamp")),
    parseInt(draggingCard.getAttribute("data-start-column")),
    parseInt(target.closest(".column").getAttribute("data-column-key"))
  );

  target.classList.remove("dragging");
  const startColNum = target.getAttribute("data-start-column");
  const startCol = document.querySelector(
    `.column[data-column-key="${startColNum}"]`
  );
  startCol.querySelector(".column-count").textContent--;
  const endCol = target.closest(".column").querySelector(".column-count")
    .textContent++;
  addHistory(
    parseInt(target.getAttribute("data-timestamp")),
    "MOVE",
    target.querySelector(".task-title").textContent,
    startColNum,
    target.closest(".column").getAttribute("data-column-key")
  );

  target.removeAttribute("data-start-column");
};
