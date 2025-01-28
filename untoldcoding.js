const chest = document.getElementById("chest");
const jewelries = document.querySelectorAll(".jewelry");
const birthdayMessage = document.getElementById("birthdayMessage");

chest.addEventListener("dblclick", () => {
  chest.classList.toggle("rotating");
});

chest.addEventListener("click", () => {
  chest.classList.toggle("open");

  if (chest.classList.contains("open")) {
    setTimeout(() => {
      birthdayMessage.classList.add("show");
      setTimeout(() => {
        jewelries.forEach((jewelry, index) => {
          setTimeout(() => {
            jewelry.classList.add("show");
          }, index * 200);
        });
      }, 500);
    }, 500);
  } else {
    birthdayMessage.classList.remove("show");
    jewelries.forEach((jewelry) => {
      jewelry.classList.remove("show");
    });
  }
});
