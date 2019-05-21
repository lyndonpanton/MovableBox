(function() {
    document.getElementById("copyright-year").textContent = (new Date()).getFullYear();
    
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    context.fillStyle = "blue";
    
    let x = 50;
    let y = 50;
    
    drawSquare();
    
    Array.from(document.getElementsByClassName("key")).forEach(function(key) {
        key.addEventListener("click", function(event) {
            switch(key.id) {
                case "l":
                    handleLeft();
                    break;
                case "u":
                    handleUp();
                    break;
                case "r":
                    handleRight();
                    break;
                case "d":
                    handleDown();
                    break;
            }
        }); 
    });
    
    canvas.addEventListener("keydown", function(event) {
        switch(event.keyCode) {
            case 37:
            case 65:
                handleLeft();
                break;
            case 38:
            case 87:
                handleUp();
                break;
            case 39:
            case 68:
                handleRight();
                break;
            case 40:
            case 83:
                handleDown();
                break;
        }
    });
    
    function drawSquare() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(x, y, 50, 50);
    }
    
    function handleDown() {
        // minus the height of the box
        if (y < canvas.height - 50) {
            y = y + 5;
            drawSquare();
        }
    }
    
    function handleLeft() {
        if (x > 0) {
            x = x - 5;
            drawSquare();
        }
    }
    
    function handleRight() {
        // minus the width of the box
        if (x < canvas.width - 50) {
            x = x + 5;
            drawSquare();
        }
    }
    
    function handleUp() {
        if (y > 0) {
            y = y - 5;
            drawSquare();
        }
    }
}());