//console.log((document.readyState === 'complete'))

// main.js which will run in all pages

window.addEventListener("DOMContentLoaded", () => {
  //if (document.readyState === "complete") {

  fetch("/data.json")
    .then(response => response.json())
    .then(data => {
      var projectList = data.projects;
      var postList = data.posts;
      //console.log(postList)
      let hostname = window.location.host;
      let url = window.location.href;
      // if its home page then it will add latest 3 projects and posts by waishnav
      if (url.includes("/index.html") || url == window.location.protocol + "//" + hostname + "/") {
        for (let i = 0; i < Math.min(3, postList.length); i++) {
          addPost(postList[i]);
        };
        for (let i = 0; i < Math.min(3, projectList.length); i++) {
          addProject(projectList[i]);
        };
      }
      // if its posts page then it will add every post in the page
      if (url.includes("/posts")) {
        for (let i = 0; i < postList.length; i++) {
          addPost(postList[i]);
        };

      }
      // if its projects page then it will add every projects in the page
      if (url.includes("/projects")) {
        for (let i = 0; i < projectList.length; i++) {
          addProject(projectList[i]);
        };
      }

    })
});

