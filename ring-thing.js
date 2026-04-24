// replace with the FULL URL of members' sites here
const members = [
    "http://127.0.0.1:5500/sites/bob.html",
    "http://127.0.0.1:5500/sites/nancy.html",
    "http://127.0.0.1:5500/sites/sally.html"
];

// replace with the url of your webring's icon - wherever its hosted
const iconURL = "https://github.com/brody-tm/ring-thing/blob/main/img.png?raw=true";

// you don't really have to mess with anything from this point on

const url = window.location.href;

function getNeighboringMembers(url) {
    if (!members.includes(url)) return;

    const firstInList = members[0] == url;
    const lastInList = members[members.length - 1] == url;

    var previousMember, nextMember;

    if (firstInList) {
        previousMember = members[members.length - 1];
        nextMember = members[members.indexOf(url) + 1];
    }
    else if (lastInList) {
        previousMember = members[members.indexOf(url) - 1];
        nextMember = members[0];
    }
    else {
        previousMember = members[members.indexOf(url) - 1];
        nextMember = members[members.indexOf(url) + 1];
    }

    return [previousMember, nextMember];
}

function createWidget(neighboringMembers) {
    var previousMember = neighboringMembers[0];
    var nextMember = neighboringMembers[1];

    const previousLink = document.createElement("a");
    
    previousLink.setAttribute("href", previousMember);
    previousLink.innerHTML = "prev";

    const nextLink = document.createElement("a");

    nextLink.setAttribute("href", nextMember);
    nextLink.innerHTML = "next";

    const webringIcon = document.createElement("img");

    webringIcon.setAttribute("src", iconURL);
    webringIcon.style.padding = "0px 10px";
    webringIcon.style.height = "100px";

    const ringWidget = document.getElementById("ring_widget");

    ringWidget.appendChild(previousLink);
    ringWidget.appendChild(webringIcon);
    ringWidget.appendChild(nextLink);
}

createWidget(getNeighboringMembers(url));