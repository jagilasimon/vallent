const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttonsBox = document.querySelector(".buttons");
const before = document.getElementById("before");
const after = document.getElementById("after");

// NO button dodge (locked inside button box)
document.addEventListener("mousemove", (e) => {
    const noRect = noBtn.getBoundingClientRect();

    const dx = Math.abs(e.clientX - (noRect.left + noRect.width / 2));
    const dy = Math.abs(e.clientY - (noRect.top + noRect.height / 2));

    if (dx < 70 && dy < 40) {
        const boxRect = buttonsBox.getBoundingClientRect();
        const padding = 10;

        const maxX = boxRect.width - noBtn.offsetWidth - padding;
        const maxY = boxRect.height - noBtn.offsetHeight - padding;

        noBtn.style.left = `${Math.random() * maxX}px`;
        noBtn.style.top = `${Math.random() * maxY}px`;
        noBtn.style.right = "auto";
    }
});

// YES → swap panels INSIDE SAME CARD
yesBtn.addEventListener("click", () => {
    before.classList.add("hide");
    after.classList.add("show");
});
