# realtime-danmaku
This is a realtime danmaku(弹幕) app built for pure serverless architecture on AWS S3, Kinesis Streams.

*danmaku-display.html*      A danmaku display web page, can be hosted on S3.

*danmaku-emitter.html*      Danmaku emitting client written in JQeury Mobile & HTML5, should be put into S3 bucket and hosted as static website as well, users can open this page on their cellphone and send danmaku accordingly.

*profanity-list.txt*      A profanity words list that prevend somebody send bad things. You can customize this list as you want, generally the regular expression is used for matching the profanity words.

*js/readstream.js*      Javascript for reading danamku stream from AWS Kinesis.

*js/putstream.js*     Javascript for ingesting danmaku into AWS Kinesis stream, it is invoked by Danmaku emitter client.
