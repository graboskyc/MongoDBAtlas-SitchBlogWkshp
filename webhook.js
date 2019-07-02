// This function is the webhook's request handler.
exports = async function(payload, response) {
    const aws = context.services.get('aws');
    const httpService = context.services.get("hook");
    
    var uri = payload.query.uri;
    var args = {"url":uri, "headers": {"Content-Type":["image/jpeg"]}};
    var req = httpService.get(args);
    var img = await req;
    
    try {
        var awsreq = aws.rekognition().DetectLabels({"Image": {"Bytes":img.body}});
        var res = await awsreq;
        return res;
      } catch (error) {
        console.log(JSON.stringify(error));
        return error;
      }
  };