AWS.config.update({accessKeyId: 'AKIAPEWEOXUOQON52UAA', secretAccessKey: '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'});
AWS.config.region = 'cn-north-1';
var kinesis = new AWS.Kinesis();

function putStream(text) {
    var params = {
      Data: text, 
      PartitionKey: 'pk', 
      StreamName: 'danmaku', 
    };
    kinesis.putRecord(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else
        $("#notification").html("消息已发送！");
        $("#textarea").val("");
        //console.log(data);
    });

}