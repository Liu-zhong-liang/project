 
 var id = window.location.search;
$.ajax({
    url:"http://182.254.146.100:3000/api/getproduct"+id,
    type:"get",
    dataType:"json",
    success:function(data){
     console.log(data)
     var html=template("tu",data);
      $("#nav").html(html)
      var arr=data.result[0].productName.split(" ");
      //console.log(arr[0]);
      var link="categorylist.html?categoryid="+data.result[0].categoryId;
      $("#tt").attr("href",link);
       $(".mod").text(arr[0])

       var str=data.result[0].productId
       $.ajax({
    url:"http://182.254.146.100:3000/api/getcategorybyid?categoryid="+str,
    type:"get",
    dataType:"json",
    success:function(data){
     console.log(data.result[0].category)
     $("#tt").text(data.result[0].category)
    }
})
    }
})
$.ajax({
    url:"http://182.254.146.100:3000/api/getproduct"+id,
    type:"get",
    dataType:"json",
    success:function(data){
     console.log(data)
     var html=template("tu",data);
      $("#nav").html(html)
    }
})
