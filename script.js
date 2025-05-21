document.addEventListener("DOMContentLoaded", function() {
    var contentHeight = document.getElementById("internship-content").offsetHeight;
    var image = document.getElementById("internship-image").querySelector("img");
    image.style.height = contentHeight + "px";
});



var acc = document.getElementsByClassName("accordion");
var i;
var panels = document.getElementsByClassName("panel");
panels[0].style.display = "block"; 
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var panels = document.getElementsByClassName("panel");
        var panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            for (var j = 0; j < panels.length; j++) {
                panels[j].style.display = "none";
            }
            panel.style.display = "block";
        }
    });
}

// function checkPassword() {
//     const correctPassword = 'frankbutt';
    
//     const enteredPassword = document.getElementById('passwordInput').value;
    
//     const errorMessage = document.getElementById('errorMessage');
//     const transcriptSection = document.getElementById('transcriptSection');
    
//     if (enteredPassword === correctPassword) {
//         errorMessage.style.display = 'none';
        
//         transcriptSection.style.display = 'block';
//     } else {
//         errorMessage.style.display = 'block';
//         transcriptSection.style.display = 'none';
//     }
// }
