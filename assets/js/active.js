window.onload = function () {
    wow = new WOW({
        animateClass: 'animate__animated',
        offset: 100,

    });
    wow.init();
}        


        //互動穿衣試鏡特效
        let growth_box = document.querySelectorAll(".js_growBox");
        let js_growth_img = document.querySelector(".js_growth_img");


        $(".js_growBox .growth__box .content").hover(function() {

            let zaaImg = $(this).attr('data-grow'); //指定data-*要變更圖片
            growth_box.forEach(item => {
                $(item).children().removeClass("active"); //有active的class先移除
                return
            });
            $(this).parents('.growth__box').addClass("active"); //尋找上層growth__box加入active

            if (zaaImg === "img01") { //當滑過是"img01"就變更圖片
                js_growth_img.setAttribute("src", "assets/images/productimg.png");

            } else if (zaaImg === "img02") {
                js_growth_img.setAttribute("src", "assets/images/productimg02.png");
            } else if (zaaImg === "img03") {
                js_growth_img.setAttribute("src", "assets/images/productimg03.png");
            } else if (zaaImg === "img04") {
                js_growth_img.setAttribute("src", "assets/images/productimg04.png");
            }


        });
        $("#btn_privacyModal").on("click", function() {

            $("body").css({
                "overflow": "hidden",
                "height": "100vh"
            });
        });
        $(".btn_privacy, #btn_close, #privacyModal").on("click", function() {

            $("body").removeAttr("style");

        });

        //影片套件
        function youVideo() {

            let videoName = $(".youtube-video iframe");
            let src = $(videoName).attr("src");
            console.log(src);
            let srcAuto = src + "?autoplay=1&rel=0";
            $(".btn_videoClose").on("click", function() {

                videoName.attr("src", ""); //點叉叉離開時,影片停止
            });
            $(".btn_video").on("click", function(e) {
                videoName.attr("src", srcAuto); //影片自動播放
                console.log(54545645);
            });
        }
        youVideo();