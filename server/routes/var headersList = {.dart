var headersList = {
 'Accept': '*/*',
 'User-Agent': 'Thunder Client (https://www.thunderclient.com)' 
};
var url = Uri.parse('https://localhost:3000/api/signup');

var req = http.Request('POST', url);
req.headers.addAll(headersList);

var res = await req.send();
final resBody = await res.stream.bytesToString();

if (res.statusCode >= 200 && res.statusCode < 300) {
  print(resBody);
}
else {
  print(res.reasonPhrase);
}