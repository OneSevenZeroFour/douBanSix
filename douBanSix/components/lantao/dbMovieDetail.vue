<template>
    <div class="dbMovieDetail">
        <div class="page">
            <section class="promo_top_banner" style="display: block !important">
                  <div class="banner_bg">
                    <img src="https://img3.doubanio.com/f/talion/fbcb08987a36258354c6037211d94286bef9716c/pics/card/promotion_bg.jpg" class="img">
                  </div>
                  <div class="banner_wrapper">
                    <div class="banner_inner">
                      <div class="promo_title">
                        
                        <span class="promo_title_text">用 App 打开</span><br>
                        <span class="promo_title_text">查看主演的其它电影</span>
                      </div>

                      <div class="button_wrapper">
                        <a href="https://www.douban.com/doubanapp/app?model=B&amp;copy=1&amp;page=movie&amp;channel=card_movie&amp;direct_dl=1" rel="nofollow" onclick="ga('send', 'event', 'ios', 'click', 'subject banner download')" class="promo_button download_app">极速下载</a>
                        <a href="https://www.douban.com/doubanapp/dispatch?from=mdouban&amp;download=1&amp;model=B&amp;copy=1&amp;page=movie&amp;channel=card_movie&amp;uri=%2Fmovie%2F27038183" rel="nofollow" onclick="ga('send', 'event', 'ios', 'click', 'card more link')" class="promo_button open_app">打开</a>
                      </div>
                    </div>
                  </div>
            </section>
        <div class="card">
                
                <section class="subject-mark" data-type="movie" data-id="27038183">
                    <div class="mark-item">
                        <a href="javascript:;" rel="nofollow" name="pbtn-27038183-wish" class="">
                            <span>想看</span>
                        </a>
                        <a href="javascript:;" rel="nofollow" name="pbtn-27038183-collect">
                            <span>看过</span>
                        </a>
                    </div>
                </section>
                <section class="" id="celebrities">
                    <header>
                        <h2>影人</h2>
                    </header>
                    <div class="section-content">
                            <ul class="row items">
                                <li class="item item__celebrity" v-for="c in credits">
                                  <a href="https://movie.douban.com/celebrity/1350407/">
                                    <div class="item-poster" :style="'background-image: url('+c.cover_url+')'">
                                    </div>
                                    <span class="item-title name">{{c.name}}</span>
                                    <span class="item-title role">{{c.roles[0]}}</span>
                                  </a>
                                </li>
                            </ul>
                    </div>
                </section>
                <section class="subject-comments">
                    <h2>的短评({{total}})</h2>
                    <div class="bd" id="comment-list">
                        <ul data-reactroot="" class="list comment-list">
                            <li class="" v-for="i in interests">
                                <div class="desc">
                                    <a href="/people/151784886/"><img :src="i.user.avatar" alt="辣眼看电视"></a><div class="user-info">
                                        <strong>{{i.user.name}}</strong>
                                        <span class="rating-stars" data-rating="4">
                                        <span class="rating-star rating-star-medium-full"></span>
                                        <span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span>
                                        <span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-gray"></span></span>
                                        <div class="date">{{i.create_time}}</div></div></div>
                                        <p>{{i.comment}}</p><div class="btn-info"><div class="ic-btn ic-btn-like  left ">
                                            <i style="background-image:url(https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg)"></i><span class="text">{{i.vote_count}}</span></div>
                                        <div class="ic-btn ic-btn-more right"></div></div>
                                        </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return{
                id:'',
                interests:[],
                total:0,
                credits:[]
            }
        },
        methods:{
            load:function(){
                var self = this;
                $.ajax({
                    type:'get',
                    url:'https://m.douban.com/rexxar/api/v2/movie/'+self.id+'/interests?count=4&order_by=hot&start=0&ck=DQxl&for_mobile=1',
                    dataType:'jsonp',
                    success:function(data){
                        self.total = data.total;
                        self.interests = data.interests;

                        console.log(data);
                    }
                })
            },
            loadCredits:function(){
                var self = this;
                $.ajax({
                    type:'get',
                    url:'https://m.douban.com/rexxar/api/v2/movie/'+self.id+'/credits',

                    dataType:'jsonp',
                    success:function(data){
                        self.credits = data.credits[1].celebrities;
                        console.log(data.credits);
                    }
                })
            }
        },
        mounted:function(data){
            var idarr = window.location.hash.split('/');
            this.id = idarr[idarr.length-1];
            console.log(this.id);
            this.load();
            this.loadCredits();
        }
    }
</script>

