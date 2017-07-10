
// $.ajax({
//     url: "http://182.254.146.100:3000/api/getcategorytitle",
//     type: "get",
//     dataType: "json",
//     success: function (data) {
//         //console.log(data)
//         var html = template("accordion-list", data);
//         $("#accordion").html(html);
//         $("#accordion .panel-default .panel-title a").click(function () {
//             //console.log(111)
//             var titleid = $(this).data("titleid");
//             //console.log(titleid)
//             var $row = $(this).parent().parent().siblings().find(".panel-body .row");
//             //console.log($row)
//             if ($row.children().length == 0){
                
//                  $.ajax({
//                      url:"http://182.254.146.100:3000/api/getcategory?titleid="+titleid,
//                      type:"get",
//                      dataType:"json",
//                      success:function(data){
//                           console.log(data) 
//                           var html=template("liebiao",data);
//                           $row.html(html)
//                      }
//                  })
//             }
//         })
//     }
// })


// 标题 
$.ajax({
    url:"http://182.254.146.100:3000/api/getcategorytitle",  //  获取数据接口
    type:"get",
    dataType:"json",
    success:function(data){
    console.log(data);   //  查看后台返回数据
    var html=template("main-list",data)  // 数据添加到模板引擎中
     $("#accordion").html(html)    //  模板引擎添加到页面结构中

     //  点击渲染标题列表
     $(" #accordion .panel-default .panel-title a").click(function(){  //  获取点击元素
      //  利用data属性获取点击元素的自定义属性，因为下一页数据需要
      //  传入titleid 这个参数来获取数据
      var titleid = $(this).data("titleid");
       //console.log(titleid)
       var $arr=$(this).parent().parent().siblings().find(".list");
        console.log($)
      
        var id=$(this).data("titleid");
        //console.log(id)
       if($arr.children().length==0){
           $.ajax({
           url:"http://182.254.146.100:3000/api/getcategory?titleid="+id,
           type:"get",
           dataType:"json",
           success:function(data){
               console.log(data)
            var html=template("row-list",data);
            $arr.html(html)   
           }
       })
       }
     })
    }
})


