let themeBtn = document.querySelector("#theme-btn");

themeBtn.onclick = () => {
  themeBtn.classList.toggle("fa-sun");

  if (themeBtn.classList.contains("fa-sun")) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};

let spans = document.querySelectorAll(".sub-name");

spans.forEach((e) => {
  e.addEventListener("mouseover", () => {
    e.classList.add("moveAndColor");
  });
  setInterval(() => {
    e.classList.remove("moveAndColor");
  }, 1000);
});

let projects = {
  0: [
    "Featured Project",
    "Educa Website",
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
    "https://github.com/YOUsefmostaf/Educa",
    "https://yousefmostaf.github.io/Educa/",
    "images/image3.PNG",
  ],
  1: [
    "Featured Project",
    "Seo Website",
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
    "https://github.com/YOUsefmostaf/SEO",
    "https://yousefmostaf.github.io/SEO/",
    "images/image4.PNG",
  ],
  2: [
    "Featured Project",
    "Y...E Hotile Website",
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
    "https://github.com/YOUsefmostaf/Y...E_Hotile",
    "https://yousefmostaf.github.io/Y...E_Hotile/",
    "images/image5.PNG",
  ],
  3: [
    "Featured Project",
    "Todo List",
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
    "https://github.com/YOUsefmostaf/TodoList",
    "https://yousefmostaf.github.io/TodoList/",
    "images/image2.PNG",
  ],
  4: [
    "Featured Project",
    "Clock",
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
    "https://github.com/YOUsefmostaf/clock",
    "https://yousefmostaf.github.io/clock/",
    "images/image1.PNG",
  ],
  5: [
    "Featured Project",
    "Weather App",
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
    "https://github.com/YOUsefmostaf/Weather-App",
    "https://yousefmostaf.github.io/Weather-App/",
    "images/image6.PNG",
  ],
  6: [
    "Featured Project",
    "Rock Paper Scissors Master",
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
    "https://github.com/YOUsefmostaf/rock-paper-scissors-master",
    "https://yousefmostaf.github.io/rock-paper-scissors-master/",
    "images/image7.PNG",
  ],
};

let allProject = document.getElementById("all-project");
for (let project in projects) {
  let pro = document.createElement("div");
  pro.setAttribute("data-aos", "zoom-in");
  pro.setAttribute("class", "project");

  let text = document.createElement("div");

  text.setAttribute("data-aos", "zoom-in");
  text.setAttribute("data-aos-duration", "3000");
  text.setAttribute("class", "text");

  let h4 = document.createElement("h4");
  let h4Text = document.createTextNode(projects[project][0]);
  h4.appendChild(h4Text);

  let a = document.createElement("a");
  a.setAttribute("href", projects[project][4]);
  let aText = document.createTextNode(projects[project][1]);
  a.appendChild(aText);

  let p = document.createElement("p");
  let pText = document.createTextNode(projects[project][2]);
  p.appendChild(pText);

  let ul = document.createElement("ul");

  let li1 = document.createElement("li");
  let a2 = document.createElement("a");
  a2.setAttribute("href", projects[project][3]);
  let i1 = document.createElement("i");
  i1.setAttribute("class", "fa-brands fa-github");
  a2.appendChild(i1);
  li1.appendChild(a2);

  let li2 = document.createElement("li");
  let a3 = document.createElement("a");
  a3.setAttribute("href", projects[project][4]);
  let i2 = document.createElement("i");
  i2.setAttribute("class", "fa-solid fa-arrow-up-right-from-square");
  a3.appendChild(i2);
  li2.appendChild(a3);

  ul.appendChild(li1);
  ul.appendChild(li2);

  text.appendChild(h4);
  text.appendChild(a);
  text.appendChild(p);
  text.appendChild(ul);

  let image = document.createElement("div");
  image.setAttribute("data-aos", "zoom-in");
  image.setAttribute("data-aos-duration", "3000");
  image.setAttribute("class", "image");
  let img = document.createElement("img");
  img.setAttribute("src", projects[project][5]);
  img.setAttribute("alt", "image");
  image.appendChild(img);

  if (project % 2 == 0) {
    pro.appendChild(text);
    pro.appendChild(image);
  } else {
    pro.appendChild(image);
    pro.appendChild(text);
  }

  allProject.appendChild(pro);
}

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "ym9674797@gmail.com",
    Password: "1E46F80B820E46CDBB21D77074D860071DF7",
    To: "yousefmostafaa121@gmail.com",
    From: "ym9674797@gmail.com",
    Subject: "New Contact",
    Body: "Name : " + document.getElementById("name").value + "<br> Phone : "
    + document.getElementById("phone").value + "<br> Subject : " + document.getElementById("subject").value
    + "<br> Body : " + document.getElementById("message").value ,
  }).then((message) => alert("Message Sent Successfully"));
}
