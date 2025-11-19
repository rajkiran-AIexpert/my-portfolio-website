console.log("Website Loaded Successfully, Bujji 💙");
// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Cursor Hologram Follow Everywhere
const cursor = document.querySelector(".cursor");
const cursorOutline = document.querySelector(".cursor-outline");

document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    cursor.style.transform = `translate(${x}px, ${y}px)`;
    cursorOutline.style.transform = `translate(${x}px, ${y}px)`;
});
// Floating Particles Background
const particlesContainer = document.getElementById("particles");

for (let i = 0; i < 40; i++) {
    const p = document.createElement("div");
    p.classList.add("particle");

    let size = Math.random() * 6 + 2; // 2–8px
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;

    p.style.left = `${Math.random() * 100}%`;
    p.style.animationDuration = `${5 + Math.random() * 10}s`;
    p.style.animationDelay = `${Math.random() * 10}s`;

    particlesContainer.appendChild(p);
}

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("exploreWork");
    const section = document.getElementById("projects");

    btn.addEventListener("click", function() {
        section.scrollIntoView({ behavior: "smooth" });
    });
});
const profileImg = document.querySelector(".holo-profile");
const popup = document.getElementById("imgPopup");
const popupImg = document.getElementById("popupImg");

// Desktop click
profileImg.addEventListener("click", () => {
    popupImg.src = profileImg.src; // Important: update popup image
    popup.style.display = "flex";
});

// Mobile long press
let pressTimer;
profileImg.addEventListener("touchstart", () => {
    pressTimer = setTimeout(() => {
        popupImg.src = profileImg.src; // Important: update popup image
        popup.style.display = "flex";
    }, 600);
});
profileImg.addEventListener("touchend", () => clearTimeout(pressTimer));
profileImg.addEventListener("touchmove", () => clearTimeout(pressTimer));

// Close popup
popup.addEventListener("click", () => {
    popup.style.display = "none";
});

// ESC key close
document.addEventListener("keydown", (e) => {
    if(e.key === "Escape") popup.style.display = "none";
});
// About Me toggle
const toggleBtn = document.querySelector("#aboutMe .toggle-btn");
const moreInfo = document.querySelector("#aboutMe .more-info");
const dots = document.querySelector("#aboutMe .dots");

toggleBtn.addEventListener("click", () => {
    if (moreInfo.style.display === "inline") {
        moreInfo.style.display = "none";
        dots.style.display = "inline";
        toggleBtn.textContent = "Read More";
    } else {
        moreInfo.style.display = "inline";
        dots.style.display = "none";
        toggleBtn.textContent = "Read Less";
    }
});
const projectItems = document.querySelectorAll(".project-item");
const projectModal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalFeatures = document.getElementById("modalFeatures");
const closeBtn = document.querySelector(".close-btn");

projectItems.forEach(item => {
    item.addEventListener("click", () => {
        modalTitle.textContent = item.dataset.title;
        modalDesc.textContent = item.dataset.desc;
        modalFeatures.textContent = item.dataset.features;
        projectModal.style.display = "flex";
    });
});

closeBtn.addEventListener("click", () => {
    projectModal.style.display = "none";
});

