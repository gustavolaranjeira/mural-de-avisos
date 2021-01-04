document.addEventListener("DOMContentLoaded", () => {
    updatePosts();
});

function updatePosts() {
    fetch("https://mighty-river-75813.herokuapp.com/api/all")
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            let postElements = "";

            let posts = JSON.parse(json);
            posts.forEach((post) => {
                let postElement = `<div id="${post.id}" class="card mb-4">
                <div class="card-header">
                    <h5 class="card-title">${post.title}</h5>
                </div>
                <div class="card-body">${post.description}</div>
            </div>
        </div>`;
                postElements += postElement;
            });
            document.getElementById("posts").innerHTML = postElements;
        });
}
function newPost() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;

    let post = { title, description };

    const options = {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(post),
    };

    fetch("https://mighty-river-75813.herokuapp.com/api/new", options).then((res) => {
        console.log(res);
        updatePosts();
        document.getElementById("title").value = "";
        document.getElementById("desc").value = "";
    });
}
