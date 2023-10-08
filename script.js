 const button = document.getElementById("button");
 const firstName = document.getElementById("first");
 const lastName = document.getElementById("last");
 const rollNo= document.getElementById("roll");



let editMode = false; 
function isLetters(input) {
  return /^[a-zA-Z]+$/.test(input);
}

firstName.addEventListener('input', function () {
  this.value = this.value.replace(/[^a-zA-Z/s]/g, ''); 
});

lastName.addEventListener('input',function(){
  this.value = this.value.replace(/[^a-zA-Z]/g,'')
})
rollNo.addEventListener('input',function(){
  this.value = this.value.replace(/[^0-9]/g,'')
})

button.addEventListener('click', function (e) {
    e.preventDefault();
   
    if (!editMode) {
        
        let newRow = document.createElement('tr');

        let cell1 = document.createElement('td');
        cell1.textContent = firstName.value;
        let cell2 = document.createElement('td');
        cell2.textContent = lastName.value;
        let cell3 = document.createElement('td');
        cell3.textContent = rollNo.value;
        let cell4 = document.createElement('td');
        let editButton = document.createElement('button');
        editButton.textContent = "Edit";
        editButton.id = 'edit';

        editButton.addEventListener('click', function () {
            if (!editMode) {
               
                firstName.value = cell1.textContent;
                lastName.value = cell2.textContent;
                rollNo.value = cell3.textContent;

                editMode = true;
                editButton.textContent = "Save";
            } else {
               
                cell1.textContent = firstName.value;
                cell2.textContent = lastName.value;
                cell3.textContent = rollNo.value;

                editMode = false;
                editButtonutton.textContent = "save";
            }
        });

        let deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.id = 'delete';

        deleteButton.addEventListener('click', function () {
            newRow.remove();
        });

        e.target.form.reset();

        cell4.appendChild(editButton);
        cell4.appendChild(deleteButton);

        newRow.appendChild(cell1);
        newRow.appendChild(cell2);
        newRow.appendChild(cell3);
        newRow.appendChild(cell4);

        table.appendChild(newRow);
    }
});