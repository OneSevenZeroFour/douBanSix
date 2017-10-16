<template>
    <div>
    <!-- v-scroll="loadMore" -->
    <div v-for="n in mes">
        <h2 class="title" v-if="n.date">{{n.date}}</h2>
        <a class="feed-item" :href="'#home/'+n.type+'/'+n.target.id">
            <div class="feed-content">
                 <div v-show="n.target.desc!=''" v-if="n.target.cover_url" class="cover" :style="'position: relative; background: url('+n.target.cover_url+') center center / cover no-repeat rgb(250, 250, 250);'">
                     <div style="padding-top: 100%;">                       
                     </div>
                 </div>
                    <h3>{{n.title}}</h3>
                    <p>{{n.target.desc}}</p>
                    <img class="pic" v-if="n.target.desc==''" :src="n.target.cover_url" alt="" />
            </div>
            <div class="author"><!-- react-text: 11by&nbsp;<!-- /react-text --><span class="name">by{{n.target.author.name}}</span></div>
            <span class="feed-label">{{n.source_cn}}</span>
        </a>
    </div>
        <h3 @click="mesDay" class="more">加载更多</h3>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
  data () {
    return {
      mes:[],
      str:'',
      date:'',
      i:0
    }
  },
  methods: {
    loadMore() {
        var self = this;
          $.ajax({
              url: 'https://m.douban.com/rexxar/api/v2/recommend_feed?alt=json&next_date='+self.str+'&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1',
              type: 'GET',
              dataType:'jsonp',
              success: function(res){
                  self.date= res.date;
                  var type='';
                  res.recommend_feeds.forEach(function(item){
                    type= item.target.kind;
                    console.log(type)
                    if(type==1015){
                      item.type = 'note';
                    }
                  })
                  
                  if( self.i>0){
                    res.recommend_feeds[0].date = res.date;
                  }
                  self.mes = self.mes.concat(res.recommend_feeds);
                  console.log( self.mes)
              }
          })
    },
    mesDay(){
        var now = new Date();
        this.i++;
        this.str = now.getFullYear() + '-' + (now.getMonth()+1) +'-' + (now.getDate()+1-this.i);
        this.loadMore()
    }
  },
  mounted(){
    //第一次触发请求
    this.loadMore();
    var now = new Date();
    var str =  now.getFullYear() + '-' + (now.getMonth()+1) +'-' + (now.getDate()+1);
    this.str = str;
  }
/*  ,
  directives:{
       scroll:{
          bind: function(el, binding) {
            el.addEventListener("scroll", function(e) {
                console.log(e.target.offsetHeight);
                console.log(e.target.scrollTop);
                console.log(e.target.scrollHeight)
                if(e.target.offsetHeight + e.target.scrollTop >= e.target.scrollHeight) {
                    binding.value()
                }
            })
          }  
       }
  }*/
}
</script> 
<style scoped>
    .title, .more{
        padding: 15px 18px 15px 0;
        text-align: center;
        position: relative;
        font-weight: normal;
    }
    .feed-item {
            display: block;
            padding: 25px 18px 25px 0;
            margin-left: 18px;
            position: relative;
            color: #494949;
        }
    .feed-content {
            overflow: hidden;
            margin-bottom: 10px;
        }
    .feed-content .cover{
            width: 25.6%;
            margin-left: 25px;
            float: right;
        }
    .feed-content h3{
            text-align: justify;
            font-size: 17px;
            font-weight: 500;
            line-height: 1.41;
            color: #494949;
            margin-bottom: 6px;
        }
    .feed-content .pic{
        width: 100%;
        height: 150px;
    }
    .feed-content p{
        text-align: justify;
        color: #aaa;
        font-size: 12px;
        line-height: 1.5;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        }
    .feed-item .autor{
            font-size: 12px;
            color: #ccc;
        }
    .feed-item .feed-label {
        position: absolute;
        bottom: 25px;
        right: 18px;
        font-size: 12px;
        color: #ccc;
    }
</style>