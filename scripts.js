setInterval(() => {
    let skipButtion = document.getElementsByClassName("ytp-ad-skip-button");
    if (skipButtion != undefined && skipButtion.length > 0) {
        console.log("skipped ad");
        skipButtion[0].click();
    }
}, 3000);