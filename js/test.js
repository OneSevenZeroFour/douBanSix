$.ajax({
    url: 'https://m.douban.com/rexxar/api/v2/recommend_feed?alt=json&next_date=&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1',
    type: 'GET',
    dataType:'jsonp',
    success: function(res){
        console.log(res);
    }
})

