<template> 

    <div class="card">
       <!--  <section class="header">
                <h1 class="title">{{obj.title}}</h1>
                <div class="user-title">
                    <span class="info" v-if="obj.author">
                      {{obj.author.name}}
                      <span class="timestamp">{{obj.publish_time}}</span>
                    </span>
                </div>
        </section>
        <section class="note-content paper">
            <div class="note-body xh" id="note-body">        
                <div class="rich-note truncated">
                    <div id="content">
                       <div v-for="c in obs" >
                            <p>
                                {{c.text}}
                            </p>
                            <div v-if="c.data">
                                <a v-if="c.data.type=='LINK'" :href="c.data.url" ></a> 
                                <div class="image-container image-float-center image-badge-gif" v-if="c.data.type=='IMAGE'">
                                    <div class="image-wrapper">
                                        <img  :src="c.data.src" alt="" />   
                                    </div>
                                </div>
                            </div>
                             
                      </div>
                    </div>
                    <div class="copyright-notice" v-if="obj.author">
                      ©本文版权归 <span class="st">{{obj.author.name}}</span>所有, 任何形式转载请联系作者。
                    </div>
                  
                </div>
            </div>
            <div class="btn" >
                <a href="javascript:;" class="btn-more show-rich-content" @click="showAll" style="">加载全部</a>
            </div>   
        <! </section> --> 
        <section class="header">
                <h1 class="title">{{obj.title}}</h1>
                <div class="user-title">
                    <span class="info" v-if="obj.author">
                      {{obj.author.name}}
                      <span class="timestamp">{{obj.create_time}}</span>
                    </span>
                </div>
        </section>
        <section class="note-content paper">
            <div class="note-body xh" id="note-body">        
                <div class="rich-note truncated">
                    <div id="content">
                    </div>
                    <div class="copyright-notice" v-if="obj.author">
                     ©本文版权归 <span class="st">{{obj.author.name}}</span>所有, 任何形式转载请联系作者。
                    </div>
                </div>
            </div>
            <div class="btn" >
                <a href="javascript:;" class="btn-more show-rich-content" @click="showAll" style="">加载全部</a>
            </div>   
        </section>
        <section class="note-comments">
              <h2>全部回应 {{data.total}} 条</h2>
            <div id="comment-list">
                <div data-reactroot="">
                    <ul class="comment-list">
                        <li v-for=" d in filteredMsg">
                            <div class="desc">
                                <a :href="'https://m.douban.com/people/'+d.id">
                                    <img :src="d.author.avatar">
                                </a>
                                <div class="user-info">
                                    <strong>{{d.author.name}}</strong>
                                    <div class="timestamp">{{d.create_time}}</div>
                                </div>
                            </div>
                            <div class="content">{{d.text}}</div>
                        </li>
                    </ul>
                </div>
            </div>
            <a v-if="data.total>=5" id="allC" href="javascript:void(0)" class="list-link" rel="nofollow" @click="getAllComments">查看更多回应（{{data.total}}）</a>
            <a class="list-link add-comment" rel="nofollow">添加回应</a>  
        </section>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        data(){
            return{
                id: location.hash.split('/')[3],
                obj:{},
                data:{},
                i:0,
                k:5
            }
        },
        methods:{
            // getCard(){
            //     var self = this;
            //     $.ajax({
            //         url: 'https://api.douban.com/v2/note/'+self.id,
            //         type: 'GET',
            //         dataType:'jsonp',
            //         success: function(res){
            //             //检查id是否传入
            //            console.log(self.id)
            //            console.log(res)
            //            self.obj =res;
            //            var obb ={};
            //            obb = JSON.parse(res.content);
            //            console.log(obb)
            //            // console.log(obb.blocks);//shuzu 
            //            // console.log(obb.entityMap);//duixiang
            //            var ob =[];
            //            obb.blocks.filter(function(item){
            //                 if(item.text.length>1){
            //                     ob.push(item)
            //                 } 
            //                  // console.log(item)
            //            })
            //            //筛选以后的数据
            //             // console.log(ob)
            //             var obs=[];
            //             ob.forEach(function(ite,idx){
            //                 for(var i in obb.entityMap){
            //                       if(idx==i){
            //                          ite.data= obb.entityMap[i].data;
            //                          ite.data.type= obb.entityMap[i].type; 
            //                       }
            //                   }
            //                 return obs.push(ite)  
            //            })    
            //            self.obs=obs;
            //            console.log(obs);
            //         }
            //     })   
            // },
            getCard(){
                var self = this;
                $.ajax({
                    url: 'https://m.douban.com/rexxar/api/v2/note/'+self.id,
                    type: 'GET',
                    dataType:'jsonp',
                    success: function(res){
                        //返回详情页数据
                        console.log(res)
                        self.obj =res;
                        $('#content').html(res.content);
                        for(var i in res.photos ){
                            var tag =res.photos[i].tag_name;
                            var path = res.photos[i].image.large.url;
                            // console.log(tag,path)
                            $('#'+tag).attr('src',path);
                        }
                    }
                      
                })
            },
            showAll(){
                $('.btn').css('display','none');
                $('.note-body').removeClass('xh');
                $('.note-body').css('overflow','auto');
            },
            getComment(){
                var self = this;
                $.ajax({
                    url: 'https://m.douban.com/rexxar/api/v2/note/'+self.id+'/comments',
                    type: 'GET',
                    dataType:'jsonp',
                    success: function(reponse){
                        //返回评论数据
                        console.log(reponse)
                        self.data=reponse;
                        console.log(self.data.comments)
                    }
                      
                })
            },
            getAllComments(){
                var self = this;
                self.k=self.i;
                $('#allC').css('display','none');
            }
        },
        computed: {
          filteredMsg: function () {
            var self = this;
            var arrs=[];
            var i =0;
            for(var j in self.data.comments){
                arrs.push(self.data.comments[j])
                i++;
                self.i =i;
            }
            return arrs.slice(0,self.k);
          }
        },
        mounted(){
          this.getCard();
          this.getComment();
        }
    }
