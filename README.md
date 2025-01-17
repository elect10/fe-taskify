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

## 학습한 부분들

- DOM ( Document Object Model )조작
  - DOM 제어를 통해 node 를 다루는 방법을 익힘
  - node, DOM 탐색 및 조작하는 다양한 함수를 익힘 ( query selector, parentElement, appendChild, closest 등)
  - 템플릿 리터럴의 강력함을 알게됨
- 이벤트 등록
  - 다양한 이벤트를 각각 알맞게 등록하는 방법을 학습함
- 이벤트 위임
  - 각각의 버튼 등에 이벤트를 다는 방식이 아닌, 전체 화면 ( 해당 프로젝트에서는 document ) 에 event listener 을 걸어주고, 그 안에서 각각의 node 마다 해야할 작업을 지정해줌 분기가 너무 많아진다는 단점이 있지만, 이벤트를 한번에 관리하므로 디버깅 및 다양한 이벤트 처리에 용이하다고 느낌
- Common js vs ES Module

  - 모듈간의 의존 관계를 중점으로

- 웹 애니메이션

  - JS 의 setTimeout 을 이용하여 원하는 주기에 애니메이션을 실행하도록 조절함
  - CSS transition 을 이용한 카드 정렬 & 히스토리 모달 등장시 애니메이션 구현.

- 옵저버 패턴

  - 이번 프로젝트에서 가장 고민하고 학습한 부분.

  - 현재 프로젝트는 히스토리 modal 만 옵저버 패턴이 구현되어 있음

    - history Modal View 를 업데이트 하는 메서드를 구독시킴 ( 모델은 localStorage 에 저장되는 데이터 값들 ) => User 가 data ( card ) 를 변경함 => 변경 사항이 localStorage 에 저장됨 => notify 를 보냄 => 등록된 업데이트 메서드가 변경된 data 를 전달 받은후 히스토리 모달의 View 를 변경시킴

  - 관련하여 학습하며 MVC MVP MVVM FLUX 패턴에 대해 학습하게 됨

    - MVC ( model view controller )

      - Model : 데이터(데이터 베이스), 애플리케이션에서 사용되는 데이터와 그를 처리하는 부분
      - View : 모델에 포함된 데이터의 시각화(화면), 모델을 이용하여 화면을 나타냄
      - Controller : 사용자의 입력(input)을 받아 처리하는 부분

    - MVP ( model view presenter )

      - Presenter : 컨트롤러와 유사하지만 view에 직접 연결되어 1:1로 매칭되는점이 다름.

    - MVVM

      - View Model : View를 표현하기 위해 만든 View를 위한 Model. View를 나타내 주기 위한 Model이자 View를 나타내기 위한 데이터 처리를 하는 부분.

    - FLUX

      - 단방향 흐름 패턴.
      - Dispacher
        - 모든 데이터 흐름을 관리 함 Action 발생 하면 확인후 콜백함수를 통해 Store 에 전달
      - Store
        - 모든 상태 변경이 결정 되는 곳 Dispatcher 로 부터 수신 받기 위해서는 콜백함수를 등록해야 한다.
      - View
      - Action

        - Store 가 등록한 콜백 함수를 실행할 때 전달되는 객체가 Action. Action은 대체로 액션 생성자(Action creator)에서 만들어짐.

      - 옵저버 패턴과 굉장히 유사하다고 생각이듬..,,

## 고민한 부분들 - 해결한 방법

## 다음에 고쳐볼 ( 도전해볼 & 아쉬운 ) 부분들

- 설계

  - 프로젝트를 하면 할수록 설계가 완벽하지 않아 점점 꼬여가는 느낌이 들었다. 파일 구조부터, 디렉토리 구조까지 계속해서 변경되며, 각각의 파일이 어떤 역활을 하는지도 직관적으로 나타내어 지지 못한것 같다.
  - 이후에는 설계를 할때 각각의 디렉토리가 가지는 역할, 또한 각각의 파일이 수행하게될 구체적인 로직을 설정한뒤 프로젝트를 시작하고자 한다.
  - 또한 필요한 유틸리티 함수를 정확히 정의 하고 데이터를 어디까지 저장하고, 각각의 함수는 인자를 어디까지 받을건지 또한 설계하고 프로젝트를 시작해보고자 한다.

- 옵저버 패턴
  - 프로젝트 중간에 알게된 기술이여서, 처음부터 적용하지 못하고 히스토리 부분에만 적용을 하게 되었다.
  - 많은 프레임 워크 및 라이브러리의 근간이 되는 기술이므로, 직접 구현해 보고 사용해 보는게 큰 도움이 될것 같다고 생각해서 기존의 카드 추가 삭제 등등에도 적용해보려고 했지만, 이미 엉망으로 구현된 코드를 싸그리 리팩토링 하는건 쉽지 않았다..,,,. 설계의 중요성을 느꼈고..,, 이후 시간이 된다면 모든 데이터 변경에 대해 옵저버 패턴을 이용해서 view 를 처리하는 방법을 구현해 보고싶다.
