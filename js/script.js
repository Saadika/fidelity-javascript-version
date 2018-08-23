document.getElementById("open").click();

function tabs(evt, tabName) {
    var i, tabContent, buttonTabs;
    
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    buttonTabs = document.getElementsByClassName("buttonTabs");
    for (i = 0; i < buttonTabs.length; i++) {
        buttonTabs[i].className = buttonTabs[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
