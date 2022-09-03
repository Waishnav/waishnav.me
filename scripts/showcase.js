// showcase
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
        tag.innerText = "#"+t;
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
    let title, imgDiv, img, description, links;
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

    links = document.createElement('div');
    links.className = "links";

    /*
    if (example.visit != "none") {
        const visitlink = document.createElement('a');
        const visitSvg = '';
        visitlink.innerHTML = visitSvg;
        visitlink.href = example.visit;
        links.append(visitlink)
    }
    if (example.github != "none") {
        const github = document.createElement('a');
        const githubSvg = '<svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path fill="currentColor" fill-rule="evenodd" d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z"></path></svg>' + 'Source';
        github.innerHTML = githubSvg;
        github.href = example.github;
        links.append(github)
    }
    */


    anchor.append(imgDiv);
    anchor.append(title);
    anchor.append(description);
    anchor.append(links);
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
          for ( let j = 0; j < tags.length; j++) {
            if (tags[j].toUpperCase().indexOf(search_tag) > -1) {
                a.style.display = "";
            } else {
                a.style.display = "none";
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
