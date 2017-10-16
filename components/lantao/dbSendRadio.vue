<template>
    <div class="dbSendRadio">
        <div class="pop-page show status-editor">
            <div class="content">
                <div class="editor-wrapper">
                    <textarea v-getRadio maxlength='140' name="radio" class="editor" placeholder="分享生活点滴..." >{{content}}</textarea>
                </div>
                <div class="info-bar">
                    <div class="btn btn-camera" style="background-image:url(../svg/ic_status_camera_green.svg);">
                        <form action="#" id="files" v-sendToBase="upload">
                            <input id="file" type="file" accept="image/*" name="image" multiple>
                        </form>
                        
                    </div>
                    <div class="btn btn-at" style="background-image:url(../svg/ic_status_at_green.svg);"></div>
                    <div class="btn btn-hash" style="background-image:url(../svg/ic_status_hash_green.svg);"></div>
                    <div class="num ">{{codelen}}</div>
                </div>
            </div>
        </div>
        <div>
            <div class="pop-page-header header show">
                <span class="title">发广播</span>
                <div class="btn btn-left" v-cancel>取消</div>
                <div class="btn btn-right disable" v-publish>发布</div>
            </div>
        </div>
        <div v-for="i in image" class="images">
            <img :src="'../addImage/tamp/phone18124092479/' + i" :dataid="i"/>
            <i class="del" v-deleImage></i>
        </div>
    </div>
</template>
<script>
    // import C from "../../js/cookie.js";
    export default {
        data(){
            return{
                image:[],
                codelen:140,
                content:'',
                eternalContent:[]
            }
        },
        methods:{
            init:function(){
                this.image = [];
                this.content = '';
                this.codelen = 140;
                C.set('content','',null,'/');
                console.log(4555);
            },
            createTmp:function(){
                $.ajax({
                    type:'get',
                    url:'http://localhost:12345/addImage',
                    success:function(data){
                        if(!data)return;
                        console.log("创建成功");
                    }
                })

            },
            mountedImage:function(){
                var self = this;
                $.ajax({
                    type:'get',
                    url:'http://localhost:12345/mountedImage',
                    success:function(data){
                        if(!data)return;
                        
                        self.image = data;
                    }
                })
            },
            upload:function(){
                    var self = this;
                   $.ajax({
                        url: 'http://localhost:12345/profile',
                        type: 'POST',
                        cache: false,
                        data: new FormData($('#files')[0]),
                        processData: false,
                        contentType: false,
                        success: function(data) {
                            if(!data)return;
                            //拼接数组
                            self.image = self.image.concat(data.slice(0,-1).split(','));
                        }
                })
            },
            cancel:function(){
                
            }

        },
        mounted:function(){
            this.createTmp();
            this.mountedImage();
            this.content = C.get('content');
            this.eternalContent = JSON.parse(C.get('eternal'));
            this.codelen = 140 - this.content.length;
        },
        directives:{
            getRadio:{
                bind:function(el,binding,vnode){
                    $(el).on('input',()=>{
                        var str = $(el).val();
                        //vnode.context指向这个对象
                        vnode.context.codelen = 140 - str.length;
                        // console.log(str);
                        document.cookie = 'content=' + str;
                        vnode.context.content = str;
                        console.log(vnode.context.content);
                        console.log(1234);
                        // console.log(str.length,binding,vnode.context.codelen);
                    })
                    
                }
            },
            publish:{
                bind:function(el,binding,vnode){
                    var self = vnode.context;
                    $(el).on('click',()=>{
                        $.ajax({
                            type:'get',
                            url:'http://localhost:12345/publish',
                            success:function(data){
                                if(!data || self.content == '')return;
                                var now = new Date();
                                now.setDate(now.getDate()+7);
                                // self.eternalContent += self.content+',';
                                var user = {
                                    id:'',
                                    eternal:self.content,
                                    time:new Date().format("yyyy-MM-dd hh:mm:ss"),
                                    img:self.image
                                };
                                self.eternalContent.push(user);
                                C.set('eternal',JSON.stringify(self.eternalContent),now,'/');
                                self.init();
                                $(".editor").val('');
                                console.log(self.eternalContent);
                                router.push('radio');
                            }

                        })
                    })
                    
                }
            },
            sendToBase:{
                bind:function(el,binding){
                    $(el).on('change',function(){
                        binding.value();
                    })
                }
                
            },
            deleImage:{
                bind:function(el,binding){
                    el.onclick = function(){
                        var $par = $(el).parent('.images');
                        var src = $par.children('img').attr('dataid');
                        $.ajax({
                            type:'get',
                            url:'http://localhost:12345/deleImage',
                            data:{'src':src},
                            success:function(res){
                                if(!res)return;
                                $par.remove();
                            }
                        })
                    }
                }
            },
            cancel:{
                bind:function(el,binding,vnode){
                    $(el).on('click',function(){
                        var self = vnode.context;
                        $.ajax({
                            type:'get',
                            url:'http://localhost:12345/delAll',
                            success:function(data){
                                if(!data)return;
                                self.init();
                                C.set('content','',null,'/');
                                $(".editor").val('');
                                console.log(4352345)
                            }
                        })
                    })
                    
                }
            }
        },
        computed:{
            s(){
                return this.content;
            }
        }
    }
