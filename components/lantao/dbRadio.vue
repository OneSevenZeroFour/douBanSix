<template>
    <div class="dbRadio">
        <div class="page">
            <div class="card">
                <div data-reactroot="" class="pull-refresh-container">
                    <div class="status-editor-bar">
                        <div class="avatar">
                            <img src="https://img1.doubanio.com/icon/user_normal.jpg">
                        </div>
                            <div class="holder">登录发广播</div>
                            <div class="icon icon-camera" style="background-image:url(../svg/ic_status_camera.svg)"></div>
                            <a class="icon icon-pen" style="background-image:url(../svg/ic_status_pen.svg);background-size: contain;background-position: center;background-repeat: no-repeat;" :href="'#/home/sendRadio'"></a></div>
                    <ul class="status-list comment-list">
                        <li v-for="i in item">
                            <div>
                                <div class="desc">
                                    <a href="/people/95805238/">
                                        <img alt="豆瓣" src="https://img3.doubanio.com/icon/up95805238-16.jpg">
                                    </a>
                                    <a href="/people/95805238/status/2045165796/">
                                        <div class="user-info">
                                            <strong>
                                                {{i.status.author.name}} 
                                                <span>{{i.status.activity}}</span>
                                            </strong>
                                            <div class="timestamp">{{i.status.create_time}}</div>
                                        </div>
                                    </a>
                                </div>
                                    <a>
                                        <div class="content">
                                            <div>{{i.status.text}} 
                                                <a v-if="i.status.entities[0]" :href="i.status.entities[0].uri">{{i.status.entities[0].title}}</a>
                                            </div>
                                        </div>
                                    </a>
                            </div>
                            <div class="feed-images single" v-if="i.status.activity=='说：'">
                                <div v-if="!i.status.images[1]" class="item portrait" style="background-image:url(./radioImage/3VFkZE.jpg);height:300px;width:290px;background-size:290px auto">
                                </div>
                                
                                <div v-if="i.status.images[1]">
                                    <div class="item portrait" style="background-image:url(./radioImage/1cp0vh.jpg);height:92px;width:92px;background-size:92px auto">
                                    </div>
                                    <div class="item portrait" style="background-image:url(./radioImage/1cp0vh.jpg);height:92px;width:92px;background-size:92px auto">
                                    </div>
                                </div>
                            </div>
                            <div class="feed-card article-card  has-subtitle" v-if="i.status.activity=='写了日记'">
                                <a href="https://www.douban.com/note/637408669/">
                                    <div class="title">{{i.status.card.title}}</div>
                                    <div class="detail" :class="{'has-cover':i.status.card.image}">
                                        <div class="text">{{i.status.card.subtitle}}</div>
                                        <div v-if="i.status.card.image" class="cover" style="background-image: url(./radioImage/p44530630.jpg);height:48px;width:75px;background-size:75px auto"></div>
                                    </div>
                                </a>
                            </div>
                            <div class="info">
                                <div class="ic-btn ic-btn-like left" >
                                    <i :style="'background-image:url(./svg/ic_like_gray.svg)'"></i>
                                    <span class="text">{{i.status.like_count}}</span>
                                </div>
                                <div class="ic-btn ic-btn-comment left">
                                    <i :style="'background-image:url(./svg/ic_comment.svg)'"></i>
                                    <span class="text">{{i.status.comments_count}}</span>
                                </div>
                                <div class="ic-btn ic-btn-retweet left">
                                    <i :style="'background-image:url(./svg/ic_retweet_gray.svg)'"></i>
                                    <span class="text">{{i.status.reshares_count}}</span>
                                </div>
                                <div class="ic-btn ic-btn-more right"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card" v-if="eternal">
                <ul class="status-list comment-list">
                    <li v-for="e in eternal">
                        <div>
                            <div class="desc">
                                <a href="/people/95805238/">
                                    <img alt="豆瓣" src="https://img3.doubanio.com/icon/up95805238-16.jpg">
                                </a>
                                <a>
                                    <div class="user-info">
                                        <strong>
                                            lmm
                                            <span>说： </span>
                                        </strong>
                                        <div class="timestamp">{{e.time}}</div>
                                    </div>
                                </a>
                                
                            </div>
                            <a href="/people/3186129/status/2052193615/">
                                <div class="content">
                                    <div>{{e.eternal}}</div>
                                </div>
                            </a>
                            <div class="feed-images single">
                                <img v-if="e.img[0]" :src="'../addImage/eternal/phone18124092479/' + e.img[0]" :class="{'big':e.img.length<2}"/>
                                <img v-if="e.img[1]" :src="'../addImage/eternal/phone18124092479/' + e.img[1]"/>
                                <img v-if="e.img[2]" :src="'../addImage/eternal/phone18124092479/' + e.img[2]"/>
                                <img v-if="e.img[3]" :src="'../addImage/eternal/phone18124092479/' + e.img[3]"/>
                                <img v-if="e.img[4]" :src="'../addImage/eternal/phone18124092479/' + e.img[4]"/>
                                <img v-if="e.img[5]" :src="'../addImage/eternal/phone18124092479/' + e.img[5]"/>
                                <img v-if="e.img[6]" :src="'../addImage/eternal/phone18124092479/' + e.img[6]"/>
                                <img v-if="e.img[7]" :src="'../addImage/eternal/phone18124092479/' + e.img[7]"/>
                                <img v-if="e.img[8]" :src="'../addImage/eternal/phone18124092479/' + e.img[8]"/>
                            </div>
                        </div>

                    </li>
                </ul>
                <div >
                    <!-- {{e.eternal}} -->
                    
                </div>
            </div>
            <!-- <download></download> -->
        </div>
    </div>
