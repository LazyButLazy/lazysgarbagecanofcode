var presence = new Presence({
    clientId: "631669639411400715",
    mediaKeys: false
});

presence.on("UpdateData", () => {
    let presenceData = {
        largeImageKey: "anonfile"
    };
    
    
if(window.location.href.includes("anonfile.com")) {
    var title =  document.querySelector('h1').textContent;
    presenceData.details = "Downloading " + title;
    presenceData.state = window.location.hostname;
   }
presence.setActivity(presenceData);
});