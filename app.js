let like = document.getElementById("like");
let dislike = document.getElementById("dislike");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

like.addEventListener("click", () => {
  input1.value = parseInt(input1.value) + 1;
  input1.style.color = "#12ff00";
});

dislike.addEventListener("click", () => {
  input2.value = parseInt(input2.value) + 1;
  input2.style.color = "#ff0000";
});
