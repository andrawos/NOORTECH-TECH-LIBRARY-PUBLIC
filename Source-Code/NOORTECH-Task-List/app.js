(() => {
  "use strict";
  const STORAGE_KEY = "noortech-task-list-v1";
  const form = document.querySelector("#task-form");
  const input = document.querySelector("#task-input");
  const list = document.querySelector("#task-list");
  const count = document.querySelector("#task-count");
  const empty = document.querySelector("#empty-state");
  const error = document.querySelector("#form-error");
  const clearDone = document.querySelector("#clear-done");
  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  let filter = "all";
  let tasks = loadTasks();

  function loadTasks() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed.filter(t =>
        t && typeof t.id === "string" && typeof t.text === "string" &&
        typeof t.done === "boolean"
      ) : [];
    } catch {
      return [];
    }
  }
  function saveTasks() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks)); }
    catch { error.textContent = "Could not save tasks in this browser."; }
  }
  function render() {
    list.replaceChildren();
    const visible = tasks.filter(t => filter === "all" || (filter === "active" ? !t.done : t.done));
    visible.forEach(task => {
      const li = document.createElement("li");
      li.className = "task" + (task.done ? " done" : "");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox"; checkbox.checked = task.done;
      checkbox.id = "task-" + task.id;
      checkbox.setAttribute("aria-label", "Mark " + task.text + " as completed");
      checkbox.addEventListener("change", () => {
        task.done = checkbox.checked; saveTasks(); render();
      });
      const label = document.createElement("label");
      label.htmlFor = checkbox.id; label.textContent = task.text;
      const remove = document.createElement("button");
      remove.type = "button"; remove.className = "delete"; remove.textContent = "Delete";
      remove.setAttribute("aria-label", "Delete task: " + task.text);
      remove.addEventListener("click", () => {
        tasks = tasks.filter(t => t.id !== task.id); saveTasks(); render();
      });
      li.append(checkbox, label, remove); list.append(li);
    });
    const remaining = tasks.filter(t => !t.done).length;
    count.textContent = remaining + " active · " + tasks.length + " total";
    empty.hidden = visible.length !== 0;
    clearDone.disabled = !tasks.some(t => t.done);
    filterButtons.forEach(b => b.setAttribute("aria-pressed", String(b.dataset.filter === filter)));
  }
  form.addEventListener("submit", event => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) { error.textContent = "Enter a task before adding it."; input.focus(); return; }
    if (text.length > 120) { error.textContent = "Keep tasks under 120 characters."; return; }
    tasks.unshift({id: (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random()), text, done:false});
    input.value = ""; error.textContent = ""; saveTasks(); render(); input.focus();
  });
  filterButtons.forEach(button => button.addEventListener("click", () => { filter = button.dataset.filter; render(); }));
  clearDone.addEventListener("click", () => { tasks = tasks.filter(t => !t.done); saveTasks(); render(); });
  render();
})();