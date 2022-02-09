'use strict';
let idnumber = 1000;

function EmployeeInformation(FullName, Department,
  Level,ImageUrl = null){
  this.EmployeeID = id(idnumber);
  this.FullName = FullName;
  this.Department = Department;
  this.Level = Level;
  this.ImagePath = ImageUrl ||`https://raw.githubusercontent.com/RaniaAbdullahh/prep-course-py-01/main/Day08/Task/assets/${FullName}.jpg`;
  this.Salary = 0;
  EmployeeInformation.allemployees.push(this);

}
EmployeeInformation.prototype.netsalary = function getrandomsalary() {
  let min = 0;
  let max = 0;
  if (this.Level === 'Junior') {
    min = 500;
    max = 1000;
  }
  else if (this.Level === 'MidSenior') {
    min = 1000;
    max = 1500;
  }
  else if (this.Level === 'Senior') {
    min = 1500;
    max = 2000;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  this.Salary = ((Math.floor(Math.random() * (max - min) + min))* 0.925).toFixed(0);
  return this.Salary;
};
EmployeeInformation.allemployees = [];

const employees = [];

employees.push(new EmployeeInformation('Ghazi Samer', 'Administration', 'Senior','./pic/Ghazi.jpg'));
employees.push(new EmployeeInformation('Lana Ali',	'Finance','Senior','./pic/Lana.jpg'));
employees.push(new EmployeeInformation('Tamara Ayoub',	'Marketing','Senior','./pic/Tamara.jpg'));
employees.push(new EmployeeInformation('Safi Walid',	'Administration',	'MidSenior','./pic/Safi.jpg'));
employees.push(new EmployeeInformation('Omar Zaid'	,'Development'	,'Senior','./pic/Omar.jpg'));
employees.push(new EmployeeInformation('Rana Saleh',	'Development',	'Junior','./pic/Rana.jpg'));
employees.push(new EmployeeInformation('Hadi Ahmad'	,'Finance'	,'MidSenior','./pic/Hadi.jpg'));

function id(x) {
  let newid = x + 1;
  idnumber++;
  return newid;
}
for (let index = 0; index < employees.length; index++) {

  employees[index].netsalary();
  // employees[index].render();
  console.log(employees[index]);
}
let mysection = document.getElementById('cards');

function render(){

  for (let i =0 ; i < EmployeeInformation.allemployees.length; i++){
    let employee = EmployeeInformation.allemployees[i];

    mysection.style = 'display: flex; flex-wrap: wrap' ; // adds row at the end of each

    let divEl = document.createElement('div');
    mysection.appendChild(divEl);
    divEl.style = 'padding: 15px; margin:10px; width:180px; height: 1fr; background-color: #6d4475;  display:flex; align-items: center; flex-direction: column';

    let imgEl = document.createElement('img');
    divEl.appendChild(imgEl);
    imgEl.setAttribute('src',employee.ImagePath);
    imgEl.style = 'width: 170px; height: 170px; border-radius: 50%';

    let p1El = document.createElement('p');
    divEl.appendChild(p1El);
    p1El.textContent = `Name: ${employee.FullName}  ID:${employee.EmployeeID}`;
    p1El.style = 'padding: 0;display: flex; margin:5px; width:138px;';

    let p2El = document.createElement('p');
    divEl.appendChild(p2El);
    p2El.textContent = `Department: ${employee.Department}     Level: ${employee.Level}`;
    p2El.style = 'padding: 0; margin: 0px; display: flex; width:138px;';

    let p3El = document.createElement('p');
    divEl.appendChild(p3El);
    p3El.textContent = `Salary: ${employee.Salary}`;
    p3El.style = 'padding: 0;width:138px;';

  }}
let employeeform = document.getElementById('employeeform');
employeeform.addEventListener('submit', addemployeeform);

function addemployeeform(event){
  event.preventDefault();

  let FullName = event.target.name.value;
  let Department = event.target.Department.value;
  let Level = event.target.level.value;
  let ImageUrl = event.target.ImageUrl.value;

  let newemployee = new EmployeeInformation(FullName, Department,
    Level,ImageUrl);
  newemployee.netsalary();
  mysection.textContent = '';
  render();
  settingitem();
  // newemployee.render();
  console.log(newemployee);
}
function settingitem(){
  let data = JSON.stringify(EmployeeInformation.allemployees);
  localStorage.setItem('employees',data);
}
function gettingitem() {
  let stringObj = localStorage.getItem('employees'); /// retrieve employees data from local storage
  let parsObj = JSON.parse(stringObj);
  if (parsObj !== null){
    EmployeeInformation.allemployees = parsObj;
  }
  render();
}
gettingitem();