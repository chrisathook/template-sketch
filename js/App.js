(function (windowRef,kit, bannerAnimation) {


    let readyHandler = function () {
        if (kit.isLoaded) {
            loadedHandler()
        } else {
            kit.addEventListener('ready', loadedHandler)
        }
    };
    let loadedHandler = function () {
        bannerAnimation()
    };
    if (kit.isReady) {
        readyHandler()
    } else {
        kit.addEventListener('ready', readyHandler)
    }
}(window,window.AdKit, window.BannerAnimation));
