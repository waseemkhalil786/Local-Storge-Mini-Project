let data = [
    {id: 1, name: "Waseem", email: "wkdeveloper@gmail.com"},
    {id: 2, name: "WK", email: "FrontendDeveloper@gmail.com"}
]
// console.log(data);
function readAll() {
    localStorage.setItem("object", JSON.stringify(data));
    var tabledata =document.querySelector(".data_table");
    var object = localStorage.getItem(`object`);
    var objectdata  = JSON.parse(object);
    var element = "";

}