class HistoryObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(action, data) {
    this.observers.forEach((observer) => observer.update(action, data));
  }
}

export const historyObserver = new HistoryObserver();