</script> 
<style scoped>
.pop-page-header.show {
    display: block;
}
.pop-page-header {
    position: relative;
    position: fixed;
    left: 0;
    top: 0;
    height: 44px;
    width: 100%;
    padding: 14px 0;
    box-sizing: border-box;
    font-size: 17px;
    line-height: 17px;
    background: #fff;
    z-index: 10002;
}
.pop-page-header .title {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    box-sizing: border-box;
    padding: inherit;
    text-align: center;
}
.pop-page-header .btn-left {
    float: left;
}
.pop-page-header .btn {
    color: #42bd56;
    cursor: pointer;
    position: relative;
    padding: 14px 18px;
    margin: -14px 0;
}
.pop-page-header .btn-right {
    float: right;
}
.pop-page-header .btn {
    cursor: pointer;
    position: relative;
    padding: 14px 18px;
}
.content{
    width:100%;
}
.status-editor .editor-wrapper .editor {
    height: 150px;
    padding:8px;
    margin-top: 50px;
    outline: none;
    border:0 none;
    overflow-x: hidden;
    overflow-y: auto;
    display: block;
    position: relative;
    font-size: 17px;
    width:95%;
    font-family: "Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;

    resize: none;
}
textarea::-webkit-input-placeholder{
    color:#ccc;
}
.pop-page-header::after {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #E8E8E8;
    content: '';
    position: absolute;
}
.status-editor .info-bar {
    position: relative;
    z-index: 10001;
    overflow: hidden;
    height: 44px;
    /*margin: 0 -18px;*/
    padding: 10px 18px;
    margin-top:10px;
    box-sizing: border-box;
}
.status-editor .info-bar .num {
    color: #aaa;
    font-size: 15px;
    float: right;
    line-height: 24px;
}
.status-editor .info-bar::before{
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background: #E8E8E8;
    content: '';
    position: absolute;
}
.status-editor .info-bar::after {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #E8E8E8;
    content: '';
    position: absolute;
}
.status-editor .info-bar .btn {
    background: center/cover no-repeat;
    width: 24px;
    height: 24px;
    float: left;
    cursor: pointer;
    margin-right: 25px;
}
.status-editor .info-bar .btn.btn-camera input {
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
}
.status-editor .info-bar .btn {
    background: center/cover no-repeat;
    width: 24px;
    height: 24px;
    float: left;
    cursor: pointer;
    margin-right: 25px;
}
.images{
    width:80px;
    height:80px;
    border:1px solid #42bd56;;
    float:left;
    margin-left:8px;
    margin-top:5px;
    border-radius: 10px;
    position:relative;

}
.images img{
    width:100%;
    height:100%;
}
.del::before {
    content: "×";
    font-family: sans-serif;
    font-size: 13px;
    color: #fff;
    font-weight: 200;
    display: block;
}
.del{
    font-style: normal;
    position: absolute;
    top: 4px;
    right: 4px;
    width: 20px;
    height: 20px;
    text-align: center;
    background-color: rgba(0,0,0,0.7);
    border-radius: 50%;
    display: flex;
    justify-content: center;
}
</style>