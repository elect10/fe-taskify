# fe-taskify

### Directory Architecture

```
/fe-taskify
│
├── `index.html`                # Main HTML file
│
├── `assets`                    # Static files (images, fonts, etc.)
│   ├── `icon`                # Icon files
│   └── `fonts`                 # Font files
│
├── `css`                       # Style files
│   └──`base.css`              # styles
│
├── `js`                    # JavaScript files ( Can be divided into more directories )
│   ├── card               # Card functions (add, delete, edit, drag, drop, etc.)
│   ├── column          # Column management functions (add, delete, rename, etc.)
│   ├── history         # History management functions (observer pattern)
│   ├── fab                # FAB button functions (add column, delete column, undo, redo, etc.)
│   └── main.js           # Main JavaScript file
│
├── `utils`                      # Data storage files & any util functions (e.g. `localStorage.js` )

```

### Development Plan

0. Super Simple Layout ✅
1. Storage setting (add , delete, edit, redo ..,,etc ) ✅
2. Card adding ✅
3. Card Sorting ✅
4. Card editing ( + delete) ✅
5. Card moving ✅
6. History manager ✅
7. Column manager
8. FAB button
9. Design
10. Refactor

---

### Things to do

- [x] Skeleton Layout
  - [x] Header
  - [x] Main
  - [x] Footer

---

- [x] storage
  - [x] Add
  - [x] Delete
  - [x] Edit
  - [x] Move
  - [x] History

---

- [x] Header
  - [x] Logo
  - [x] History Modal
    - [x] Pop up
    - [x] List of Tasks
    - [x] Clear History
      - [x] Warning Modal
    - [x] Close Modal
    - [x] Animation
    - [x] Bold for important words

---

- [ ] Main
  - [x] Card Move
    - [x] Drag
    - [x] Drop
  - [x] Sort
    - [x] 생성 순
    - [x] 최신 순
    - [x] animation
  - [x] Card
    - [x] delete
      - [x] warning modal
    - [x] edit
      - [x] edit modal
  - [ ] CardList (Column)
    - [x] Count of Cards
    - [x] Add Card
    - [ ] Delete Card
    - [ ] Edit Column Name
    - [ ] OverFlow Control
      - [ ] Scroll

---

- [ ] Footer
  - [ ] FAB btn
    - [ ] Add Column
      - [ ] Add Column Modal
    - [ ] Delete Column
      - [ ] Warning Modal
    - [ ] Undo
    - [ ] Redo

---
