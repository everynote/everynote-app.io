const formNew = document.getElementById('new-Task');
const theList = document.getElementById('incomplete-tasks');
const theList2 = document.getElementById('complete-tasks');
const catFilter = document.getElementById('filterCategories');

function printOneTask(task) {
    return `
        <li>
            <input type="checkbox">
            <label>${task.name}</label>
            <button class="edit">Edit</button>
            <button class="done">Done</button> 
        </li>
    `;
}

let completedTask = [
    { qty: 2, name: `HTML & Java Script`, cat: `WD`, complete:true },
    { qty: 1, name: `Hackathon`, cat: `PM`,  complete:false  },
    { qty: 3, name: `Icon Animation`, cat: `MP`  },
    { qty: 2, name: `Cinema 4D`, cat: `3D`  },
    { qty: 4, name: `Instalation`, cat: `PT`  },
];



function printList(list = completedTask) {

    // Check the value of the category filter (radio)
    let filterBy = catFilter.category.value;

    // Pre-filter the list based on radio button that's selected
    if (filterBy != 'all')
        list = list.filter(item => item.cat == filterBy)

    theList.innerHTML = list.filter(task => !complete).map(task => printOneTask(task)).join(``);
    theList2.innerHTML = list.filter(task => complete).map(task => printOneTask(task)).join(``);
}
    


printList();