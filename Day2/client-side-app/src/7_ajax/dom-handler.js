import postApiClient from "./post-api-client";

const ajaxDiv = document.getElementById("ajaxDiv");
const messageDiv = document.getElementById("messageDiv");

if (ajaxDiv.style.display === "none") {
    ajaxDiv.style.display = "block";
    messageDiv.style.display = "none";
}

const button = document.createElement("button");
button.className = "btn btn-primary";
button.innerHTML = "Get Data";

const btnArea = document.getElementById("btnArea");
btnArea.appendChild(button);

// 1. HardCoded Data
// button.addEventListener("click", function () {
//     // alert("Button was clicked...");
//     generateTable(posts);
// });

// 2. Using Callbacks
// button.addEventListener("click", function () {
//     postApiClient.getAllPostsUsingCallbacks((data) => {
//         // console.log("Click: ", data);
//         generateTable(data);
//     }, (eMsg) => {
//         console.error(eMsg);
//     });
// });

// 3. Using Promise
// button.addEventListener("click", function () {
//     postApiClient.getAllPostsUsingPromise().then((data) => {
//         generateTable(data);
//     }).catch((eMsg) => {
//         console.error(eMsg);
//     });
// });

// 4. Async Await
// button.addEventListener("click", async function () {
//     try {
//         var data = await postApiClient.getAllPostsUsingPromise();
//         generateTable(data);
//     } catch (eMsg) {
//         console.error(eMsg);
//     }
// });

// 5. Using Async Function
// button.addEventListener("click", async function () {
//     try {
//         var data = await postApiClient.getAllPostsAsync();
//         generateTable(data);
//     } catch (eMsg) {
//         console.error(eMsg);
//     }
// });

// 6. Using Async Generator Function
button.addEventListener("click", async function () {
    const genObject = postApiClient.getAllPosts();

    try {
        var data = await genObject.next();
        generateTable(data.value);
    } catch (eMsg) {
        console.error(eMsg);
    }
});

function generateTable(data) {
    let table = document.getElementById("postTable");
    let row, cell;

    for (const item of data) {
        row = table.insertRow();
        cell = row.insertCell();
        cell.textContent = item.id;
        cell = row.insertCell();
        cell.textContent = item.title;
        cell = row.insertCell();
        cell.textContent = item.body;
    }
}

// let posts = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "qui est esse",
//         "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//         "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//     }
// ];