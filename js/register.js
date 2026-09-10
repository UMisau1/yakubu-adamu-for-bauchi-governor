/* ==========================================
   YAKUBU CAMPAIGN WEBSITE
   register.js
========================================== */


/* ==========================================
   REGISTRATION FORM
========================================== */

/* ==========================================
   REGISTRATION FORM
========================================== */

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        // Collect Form Data
        const fullName = document.getElementById("fullName").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const state = document.getElementById("state").value;
        const lga = document.getElementById("lga").value;
        const ward = document.getElementById("ward").value;

        // Generate Membership Number
        const memberID =
            "YAKUBU-2027-" +
            Math.floor(100000 + Math.random() * 900000);
            const photoInput = document.getElementById("photo");

let photo = "";

if (photoInput.files.length > 0) {

    const reader = new FileReader();

    reader.onload = function () {

        photo = reader.result;

        saveMember();

    };

    reader.readAsDataURL(photoInput.files[0]);

} else {

    saveMember();

}


        // Save to Local Storage
        localStorage.setItem("yakubuMember", JSON.stringify({

            fullName,
            phone,
            email,
            state,
            lga,
            ward,
            memberID

        }));

        // Success Message
        alert("Registration Successful!");

        // Redirect to Membership Card
        window.location.href = "id-card.html";

    });

}



/* ==========================================
   PHONE NUMBER VALIDATION
========================================== */

const phoneInput = document.getElementById("phone");

if (phoneInput) {

    phoneInput.addEventListener("input", function () {

        this.value = this.value.replace(/[^0-9]/g, "");

        if (this.value.length > 11) {

            this.value = this.value.slice(0, 11);

        }

    });

}


/* ==========================================
   EMAIL VALIDATION
========================================== */

const emailInput = document.getElementById("email");

if (emailInput) {

    emailInput.addEventListener("blur", function () {

        if (this.value === "") return;

        const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(this.value)) {

            alert("Please enter a valid email address.");

            this.focus();

        }

    });

}


/* ==========================================
   CHARACTER COUNTER
========================================== */

const skills = document.getElementById("skills");

if (skills) {

    const counter = document.createElement("small");

counter.style.display = "block";
    counter.style.marginTop = "5px";
    counter.style.color = "#666";

    skills.parentNode.appendChild(counter);

    skills.addEventListener("input", function () {

        counter.textContent =
            this.value.length + " characters";

    });

}


/* ==========================================
   AUTO SCROLL TO FIRST ERROR
========================================== */

const requiredFields = document.querySelectorAll("[required]");

requiredFields.forEach(field => {

    field.addEventListener("invalid", () => {

        field.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    });

});


/* ==========================================
   SUCCESS MESSAGE
========================================== */

function showSuccess(message) {

    const box = document.createElement("div");

    box.className = "success-message";

    box.innerHTML = message;

    document.body.appendChild(box);

    setTimeout(() => {

        box.classList.add("show");

    }, 100);

    setTimeout(() => {

        box.remove();

    }, 4000);

}


/* ==========================================
   END OF REGISTER.JS
========================================== */
/* ==========================================
   YAKUBU CAMPAIGN WEBSITE
   contact.js
========================================== */


/* ==========================================
   CONTACT FORM
========================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name =
            this.querySelector('input[type="text"]').value.trim();

        const email =
            this.querySelector('input[type="email"]').value.trim();

        const message =
            this.querySelector("textarea").value.trim();

        if (name === "" || email === "" || message === "") {

            alert("Please fill in all required fields.");

            return;

        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;

        }

        showMessage(
            "Your message has been sent successfully!"
        );

        this.reset();

    });

}


/* ==========================================
   CHARACTER COUNTER
========================================== */

const messageBox =
    document.querySelector("textarea");

if (messageBox) {

    const counter = document.createElement("small");

    counter.className = "message-counter";

    counter.textContent = "0 / 1000";

    messageBox.parentNode.appendChild(counter);

    messageBox.addEventListener("input", function () {

        if (this.value.length > 1000) {

            this.value =
                this.value.substring(0, 1000);

        }

        counter.textContent =
            this.value.length + " / 1000";

    });

}


/* ==========================================
   CONTACT CARDS ANIMATION
========================================== */

const contactCards =
    document.querySelectorAll(".info-card");

const contactObserver =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold:0.25

});

contactCards.forEach(card => {

    contactObserver.observe(card);

});


/* ==========================================
   COPY EMAIL
========================================== */

const emailText =
document.querySelector(".info-card:nth-child(3) p");

if (emailText) {

    emailText.style.cursor = "pointer";

    emailText.title = "Click to copy";

    emailText.addEventListener("click", () => {

        navigator.clipboard.writeText(
            emailText.textContent.trim()
        );

        showMessage("Email copied.");

    });

}


/* ==========================================
   COPY PHONE
========================================== */

const phoneText =
document.querySelector(".info-card:nth-child(2) p");

if (phoneText) {

    phoneText.style.cursor = "pointer";

    phoneText.title = "Click to copy";

    phoneText.addEventListener("click", () => {

        navigator.clipboard.writeText(
            phoneText.textContent.trim()
        );

        showMessage("Phone number copied.");

    });

}


/* ==========================================
   SUCCESS MESSAGE
========================================== */

function showMessage(message){

    const alertBox =
    document.createElement("div");

    alertBox.className =
    "success-message";

    alertBox.innerHTML = message;

    document.body.appendChild(alertBox);

    setTimeout(() => {

        alertBox.classList.add("show");

    },100);

    setTimeout(() => {

        alertBox.classList.remove("show");

        setTimeout(()=>{

            alertBox.remove();

        },400);

    },3000);

}
function saveMember() {

    const member = {

        fullName,
        phone,
        email,
        state,
        lga,
        ward,
        memberID,
        photo

    };

    localStorage.setItem(

        "yakubuMember",

        JSON.stringify(member)

    );

    alert("Registration Successful!");

    window.location.href = "id-card.html";

}


/* ==========================================
   END OF CONTACT.JS
========================================== */
