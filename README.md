# 🌳 Tree View Visualizer

A clean and interactive **Tree View Visualizer** built using **Next.js** and **React Flow**, implementing hierarchical tree rendering with expand/collapse functionality and custom layout logic.

This project follows a **step-by-step roadmap** and focuses on clarity, correctness, and interview-ready implementation.

---

## ✨ Features

* Render hierarchical tree structures (3–6 levels deep)
* Custom tree layout (parent centered above children)
* No overlapping nodes
* Expand / collapse individual subtrees
* Custom styled nodes using React Flow
* Automatic layout recalculation on interaction

---

## 🛠 Tech Stack

* **Next.js** (Frontend framework)
* **React Flow** (Graph & node rendering)
* **TypeScript** (Type safety)
* **CSS-in-JS** (Inline styles for simplicity)

---

## 📂 Project Structure

```
├── components/
│   └── TreeNode.tsx        # Custom node UI
├── data/
│   └── treeData.ts         # Static tree data
├── types/
│   └── tree.ts             # TreeNode interface
├── utils/
│   └── treeToFlow.ts       # Tree → React Flow layout logic
├── pages/
│   └── index.tsx           # Main canvas & interaction logic
├── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone <your-github-repo-url>
cd tree-view-visualizer
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Development Server

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🧠 How It Works

### Tree Data

* The tree is represented as a recursive `TreeNode` structure
* Each node can optionally have children and an `expanded` flag

### Layout Logic

* Leaf nodes are placed sequentially
* Parent nodes are centered above their children
* Vertical spacing is consistent per depth level

### Expand / Collapse

* Clicking a node toggles its `expanded` state
* Only the affected subtree is re-rendered
* Layout recalculates automatically

---

## ✅ Roadmap Completion Status

* [x] Project Setup
* [x] Static Tree Rendering
* [x] Custom Tree Layout Logic
* [x] Expand / Collapse Functionality
* [x] Visual Polish (Core)
* [ ] Bonus Features (Optional)

---

## 📌 Notes

* No complex layout libraries were used
* Logic is intentionally kept simple and readable
* Designed to be **interview-friendly** and easy to explain

---

## 📄 License

This project is for educational and demonstration purposes.

---

**Built with clarity, not shortcuts.** 🚀
