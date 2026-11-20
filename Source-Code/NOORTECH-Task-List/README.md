# NOORTECH Task List — Source Code Example

**Version:** 1.0.0  
**Status:** Original educational starter project; runtime QA pending.  
**License:** MIT for these original files.  
**Dependencies:** None; browser APIs only.

## Files
- `index.html` — semantic user interface.
- `styles.css` — responsive styling.
- `app.js` — task CRUD, filtering and browser storage.
- `LICENSE.md` — MIT license.

## Run
Open `index.html` in a modern browser. Tasks are stored in the current browser using localStorage; they are not synchronized to a server and are not shared between devices.

## Features
- Add tasks (maximum 120 characters)
- Mark tasks complete or active
- Filter all, active and completed tasks
- Delete individual tasks
- Clear completed tasks
- Persist tasks locally in the browser
- Responsive layout and keyboard focus indicators

## Security and implementation notes
- User-provided task text is rendered with `textContent`, not injected as HTML.
- Stored data is parsed defensively and filtered before use.
- No network requests, analytics, third-party scripts or external dependencies.
- Do not store passwords, tokens, personal secrets or sensitive data in this demo.
- Browser storage can be cleared by the user and is not a backup.

## QA checklist
- Add a normal task and a task containing HTML-like text; confirm it displays as text.
- Reject an empty task.
- Complete, filter, delete and clear completed tasks.
- Refresh the page and confirm local persistence.
- Test mobile layout, keyboard navigation and screen-reader labels.
- Test storage-disabled/private browsing behavior in target browsers.

## Provenance
Original source authored for NOORTECH. No third-party code is included. MIT applies only to these files.
