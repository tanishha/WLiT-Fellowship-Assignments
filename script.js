window.onload = function () {
    let margin = Date.now();
    let timer = setInterval(function () {
        let i = Date.now() - margin
        animate.style.left = i / 2 + "px";
        console.log("numbrt:", animate.style.left)
        if (i > 2600)
            clearInterval(timer);
    }, 1);
};

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log(err);
    });

function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) {
        //heading
        var dt = document.createElement("dt");
        dt.innerHTML = "Data:" + data[i].id
        //for id
        var dd0 = document.createElement("dd");
        dd0.innerHTML = "id:" + data[i].id
        //for userId
        var dd1 = document.createElement("dd");
        dd1.innerHTML = "userId: " + data[i].userId
        //for title
        var dd2 = document.createElement("dd");
        dd2.innerHTML = "title: " + data[i].title
        //for body
        var dd3 = document.createElement("dd");
        dd3.innerHTML = "body: " + data[i].body

        mainContainer.appendChild(dt); 
        mainContainer.appendChild(dd0);
        mainContainer.appendChild(dd1);
        mainContainer.appendChild(dd2);
        mainContainer.appendChild(dd3);
    }
}