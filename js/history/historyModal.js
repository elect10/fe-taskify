import { historyObserver } from "./historyObserver.js";
import { getHistory } from "../../utils/storage/historyManager.js";
import { HistoryView } from "./historyView.js";

class HistoryModal {
  constructor() {
    this.histories = [];
    this.view = new HistoryView();
    historyObserver.subscribe(this);
  }

  update(action, data) {
    const history = {
      timestamp: Date.now(),
      functionType: action,
      title: data.title,
      column: data.column || data.from,
      columnTogo: data.to || "empty",
    };

    this.histories.push(history);
    this.view.updateHistoryUI({
      timestamp: history.timestamp,
      action: history.functionType,
      data: {
        title: history.title,
        from: history.column,
        to: history.columnTogo,
      },
    });

    // localStorage에 저장
    const storedHistory = getHistory() || [];
    const updatedHistory = [...storedHistory, history];
    console.log(updatedHistory);
    localStorage.setItem("history", JSON.stringify(updatedHistory));
  }

  show() {
    const modal = document.querySelector(".history-modal");
    if (!modal) {
      const newModal = document.createElement("div");
      newModal.className = "history-modal";
      newModal.innerHTML = `
        <div class="history-modal-header">
          <div class="history-modal-title display-bold16">
            사용자 활동 기록
          </div>
          <button class="history-modal-close-btn">
            <img src="../assets/icon/closed_blue.svg" alt="x">
            <div class="history-modal-close-text display-bold14">닫기</div>
          </button>
        </div>
        <div class="history-modal-main">
        </div>
        <div class="history-modal-footer display-bold14">
          기록 전체 삭제
        </div>
      `;

      document.body.appendChild(newModal);
      this.renderStoredHistories();

      setTimeout(() => {
        newModal.classList.add("show");
      }, 10);
    } else {
      this.close();
    }
  }

  close() {
    const modal = document.querySelector(".history-modal");
    if (modal) {
      modal.classList.remove("show");
      modal.classList.add("close");
      setTimeout(() => {
        modal.remove();
      }, 300);
    }
  }

  renderStoredHistories() {
    const histories = getHistory() || [];
    const modalMain = document.querySelector(".history-modal-main");
    histories.reverse().forEach((history) => {
      const historyElement = this.view.createHistoryElement({
        timestamp: history.timestamp,
        action: history.functionType,
        data: {
          title: history.title,
          from: history.column,
          to: history.columnTogo,
        },
      });
      modalMain.appendChild(historyElement);
    });
  }

  clearAllHistory() {
    localStorage.removeItem("history");
    const modal = document.querySelector(".history-modal");
    modal.innerHTML = `
        <div class="history-modal-header">
          <div class="history-modal-title display-bold16">
            사용자 활동 기록
          </div>
          <button class="history-modal-close-btn">
            <img src="../assets/icon/closed_blue.svg" alt="x">
            <div class="history-modal-close-text display-bold14">닫기</div>
          </button>
        </div>
        <div class="history-modal-main">
        </div>
        <div class="history-modal-footer display-bold14">
          기록 전체 삭제
        </div>
      `;
  }
}

export const historyModal = new HistoryModal();
