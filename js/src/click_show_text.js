/* 鼠标点击文字特效 */
    var f_idx = 0;
    var c_idx = 0;
    jQuery(document).ready(function($) {
        $("body").click(function(e) {
            var font = new Array("阳光", "从容", "低调", "帅气", "睿智", "机智", "乐观", "谦逊", "潇洒", "善良", "温柔", "暖心", "文明", "正直", "自由", "敬业", "诚信", "友善");
            var color = new Array('#ff0000','#eb4310','#f6941d','#fbb417','#ffff00','#cdd541','#99cc33','#3f9337','#219167','#239676','#24998d','#1f9baa','#0080ff','#3366cc','#333399','#003366','#800080','#a1488e','#c71585','#bd2158');
            var $i = $("<span />").text(font[f_idx]);
            f_idx = (f_idx + 1) % font.length;
            c_idx = (c_idx + 1) % color.length;
            var x = e.pageX,
                y = e.pageY;
            $i.css({
                "z-index": 99999999999999999999999999999999999999999999999999999999999999999999999999 ,
                "top": y - 20,
                "left": x,
                "position": "absolute",
                "font-weight": "bold",
                "color": color[c_idx]
            });
            $("body").append($i);
            $i.animate({
                    "top": y - 180,
                    "opacity": 0
                },
                3000,
                function() {
                    $i.remove();
                });
        });
    });