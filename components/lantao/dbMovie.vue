<template>
    <div class="dbMovie">
        <div>
            <div class="page">
                <div class="card">
                    <section id="movie_showing">
                        <header>
                            <h2>{{name1}}</h2>
                            <a href="/movie/nowintheater?loc_id=108288">更多</a>
                        </header>
                        <div class="section-content">
                            <ul class="row items">
                                <li class="item item__movie" v-for="i in item1"  >
                                    <a :href="'#home/movieDetail/' + i.id" :title="i.title" v-clickdetail>
                                    <div class="item-poster" :style="'background-image:url(' + i.cover.url + ')'"></div>
                                    <span class="item-title">{{i.title}}</span>
                                        <div class="item-rating">
                                            <div class="rank">
                                            <div v-if="i.rating">
                                                <span class="rate rate1" :style="'background-image:url(./star/ic_rating_s.png)'" v-if="Math.ceil(i.rating.value/2)==4"></span>
                                                <span class="rate rate2" :style="'background-image:url(./star/ic_rating_s.png)'" v-if="Math.ceil(i.rating.value/2)==5"></span>
                                                <span class="rate rate3" :style="'background-image:url(./star/ic_rating_s.png)'" v-if="Math.ceil(i.rating.value/2)==3"></span>
                                                <span class="rate rate4" :style="'background-image:url(./star/ic_rating_s.png)'" v-if="Math.ceil(i.rating.value/2)==2"></span>
                                                <span class="rate rate5" :style="'background-image:url(./star/ic_rating_s.png)'" v-if="Math.ceil(i.rating.value/2)==1"></span>
                                            </div>
                                                <span v-if="i.rating">{{i.rating.value}}</span>
                                                <span v-if="!i.rating">暂无评分</span>
                                                </div>
                                            </div>
                                        </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section id="movie_free_stream">
                        <header>
                            <h2>{{name2}}</h2>
                            <a href="/movie/nowintheater?loc_id=108288">更多</a>
                        </header>
                        <div class="section-content">
                            <ul class="row items">
                                <li class="item item__movie" v-for="i in item2" :id="i.id">
                                    <a href="/movie/subject/27038183?refer=home" :href="'#home/movieDetail/' + i.id">
                                    <div class="item-poster" :style="'background-image: url(' +i.cover.url+ ')'"></div>
                                    <span class="item-title">{{i.title}}</span>
                                        <div class="item-rating">
                                            <div class="rank">
                                                <div v-if="i.rating">
                                                <span class="rate rate1" :style="'background-image:url(./star/ic_rating_s.png)'" v-if="Math.ceil(i.rating.value/2)==4"></span>
                                                <span class="rate rate2" :style="'background-image:url(./star/ic_rating_s.png)'" v-if="Math.ceil(i.rating.value/2)==5"></span>
                                                <span class="rate rate3" :style="'background-image:url(./star/ic_rating_s.png)'" v-if="Math.ceil(i.rating.value/2)==3"></span>
                                                <span class="rate rate4" :style="'background-image:url(./star/ic_rating_s.png)'" v-if="Math.ceil(i.rating.value/2)==2"></span>
                                                <span class="rate rate5" :style="'background-image:url(./star/ic_rating_s.png)'" v-if="Math.ceil(i.rating.value/2)==1"></span>
                                            </div>
                                                <span v-if="i.rating">{{i.rating.value}}</span>
                                                <span v-if="!i.rating">暂无评分</span>
                                                </div>
                                            </div>
                                        </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section id="movie_latest">
                        <header>
                            <h2>{{name3}}</h2>
                            <a href="/movie/nowintheater?loc_id=108288">更多</a>
                        </header>
                        <div class="section-content">
                            <ul class="row items">
                                <li class="item item__movie" v-for="i in item3" :id="i.id">
                                    <a :href="'#home/movieDetail/' + i.id">
                                    <div class="item-poster" :style="'background-image: url('+i.cover.url+')'"></div>
                                    <span class="item-title">{{i.title}}</span>
                                        <div class="item-rating">
                                            <div class="rank">
                                                <div v-if="i.rating">
                                                <span class="rate rate1" :style="'background-image:url(./star/ic_rating_s.png)'" v-if="Math.ceil(i.rating.value/2)==4"></span>
                                                <span class="rate rate2" :style="'background-image:url(./star/ic_rating_s.png)'" v-if="Math.ceil(i.rating.value/2)==5"></span>
                                                <span class="rate rate3" :style="'background-image:url(./star/ic_rating_s.png)'" v-if="Math.ceil(i.rating.value/2)==3"></span>
                                                <span class="rate rate4" :style="'background-image:url(./star/ic_rating_s.png)'" v-if="Math.ceil(i.rating.value/2)==2"></span>
                                                <span class="rate rate5" :style="'background-image:url(./star/ic_rating_s.png)'" v-if="Math.ceil(i.rating.value/2)==1"></span>
                                            </div>
                                                <span v-if="i.rating">{{i.rating.value}}</span>
                                                <span v-if="!i.rating">暂无评分</span>
                                                </div>
                                            </div>
                                        </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section class="interests">
                        <header>
                            <h2>发现好电影</h2>
                        </header>
                        <div class="section-content">
                            <ul>
                                  <li style="border-color: #CC3344;"><a href="https://m.douban.com/doulist/968362/" style="color: #CC3344;">同时入选IMDB250和豆瓣电影250的电影</a></li>
                                  
                                  
                                  <li style="border-color: #42BD56;"><a href="https://m.douban.com/doulist/16002/" style="color: #42BD56;">带你进入不正常的世界</a></li>
                                  
                                  
                                  <li style="border-color: #2384E8;"><a href="https://m.douban.com/doulist/190343/" style="color: #2384E8;">用电【影】来祭奠逝去的岁月</a></li>
                                  
                                  
                                  <li style="border-color: #3BA94D;"><a href="https://m.douban.com/doulist/1125971/" style="color: #3BA94D;">女孩们的故事【电影】</a></li>
                                  
                                  
                                    <li class="line"></li>
                                  <li style="border-color: #FF4055;"><a href="https://m.douban.com/doulist/4253902/" style="color: #FF4055;">科幻是未来的钥匙——科幻启示录【科幻题材】</a></li>
                                  
                                  
                                  <li style="border-color: #4F9DED;"><a href="https://m.douban.com/doulist/121326/" style="color: #4F9DED;">美国生活面面观</a></li>
                                  
                                  
                                  <li style="border-color: #FFAC2D;"><a href="https://m.douban.com/doulist/37479562/" style="color: #FFAC2D;">2015终极期待</a></li>
                                  
                                  
                                  <li style="border-color: #FFC46C;"><a href="https://m.douban.com/doulist/458087/" style="color: #FFC46C;">经典韩国电影——收集100部</a></li>
                                  
                              </ul>
                        </div>
                    </section>
        
                    <section class="types">
                        <header>
                            <h2>分类浏览</h2>
                        </header>
                        <div class="section-content">
                          
                                <a name="cate"></a>
                                <ul class="type-list">
                                    <li><a href="/movie/classic">经典<span></span></a></li>
                                    <li><a href="/movie/underrated">冷门佳片<span></span></a></li>
                                    <li><a href="/movie/doubantop">豆瓣高分<span></span></a></li>
                                    <li><a href="/movie/action">动作<span></span></a></li>
                                    <li><a href="/movie/comedy">喜剧<span></span></a></li>
                                    <li><a href="/movie/love">爱情<span></span></a></li>
                                    <li><a href="/movie/mystery">悬疑<span></span></a></li>
                                    <li><a href="/movie/horror">恐怖<span></span></a></li>
                                    <li><a href="/movie/scifi">科幻<span></span></a></li>
                                    <li><a href="/movie/sweet">治愈<span></span></a></li>
                                    <li><a href="/movie/artfilm">文艺<span></span></a></li>
                                    <li><a href="/movie/youth">成长<span></span></a></li>
                                    <li><a href="/movie/animation">动画<span></span></a></li>
                                    <li><a href="/movie/chinese">华语<span></span></a></li>
                                    <li><a href="/movie/western">欧美<span></span></a></li>
                                    <li><a href="/movie/korean">韩国<span></span></a></li>
                                    <li><a href="/movie/japanese">日本<span></span></a></li>

                                    <li></li>
                                </ul>
                            
                        </div>
                    </section>
                </div>
            </div>
            <download></download>
        </div>
        <!-- <router-view></router-view> -->
       
    </div>
    
