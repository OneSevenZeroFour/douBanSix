<template>
	<div class="dbBook">
		<div>
			<div class="page">
				<div class="card">
					
					<!-- 最受欢迎  虚构类-->
					<section class="book_fiction">
						<header>
							<h2>最受关注图书｜虚构类</h2>
							<a href="##">更多</a>
						</header>
						<div class="section-content">
							<ul class="row items">
								<li class="item item-book" v-for="i in item1">
									<a :href=" '#home/bookDetail/' + i.id">
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
									</a>
								</li>
							</ul>
						</div>
					</section>

					<!-- 最受欢迎  非虚构类-->
					<section class="notfiction_book">
						<header>
							<h2>最受关注图书｜非虚构类</h2>
							<a href="##">更多</a>
						</header>
						<div class="section-content">
							<ul class="row items">
								<li class="item item-book" v-for="i in item2">
									<a :href=" '#home/bookDetail/' + i.id">
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
									</a>
								</li>
							</ul>
						</div>
					</section>

					<!-- 豆瓣书店 -->
					<section class="bookshop">
						<header>
							<h2>豆瓣书店</h2>
							<a href="##">更多</a>
						</header>
						<div>
							<a  class="prombook">
								<img src="../../img/book/2206.png" class="cover">
								<div class="content">
									<div class="title">
										<span class="price">{{bookshop.price}}</span>
										<p class="name">{{bookshop.title}}</p>
									</div>
									<p class="info">{{bookshop.info}}</p>
								</div>
							</a>
						</div>
						<div class="section-content">
							<ul class="row items">
								<li class="item item-book" v-for="i in item3">
									<a :href=" '#home/bookDetail/' + i.id">
										<div class="item-poster" style="background-image:url(../../img/book/987.png)"></div>
										<span class="item-title">{{i.title}}</span>
										<div class="item-rating">
                                            <div class="rank">
                                 				<span>￥{{i.price}}</span>
                                            </div>
                                        </div>
                                    </a>
									</a>
								</li>
							</ul>
						</div>
					</section>

					<!-- 发现好图书 -->
					<section class="interest">
						<header>
                            <h2>发现好图书</h2>
                        </header>
                        <div class="section-content">
                        	<ul>
                        		<li v-for="i in interests" :style="'border-color:' + i.border_color">
                        			<a :href="i.url" :style="'color:' + i.border_color">{{i.content}}</a>
                        		</li>
                        		<li class="line"></li>
                        		<li v-for="i in interests" :style="'border-color:' + i.border_color">
                        			<a :href="i.url" :style="'color:' + i.border_color">{{i.content}}</a>
                        		</li>
                        	</ul>
                        </div>
					</section>
					
					<!-- 分类列表 -->
					<section class="types">
                        <header>
                            <h2>分类浏览</h2>
                        </header>
                        <div class="section-content">
                                <a name="cate"></a>
                                <ul class="type-list">
                                    <li><a href="/book/classic">小说<span></span></a></li>
                                    <li><a href="/book/underrated">爱情<span></span></a></li>
                                    <li><a href="/book/doubantop">历史<span></span></a></li>
                                    <li><a href="/book/action">外国文学<span></span></a></li>
                                    <li><a href="/book/comedy">青春<span></span></a></li>
                                    <li><a href="/book/love">励志<span></span></a></li>
                                    <li><a href="/book/mystery">随笔<span></span></a></li>
                                    <li><a href="/book/horror">传记<span></span></a></li>
                                    <li><a href="/book/scifi">推理<span></span></a></li>
                                    <li><a href="/book/sweet">旅行<span></span></a></li>
                                    <li><a href="/book/artfilm">奇幻<span></span></a></li>
                                    <li><a href="/book/youth">经管<span></span></a></li>
                                </ul>
                            
                        </div>
                    </section>
				</div>
			</div>
			<div class="download-app">
                <div class="info">
                    <img src="https://img3.doubanio.com/f/talion/7837f29dd7deab9416274ae374a59bc17b5f33c6/pics/card/douban-app-logo.png" width="48">
                    <div class="info-content">
                        <strong>豆瓣</strong>
                        <div>我们的精神角落</div>
                    </div>
                </div>
                    <a href="https://www.douban.com/doubanapp/card/log?category=movie_home&amp;cid=&amp;action=click_download&amp;ref=http%3A//www.douban.com/doubanapp/app%3Fchannel%3Dcard_movie_home%26direct_dl%3D1" rel="nofollow">去 App Store 免费下载 iOS 客户端</a>
            </div> 
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				item1:[],
				item2:[],
				item3:[],
				bookshop:{title:'',price:'',info:''},
				interests:[{
                    border_color:'#CC3344',
                    url:'https://m.douban.com/doulist/968362/',
                    content:'小波看书'
                },{
                    border_color:'#42BD56',
                    url:'https://m.douban.com/doulist/16002/',
                    content:'村上春树周边'
                },{
                    border_color:'#2384E8;',
                    url:'https://m.douban.com/doulist/190343/',
                    content:'我凭名字认定了你'
                },{
                    border_color:'#3BA94D',
                    url:'https://m.douban.com/doulist/16002/',
                    content:'不可饶恕的女人们'
                },{
                    border_color:'#FF4055',
                    url:'https://m.douban.com/doulist/16002/',
                    content:'爱欲书'
                },{
                    border_color:'#42BD56',
                    url:'https://m.douban.com/doulist/16002/',
                    content:'他们还写侦探小说'
                },{
                    border_color:'#FFC46C',
                    url:'https://m.douban.com/doulist/458087/',
                    content:'人生识字史忧患'
                }]

			}
		},
		methods:{
			load1:function(){
				var self = this;
				$.ajax({
					type:'get',
					url:'https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?os=ios&start=0&count=8&loc_id=0&_=1508118897493',
					dataType:'jsonp',
					success:function(data){
						self.item1 = data.subject_collection_items;
					}
				})
			},
			load2:function(){
				var self = this;
				$.ajax({
					type:'get',
					url:'https://m.douban.com/rexxar/api/v2/subject_collection/book_nonfiction/items?os=ios&start=0&count=8&loc_id=0&_=1508131300240',
					dataType:'jsonp',
					success:function(data){
						console.log(data)
						self.item2 = data.subject_collection_items;
					}
				})
			},
			load3:function(){
				var self = this;
				$.ajax({
					type:'get',
					url:'https://m.douban.com/rexxar/api/v2/subject_collection/market_product_book_mobile_web/items?os=ios&start=0&count=8&loc_id=0&_=1508131300241',
					dataType:'jsonp',
					success:function(data){
						self.item3 = data.subject_collection_items;
						self.bookshop.title = data.header.title;
						self.bookshop.price = data.header.price;
						self.bookshop.info = data.header.info;
					}
				})
			},
		},
		mounted:function(data){
			this.load1();
			this.load2();
			this.load3();
		}

	}
