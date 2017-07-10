// var id = F();
// var pageid = parseInt(id.pageid) || 1;
// $.ajax({
//   url: "http://182.254.146.100:3000/api/getcategorybyid?categoryid=" + id.categoryid,
//   type: "get",
//   dataType: "json",
//   success: function (data) {
//     console.log(data)
//     console.log(data.result[0].category)
//     $(".nav .nav-lis .mod").html(data.result[0].category)
//   }
// });
// function xuanran() {
//   console.log(pageid)
//   $.ajax({
//     url: 'http://182.254.146.100:3000/api/getproductlist?categoryid=' + id.categoryid + '&pageid=' + pageid,
//     type: "get",
//     dataType: "json",
//     success: function (data) {
//       console.log(data)
//       var pages = Math.ceil(data.totalCount / data.pagesize);
//       var prev_href = 'categorylist.html?categoryid=' + id.categoryid + '&pageid=' + (pageid - 1 > 1 ? pageid - 1 : 1);
//       var next_href = 'categorylist.html?categoryid=' + id.categoryid + '&pageid=' + (pageid + 1 < pages ? (pageid + 1) : pages);
//       console.log(pageid);
//       $('.btn-left').attr('href', prev_href);
//       $('.btn-right').attr('href', next_href);
//       var html = template("liebiao", data);
//       $("#main-liebiao").html(html)
//       if (pageid == 3) {
//         $('.btn-right').hide();
//       } else if (pageid == 1) {
//         $('.btn-left').hide();
//       }
//       var ye = Math.ceil(data.totalCount / data.pagesize);
//       var $sel = $("#select-option");
//       if (!$sel.children().length) {
//         for (var i = 0; i < ye; i++) {
//           var j = i + 1;
//           var option = '<option value=' + j + '> 第' + j + '页  </option>';
//           //console.log(option)
//           $sel.append(option)
//         }
//       }
//     }
//   })
// }


// xuanran();
// $("#select-option").on("change", function () {
//   var value = $("#select-option option:selected").val();
//   pageid = value;
//   xuanran()
//   console.log(value)
// })
// function F() {
//   //categoryid=112&pageid=1
//   var qs = location.search.length > 1 ? location.search.substr(1) : "";
//   //[categoryid=112,pageid=1]
//   var items = qs.length > 1 ? qs.split("&") : [];
//   var obj = {}, key, value, item;
//   for (var i = 0; i < items.length; i++) {
//     item = items[i].split("=");//[categoryid,112]
//     key = item[0];
//     value = item[1];
//     obj[key] = value;
//   }
//   return obj;
// }


//  想获取那个方法直接 对象. 就可以
var id = jiekou();
// 页数
var pageid = parseInt(id.pageid) || 1;
//  获取标题数据
$.ajax({
  url: "http://182.254.146.100:3000/api/getcategorybyid?categoryid=" + id.categoryid,
  type: "get",
  dataType: "json",
  success: function (data) {
    console.log(data)
    console.log([])
    console.log($())
    $(".nav-lis .mod").html(data.result[0].category)  //  获取文本设置在页面中
  }
})

//   获取数据
function rander(){
  $.ajax({
  url: "http://182.254.146.100:3000/api/getproductlist?categoryid=" + id.categoryid + "&pageid=" + pageid,
  type: "get",
  dataType: "json",
  success: function (data) {
    console.log(data)
    var html = template("main-list", data);
    $("#main-liebiao").html(html);
    var pages = Math.ceil(data.totalCount / data.pagesize);
    //console.log(ye)
    //  点击到最后或者最前是，不在点击，然后隐藏
   if(pageid==1){
     $(".btn-left").hide()
   }else{
     $(".btn-left").show()
   }
    if(pageid==3){
     $(".btn-right").hide()
   }else{
     $(".btn-right").show()
   }
    //  点击上页 下页 进行加载
    var prev_href = 'categorylist.html?categoryid=' + id.categoryid + '&pageid=' + (pageid - 1 > 1 ? pageid - 1 : 1);
      var next_href = 'categorylist.html?categoryid=' + id.categoryid + '&pageid=' + (pageid + 1 < pages ? (pageid + 1) : pages);
      console.log(pageid);
      $('.btn-left').attr('href', prev_href);
      $('.btn-right').attr('href', next_href);
   
   //  根据页数添加option标签
    //  还要判断里面有没有东西。有不加载
    if(!$("#select-option").children().length){
      for (var i = 0; i < pages; i++) {
      var j = i + 1;
      var option = '<option value=' + j + '> 第' + j + '页  </option>';
      $("#select-option").append(option)
    }
    }
  }
})
}

//  先渲染一次
  rander()
//  点击渲染
$("#select-option").on("change",function(){
  var selected=$("#select-option option:selected").val();
  console.log(selected)
  pageid=selected;
 
  rander()
})

//  封装接口插件
function jiekou() {
  //  ?categoryid=0&pageid=1  把问好去掉
  var qs = location.search.length > 1 ? location.search.substr(1) : "";
  //  然后用&分割成数组  categoryid=0&pageid=1
  var items = qs.length > 1 ? qs.split("&") : [];
  var obj = {}, key, value, item
  //  遍历数组  [categoryid=0，pageid=1]
  for (var i = 0; i < items.length; i++) {
    //  数组中的每个元素用=分割 [categoryid=0，pageid=1]
    item = items[i].split("=");
    //  以简直对的形式添加到对象中
    key = item[0];
    value = item[1];
    obj[key] = value;
  }
  return obj
}

