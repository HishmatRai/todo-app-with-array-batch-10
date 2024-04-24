var input = document.getElementById("input");
var ul = document.getElementById("ul")
var list = [];
function addHandler() {

    list.push(input.value)
    input.value = ""
}


// get data
function getData() {
    ul.innerHTML = ""
    if (list.length === 0) {
        alert("Data not found!")
    } else {
        // console.log('list>>>>>>>', list);
        for (var i = 0; i < list.length; i++) {
            var li = document.createElement("li");
            ul.appendChild(li);
            li.innerHTML = list[i]
        }

    }
}