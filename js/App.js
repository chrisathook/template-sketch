(function (windowRef,kit, bannerAnimation) {
    /**
     * add kit reports it is ready
     */
    let readyHandler = function () {
        if (kit.isLoaded) {
            loadedHandler()
        } else {
            kit.addEventListener('ready', loadedHandler)
        }
    };
    /**
     * at this point all preloading from AdKit should be done
     */
    let loadedHandler = function () {
        bannerAnimation()
    };
    if (kit.isReady) {
        readyHandler()
    } else {
        kit.addEventListener('ready', readyHandler)
    }
}(window,window.AdKit, window.BannerAnimation));
