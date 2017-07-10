"use strict";   // 严格模式
//  菜单
$.ajax({
    url:"http://182.254.146.100:3000/api/getindexmenu",  //  添加数据接口
    type:"get", 
    dataType:"json",
    success:function(data){
          console.log(data)   //  查看获取的数据
          var html=template("row-list",data);   //  将获取到的数据添加到模板引擎里面
          $(".row").html(html)    //  将渲染好的模板引擎添加到页面中
    }
})

//  商品列表
$.ajax({
    url:"http://182.254.146.100:3000/api/getmoneyctrl", //  获取数据接口地址
    type:"get",   
    dataType:"json",
    success:function(data){
    console.log(data)   //  查看后台返回的数据
    var html=template("main-list",data);  // 将数据添加到模板引擎中
    $(".last-content").html(html);     // 渲染好的模板引擎添加到页面结构中
    }
})


// //   菜单
// $.ajax({
//     url:"http://182.254.146.100:3000/api/getindexmenu",
//     type:"get",
//     dataType:"json",
//     success:function(data){
//         console.log(data);
//       var html =template("nav",data);
//       $(".row").html(html);
//       $(".nav .row>div:nth-last-Child(-n+4)").hide();
//       $(".nav .row>div:nth-last-Child(5)").click(function(){
//           //console.log(111);
//           $(".nav .row>div:nth-last-Child(-n+4)").toggle(100);
//       })
//     },
//     error:function(data){
//     }
// })

// //   商品列表
// $.ajax({
//     url:"http://182.254.146.100:3000/api/getmoneyctrl",
//     type:"get",
//     dataType:"json",
//     success:function(data){
//        console.log(data)
//        var html=template("last-content",data);
//        $(".last-content").html(html)
//     },
//     error:function(){

//     }
// })