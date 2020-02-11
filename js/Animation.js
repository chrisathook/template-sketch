(function (windowRef) {
    windowRef.BannerAnimation =
    function () {


        document.querySelectorAll('.catch-all').forEach(function (elem){

            elem.addEventListener('mouseover',function (e){
                console.log ('Over Handler')
            });
            elem.addEventListener('mouseout',function (e){
                console.log ('out Handler')
            });
        });


        console.log ("run animation");
        let tl = window.gsap.timeline();
        tl.to("#adRoot", {duration: .2,opacity: 0.5});
        return tl
    }
}(window));
