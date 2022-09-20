const getFormPost = document.getElementById("get-form-post");


function doRequisition(url1, url2){
    const containerRight = document.getElementById("container-right");
    const containerLeft = document.getElementById("container-left");

    axios.get(url1)
        .then(res1 => {
            containerRight.innerHTML = res1.data;
            axios.get(url2)
                .then(res2 => {
                    containerLeft.innerHTML = res2.data;
                })
        })

}

getFormPost.addEventListener("click", (event) => {
    event.preventDefault();

    doRequisition("/formPost.html", "/formPostInfo.html");
})

const commentButton = document.querySelector(".comment-button")

commentButton.addEventListener("click", (event) => {
    event.preventDefault();

    doRequisition("/commentPage.html", "/commentPageInfo.html");
})
