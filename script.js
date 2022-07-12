let enroll = document.getElementById("enroll");
let btn = document.querySelector(".btn");
let name = document.getElementById("name");

let data = {
    enrollment: enroll.value,
    name: name.value
}


btn.addEventListener("click", function () {
    if (enroll.value === data.enrollment) {
        document.createElement("p")
    }
});





