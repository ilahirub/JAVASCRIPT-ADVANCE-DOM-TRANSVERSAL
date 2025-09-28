//!Using textContent to update the blog title
//!textContent - does not render any tags or append any additional paragraphs as innerHTML does

const blogTitleEl = document.getElementById("title");
// console.log(blogTitleEl);

blogTitleEl.textContent = "New Blog Title";

//!change the background
blogTitleEl.style.background = "red";
blogTitleEl.style.color = "green";

//!Using innerHTML to add another paragraph with some HTML content
const paragraphEl = document.getElementById("paragraph");
paragraphEl.innerHTML = "<h1>I have changed the paragraph</h1>";

paragraphEl.innerHTML +=
  "<br><strong>This is a new paragraph with strong text</strong>";

//! Using innerText to modify the comment section (assume the original comment is visible)
const firstCommentEl = document
  .getElementById("comment1")
  .querySelector(".commentText");

firstCommentEl.innerHTML = "Updated first comment.";