<style scoped>
.promo_top_banner+.card {
    margin-top: 0px;
}
.card {
    margin: 0 18px;
}
.promo_top_banner {
    margin-bottom: 0;
    max-width: 100%;
    overflow: hidden;
    text-align: left;
    position: relative;
}
.promo_top_banner .banner_bg {
    font-size: 0;
    padding-bottom: 21.33333%;
    position: relative;
}
.promo_top_banner .banner_bg .img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.promo_top_banner .banner_wrapper {
    position: absolute;
    left: 18px;
    top: 0;
    bottom: 0;
    right: 10px;
}
.promo_top_banner .banner_wrapper .banner_inner{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}
.promo_top_banner .banner_wrapper .banner_inner>* {
    vertical-align: middle;
}
.promo_top_banner .button_wrapper {
    white-space: nowrap;
    font-size: 0;
    padding-left: 12px;
    flex:1;
    margin-left:50px;
}
.button_wrapper {
    margin: 0;
    flex:1;
}
.promo_top_banner .promo_title_text {
    font-size: 14px;
    font-weight: normal;
    line-height: 22px;
    color: #2CA532;
}
.page {
    padding-top: 47px;
    max-width: 650px;
    background: #fff;
    margin: 0 auto;
    overflow-x: hidden;
}
@media (max-width: 413px) and (min-width: 375px){
    .promo_title, .promo_text {
        font-size: 21px;
    }
}
.promo_button.download_app {
    color: #fff;
    border: 1px solid #42bd56;
    background: #42bd56;
}
.promo_top_banner .promo_button {
    font-size: 13px;
    font-weight: bold;
    width: auto;
    padding: 0 14px;
    position: relative;
}
.promo_top_banner .promo_title {
    margin: 0;
}
.promo_button {
    display: inline-block;
    border-radius: 3px;
    line-height: 2;
}
.promo_top_banner .promo_button:after {
    content: '';
    position: absolute;
    left: -4px;
    right: -4px;
    top: -10px;
    bottom: -10px;
}
.promo_button.open_app {
    color: #42bd56;
    border: 1px solid #42bd56;
    margin-left:10px;
}
.subject-mark .mark-item {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
}
.subject-mark .mark-item a {
    height: 30px;
    line-height: 30px;
    display: block;
    border: 1px solid #ffb712;
    border-radius: 3px;
    margin-right: 10px;
    color: #ffb712;
    font-size: 15px;
    text-align: center;
    flex: 1;
}
.list {
    margin-right: -18px;
}
.list li:first-child {
    padding-top: 0;
}
.list li {
    position: relative;
    padding: 15px 18px 15px 0;
    word-wrap: break-word;
    overflow: hidden;
}
.comment-list li .desc {
    font-size: 0;
    line-height: normal;
    margin: 0 0 11px;
    color: #494949;
    position: relative;
}
.comment-list li p {
    padding: 0 0 0 40px;
    line-height: 22px;
    color: #494949;
}
.list a {
    display: block;
    overflow: hidden;
    text-decoration: none;
    color: #494949;
}
.list li .desc>a {
    display: inline;
}
.comment-list li .desc strong {
    font-size: 15px;
    display: inline-block;
    vertical-align: text-top;
    margin-right: 6px;
}
.comment-list li .desc .date {
    margin-top: 6px;
    font-size: 12px;
    color: #aaa;
}
.comment-list li .desc img, .comment-list li .desc .avatar {
    width: 36px;
    border-radius: 50%;
    vertical-align: text-top;
    margin-right: 10px;
    float: left;
}
.list a {
    color: #494949;
}
h2 {
    color: #aaa;
    margin: 0 0 15px;
    font-size: 15px;
}

.ic-btn .text {
    color: #ccc;
    margin-left: 3px;
    position: relative;
    left: 0;
    top: -3px;
}
.comment-list li .btn-info {
    height: 22px;
    margin: 10px 0 0 40px;
}
.list li::after {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #E8E8E8;
    content: '';
    position: absolute;
}
.ic-btn {
    display: inline-block;
    margin-right: 20px;
    font-size: 14px;
    cursor: pointer;
}
.ic-btn i{
    width:20px;
    height:20px;
    background-position: center center;
    background-repeat: no-repeat;
    display: inline-block;
    margin-bottom: -2px;
}
.items {
    font-size: 0;
    white-space: nowrap;
    overflow-x: auto;
}
.item__celebrity:first-child {
    margin-left: 0;
}
.item__celebrity {
    font-size: 14px;
    width: 75px;
}
.item a {
    color: #111;
    display:block;
}
.item-poster {
    width: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center;
}
.item__celebrity .item-title {
    overflow: hidden;
    font-size: 14px;
    line-height: 1.5;
    white-space: normal;
    text-align: center;
    color: #494949;
    margin-top: 8px;
    display:block;
}
.item__celebrity .item-title.role {
    color: #aaa;
}
.item {
    display: inline-block;
    vertical-align: top;
}
.item__celebrity {
    width: 75px;
}
.items>* {
    font-size: .94rem;
    white-space: normal;
}
.item {
    margin-left: 0.48rem;
}
section {
    margin-bottom: 30px;
}
.item-poster:before {
    content: "";
    float: left;
    margin-top: 142.85714%;
}
</style>