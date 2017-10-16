Date.prototype.format = function(fmt) { 
     var o = { 
        "M+" : this.getMonth()+1,                 //月份 
        "d+" : this.getDate(),                    //日 
        "h+" : this.getHours(),                   //小时 
        "m+" : this.getMinutes(),                 //分 
        "s+" : this.getSeconds(),                 //秒 
        "q+" : Math.floor((this.getMonth()+3)/3), //季度 
        "S"  : this.getMilliseconds()             //毫秒 
    }; 
    if(/(y+)/.test(fmt)) {
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
    }
     for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
         }
     }
    return fmt; 
}
 // 组件间的通信 传bool值判断是否显示正在加载中
// var store = new Vuex.Store({
//     state:{
//         isload:true,    //页面未加载时的load
//         data:{},        //进入详情页需要传的数据，由于没有数据库
//         isloadMore:false, //滚轮滑到底部的load
//         scrollUp:true     //鼠标滚轮是否向上面滚
//     },
//     mutations:{
//         setIsLoad:function(state,bool){
//             state.isload = bool;
//         },
//         setTitle:function(state,content){
//             state.data = content;
//         }
//     },
//     actions:{
//         set(context,data){
//             context.commit('setIsLoad',data.bool);
//         },
//         setTitles(context,data){
//             context.commit('setTitle',data);
//         }
//     }
// })