</template>
<script>
import download from './downLoad.vue';
    export default {
        data(){
            return {
                name1:'',
                name2:'',
                name3:'',
                item1:[],
                item2:[],
                item3:[],
                title:''
                // ,
                // interests:[{
                //     border_color:'#CC3344',
                //     url:'https://m.douban.com/doulist/968362/',
                //     content:'同时入选IMDB250和豆瓣电影250的电影'
                // },{
                //     border_color:'#42BD56',
                //     url:'https://m.douban.com/doulist/16002/',
                //     content:'带你进入不正常的世界'
                // },{
                //     border_color:'#2384E8;',
                //     url:'https://m.douban.com/doulist/190343/',
                //     content:'用电【影】来祭奠逝去的岁月'
                // },{
                //     border_color:'#3BA94D',
                //     url:'https://m.douban.com/doulist/16002/',
                //     content:'女孩们的故事【电影】'
                // },{
                //     border_color:'#FF4055',
                //     url:'https://m.douban.com/doulist/16002/',
                //     content:'科幻是未来的钥匙——科幻启示录【科幻题材】'
                // },{
                //     border_color:'#42BD56',
                //     url:'https://m.douban.com/doulist/16002/',
                //     content:'带你进入不正常的世界'
                // },{
                //     border_color:'#FFC46C',
                //     url:'https://m.douban.com/doulist/458087/',
                //     content:'经典韩国电影——收集100部'
                // }]

            }
        },
        methods:{
            load1:function(){
                var self = this;
                $.ajax({
                    type:'get',
                    url:'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?os=ios&start=0&count=8&loc_id=108288&_=1507862799504',
                    dataType:'jsonp',
                    success:function(data){
                        self.name1 = data.subject_collection.name;
                        self.item1 = data.subject_collection_items;
                        // console.log(data);
                        // console.log(self.item1[0].rating.value);
                    }
                })
            },
            load2:function(){
                var self = this;
                $.ajax({
                    type:'get',
                    url:'https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items?os=ios&start=0&count=8&loc_id=108288&_=1507862799506',
                    dataType:'jsonp',
                    success:function(data){
                        self.name2 = data.subject_collection.name;
                        self.item2 = data.subject_collection_items;

                        // console.log(self.name2);
                    }
                })
            },
            load3:function(){
                var self = this;
                $.ajax({
                    type:'get',
                    url:'https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items?os=ios&start=0&count=8&loc_id=108288&_=1507862799513',
                    dataType:'jsonp',
                    success:function(data){
                        self.name3 = data.subject_collection.name;
                        // console.log(self.name3);
                        self.item3 = data.subject_collection_items;

                    }
                })
            }
        },
        mounted:function(data){
            this.load1();
            this.load2();
            this.load3();


        },
        computed:{
            s(){
            }

        },
        components:{
            'download':download
        },
        directives:{
            clickdetail:{
                bind:function(el,binding,vnode){
                    var self = vnode.context;
                    el.onclick = function(){
                        var title = $(el).prop('title');
                        C.set('title',title,null,'/');
                    }
                }
            }
        }

    }
