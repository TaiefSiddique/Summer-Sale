document.getElementById("copyButton").addEventListener("click", function() {
    var textToCopy = this.textContent;
    var textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    var copyButton = document.getElementById("copyButton");
    copyButton.textContent = "Copied!";
    setTimeout(function() {
        copyButton.textContent = "SELL200";
    }, 2000);
});