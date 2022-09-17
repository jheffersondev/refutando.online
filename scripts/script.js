const getFormPost = document.getElementById("get-form-post");


getFormPost.addEventListener("click", (event) => {
    event.preventDefault();
    const containerRight = document.getElementById("container-right");
    const containerLeft = document.getElementById("container-left");

    axios.get("/formPost.html")
        .then(res1 => {
            containerRight.innerHTML = res1.data;
            axios.get("/formPostInfo.html")
                .then(res2 => {
                    containerLeft.innerHTML = res2.data;
                })
        })

})
