(function (windowRef) {

    windowRef.AdKit = {
    isReady:true,
    isLoaded:true,
        addEventListener: function (eventName,callback) {
        console.log ("Mock Event Handler",eventName);
        }
    }


}(window));
