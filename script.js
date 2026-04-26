// --- data ---
let tasks = []; 
let currentPrio = "Medium"; 
let isDarkMode = false; 


// ngambil id DOM
const taskInput = document.getElementById('task-input');
const dueDateInput = document.getElementById('due-date'); 
const todoList = document.getElementById('todo-list');
const doneList = document.getElementById('done-list');
const overdueList = document.getElementById('overdue-list'); 
const todoCount = document.getElementById('todo-count');
const doneCount = document.getElementById('done-count');
const prioText = document.getElementById('current-prio');

// Penyimpanan data menggunakan localStorage sementara
function saveToDatabase() {
    localStorage.setItem('Cekliskeun_db', JSON.stringify(tasks));
    localStorage.setItem('Cekliskeun_theme', isDarkMode); 
}

function loadFromDatabase() {
    const savedData = localStorage.getItem('Cekliskeun_db');
    if (savedData) {
        tasks = JSON.parse(savedData);
    }

    const savedTheme = localStorage.getItem('Cekliskeun_theme');
    if (savedTheme === 'true') {
        isDarkMode = true;
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
}
loadFromDatabase();


// ---  ubah mode ---
document.getElementById('theme-toggle').addEventListener('click', function() {
    isDarkMode = !isDarkMode; 
    
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        this.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        document.body.classList.remove('dark-mode');
        this.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
    
    saveToDatabase(); 
});

// --- jam dan waktu ---
function updateTime() {
    const now = new Date();
    document.getElementById('current-date').innerText = now.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    
    const jam = String(now.getHours()).padStart(2, '0');
    const menit = String(now.getMinutes()).padStart(2, '0');
    const detik = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('digital-clock').innerText = `${jam}:${menit}:${detik}`;
}
setInterval(updateTime, 1000);
updateTime(); 

// --- prioritas ---
function setPriority(level) {
    currentPrio = level; 
    prioText.innerText = level; 
    
    document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
    document.querySelector(`.dot.${level.toLowerCase()}`).classList.add('active');

    if (level === 'High') prioText.style.color = '#d13438'; 
    else if (level === 'Medium') prioText.style.color = '#ff9800'; 
    else prioText.style.color = '#4caf50'; 
}

function getPriorityColor(priority) {
    if (priority === 'High') return '#f44336';
    if (priority === 'Medium') return '#ff9800';
    return '#4caf50';
}

function createTaskHTML(task, index, prioColor, isOverdue) {
    let checkedText = task.completed ? 'checked' : '';
    let doneClass = task.completed ? 'done-item' : '';
    
    let taskElement = document.createElement('div');
    taskElement.className = `task-item ${doneClass}`;
    taskElement.innerHTML = `
        <input type="checkbox" ${checkedText} onclick="toggleTask(${index})">
        <div class="task-info">
            <span class="task-t">
                ${task.text} 
                <small class="p-badge" style="background:${prioColor}">${task.priority}</small>
            </span>
            <span class="task-d">Dibuat: ${task.time} ${task.deadline ? '| Deadline: ' + task.deadline : ''}</span>
        </div>
        <i class="fa-regular fa-trash-can" style="cursor:pointer; color:gray;" onclick="deleteTask(${index})"></i>
    `;
    return taskElement;
}

// --- menampilkan tugas  ---
function renderTasks() {
    todoList.innerHTML = '';
    doneList.innerHTML = '';
    overdueList.innerHTML = ''; 
    
    let activeCount = 0;
    let doneCountTotal = 0;
    let overdueCountTotal = 0;
    let today = new Date().toISOString().split('T')[0];

    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i]; 
        let prioColor = getPriorityColor(task.priority);
        let isOverdue = (!task.completed && task.deadline !== "" && task.deadline < today);
        
        let taskElement = createTaskHTML(task, i, prioColor, isOverdue);

        if (task.completed) {
            doneList.appendChild(taskElement);
            doneCountTotal++;
        } else if (isOverdue) {
            overdueList.appendChild(taskElement);
            overdueCountTotal++;
        } else {
            todoList.appendChild(taskElement);
            activeCount++;
        }
    }

    todoCount.innerText = activeCount;
    doneCount.innerText = doneCountTotal;

    if (activeCount === 0) todoList.innerHTML = `<div class="empty-state"><i class="fa-solid fa-mug-hot"></i><p>Enjoy your day!</p></div>`;
    if (overdueCountTotal === 0) overdueList.innerHTML = `No overdue tasks.`;
    
    saveToDatabase(); // save kalo di render
}

// --- nambah tugas ---
document.getElementById('add-btn').addEventListener('click', function() {
    let inputText = taskInput.value;
    let deadlineVal = dueDateInput.value; 
    
    if (inputText === "") return; 

    let newTask = {
        text: inputText,
        priority: currentPrio,
        time: new Date().toLocaleDateString('id-ID'), 
        deadline: deadlineVal, 
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = "";
    dueDateInput.value = ""; 
    renderTasks();
});

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') document.getElementById('add-btn').click();
});

// --- hapus tugas ---
globalThis.toggleTask = function(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
};

globalThis.deleteTask = function(index) {
    tasks.splice(index, 1);
    renderTasks();
};

// --- hapus semua tugas ---
document.getElementById('clear-all').addEventListener('click', function() {
    tasks = []; 
    renderTasks(); 
});

// ---  navigasi baru ---
const navMyDay = document.getElementById('nav-myday');
const navTasks = document.getElementById('nav-tasks');
const navCompleted = document.getElementById('nav-completed');
const pageTitle = document.getElementById('page-title');

const secInput = document.getElementById('sec-input');
const secTodo = document.getElementById('sec-todo');
const secDone = document.getElementById('sec-done');
const secOverdue = document.getElementById('sec-overdue');

function switchTab(tabName) {
    navMyDay.classList.remove('active');
    navTasks.classList.remove('active');
    navCompleted.classList.remove('active');

    secInput.style.display = 'none';
    secTodo.style.display = 'none';
    secDone.style.display = 'none';
    secOverdue.style.display = 'none';

    if (tabName === 'myday') {
        navMyDay.classList.add('active');
        pageTitle.innerText = 'My Day';
        secInput.style.display = 'block';
        secTodo.style.display = 'block';
        secDone.style.display = 'block';
        secOverdue.style.display = 'block';
    } else if (tabName === 'tasks') {
        navTasks.classList.add('active');
        pageTitle.innerText = 'Tasks';
        secInput.style.display = 'block';
        secTodo.style.display = 'block';
    } else if (tabName === 'completed') {
        navCompleted.classList.add('active');
        pageTitle.innerText = 'Completed Tasks';
        secDone.style.display = 'block';
    }
}

navMyDay.addEventListener('click', function() { switchTab('myday'); });
navTasks.addEventListener('click', function() { switchTab('tasks'); });
navCompleted.addEventListener('click', function() { switchTab('completed'); });

// nge render ke mimiti
renderTasks();