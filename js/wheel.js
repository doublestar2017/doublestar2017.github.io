window.onload=function(){

        var ismoving=false;//使页面滚动时停止监听滚轮事件
        var pageH=document.documentElement.clientHeight;//获得当前窗口高度
        var allheight=document.documentElement.scrollHeight;//获得页面总高度
        // alert(allheight);
        //鼠标滚轮事件
        var scrollFunc=function(e){
            e=e||window.event;
            if(ismoving){//当页面正在滚动时停止监听滚动事件
                return;
            }else{
            //判断浏览器IE，谷歌滑轮事件(wheelDelta) FireFox滚轮事件(detail) 
                if(e.wheelDelta>0||e.detail<0){//当页面向上滚动时
                    // alert("向上滑");
                    var current=window.pageYOffset;//获取当前窗口显示区左上角的Y位置
                    // alert(current);
                    if(current==0){//当前页面为第一页时禁止向上滚动
                        return;
                    }
                    pageScroll(-1,current);//执行滚动页面函数
                }
                if(e.wheelDelta<0||e.detail>0){//当页面向下滚动时
                    // alert("向下滑");
                    var current=window.pageYOffset;
                    if(current==allheight-pageH){//当前页面为最后一页时禁止向下滚动
                        return;
                    }
                    pageScroll(1,current);
                }
            }
        }
        //页面窗口大小改变时重新获取窗口高度
        window.onresize=function(){
            pageH=document.documentElement.clientHeight;
        }
        //绑定火狐浏览器的滚轮事件
        if(document.addEventListener){
            document.addEventListener('DOMMouseScroll',scrollFunc,false);
        }
        if(document.attachEvent){
            document.attachEvent('onmousewheel',scrollFunc);
        }
        //当滚轮发生时执行scrollFunc
        window.onmousewheel=document.onmousewheel=scrollFunc;
        // window.onmousewheel=scrollFunc;

        //滚动页面函数
        var timer=null;
        function pageScroll(speed,current){
            ismoving=true;//表明当前页面正在滚动
            if(speed>0){//如果速度为正表明正在向下滚动
                var allH=current+pageH;//获得目标位置
                //执行滚动的动画效果
                timer=setInterval(function(){
                    var cur=window.pageYOffset;//每次都重新获取当前窗口显示区左上角的Y位置
                    window.scrollTo(0,cur+speed);//让页面滚动到当前窗口Y加上speed的位置处
                    //为了让滚动有ease-in-out的效果，当滚动的距离大于需要滚动的高度的一半时降低速度
                    if(cur > (allH-(pageH/2))){
                        speed=speed-1;
                    }else{
                        speed=speed+1;
                    }
                    //当当前窗口显示区左上角Y位置超过了目标位置时
                    if(cur >= allH){
                        clearInterval(timer);//清除定时器
                        window.scrollTo(0,allH);//复原到目标位置
                        ismoving=false;//使鼠标滚轮可以监听
                    }
                },15)
            }else{
            //速度为负，即向上滚动时，步骤同上
                var allH=current-pageH;
                timer=setInterval(function(){
                    var cur=window.pageYOffset;
                    window.scrollTo(0,cur+speed);
                    if(cur < (allH+(pageH/2))){
                        speed=speed+1;
                    }else{
                        speed=speed-1;
                    }
                    if(cur <= allH){
                        clearInterval(timer);
                        window.scrollTo(0,allH);
                        ismoving=false;
                    }
                },15)
            }
        }



 
}