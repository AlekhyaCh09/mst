class Person{
    constructor(P_name,P_age) {
        this.P_name = P_name;
        this.P_age = P_age;
    }
}
class employee extends Person{
    constructor(P_name,P_age,E_salary,E_id){
        super(P_name,P_age);
        this.salary = E_salary;
        this.id= E_id;
    }
    Show() {
    console.log('PersonName:'+this.P_name,'PersonAge:'+ this.P_age,'EmployeeSalary:'+ this.salary, 'Employee_Id:' + this.id);
    }
}
let obj= new employee("Raju",25,20000,4705);
obj.Show();