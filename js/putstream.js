//Please update your AK/SK right here
AWS.config.update({accessKeyId: '', secretAccessKey: ''});
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
