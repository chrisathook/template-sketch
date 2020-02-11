(function (windowRef) {
    windowRef.BannerAnimation =
    function () {
        let tl = window.gsap.timeline();
        tl.to(".box", {duration: 2, x: 100, opacity: 0.5});
        return tl
    }
}(window));
