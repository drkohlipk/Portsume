$(document).ready(function() {
    $(window).resize(function() {
        $(".left-topimg > img").each(function() {
            var cHeight = $(this).parent(".left-topimg").height(),
                cWidth = $(this).parent(".left-topimg").width(),
                iHeight = $(this).height(),
                iWidth = $(this).width();

            $(this).css({
                top: 0.5*(cHeight - iHeight),
                left: 0.5*(cWidth - iWidth)
            });
        });
    }).resize();  // Fires resize event when document is first loaded
});