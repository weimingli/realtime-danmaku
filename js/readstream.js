 function readStream(shardIteratorId, pattern) {
  var self = this;
  var params = {
    ShardIterator: shardIteratorId, 
    Limit: 10
  };

  kinesis.getRecords(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else    
    {
      if (data['Records'].length > 0) {
        var r;
        for (var i in data['Records']) {

            msg = data['Records'][i]['Data'].toString('utf8');
            showDanmaku(msg);       
        }
      }
            self.readStream(data['NextShardIterator']);
    }
  });
}

function showDanmaku(text){

        var showtime = getRandomShowTime();
        var fontsize = getRandomFontSize();
        var top = Math.ceil(Math.random()*$(".ctxt").height());
        var left = Math.ceil(Math.random()*$(".ctxt").width());
    
		var newtxt = '<p class="animated" style="color:white">'+text+'</p>';
		$(".ctxt").prepend(newtxt);
        var danmaku = $('.ctxt p:first');
        danmaku.css('font-size',fontsize);
        danmaku.css({'top':top,'left':left});
        danmaku.hide();
        
        danmaku.show().addClass('flipInX').delay(showtime).queue(function(next){
            danmaku.removeClass('flipInX');
            next();
            danmaku.fadeOut(2000,function(){danmaku.remove()});
        });
	}

function getRandomShowTime(){
    var showtime = Math.ceil(Math.random()*(10000-3000)+3000);
    return showtime;
}

function getRandomFontSize(){
    var fontsize = (Math.random()*(52-28)+28)+'px';
    return fontsize;
}

