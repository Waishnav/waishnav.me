function addPost(example) {
    let anchor = document.createElement('a')
    // a.setAttribute(href, example.link);
    anchor.href = example.link;
    anchor.className = "overview";
    let title, date, description, categories, tag, t
    title = document.createElement('div');
    title.innerHTML = example.title;
    title.className = "title";
    // console.log(title.innerHTML)

    date = document.createElement('div');
    let svg = '<span><svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 24 24" width="16px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg></span>'
    date.innerHTML = svg + example.date;
    date.className = "date";

    description = document.createElement('p');
    description.innerHTML = example.description;
    description.className = "description";
    // console.log(description.innerHTML)

    categories = document.createElement('div');
    categories.className = "categories";
    for (i = 0; i < example.categories.length; i++) {
        t = example.categories[i];
        tag = document.createElement('div');
        tag.innerText = t;
        tag.className = "tag";
        categories.appendChild(tag);
    }

    anchor.append(title);
    anchor.append(date);
    anchor.append(description);
    anchor.append(categories);
    document.getElementById('postsContainer').appendChild(anchor)

}

function addProject(example) {
    let anchor = document.createElement('a')
    // a.setAttribute(href, example.link);
    anchor.href = example.link;
    anchor.className = "overview";
    let title, imgDiv, img, description;
    title = document.createElement('div');
    title.innerHTML = example.title;
    title.className = "title";
    // console.log(title.innerHTML)

    imgDiv = document.createElement('div');
    imgDiv.className = "image"
    img = document.createElement('img');
    img.src = example.imgLink
    imgDiv.appendChild(img)

    description = document.createElement('p');
    description.innerHTML = example.description;
    description.className = "description";
    // console.log(description.innerHTML)

    anchor.append(imgDiv);
    anchor.append(title);
    anchor.append(description);
    document.getElementById('projectsContainer').appendChild(anchor)

}

function searchFunction(post = true) {
    // Declare variables

    let input, filter, a, i, txtValue, tag;
    input = document.getElementById('user_input');
    filter = input.value.toUpperCase();
    all_links = document.getElementsByClassName('overview');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < all_links.length; i++) {
      if (filter[0] == "#") {
          let search_tag = filter.slice(1).toUpperCase()
          let a = all_links[i]
          let tags = a.childNodes[3].innerText.split("\n")
          /*
          input.addEventListener("keypress", function(event)) {
              if ((event.key) === "Enter") {
                  +
              }
          }
          */
          for (let i = 0; i < tags.length; i++) {
              let tag = tags[i];
              for (let j = 0; j < tag.length; j++) {
                if (tag[j].indexOf(search_tag) > -1) {
                    a.style.display = "";
                } else {
                    a.style.display = "none";
                    }
                }
          }


      } else {
          a = all_links[i];
          if (post == true) {
            title = a.childNodes[0];
        } else {
            title = a.childNodes[1]
            }

        txtValue = title.textContent || title.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a.style.display = "";
      } else {
            a.style.display = "none";
        }

      }
    }
}
//console.log((document.readyState === 'complete'))

window.addEventListener("DOMContentLoaded", () => {
    //if (document.readyState === "complete") {


        //console.log("yes")
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        let projectList = data.projects;
        let postList = data.posts;
        //console.log(postList)
        let hostname = window.location.host;
        let url = window.location.href;
        if (url == "http://" + hostname + "/index.html" || url == "http://" + hostname + "/") {
            for (let i = 0; i < Math.min(3, postList.length); i++) {
                addPost(postList[i]);
            } ;
            for (let i = 0; i < Math.min(3, projectList.length); i++) {
                addProject(projectList[i]);
            } ;
        }
        else if ( url.includes("/posts.html") ) {
            for (let i = 0; i < postList.length; i++) {
                addPost(postList[i]);
            } ;

        }
        if ( url.includes("/projects.html") ) {
            for (let i = 0; i < projectList.length; i++) {
                addProject(projectList[i]);
            } ;
    }
    })

});

