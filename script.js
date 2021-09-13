function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function openModal(modal) {
    if (modal == "dice") {
        document.getElementById("dice-modal").style.display = "block";
        document.getElementById("test-name").innerHTML = "Rolagem de dado D20";
        document.getElementById("result-dice").innerHTML = random (1, 20);
        document.getElementById("result-text").innerHTML = "";
    }
    else if (modal == "value") {
        document.getElementById("value-modal").style.display = "block";
    }
}

function closeModal(modal) {
    if (modal == "dice") {
        document.getElementById("dice-modal").style.display = "none";
    }
    else if (modal == "value") {
        document.getElementById("value-modal").style.display = "none";
    }
}

window.onclick = function(event) {
    var modal = document.getElementById("dice-modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
    modal = document.getElementById("value-modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function exposureTest() {
    openModal("dice");
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
    openModal("dice");
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
    openModal("dice");
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

function changeModalValue(value) {
    openModal("value")
    if (value.id == "life-value") {
        document.getElementById("value-title").innerHTML = "Pontos de Vida";
    }
    else if (value.id == "sanity-value") {
        document.getElementById("value-title").innerHTML = "Pontos de Sanidade";
    }
    else if (value.id == "occultism-value") {
        document.getElementById("value-title").innerHTML = "Pontos de Ocultismo";
    }
    var values = value.innerHTML;
    var actualValue = "";
    var maxValue = "";
    var change = false;
    for (let x of values) {
        if (x != "/" && !change) {
            actualValue += x;
        }
        else if (x == "/") {
            change = true;
        }
        else if (change) {
            maxValue += x;
        }
    }
    document.getElementById("actual-value").value = actualValue;
    document.getElementById("maximum-value").value = maxValue;
}

function changeValue() {
    valueType = document.getElementById("value-title").innerHTML;
    if (valueType == "Pontos de Vida") {
        valueType = "vida";
        oldValues = document.getElementById("life-value").innerHTML;
    }
    else if (valueType == "Pontos de Sanidade") {
        valueType = "sanidade";
        oldValues = document.getElementById("sanity-value").innerHTML;
    }
    else if (valueType == "Pontos de Ocultismo") {
        valueType = "ocultismo";
        oldValues = document.getElementById("occultism-value").innerHTML;
    }
    var oldActualValue = "";
    var oldMaxValue = "";
    var change = false;
    for (let x of oldValues) {
        if (x != "/" && !change) {
            oldActualValue += x;
        }
        else if (x == "/") {
            change = true;
        }
        else if (change) {
            oldMaxValue += x;
        }
    }
    var error = false;
    while (!error) {
        var newActualValue = parseInt(document.getElementById("actual-value").value);
        var newMaxValue = parseInt(document.getElementById("maximum-value").value);
        if (newActualValue > newMaxValue) {
            alert("O valor atual não pode ser maior do que o valor máximo.");
            document.getElementById("actual-value").value = oldActualValue;
        }
        else if (newActualValue < 0) {
            alert("O valor atual não pode ser negativo.");
            document.getElementById("actual-value").value = oldActualValue;
        }
        else if (newMaxValue < 0) {
            alert("O valor máximo não pode ser negativo.");
            document.getElementById("actual-value").value = oldMaxValue;
        }
        else {
            error = true;
        }
    }
    if (valueType == "vida") {
        document.getElementById("life-value").innerHTML = newActualValue+"/"+newMaxValue;
        document.getElementById("actual-life-bar").style.width = ((parseInt(newActualValue)/parseInt(newMaxValue))*100)+"%";
    }
    else if (valueType == "sanidade") {
        document.getElementById("sanity-value").innerHTML = newActualValue+"/"+newMaxValue;
        document.getElementById("actual-sanity-bar").style.width = ((parseInt(newActualValue)/parseInt(newMaxValue))*100)+"%";
    }
    else if (valueType == "ocultismo") {
        document.getElementById("occultism-value").innerHTML = newActualValue+"/"+newMaxValue;
        document.getElementById("actual-occultism-bar").style.width = (parseInt(newActualValue)/parseInt(newMaxValue))+"%";
    }
    closeModal("value");
}