</template>
<script>
import download from './downLoad.vue';
    export default {
        data(){
            return {
                item:[],
                eternal:[]
            }
        },
        methods:{
            load:function(){
                var self = this;
                $.ajax({
                    url:'https://m.douban.com/rexxar/api/v2/status/anonymous_timeline?max_id=&ck=DQxl&for_mobile=1',
                    type:'get',
                    dataType:'jsonp',
                    success:function(data){
                        if(C.get('eternal')  != ''){
                            self.eternal = JSON.parse(C.get('eternal'));
                            console.log(self.eternal)
                        }else{
                            self.item = data.items;
                        }

                        // console.log(data);
                        
                        // console.log(self.item[14].status.images[0].normal.url);
                        // console.log(JSON.parse(C.get('eternal')));
                        // console.log(data.items.concat(JSON.parse(C.get('eternal'))));
                    }
                })
            },
            mountedImage:function(){
                console.log(C.get('eternal'));
                // console.log(JSON.parse(C.get('eternal')));
             
            }
        },
        mounted:function(){
            this.load();
            this.mountedImage();

        },
        components:{
            'download':download
        }
    }
</script>
<style scoped>
.promo_top_banner+.card {
    margin-top: 0px;
}
.card{
    margin: 0 18px;
}
.pull-refresh-container {
    position: relative;
}
.status-editor-bar {
    position: relative;
    margin: 0 -18px 5px;
    padding: 10px 18px;
    cursor: pointer;
    overflow: hidden;
}
.pull-refresh-loading {
    /*background: url(/f/talion/bf2ef8c…/pics/card/loading_grey.gif) no-repeat;*/
    background-position: center;
    background-size: 24px;
    width: 100%;
    height: 48px;
    z-index: -1;
    position: absolute;
    left: 0;
    top: 60px;
    opacity: 0;
}
.status-list {
    overflow: hidden;
}
.status-list li {
    position: relative;
    padding-bottom: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 50px;
}
.status-list li .desc {
    margin-left: -50px;
    display: flex;
        font-size: 0;
    line-height: normal;
    margin: 0 0 11px;
    color: #494949;
    position: relative;
    align-items: center;
}
a {
    color: #42bd56;
    text-decoration: none;
}
.status-list li .desc img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
}
.comment-list li .desc img, .comment-list li .desc .avatar {
    border-radius: 50%;
    vertical-align: text-top;
}
.status-list li .desc .user-info {
    flex: auto;
}
.status-list li .content {
    font-size: 17px;
}
.comment-list li .content {
    padding-left: 0;
    margin-top: 10px;
    line-height: 22px;
    color: #494949;
}
.status-list li .content>div {
    display: inline;
}
.feed-images {
    margin-top: 15px;
}
.feed-images.single .item {
    display: inline-block;
    max-height: 300px;
    overflow: hidden;
}
.feed-images.single .item img {
    display: block;
}
.comment-list li .info {
    padding-left: 0;
    margin-top: 13px;
    margin-right: -20px;
    overflow: auto;
}
.status-list li::after {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #E8E8E8;
    content: '';
    position: absolute;
}
.comment-list li::before, .comment-list li::after {
    margin-left: 46px;
}
.ic-btn.left {
    float: left;
}
.ic-btn {
    display: inline-block;
    margin-right: 20px;
    font-size: 14px;
    cursor: pointer;
}
.ic-btn i{
    width: 20px;
    height: 20px;
    background-position: center center;
    background-repeat: no-repeat;
    display: inline-block;
    margin-bottom: -2px;
}
.ic-btn-like::before {
    /*background-image: url(/f/talion/7a0756b…/pics/card/ic_like_gray.svg);*/
}
.ic-btn .text {
    color: #ccc;
    margin-left: 3px;
    position: relative;
    left: 0;
    top: -3px;
}
.ic-btn.left {
    float: left;
}
.ic-btn.right {
    float: right;
}

