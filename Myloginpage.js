function validate()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "goditachi" && password == "maddy")
    {
        alert("login sucessfully");
        console.log('<a href="newLCpage.html"></a>')
    }
    else
    {
        alert("wrong password");

        }
}