</script>
<style scoped>
    .st{
        color: green;
    }
   .note-content{
        position: relative;
    }
    .note-body{
        font-size: 18px;
        line-height: 30px;
        color: #494949;
        word-wrap: break-word;
        overflow: hidden;
    }
    .xh{
        height: 470px;
    }
    .note-content .image-badge-gif.image-float-center {
        text-align: center;
    }
    .note-content .image-container {
        margin: 30px 0;
        text-align: center;
    }
    .note-content .image-badge-gif .image-wrapper {
        display: inline-block;
        position: relative;
    }
    .note-content .image-badge-gif.image-float-center {
        text-align: center;
    }
    .image-container .image-wrapper img {
        display: block;
        max-width: 100%;
        margin: auto;
    }
    .card{
        margin: 0 18px;
    }
    .header .title {
        overflow: hidden;
    }
    h1 {
        margin: 30px 0 5px;
        font-size: 24px;
        line-height: 32px;
        word-break: break-all;
        font-weight: normal;
    }
    .user-title .info {
        color: #494949;
    }
    .user-title .info {
        color: #494949;
        font-size: 15px;
        line-height: normal;
    }
    .user-title .info .timestamp {
        color: #ccc;
        margin-left: 5px;
    }
    .paper {
        font-size: 18px;
        line-height: 30px;
        color: #494949;
        word-wrap: break-word;
    }
    section {
        margin-bottom: 30px;
    }
    .note-content .btn{
        width: 100%;
        height: 86px;
        background-color: white;
        position: absolute;
        top: 414px;
        opacity: 0.9;
    }
     .note-content .btn .btn-more {
        display: block;
        margin: 20px auto 50px;
        border-radius: 4px;
        box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.6);
        background: #F5F5F5;
        width: 230px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-size: 15px;
        color: #494949;
    }
    #content p{
        text-indent: 2em;
    }
    /*评论*/
    h2 {
        color: #aaa;
        margin: 0 0 15px;
        font-size: 15px;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .comment-list li {
        margin-bottom: 30px;
        padding-left: 46px;
    }
    .comment-list li .desc {
        display: -webkit-box;
        display: -moz-box;
        display: box;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flexbox;
        display: flex;
        font-size: 0;
        line-height: normal;
        margin: 0 0 11px;
        color: #494949;
        position: relative;
        align-items: center;
        margin-left: -46px;
    }
    .comment-list li .content {
        padding-left: 0;
        margin-top: 10px;
        line-height: 22px;
        color: #494949;
        font-size: 15px;
    }
    .comment-list li .desc img, .comment-list li .desc .avatar {
        border-radius: 50%;
        vertical-align: text-top;
        margin-right: 10px;
        width: 36px;
        height: 36px;
    }
    a {
        color: #42bd56;
        text-decoration: none;
    }
    .comment-list li .desc .user-info {
        margin: 0;
    }
    .comment-list li .desc .user-info strong {
        font-size: 15px;
        display: inline-block;
        vertical-align: text-top;
        margin-right: 6px;
    }
    .comment-list li .desc .user-info .timestamp {
        margin-top: 6px;
        font-size: 12px;
        color: #aaa;
    }
    .list-link {
        display: block;
        padding: 15px 0;
        font-size: 16px;
        line-height: 18px;
        text-align: center;
        cursor: pointer;
    }
    .comment-list a {
        color: #42bd56;
        text-decoration: none;
    }
</style>