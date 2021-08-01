import React from "react";
import "./post.css";
const post = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    // Converting received data to JSON
    .then((response) => response.json())
    .then((json) => {
      // Create a variable to store HTML
      let li = `<tr><th>Id</th><th>Title</th><th>Body</th></tr>`;

      // Loop through each data and add a table row
      json.forEach((user) => {
        li += `<tr>
				<td>${user.id} </td>
				<td>${user.title}</td>	
        <td>${user.body}</td>	
			</tr>`;
      });

      // Display result
      document.getElementById("users").innerHTML = li;
    });
  return (
    <div>
      <h1>Fetch API GET REQUEST</h1>
      <h3>Fetching Users</h3>

      <table id="users"></table>
    </div>
    // main.js

    // GET request using fetch()
  );
};

export default post;
