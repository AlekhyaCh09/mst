class user {
    constructor(un,pwd) {
        this.un = un;
        this.pwd = pwd;
    }
    validate() {
        if((this.un=="admin") && (this.pwd=="admin")) {
            alert("Login Successful...");
        }
        else {
            alert("Wrong Login...");
        }
    }
}

function validate()
{
    un = document.getElementById('un').value;
    pwd = document.getElementById('pwd').value;
    Obj = new user(un,pwd);
    Obj.validate();
}