projectModal.addEventListener("click", (e) => {
    if(e.target === projectModal) {
        projectModal.style.display = "none";
    }
});
// Optional: Alert on submit
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
    alert("Thank you! Your message has been sent.");
});
// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});
// Optional: Particle moves towards cursor
document.addEventListener("mousemove", e => {
    document.querySelectorAll('.particle').forEach(p => {
        let rect = p.getBoundingClientRect();
        let dx = e.clientX - (rect.left + rect.width/2);
        let dy = e.clientY - (rect.top + rect.height/2);
        let dist = Math.sqrt(dx*dx + dy*dy);
        if(dist < 100) {
            p.style.transform = `translate(${dx/8}px, ${dy/8}px)`;
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }
        });
    });

    document.querySelectorAll('.card').forEach(card => observer2.observe(card));
});
document.addEventListener("DOMContentLoaded", () => {
    const projectItems = document.querySelectorAll(".project-item");
    const projectModal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const modalFeatures = document.getElementById("modalFeatures");
    const closeBtn = document.querySelector(".close-btn");

    projectItems.forEach(item => {
        item.addEventListener("click", () => {
            // Set modal content from dataset
            modalTitle.textContent = item.dataset.title;
            modalDesc.textContent = item.dataset.desc;
            modalFeatures.textContent = item.dataset.features;

            // Show modal
            projectModal.style.display = "flex";
            projectModal.classList.add("show"); // for smooth transition
        });
    });

    // Close modal on X click
    closeBtn.addEventListener("click", () => {
        projectModal.style.display = "none";
        projectModal.classList.remove("show");
    });

    // Close modal on outside click
    projectModal.addEventListener("click", (e) => {
        if (e.target === projectModal) {
            projectModal.style.display = "none";
            projectModal.classList.remove("show");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const profileImg = document.querySelector(".holo-profile");
    const popup = document.getElementById("imgPopup");
    let pressTimer;

    // Function to show popup
    const showPopup = () => {
        popup.style.display = "flex";
        popup.classList.add("show"); // for smooth transition
    };

    // Function to hide popup
    const hidePopup = () => {
        popup.style.display = "none";
        popup.classList.remove("show");
    };

    // Long press detection
    profileImg.addEventListener("mousedown", () => {
        pressTimer = setTimeout(showPopup, 100); // 600ms long press
    });
    profileImg.addEventListener("mouseup", () => clearTimeout(pressTimer));
    profileImg.addEventListener("mouseleave", () => clearTimeout(pressTimer));

    profileImg.addEventListener("touchstart", () => {
        pressTimer = setTimeout(showPopup, 600);
    });
    profileImg.addEventListener("touchend", () => clearTimeout(pressTimer));
    profileImg.addEventListener("touchmove", () => clearTimeout(pressTimer));

    // Close popup on click anywhere
    popup.addEventListener("click", hidePopup);
});
profileImg.addEventListener("touchstart", () => {
    pressTimer = setTimeout(() => {
        popup.style.display = "flex";
    }, 600);
});

profileImg.addEventListener("touchend", () => clearTimeout(pressTimer));
profileImg.addEventListener("touchmove", () => clearTimeout(pressTimer));

popup.addEventListener("click", () => {
    popup.style.display = "none";
});
document.addEventListener("DOMContentLoaded", () => {
    const projectItems = document.querySelectorAll(".project-item");
    const projectModal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const modalFeatures = document.getElementById("modalFeatures");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.querySelector(".close-btn");

    projectItems.forEach(item => {
        item.addEventListener("click", () => {
            modalTitle.textContent = item.dataset.title;
            modalDesc.textContent = item.dataset.desc;
            modalFeatures.textContent = item.dataset.features;
            modalImg.src = item.dataset.img; // Display image or GIF
            modalImg.style.display = "block";

            projectModal.style.display = "flex";
            projectModal.classList.add("show");
        });
    });

    closeBtn.addEventListener("click", () => {
        projectModal.style.display = "none";
        projectModal.classList.remove("show");
    });

    projectModal.addEventListener("click", (e) => {
        if (e.target === projectModal) {
            projectModal.style.display = "none";
            projectModal.classList.remove("show");
        }
    });
});
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(name && email && message) {
        // For now just show message
        document.getElementById("formStatus").textContent = "Message sent! Thank you, " + name + " 💙";
        
        // Clear form
        document.getElementById("contactForm").reset();

        // Optional: open default email client (mailto)
        // window.location.href = `mailto:rajkirananusuri@gmail.com?subject=Message from ${name}&body=${message}`;
    } else {
        document.getElementById("formStatus").textContent = "Please fill all fields!";
    }
});

// CONTACT FORM MAIL SYSTEM
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const status = document.getElementById("statusMessage");

    status.innerHTML = "Sending message... ⏳";

    Email.send({
        Host: "smtp.gmail.com",
        Username: "rajkirananusuri@gmail.com",
        Password: "gkuf lpmf aeot pxcn",
        To: "rajkirananusuri@gmail.com",
        From: "rajkirananusuri@gmail.com",
        Subject: `New Message from Portfolio Website - ${name}`,
        Body: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
        `
    }).then(
        (response) => {
            if (response === "OK") {
                status.innerHTML = "✔️ Message Sent Successfully!";
                status.style.color = "#00eaff";

                // Reset form
                document.getElementById("contactForm").reset();
            } else {
                status.innerHTML = "❌ Failed to send! Try again.";
                status.style.color = "red";
            }
        }
    );
});