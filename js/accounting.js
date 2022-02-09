let marketingSalary = 0;
let developmentSalary = 0;
let finanaceSalary = 0;
let adminSalary = 0;
let totalSalary = 0;
let adminEmployees = 0;
let marketingEmployees = 0;
let developmentEmployees = 0;
let financeEmployees = 0;

let info = localStorage.getItem('employees'); 
/// retrieve employees data from local storage
let parsObj = JSON.parse(info);
if (parsObj !== null){
  let allemployees = parsObj;

  console.log(allemployees);
  console.log(allemployees.length);
  for (let i = 0; i <allemployees.length; i++) {

    totalSalary += parseInt(allemployees[i].Salary);

    switch (allemployees[i].Department) {
    case 'Administration' :
      adminSalary += parseInt(allemployees[i].Salary);
      adminEmployees++;
      break;

    case 'Marketing':
      marketingSalary += parseInt(allemployees[i].Salary);
      marketingEmployees++;
      break;
    case 'Development':
      developmentSalary += parseInt(allemployees[i].Salary);
      developmentEmployees++;
      break;
    case 'Finance':
      finanaceSalary += parseInt(allemployees[i].Salary);
      financeEmployees++;
      break;
    }
  }}
let totalEmployees =  marketingEmployees + financeEmployees +developmentEmployees +adminEmployees;
console.log(totalSalary);
console.log(marketingEmployees);
console.log(financeEmployees);
console.log(developmentEmployees);
console.log(adminEmployees);

function render(){

  let mysection = document.getElementById('mytable');
  let divEl = document.createElement('div');
  mysection.appendChild(divEl);

  let tableEL = document.createElement('table');
  divEl.appendChild(tableEL);
  tableEL.style= 'margin: 150px; margin-left: 300px; height: 400px;width: 1000px; border-style: solid; justify-content: center;';

  let trEl = document.createElement('tr'); //1
  tableEL.appendChild(trEl);

  let tr1El = document.createElement('tr'); //2
  tableEL.appendChild(tr1El);
  let tr2El = document.createElement('tr'); //3
  tableEL.appendChild(tr2El);
  let tr3El = document.createElement('tr'); //4
  tableEL.appendChild(tr3El);
  let tr4El = document.createElement('tr'); //5
  tableEL.appendChild(tr4El);
  let tr5El = document.createElement('tr'); //6
  tableEL.appendChild(tr5El);

  let thEl = document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent = 'Department';
  let th1El = document.createElement('th');
  trEl.appendChild(th1El);
  th1El.textContent = 'Number of employees'; // 1
  let th2El = document.createElement('th');
  trEl.appendChild(th2El);
  th2El.textContent = 'Total salary';
  let th3El = document.createElement('th');
  trEl.appendChild(th3El);
  th3El.textContent = 'Average salary';

  let tdEl = document.createElement('td');
  tr1El.appendChild(tdEl);
  tdEl.textContent = 'Administration';

  let t1dEl = document.createElement('td');
  tr1El.appendChild(t1dEl);
  t1dEl.textContent = ` ${adminEmployees}`;
  t1dEl.style = 'text-align: center; display: table-cell;'; // total number

  let t2dEl = document.createElement('td');
  tr1El.appendChild(t2dEl);
  t2dEl.textContent = ` ${adminSalary}`;
  t2dEl.style = 'text-align: center; display: table-cell;'; //totalsalary

  let t3dEl = document.createElement('td');
  tr1El.appendChild(t3dEl);
  t3dEl.textContent = ` ${adminSalary/adminEmployees}`; // avg
  t3dEl.style = 'text-align: center; display: table-cell;';

  let td2El = document.createElement('td');
  tr2El.appendChild(td2El);
  td2El.textContent = 'Marketing';

  let t4dEl = document.createElement('td');
  tr2El.appendChild(t4dEl);
  t4dEl.textContent = `${marketingEmployees}`;
  t4dEl.style = 'text-align: center; display: table-cell;'; // total number

  let t5dEl = document.createElement('td');
  tr2El.appendChild(t5dEl);
  t5dEl.textContent = `${marketingSalary}`;
  t5dEl.style = 'text-align: center; display: table-cell;'; //totalsalary

  let t6dEl = document.createElement('td');
  tr2El.appendChild(t6dEl);
  t6dEl.textContent = `${marketingSalary/marketingEmployees}`; // avg
  t6dEl.style = 'text-align: center; display: table-cell;';

  let td3El = document.createElement('td');
  tr3El.appendChild(td3El);
  td3El.textContent = 'Development';

  let t7dEl = document.createElement('td');
  tr3El.appendChild(t7dEl);
  t7dEl.textContent = `${developmentEmployees}`;
  t7dEl.style = 'text-align: center; display: table-cell;'; // total number

  let t8dEl = document.createElement('td');
  tr3El.appendChild(t8dEl);
  t8dEl.textContent = `${developmentSalary.toFixed(0)}`;
  t8dEl.style = 'text-align: center; display: table-cell;'; //totalsalary

  let t9dEl = document.createElement('td');
  tr3El.appendChild(t9dEl);
  t9dEl.textContent = `${(developmentSalary/developmentEmployees).toFixed(0)}`; // avg
  t9dEl.style = 'text-align: center; display: table-cell;';

  let td4El = document.createElement('td');
  tr4El.appendChild(td4El);
  td4El.textContent = 'Finance';

  let t10dEl = document.createElement('td');
  tr4El.appendChild(t10dEl);
  t10dEl.textContent = ` ${financeEmployees}`;
  t10dEl.style = 'text-align: center; display: table-cell;'; // total number

  let t11dEl = document.createElement('td');
  tr4El.appendChild(t11dEl);
  t11dEl.textContent = ` ${finanaceSalary}`;
  t11dEl.style = 'text-align: center; display: table-cell;'; //totalsalary

  let t12dEl = document.createElement('td');
  tr4El.appendChild(t12dEl);
  t12dEl.textContent = ` ${finanaceSalary/financeEmployees}`; // avg
  t12dEl.style = 'text-align: center; display: table-cell;';

  let td5El = document.createElement('td');
  tr5El.appendChild(td5El);
  td5El.textContent = 'Total';
  td5El.style = 'font-weight: bold;';

  let t13dEl = document.createElement('td');
  tr5El.appendChild(t13dEl);
  t13dEl.textContent = ` ${totalEmployees}`;
  t13dEl.style = 'text-align: center; display: table-cell;font-weight: bold;'; // total number

  let t14dEl = document.createElement('td');
  tr5El.appendChild(t14dEl);
  t14dEl.textContent = ` ${totalSalary}`;
  t14dEl.style = 'text-align: center; display: table-cell;font-weight: bold;'; //totalsalary

  let t15dEl = document.createElement('td');
  tr5El.appendChild(t15dEl);
  t15dEl.textContent = ` ${(totalSalary/totalEmployees).toFixed(0)}`; // avg
  t15dEl.style = ' text-align: center; display: table-cell;font-weight: bold;';

}
render();