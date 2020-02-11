(function (windowRef) {
    windowRef.BannerAnimation =
    function () {

        console.log ("run animation");
        let tl = window.gsap.timeline();
        tl.to("#adRoot", {duration: .2,opacity: 0.5});
        return tl
    }
}(window));
