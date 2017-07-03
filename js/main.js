$(document).ready(function(){
			
//六个格子
			$(".min:eq(0)").mouseover(function(){
				$(this).css("background-image","url(imgs/hot.jpg)");
				$(this).html("");
			}).mouseout(function(){
				$(this).css("background-image","none");
				$(this).css("color","black");
				$(this).html("<br/><br/>热点");
			});

			$(".min:eq(1)").mouseover(function(){
				$(this).css("background-image","url(imgs/food.jpg)");
				$(this).html("");
			}).mouseout(function(){
				$(this).css("background-image","none");
				$(this).css("color","black");
				$(this).html("<br/><br/>美食");
			});

			$(".min:eq(2)").mouseover(function(){
				$(this).css("background-image","url(imgs/cloth.jpg)");
				$(this).html("");
			}).mouseout(function(){
				$(this).css("background-image","none");
				$(this).css("color","black");
				$(this).html("<br/><br/>时尚");
			});

			$(".min:eq(3)").mouseover(function(){
				$(this).css("background-image","url(imgs/sport.jpg)");
				$(this).html("");
			}).mouseout(function(){
				$(this).css("background-image","none");
				$(this).css("color","black");
				$(this).html("<br/><br/>体坛");
			});

			$(".min:eq(4)").mouseover(function(){
				$(this).css("background-image","url(imgs/book.jpg)");
				$(this).html("");
			}).mouseout(function(){
				$(this).css("background-image","none");
				$(this).css("color","black");
				$(this).html("<br/><br/>书籍");
			});

			$(".min:eq(5)").mouseover(function(){
				$(this).css("background-image","url(imgs/other.jpg)");
				$(this).html("");
			}).mouseout(function(){
				$(this).css("background-image","none");
				$(this).css("color","black");
				$(this).html("<br/><br/>其他");
			});

			// var a[0]="url(imgs/hot.jpg)";
			// var a[1]="../imgs/food.jpg";
			// var a[2]="../imgs/cloth.jpg";
			// var a[3]="../imgs/sport.jpg";
			// var a[4]="../imgs/book.jpg";
			// var a[5]="../imgs/other.jpg";
			// for(var i=0;i<=6;i++){
			// 	$(".min:eq(i)").mouseover(function(){
			// 		$(this).css("background-image",a[i]);
			// 		$(this).html("");
			// 	}).mouseout(function(){
			// 		$(this).css("background-image","none");
			//  		$(this).css("color","black");
			// 	 	$(this).html("<br/><br/>其他");
			// 	})
			// }



//跳转到Min页面	
		
			$(".min").click(function(){
				window.open("min.html");
			});

			
//登陆和注册
			$(".btn1").click(function(){
				window.open("login.html");
			});
			$(".btn2").click(function(){
				window.open("login.html");
			});


//展出隐藏效果

			$(".parent").toggle(function(){
				$(".register").slideDown("normal");
			},function(){
				$(".register").slideUp("normal");
			});

//添加必填标志
			$(".need").each(function(){
				var $add=$("<strong class='high'> *</strong>");   //创建元素
				$(this).after($add);
			});


//min页面----文章单击事件
			$(".tle li").click(function(){
				window.open("artical.html");
			});
			$(".found span").click(function(){	
				$(".found input").keyup(function(){
					$(".tle li").hide()
					.filter(":contains('"+($(this).val())+"')").show();
					
				}).keyup();

			// if ($(".tle li").length == 0) {
			// 		alert("没有搜索到符合条件的帖子，请重新输入！")
			// 	};
           }).click();
			
			$(".tle li").mouseover(function(){
				$(this).addClass("focus");
			}).mouseout(function(){
				$(this).removeClass("focus");
			})
          $(".found input").focus(function(){
        	  $(this).css("border","2px solid #FF2B2B");
          }).blur(function(){
        	  $(this).css("border","none");
          })
           




//发帖-----单击事件
			$(".write").click(function(){

				window.open("write.html");
			});


//留言框的焦点事件
		$("#a_msg").blur(function(){
			$(this).text("说点什么吧！");
		}).focus(function(){
			$(this).text("");
		});


		
		


//表单的客户端验证
	$(".need").blur(function(){
		

		

	});

  




























			

		});
