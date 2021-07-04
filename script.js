// no-protect
const topBar = document.getElementById("top-bar");

const signupButton = document.getElementById("signup");
const signupForm = document.getElementById("signup-form");

const loginButton = document.getElementById("loginButton");
const loginForm = document.getElementById("login-form");

const quitButton = document.getElementById("quit-from-upper-operations");

// signin form elements
const signFirstName = document.getElementById("signFirstName");
const signLastName = document.getElementById("signLastName");
const signEmail = document.getElementById("signEmail");
const signPass = document.getElementById("signPass");
const agreeTerms = document.getElementById("terms");
const regWarn = document.getElementById("regWarning");
const registerButton = document.getElementById("register")


// login Elements
const logEmail = document.getElementById("email");
const logPassword = document.getElementById("password");
const logWarn = document.getElementById("logWarning")
const login = document.getElementById("login")

// main content of the page
const loginSignupContent = document.getElementById("login-signup-content")
const dashboard = document.getElementById("dashboard");

signupButton.addEventListener("click", function() {
    signupForm.style.visibility = "visible";
    signupForm.style.height = "270px";

    if (loginForm.style.visibility = "visible") {
        loginForm.style.visibility = "hidden";
        loginForm.style.height = "0";
    }

    quitButton.style.visibility = "visible";
});

loginButton.addEventListener("click", function() {
    loginForm.style.visibility = "visible";
    loginForm.style.height = "200px";

    if (signupForm.style.visibility = "visible") {
        signupForm.style.visibility = "hidden";
        signupForm.style.height = "0";
    }

    quitButton.style.visibility = "visible";
});

quitButton.addEventListener("click", function() {
    if (signupForm.style.visibility = "visible") {
        signupForm.style.visibility = "hidden";
        signupForm.style.height = "0";
    }

    if (loginForm.style.visibility = "visible") {
        loginForm.style.visibility = "hidden";
        loginForm.style.height = "0";
    }

    quitButton.style.visibility = "hidden";
    quitButton.style.height = "0";
    location.reload();
});


myStorage = window.localStorage;
registerButton.addEventListener("click", function() {
    if (signFirstName.value !== "" && signLastName.value !== "" && signEmail.value !== "" && signPass.value !== "") {
        myStorage.setItem("firstName", signFirstName.value);
        myStorage.setItem("lastName", signLastName.value);
        myStorage.setItem("email", signEmail.value);
        myStorage.setItem("password", signPass.value);

        if (window.confirm("Registered successfully.")) {
            signupForm.style.height = "0";
            signupForm.style.visibility = "hidden";
            quitButton.style.visibility = "hidden";
            signupButton.style.visibility = "hidden";
        }
    } else {
        regWarn.innerHTML = "Empty values are not valid. Please fill all the details.";
    }
})

login.addEventListener("click", function() {
    if (myStorage.getItem("email") === logEmail.value && myStorage.getItem("password") === logPassword.value) {
        console.log("Logged in successfully")
        dashboard.style.visibility = "visible";
        if (signupForm.style.visibility = "visible") {
            signupForm.style.visibility = "hidden";
            signupForm.style.height = "0";
        }

        if (loginForm.style.visibility = "visible") {
            loginForm.style.visibility = "hidden";
            loginForm.style.height = "0";
        }
        loginButton.style.visibility = "hidden";
        loginButton.style.height = "0"
        loginButton.style.marginTop = "0"
        signupButton.style.visibility = "hidden";
        signupButton.style.height = "0";
        signupButton.style.marginTop = "0";

        quitButton.style.visibility = "hidden";
        quitButton.style.height = "0";

        const username = document.getElementById("username");
        username.innerHTML = "Hello " + myStorage.getItem("email");

    } else {
        logWarn.innerHTML = "Email or Password is incorrect. try by register.";
    }


})



const addtodolist = document.getElementById("addtodolist");

function OpenToDoListForm() {
    console.log("done");
    addtodolist.style.visibility = "visible";
}

const titleofTodo = document.getElementById("todo-title");


function removeToDo() {
    console.log(row);
}

function checkAndAddTodo(tableName) {
    if (titleofTodo.value !== "") {
        let row = document.createElement("tr");
        let data1 = document.createElement("td");
        let data2 = document.createElement("td");


        data1.innerHTML = titleofTodo.value;
        data2.innerHTML = "<input type='button' value='Mark as done' onclick='removeToDo()'/>"

        row.appendChild(data1);
        row.appendChild(data2);

        tableName.appendChild(row)

        myStorage.setItem("task", titleofTodo.value);
        console.log(titleofTodo.value);
    } else {
        window.alert("Add a title and description..");
    }
}

function logout() {
    if (confirm("are you sure to logout")) {
        dashboard.style.visibility = "hidden";

        loginButton.style.visibility = "visible";
        loginButton.style.height = "40px";
        signupButton.style.visibility = "visible";
        signupButton.style.height = "40px";

    }
}