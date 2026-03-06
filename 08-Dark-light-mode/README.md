# 🌙 Dark Mode Toggle (JavaScript Project)

A simple **JavaScript Dark Mode Toggle project** that demonstrates how to switch between **light and dark themes** using checkboxes and DOM manipulation.
This project includes two types of dark mode:

* **Full Page Dark Mode** – applies the dark theme to the entire webpage.
* **Container Dark Mode** – applies the dark theme only to a specific section of the page.

This project is useful for beginners learning **JavaScript events, DOM manipulation, and CSS class toggling**.

---

## 🚀 Features

* Toggle **full website dark mode**
* Toggle **container-only dark mode**
* **Checkbox synchronization**
* Uses **pure JavaScript (no libraries)**
* Beginner-friendly project for learning **DOM events**

---

## 🧠 Concepts Used

This project demonstrates the following JavaScript concepts:

* `document.querySelector()`
* DOM element selection
* `addEventListener()`
* `change` event
* Checkbox `.checked` property
* `classList.add()` and `classList.remove()`
* Functions in JavaScript
* UI state synchronization



```
project-folder
│
├── index.html
├── style.css
├── script.js
└── images/
    ├── light-mode.png
    └── dark-mode.png
```

---

## ⚙️ How It Works

1. The script selects the checkboxes and container using `querySelector()`.
2. When the **Full Dark Mode checkbox** changes, a `change` event is triggered.
3. JavaScript checks whether the checkbox is **checked or unchecked**.
4. If checked:

   * The `dark` class is added to the `<body>` element.
5. If unchecked:

   * The `dark` class is removed.
6. The **Container Dark Mode checkbox** is automatically synchronized with the full dark mode state.
7. A function updates the container's theme accordingly.

---

## 💻 Example Code

```javascript
const fullDarkModeCheckbox = document.querySelector('#full-dark-mode');
const containedDarkMode = document.querySelector('#contained-dark-mode');
const container = document.querySelector('.container');

fullDarkModeCheckbox.addEventListener('change', () => {
    if(fullDarkModeCheckbox.checked){
        document.body.classList.add('dark')
    }else{
        document.body.classList.remove('dark')
    }

    containedDarkMode.checked = fullDarkModeCheckbox.checked
    changeContainerDarkMode()
})

function changeContainerDarkMode(){
    if(containedDarkMode.checked){
        container.classList.add('dark')
    }else{
        container.classList.remove('dark')
    }
}
```


## 📚 Learning Purpose

This project is ideal for beginners who want to practice:

* JavaScript **DOM manipulation**
* **Event-driven programming**
* UI **theme toggling**
* Writing **clean reusable functions**

---

## 🔧 Future Improvements

Possible improvements for this project:

* Save dark mode preference using **LocalStorage**
* Detect **system dark mode preference**
* Add **smooth theme transitions**
* Create a **toggle switch UI instead of checkbox**

---

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla JS)**

---

## 👨‍💻 Author

Created as a **JavaScript learning project** while practicing front-end development.

If you like this project, feel free to ⭐ the repository.

---


![alt text](<Screenshot 2026-03-06 055246.png>)

