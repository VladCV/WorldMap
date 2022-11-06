document.onmousemove = handleMouseMove; 

let first = true;

let mousePos;
let startX = 0,
    startY = 0,
    finishX = 0,
    finishY = 0;
const map = document.getElementById("visibleMap");
const fullMap = document.getElementById("svgMapContainer");
const fullMap2 = document.getElementById("svgMapContainerInTest");

const windowHeight = window.screen.height / 2;
const windowWidth = window.screen.width / 2;

function getBodyScrollTop() {
    return (
        self.pageYOffset ||
        (document.documentElement && document.documentElement.scrollTop) ||
        (document.body && document.body.scrollTop)
    );
}

function handleMouseMove(event) {
    var dot, eventDoc, doc, body, pageX, pageY;

    event = event || window.event;

    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX =
            event.clientX +
            ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
            ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
        event.pageY =
            event.clientY +
            ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
            ((doc && doc.clientTop) || (body && body.clientTop) || 0);
    }

    mousePos = {
        x: event.pageX,
        y: event.pageY,
    };
}

function mapZoom() {
    differenceX = mousePos.x - startX;
    differenceY = mousePos.y - startY;

    if (fullMap) {
        if (
            (fullMap.getBoundingClientRect().left >=
                map.getBoundingClientRect().left &&
                differenceX > 0) ||
            (fullMap.getBoundingClientRect().right <=
                map.getBoundingClientRect().right &&
                differenceX < 0) ||
            (fullMap.getBoundingClientRect().top >=
                map.getBoundingClientRect().top &&
                differenceY > 0) ||
            (fullMap.getBoundingClientRect().bottom <=
                map.getBoundingClientRect().bottom &&
                differenceY < 0)
        ) {
            //
        } else {
            if (first) {
                console.log("wdawada")
                fullMap.style.left = windowWidth - 8 + differenceX + "px";
                fullMap.style.top = windowHeight - 118 + differenceY + "px";
            } else {
                fullMap.style.left = parseInt(finishX) + differenceX + "px";
                fullMap.style.top = parseInt(finishY) + differenceY + "px";
            }
        }
    } else if (fullMap2) {
        if (
            (fullMap2.getBoundingClientRect().left >=
                map.getBoundingClientRect().left &&
                differenceX > 0) ||
            (fullMap2.getBoundingClientRect().right <=
                map.getBoundingClientRect().right &&
                differenceX < 0) ||
            (fullMap2.getBoundingClientRect().top >=
                map.getBoundingClientRect().top &&
                differenceY > 0) ||
            (fullMap2.getBoundingClientRect().bottom <=
                map.getBoundingClientRect().bottom &&
                differenceY < 0)
        ) {
            //
        } else {
            if (first) {
                console.log("wdawada")
                fullMap2.style.left = windowWidth + differenceX + "px";
                fullMap2.style.top = windowHeight + differenceY + "px";
            } else {
                fullMap2.style.left = parseInt(finishX) + differenceX + "px";
                fullMap2.style.top = parseInt(finishY) + differenceY + "px";
            }
        }
    }
}

map.addEventListener("mousedown", function (e) {
    startX = e.x;
    startY = getBodyScrollTop() + e.y;
    //console.log("wdawdw")
    //console.log("startMove = " + startX + ", " + startY);
    map.addEventListener("mousemove", mapZoom);
});

map.addEventListener("mouseup", function () {
    if (fullMap) {
        finishX = fullMap.style.left;
        finishY = fullMap.style.top;
    } else if (fullMap2) {
        finishX = fullMap2.style.left;
        finishY = fullMap2.style.top;
    }
    
    first = false;
    //map.removeAttribute("style")
    map.removeEventListener("mousemove", mapZoom);
});