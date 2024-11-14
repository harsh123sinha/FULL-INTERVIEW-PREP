document.getElementById("copyButton").addEventListener("click", function() {
    const content = document.querySelector(".copy pre").innerText;
    navigator.clipboard.writeText(content).then(() => {
        alert("Content copied to clipboard!");
    }).catch(err => {
        console.error("Could not copy text: ", err);
    });
});