</script>

<style scoped>
	*{margin:0;padding: 0;font-weight: normal;}
	.page{padding-top: 47px;max-width: 650px;background: #fff;margin: 0 auto;overflow-x: hidden;font-size: 12px;}
	.card{margin: 0}
	section:first-child{padding-top: 10px;}
	section{margin: 0;overflow: hidden;background: #fff;}
	section header{padding: 0 1.12rem}
	section h2{    display: inline-block;min-width: 4em;margin-bottom: 0;font-size: 18px;color: #111;padding-left: 0;padding-bottom: 0;font-size: 1.06rem;}
	header a{float: right;font-size: .9rem;line-height: 1;color: #42bd56;text-decoration: none;}
	section .section-content {margin-bottom: -1.12rem}
	.row {border-bottom: 1px solid #F2F2F2;padding: 15px 0 43px 0;}
	.items {font-size: 0;white-space: nowrap;overflow-x: auto;width: 100%}
	.item {display: inline-block;vertical-align: top;width: 100px;text-align: center;margin-left: 0.48rem;}
	.item a {color: #111;display:block;}
	.item:first-child {margin-left: 1.12rem;}
	.item-poster {width: 100%;display:block;overflow: hidden;background-size: cover;background-position: center;}
	.items>* {font-size: .94rem;white-space: normal;}
	.item__movie .item-title {max-width: 100%;word-wrap: normal;}
	.item-title {display: block;margin-top: .6rem;line-height: .94rem;}
	.item:not(.item__celebrity) .item-title {overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
	.item-poster:before {content: "";float: left;margin-top: 142.85714%;}
	.item-rating {color: #aaa;line-height: .94rem;margin-top: .3rem;font-size: .72rem;}
	section header a {float: right;font-size: .9rem;line-height: 1.5rem;}
	.rate{display:block;float:left;width: 55px;height: 11px;margin-left: 10px;margin-top: 1px;}
	.rate1{background-position: 0 99px;}
	.rate2{background-position: 0 0;}
	.rate3{background-position: 0 -165px;}
	.rate4{background-position: 0 55px;}
	.rate5{background-position: 0 33px;}
	.prombook{display: block;overflow: hidden;margin:15px 1.12rem 0px;}
	.prombook .cover{float: left;width: 100px;margin-right: 15px;}
	.prombook .content{overflow: hidden;}
	.prombook .title{margin: 10px 0}
	.prombook .price{float: right;color:#e76648;font-size: 16px;line-height: 22px;}
	.prombook .price:before{content: '￥';}
	.prombook .name{font-size: 19px;color: #494949;margin-right: 40px;max-width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;word-wrap: normal;}
	.interest ul{white-space: nowrap;overflow-x: auto;padding:15px 15px 43px 15px;font-size: 0;margin-left: -5px;}
	.interest ul li{margin: 0 0 8px 8px;font-size: .94rem;display: inline-block;border-radius: .25rem;border: solid 1px;vertical-align: middle;border-color: #CC3344;}
	.interest a{height: 50px;line-height: 50px;padding: 0 1.55rem;letter-spacing: .1em;overflow: auto;display: block;text-align: center;}
	.interest li.line {width: 100%;display: block;height: 1px;border: 0;margin: 0;}
	.types .section-content {margin-bottom: 0;}
	.types .section-content {margin-left: .94rem;}
	.type-list {padding: 1.12rem 0 1.88rem;color: #eee;font-size: .9rem;overflow: hidden;}
	.type-list a {float: left;display: inline-block;width: 100%;line-height: 2.64rem;color: #42bd56;}
	.type-list li {border-top: solid 1px #eee;border-right: solid 1px #eee;float: left;padding-right: 1.12rem;height: 2.64rem;}
	@media (max-width: 399px) and (min-width: 360px){.type-list li {width: 40.5%;}}
	.type-list li:nth-child(even) {border-right: none;padding-left: 1.12rem;}
	.type-list span {color: #ccc;float: right;font-weight: bold;display: inline-block;border-right: solid 1px #ccc;border-bottom: solid 1px #ccc;width: .5rem;height: .5rem;transform: rotate(-45deg);margin-top: 1rem;}
	.download-app {padding: 0 0 20px 0;margin-top: 50px;margin-bottom: 30px;text-align: center;font-size: 15px;}
.download-app .info {margin: 0 auto 15px;overflow: hidden;text-align: left;font-size: 14px;display: inline-block;color: #111;}
.download-app .info img {float: left;margin-right: 12px;}
.download-app .info-content {overflow: hidden;}
.download-app .info strong {font-size: 24px;font-weight: normal;line-height: 28px;}
.download-app .info .info-content div {white-space: pre;line-height: 20px;}
.download-app .info+a {display: block;}
</style>