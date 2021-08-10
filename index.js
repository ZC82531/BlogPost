database.on("child_added", function(childData){
    let blogData = childData.val();

    let set = document.createElement("div");
    let u = document.createElement("p");
    let t = document.createElement("p");
    let c = document.createElement("p");

    u.innerHTML = "Username: " + blogData.USERNAME;
    t.innerHTML = "Title: " + blogData.TITLE;
    c.innerHTML = "Content: " + blogData.CONTENT;

    set.append(u,t,c);

    blogPost.append(set);
});
