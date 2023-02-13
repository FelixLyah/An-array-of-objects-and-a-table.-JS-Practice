let table = document.querySelector('table');
let btn = document.querySelector('button');
let inpName = document.querySelector('.addEmploye_name');
let inpAge = document.querySelector('.addEmploye_age');
let inpSalary = document.querySelector('.addEmploye_salary');
let p = document.querySelector('p');
let inps = document.querySelectorAll('.addEmploye');

let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

for(let inp of inps){
    let placeholderClone = inp.placeholder;
    inp.addEventListener('click',function(){
        inp.placeholder = '';
    })
    inp.addEventListener('blur',function(){
        inp.placeholder = placeholderClone;
    })
}


btn.addEventListener('click',function(){
    employees.push({name: inpName.value, age: inpAge.value, salary: inpSalary.value});
    for(let inp of inps){
        inp.value = '';
    }
    table.textContent = '';
    makeTable ();
    p.textContent = 'the data has changed. check console';
            setTimeout(function(){
                p.textContent = '';
            },5000)
            console.log(employees);
})

function makeTable (){
    for(let i = 0; i < employees.length; i++){
        let tr = document.createElement('tr');
        table.append(tr);
    
        let td1 = document.createElement('td');
        tr.append(td1);
        td1.textContent = employees[i].name;
        td1.addEventListener('click',edit);
        let td2 = document.createElement('td');
        tr.append(td2);
        td2.textContent = employees[i].age;
        td2.addEventListener('click',edit);
        let td3 = document.createElement('td');
        tr.append(td3);
        td3.textContent = employees[i].salary;
        td3.addEventListener('click',edit);
        let td4 = document.createElement('td');
        tr.append(td4);
        td4.textContent = 'delete row';
        td4.style.cursor = 'pointer';
        td4.style.color = 'red';
        td4.addEventListener('click',function(){
            tr.remove();
            employees.splice(i,1)
            p.textContent = 'the data has changed. check console';
            setTimeout(function(){
                p.textContent = '';
            },5000)
            console.log(employees);
        });
    }
}

makeTable();

function edit (){
    let self = this;
        let inp = document.createElement('input');
        inp.value = self.textContent;
        self.textContent = '';
        self.append(inp);
        inp.focus();
        self.removeEventListener('click',edit);
        inp.addEventListener('blur',function(){
            self.textContent = inp.value;
            setTimeout(function(){
                self.addEventListener('click',edit);
            },200)
        })
}