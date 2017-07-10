$.ajax({
    url: "http://182.254.146.100:3000/api/getinlanddiscount",
    data: "get",
    dataType: "json",
    success: function (data) {
        console.log(data)

        //  渲染前6张
        var Data = data.result; size = 6; list = []; i = 0
        for (; i < size; i++) {
            list.push(Data[i]);
        }
        var html = template("main-list", { result: list });
        $(".main-list").html(html)

        //  获取最大距离
        var maxHeight=$(".li .main-list").height()-$(window).height();
        console.log(maxHeight)
        $(window).scroll(function () {
            //  卷曲高度
            var heightTop = $(window).scrollTop();
            //  console.log(heightTop)
            
            if (heightTop >= maxHeight) {
                for (var j = i; j < i + size; j++) {
                    if( list.length != Data.length){
                    list.push(Data[j]);
                    }
                }
                i=j;
                var html = template("main-list", { result: list });
                $(".main-list").html(html)
            }
            
        })

    }
})