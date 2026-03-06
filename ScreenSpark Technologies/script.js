console.log("Javascript ligado com sucesso");

const textarea = document.querySelector("#message");

textarea.addEventListener("input", () => {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

const elements = document.querySelectorAll(".reveal");
elements.forEach(el => observer.observe(el));
