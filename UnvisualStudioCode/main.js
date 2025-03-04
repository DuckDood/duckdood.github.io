var spinAmount = 180;
var whatFont = document.getElementById("whatFont");
var saveButton = document.getElementById("saveButton");
var returnPara = document.createElement("div");
var writtenCode = document.getElementById("writtenCode");
var path = document.getElementById("inputFile");
var realPath = "";
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var preset1 = document.getElementById("preset1");
var preset2 = document.getElementById("preset2");
var preset3 = document.getElementById("preset3");
var pathOrder = [];

document.getElementById("runButton").addEventListener("click", () => {
    window.open(realPath);
});

button1.addEventListener("click", setPreset1);
var reader = new FileReader();
path.addEventListener("change", () => {
    reader.readAsText(path.files[0]);
    reader.onload = function() {
    writtenCode.value = reader.result
        
      };
    
});

var plusButton = document.getElementById("plusButton");
var minusButton = document.getElementById("minusButton");


document.getElementById("path").append(document.createElement("br"));
plusButton.addEventListener("click", addPath);
minusButton.addEventListener("click", minusPath);
path.addEventListener("change", function() {
    realPath = path.value;
});
saveButton.addEventListener("click", saveCode);

function saveCode() {
    writtenCode.select();
    writtenCode.setSelectionRange(0, 99999);
    navigator.clipboard.writeText("cd ..\n" + "cd ..\n" + "cd ..\n" + "cd ..\n" + "cd ..\n" + "echo -n '"  + writtenCode.value + "' > " + realPath);
    document.body.append(returnPara);
}

whatFont.addEventListener("change", getFont);
setInterval(spinThatBackground , 10)

function spinThatBackground() {
    spinAmount--;
    document.body.style.background ="linear-gradient(" + spinAmount + "deg, #34e1ff, #2ff131)"
}

function getFont() {
    document.getElementById("writtenCode").style.fontFamily = whatFont.value;
}

function addPath() {
    var newButton = document.createElement("button");
    newButton.innerHTML = "Use";
    pathOrder.push(newButton);
    newButton.className = "button" + (pathOrder.length + 1);
    console.log(newButton.className);
    var newPath = document.createElement("input");
    newPath.setAttribute("placeholder", "C:\\");
    newPath.className = "switcher";
    newPath.id = "preset" + (pathOrder.length + 1)
    var thePath = document.getElementById("thePath");
    thePath.remove();
    document.getElementById("path").append(newButton);
    document.getElementById("path").append(newPath);
    var newBr = document.createElement("br");
    newBr.id = "br" + (pathOrder.length + 1);
    document.getElementById("path").append(newBr);
    document.getElementById("path").append(thePath);

    newButton.addEventListener("click", function() {
        realPath = newPath.value;
        document.getElementById("thePath").innerHTML = "Current Path: <br>" + realPath;
    });
    }


function minusPath() {
    if(pathOrder.length != 0) {
    document.getElementsByClassName("button" + (pathOrder.length + 1))[0].remove();
    document.getElementById("preset" + (pathOrder.length + 1)).remove();
    var removingBr = document.getElementById("br" + (pathOrder.length + 1));
    removingBr.remove();
    pathOrder.splice(pathOrder.length -1);
    }
}

function setPreset1() {
    realPath = preset1.value;
    document.getElementById("thePath").innerHTML = "Current Path: <br>" + realPath;
}
