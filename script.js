function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function openModal() {
    document.getElementById("dice-modal").style.display = "block";
    document.getElementById("test-name").innerHTML = "Rolagem de dado D20";
    document.getElementById("result-dice").innerHTML = random (1, 20);
    document.getElementById("result-text").innerHTML = "";
}

function closeModal() {
    document.getElementById("dice-modal").style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("dice-modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function exposureTest() {
    openModal();
    document.getElementById("test-name").innerHTML = "Rolagem de Exposição";
    document.getElementById("result-dice").innerHTML = random (1, 100);
    var testResult = parseInt(document.getElementById("result-dice").innerHTML);
    var exposure = parseInt(document.getElementById("exposure").value);

    if (testResult > exposure) {
        document.getElementById("result-text").innerHTML = "Fracasso";
    }
    else {
        document.getElementById("result-text").innerHTML = "Sucesso";
    }
}