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
    document.getElementById("test-name").innerHTML = "Rolagem de dado para Exposição";
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

function attributeTest(attribute) {
    openModal();
    document.getElementById("test-name").innerHTML = "Rolagem de dado para " + attribute.childNodes[3].innerHTML;
    document.getElementById("result-dice").innerHTML = random (1, 20);
    var testResult = parseInt(document.getElementById("result-dice").innerHTML);
    var attributeValue = parseInt(attribute.childNodes[5].innerHTML);
    if (testResult == 20) {
        document.getElementById("result-text").innerHTML = "Crítico";
    }
    else if (testResult == 1) {
        document.getElementById("result-text").innerHTML = "Desastre";
    }
    else if (testResult >= (21-Math.trunc(attributeValue/5))) {
        document.getElementById("result-text").innerHTML = "Sucesso Extremo"; 
    }
    else if (testResult >= (21-Math.trunc(attributeValue/2))) {
        document.getElementById("result-text").innerHTML = "Sucesso Bom";
    }
    else if (testResult >= (21-attributeValue)) {
        document.getElementById("result-text").innerHTML = "Sucesso Normal";
    }
    else {
        document.getElementById("result-text").innerHTML = "Fracasso";
    }
}

function expertiseTest(expertise) {
    openModal();
    document.getElementById("test-name").innerHTML = "Rolagem de dado para " + expertise.childNodes[5].innerHTML;
    document.getElementById("result-dice").innerHTML = random (1, 20);
    var testResult = parseInt(document.getElementById("result-dice").innerHTML);
    var expertiseValue = parseInt(expertise.childNodes[3].innerHTML);
    if (testResult == 20) {
        document.getElementById("result-text").innerHTML = "Crítico";
    }
    else if (testResult == 1) {
        document.getElementById("result-text").innerHTML = "Desastre";
    }
    else if (testResult >= (21-Math.trunc(expertiseValue/5))) {
        document.getElementById("result-text").innerHTML = "Sucesso Extremo"; 
    }
    else if (testResult >= (21-Math.trunc(expertiseValue/2))) {
        document.getElementById("result-text").innerHTML = "Sucesso Bom";
    }
    else if (testResult >= (21-expertiseValue)) {
        document.getElementById("result-text").innerHTML = "Sucesso Normal";
    }
    else {
        document.getElementById("result-text").innerHTML = "Fracasso";
    }
}