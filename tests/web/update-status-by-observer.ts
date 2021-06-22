import { SceneObserver, SceneElementObserver } from "../../src/main";

const updateGameStatus: SceneObserver = (data) => {
  const { element, key, value } = data;

  let statusList = document.querySelector(`#list-${element}`);
  if (!statusList) {
    statusList = document.createElement("ul");
    statusList.id = `list-${element}`;
    const statusTitle = document.createElement("h2");
    statusTitle.textContent = `${element} STATUS`.toUpperCase();
    const statusArticle = document.createElement("article");
    statusArticle.appendChild(statusTitle);
    statusArticle.appendChild(statusList);
    const gameStatus = document.querySelector("#game-status");
    gameStatus.appendChild(statusArticle);
  }

  let statusRow = document.querySelector(`#row-${element}-${key}`);
  if (!statusRow) {
    statusRow = document.createElement("li");
    statusRow.id = `row-${element}-${key}`;
  }

  let statusValue = document.querySelector(`#value-${element}-${key}`);
  if (!statusValue) {
    const statusLabel = document.createElement("strong");
    statusLabel.textContent = `${key}: `;
    statusValue = document.createElement("span");
    statusValue.id = `value-${element}-${key}`;
    statusRow.appendChild(statusLabel);
    statusRow.appendChild(statusValue);
    statusList.appendChild(statusRow);
  }

  statusValue.textContent = `${value}`;
};

export function updateStatusByObserver(...observers: SceneElementObserver[]) {
  observers.forEach((observer) => {
    observer.subscribe(updateGameStatus);
  });
}
