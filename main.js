let form = document.querySelector('#add-form');
let itemList = document.querySelector('#items');
let filter = document.querySelector('#filter');


// creating new element to the item list
form.addEventListener('submit', (event) => {

    event.preventDefault();

    let li = document.createElement('li');
    li.className = 'list-group-item';

    let input = document.querySelector('input[type="text"]');
    li.appendChild(document.createTextNode(input.value));


    // creating button to insert into li
    let button = document.createElement('button');
    button.classList = 'btn btn-danger btn-sm float-right delete';
    button.appendChild(document.createTextNode('x'));
    li.appendChild(button);

    itemList.appendChild(li);
    input.value = '';
})

// Deleting an Element
itemList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            let li = event.target.parentElement;
            itemList.removeChild(li);
        }
    }
})

// Filtering items
filter.addEventListener('keyup', (event) => {
    let searchText = event.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');
    Array.from(items).forEach((item) => {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(searchText) != -1) {
            item.style.display = 'block';
            item.style.backgroundColor = '#f4f4f4';
        } else {
            item.style.display = 'none';
        }
    })
})