</script>
<style scoped>
.page {
    padding-top: 47px;
    max-width: 650px;
    background: #fff;
    margin: 0 auto;
    overflow-x: hidden;
    font-size: 12px;
}
.card {
    margin: 0;
}
section:first-child {
    padding-top: 10px;
}
section {
    margin: 0;
    overflow: hidden;
    background-color: #fff;
}
section header {
    padding: 0 1.12rem;
}
section h2 {
    display: inline-block;
    min-width: 4em;
    margin-bottom: 0;
    color: #111;
    padding-left: 0;
    padding-bottom: 0;
    font-size: 1.06rem;
    margin: 0 0 15px;
}
a {
    color: #42bd56;
    text-decoration: none;
}
section .section-content {
    margin-bottom: -1.12rem;
}
.row {
    border-bottom: 1px solid #F2F2F2;
    padding: 15px 0 43px 0;
}
.items {
    font-size: 0;
    white-space: nowrap;
    overflow-x: auto;
}
.item {
    display: inline-block;
    vertical-align: top;
    width: 100px;
    text-align: center;
    margin-left: 0.48rem;
}
.item a {
    color: #111;
    display:block;
}
.item:first-child {
    margin-left: 1.12rem;
}
.item-poster {
    width: 100%;
    display:block;
    overflow: hidden;
    background-size: cover;
    background-position: center;
}
.items>* {
    font-size: .94rem;
    white-space: normal;
}
.item__movie .item-title {
    max-width: 100%;
    word-wrap: normal;
}
.item-title {
    display: block;
    margin-top: .6rem;
    line-height: .94rem;
}
.item:not(.item__celebrity) .item-title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.item-poster:before {
    content: "";
    float: left;
    margin-top: 142.85714%;
}
.item-rating {
    color: #aaa;
    line-height: .94rem;
    margin-top: .3rem;
    font-size: .72rem;
}
section header a {
    float: right;
    font-size: .9rem;
    line-height: 1.5rem;
}
.interests a {
    height: 50px;
    line-height: 50px;
    padding: 0 1.55rem;
    letter-spacing: .1em;
    overflow: auto;
    display: block;
    text-align: center;
}
.clearfix:after, .card section>header:after {
    content: '';
    clear: both;
    display: block;
}
.interests li {
    margin: 0 0 8px 8px;
    font-size: .94rem;
    display: inline-block;
    border-radius: .25rem;
    border: solid 1px;
    vertical-align: middle;
    border-color: #CC3344;
}
.interests ul {
    white-space: nowrap;
    overflow-x: auto;
    padding: 15px 15px 43px 15px;
    font-size: 0;
    margin-left: -5px;
}
.interests li.line {
    width: 100%;
    display: block;
    height: 1px;
    border: 0;
    margin: 0;
}
.types .section-content {
    margin-bottom: 0;
}
.types .section-content {
    margin-left: .94rem;
}
.type-list {
    padding: 1.12rem 0 1.88rem;
    color: #eee;
    font-size: .9rem;
    overflow: hidden;
}
.type-list a {
    float: left;
    display: inline-block;
    width: 100%;
    line-height: 2.64rem;
}
.type-list li {
    border-top: solid 1px #eee;
    border-right: solid 1px #eee;
    float: left;
    padding-right: 1.12rem;
    height: 2.64rem;
}
@media (max-width: 399px) and (min-width: 360px){
    .type-list li {
        width: 40.5%;
    }
}
.type-list li:nth-child(even) {
    border-right: none;
    padding-left: 1.12rem;
}
.type-list span {
    color: #ccc;
    float: right;
    font-weight: bold;
    display: inline-block;
    border-right: solid 1px #ccc;
    border-bottom: solid 1px #ccc;
    width: .5rem;
    height: .5rem;
    transform: rotate(-45deg);
    margin-top: 1rem;
}
.rate{
    display:block;
    float:left;
    width: 55px;
    height: 11px;
    margin-left: 10px;
    margin-top: 1px;
}
.rate1{
    background-position: 0 99px;
}
.rate2{
    background-position: 0 0;
}
.rate3{
    background-position: 0 -165px;
}
.rate4{
    background-position: 0 55px;
}
.rate5{
    background-position: 0 33px;
}
</style>