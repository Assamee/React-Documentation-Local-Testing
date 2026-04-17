# React Documentation: Local Testing

This repository contains local test environments used to verify technical claims within the official React documentation (`react.dev`). These tests provided the evidence required for my contributions to the React documentation.

## 🛠️ Case Studies

### 1. `setState` Callback Context ([Issue #8314](https://github.com/reactjs/react.dev/issues/8314) | [PR #8414](https://github.com/reactjs/react.dev/pull/8414))

* **Folder:** `src/issue-8314-this-binding`
* **Goal:** Verify if React automatically binds the `this` context for Class Component `setState` callbacks.
* **Result:** Confirmed that React internally binds the callback to the component instance. This proves that manual `.bind(this)` or arrow functions are redundant in this scenario.

### 2. Render-Cycle Stability ([Issue #8411](https://github.com/reactjs/react.dev/issues/8411) | [PR #8412](https://github.com/reactjs/react.dev/pull/8412))

* **Folder:** `src/issue-8411-render-logic`
* **Goal:** Investigate if conditional state updates in the render body cause a literal infinite loop or restarts the render cycle.
* **Result:** Verified that the component stabilises once the condition evaluates to `false`. This identified the "infinite loop" claim in the documentation as technically inaccurate.

## 🚀 How to Run

1. `npm install`
2. `npm run dev`
3. Toggle the active component in `src/main.jsx` to switch between test cases.
