// --- DATA & STATE ---
let tasks = JSON.parse(localStorage.getItem('myJsTasks')) || [];

// --- DOM ELEMENTS ---
const views = {
    tasks: document.getElementById('view-tasks'),
    analytics: document.getElementById('view-analytics')
};

const buttons = {
    tasks: document.getElementById('btn-tasks'),
    analytics: document.getElementById('btn-analytics')
};

const pageTitle = document.getElementById('page-title');

// --- CORE FUNCTIONS ---

function saveTasks() {
    localStorage.setItem('myJsTasks', JSON.stringify(tasks));
    renderTasks();
    updateAnalytics();
}

function switchView(viewName) {
    // Hide all views
    Object.values(views).forEach(el => el.classList.add('hidden'));
    // Show selected view
    views[viewName].classList.remove('hidden');

    // Reset buttons
    Object.values(buttons).forEach(btn => {
        btn.className = "w-full flex items-center p-3 text-gray-400 hover:bg-slate-800 hover:text-white rounded-lg transition-all";
    });
    // Highlight active button
    buttons[viewName].className = "w-full flex items-center p-3 bg-blue-600 rounded-lg text-white transition-all shadow-md";

    // Update Title
    pageTitle.innerText = viewName === 'tasks' ? 'Task Overview' : 'Analytics & Reports';
    
    if (viewName === 'analytics') updateAnalytics();
}

function updateAnalytics() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    // Prevent division by zero
    const completionRate = total === 0 ? 0 : Math.round((completed / total) * 100);
    const pendingRate = 100 - completionRate;

    // Update Bars
    document.getElementById('chart-rate-bar').style.width = `${completionRate}%`;
    document.getElementById('chart-rate-text').innerText = `${completionRate}%`;
    document.getElementById('chart-pending-bar').style.width = `${pendingRate}%`;
    document.getElementById('chart-pending-text').innerText = `${pendingRate}%`;

    // Update Text
    document.getElementById('report-completed').innerText = completed;
    document.getElementById('report-total').innerText = total;

    // Update Status Message
    const statusEl = document.getElementById('report-status');
    if (total === 0) {
        statusEl.innerText = "Start adding tasks to see analytics.";
        statusEl.className = "text-gray-400 text-sm italic";
    } else if (completionRate === 100) {
        statusEl.innerText = "All caught up! Excellent work.";
        statusEl.className = "text-green-600 font-bold text-sm";
    } else if (completionRate < 50) {
        statusEl.innerText = "You have a lot of pending work.";
        statusEl.className = "text-orange-500 font-bold text-sm";
    } else {
        statusEl.innerText = "Making good progress.";
        statusEl.className = "text-blue-500 font-bold text-sm";
    }
}

// --- CRUD ACTIONS ---

function renderTasks() {
    // Update Stats on Dashboard
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    document.getElementById('stat-total').innerText = total;
    document.getElementById('stat-completed').innerText = completed;
    document.getElementById('stat-pending').innerText = total - completed;

    // Render List
    const list = document.getElementById('taskList');
    list.innerHTML = '';

    if (tasks.length === 0) {
        document.getElementById('emptyState').classList.remove('hidden');
    } else {
        document.getElementById('emptyState').classList.add('hidden');

        tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = `p-4 flex items-center justify-between group hover:bg-gray-50 transition ${task.completed ? 'bg-gray-50' : ''}`;

            li.innerHTML = `
                <div class="flex items-center gap-4 overflow-hidden">
                    <button onclick="toggleTask(${task.id})" 
                            class="h-6 w-6 rounded-md border-2 flex items-center justify-center transition
                            ${task.completed ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 hover:border-blue-400'}">
                        <i class="fa-solid fa-check text-[10px]"></i>
                    </button>
                    <span class="${task.completed ? 'line-through text-gray-400' : 'text-gray-700 font-medium'} truncate">
                        ${task.title}
                    </span>
                </div>
                <div class="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onclick="editTask(${task.id})" class="text-blue-500 hover:text-blue-700 p-2 rounded hover:bg-blue-50 transition" title="Edit">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button onclick="deleteTask(${task.id})" class="text-red-400 hover:text-red-600 p-2 rounded hover:bg-red-50 transition" title="Delete">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            `;
            list.appendChild(li);
        });
    }
}

function addTask(title) {
    tasks.unshift({ id: Date.now(), title: title, completed: false });
    saveTasks();
}

function deleteTask(id) {
    if (confirm('Delete task?')) {
        tasks = tasks.filter(t => t.id !== id);
        saveTasks();
    }
}

function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
    }
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        const newTitle = prompt("Update your task:", task.title);
        if (newTitle && newTitle.trim() !== "") {
            task.title = newTitle.trim();
            saveTasks();
        }
    }
}

// --- INIT ---

// Event Listener for the Form
const addForm = document.getElementById('addForm');
if (addForm) {
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('taskInput');
        if (input.value.trim()) {
            addTask(input.value.trim());
            input.value = '';
        }
    });
}

// Initial Render
renderTasks();