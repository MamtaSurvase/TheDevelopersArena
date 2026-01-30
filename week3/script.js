// Typing Animation
const typingText = "Beginner Web Developer | HTML | CSS | JavaScript";
let i = 0;
function typing() {
    if (i < typingText.length) {
        document.getElementById("typingText").innerHTML += typingText.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}
typing();

// Dark Mode Toggle
const toggle = document.getElementById("darkToggle");
if(localStorage.getItem("darkMode") === "true"){
    document.body.classList.add("dark-mode");
    toggle.checked = true;
}
toggle.addEventListener("change", ()=>{
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", toggle.checked);
});

// About Show/Hide
const toggleAboutBtn = document.getElementById("toggleAbout");
const moreAbout = document.getElementById("moreAbout");
toggleAboutBtn.addEventListener("click", ()=>{
    moreAbout.classList.toggle("hidden");
    toggleAboutBtn.innerText = moreAbout.classList.contains("hidden") ? "Read More" : "Read Less";
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let msg = document.getElementById("message").value.trim();
    let output = document.getElementById("formMsg");

    if(name==="" || email==="" || msg===""){
        output.innerHTML = "❌ Please fill all fields"; output.style.color="red";
    } else if(!email.includes("@")){
        output.innerHTML = "❌ Please enter a valid email"; output.style.color="red";
    } else if(msg.length < 10){
        output.innerHTML = "❌ Message must be at least 10 characters"; output.style.color="red";
    } else {
        output.innerHTML = "✅ Message Sent Successfully"; output.style.color="green";
        document.getElementById("contactForm").reset();
    }
});

// Skills Bar Animation
window.addEventListener("scroll", function(){
    const skillsSection = document.querySelector(".skills-section");
    const top = skillsSection.getBoundingClientRect().top;
    const height = window.innerHeight;
    if(top < height){
        document.querySelector(".html").style.width="90%";
        document.querySelector(".css").style.width="80%";
        document.querySelector(".js").style.width="70%";
    }
});

// Skill Tooltip
const skillTooltip = document.getElementById("skillTooltip");
const skills = document.querySelectorAll(".skill");
skills.forEach(skill => {
    skill.addEventListener("mouseenter", ()=>{
        skillTooltip.innerText = skill.getAttribute("data-desc");
        const rect = skill.getBoundingClientRect();
        skillTooltip.style.top = rect.top - 40 + window.scrollY + "px";
        skillTooltip.style.left = rect.left + "px";
        skillTooltip.style.opacity = 1;
        skillTooltip.style.transform = "translateY(0)";
    });
    skill.addEventListener("mouseleave", ()=>{
        skillTooltip.style.opacity=0;
        skillTooltip.style.transform="translateY(-10px)";
    });
});

// Image Slider
const sliderImages = ["images/project1.jpg","images/project2.jpg","images/project3.jpg"];
let currentIndex=0;
const sliderImg = document.getElementById("sliderImage");
document.getElementById("next").addEventListener("click", ()=>{
    currentIndex = (currentIndex+1)%sliderImages.length;
    sliderImg.src = sliderImages[currentIndex];
});
document.getElementById("prev").addEventListener("click", ()=>{
    currentIndex = (currentIndex-1+sliderImages.length)%sliderImages.length;
    sliderImg.src = sliderImages[currentIndex];
});

// To-Do List
const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodo");
const todoList = document.getElementById("todoList");

addTodoBtn.addEventListener("click", ()=>{
    const val = todoInput.value.trim();
    if(val!==""){
        const li = document.createElement("li");
        li.innerHTML = `${val} <span class="deleteBtn">X</span>`;
        todoList.appendChild(li);
        todoInput.value="";
        li.querySelector(".deleteBtn").addEventListener("click", ()=>{ li.remove(); });
    }
});