.status-editor-bar .avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.status-editor-bar .avatar {
    width: 40px;
    height: 40px;
    float: left;
}
.status-editor-bar .holder {
    color: #aaa;
    padding-left: 10px;
    font-size: 15px;
    line-height: 40px;
    float: left;
}
html body .page {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: scroll;
}
.status-list li .desc {
    margin-left: -50px;
}
.status-list li .desc .user-info strong {
    font-size: 17px;
    line-height: 1;
    color: #494949;
}
.comment-list li .desc .user-info strong {
    display: inline-block;
    vertical-align: text-top;
    margin-right: 6px;
}
.status-list li .desc .user-info strong span {
    color: #aaa;
    font-weight: normal;
}
.status-list li .desc .user-info .timestamp {
    font-size: 14px;
    margin-top: 6px;
    line-height: 1;
        color: #aaa;
}
.feed-images.single .item.portrait img {
    max-width: 100%;
}
.feed-images .item {
    position: relative;
    cursor: pointer;
    overflow:hidden;
}
.status-editor-bar .icon {
    width: 24px;
    height: 24px;
    padding: 8px;
    margin-right: 10px;
    position: relative;
    float: right;
    box-sizing: border-box;
    margin-top:7px;
}
.status-editor-bar .icon.icon-camera {
    margin-right: 0;
}
.status-editor-bar .icon.icon-pen{
    margin-right: 32px;
}
.status-editor-bar::after {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #E8E8E8;
    content: '';
    position: absolute;
}
.feed-card {
    padding: 15px;
    margin: 10px 0 20px;
    border-radius: 2px;
    background: #f9f9f9;
}
.feed-card .title {
    font-size: 17px;
    font-weight: 500;
    line-height: 1.4;
    color: #494949;
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
}
.feed-card .text {
    font-size: 12px;
    line-height: 16px;
    color: #aaa;
    overflow: hidden;
    text-overflow: ellipsis;
}
.has-cover .cover {
    width: 75px;
    height: 48px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
}
.has-cover{
    height: 48px;
    padding-right: 90px;
    position: relative;
}
.feed-images img{
    width: 93px;
    height: 93px;
}
.feed-images .big{
    width: 100%;
    height: 100%;
}
</style>