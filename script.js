function validateInput() {
    const inputText = document.getElementById("inputText").value;
    const emailInput = document.getElementById("emailInput").value;
    

    const reglink = /^(https?:\/\/).+$/;
    const linnk = reglink.test(inputText);

    const emailreg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emaill = emailreg.test(emailInput);

    if (linnk) {
        document.getElementById("inputText").classList.remove("invalid");
        document.getElementById("inputText").classList.add("valid");
    } else {
        document.getElementById("inputText").classList.remove("valid");
        document.getElementById("inputText").classList.add("invalid");
    }

    if (emaill) {
        document.getElementById("emailInput").classList.remove("invalid");
        document.getElementById("emailInput").classList.add("valid");
    } else {
        document.getElementById("emailInput").classList.remove("valid");
        document.getElementById("emailInput").classList.add("invalid");
    }
}

document.getElementById("inputText").addEventListener("input", validateInput);
document.getElementById("emailInput").addEventListener("input", validateInput);
