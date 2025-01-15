import { getTimeAgo } from "./getTime.js";

export class HistoryView {
  createHistoryElement(history) {
    const historyElement = document.createElement("div");
    historyElement.className = "history";

    let actionText = "";
    switch (history.action) {
      case "ADD":
        actionText = `${history.data.title}을(를) 추가하였습니다.`;
        break;
      case "DELETE":
        actionText = `${history.data.title}을(를) 삭제하였습니다.`;
        break;
      case "EDIT":
        actionText = `${history.data.title}을(를) 수정하였습니다.`;
        break;
      case "MOVE":
        actionText = `${history.data.title}을(를) ${history.data.from}에서 ${history.data.to}로 이동하였습니다.`;
        break;
    }

    historyElement.innerHTML = `
          <div class="history-profile-icon">
            <img src="../assets/icon/profile-icon.png" alt="profile" style="border-radius:100px">
          </div>
          <div class="history-body">
            <div class="history-username display-Medium14">
              사용자
            </div>
            <div class="history-content display-Medium14">
              ${actionText}
            </div>
            <div class="history-timestamp display-Medium12">
              ${getTimeAgo(history.timestamp)}
            </div>
          </div>
        `;

    return historyElement;
  }

  updateHistoryUI(history) {
    const modal = document.querySelector(".history-modal-main");
    if (modal) {
      const historyElement = this.createHistoryElement(history);
      modal.insertBefore(historyElement, modal.firstChild);
    }
  }
}
