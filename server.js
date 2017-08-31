var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
        <html>
          <head>
              <title>
                  ${title}
              </title>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link href="/ui/style.css" rel="stylesheet" />
          </head> 
          <body>
              <div class="container">
                  <div>
                      <a href="/">Home</a>
                  </div>
                  <hr/>
                  <h3>
                      ${heading}
                  </h3>
                  <div>
                    ${content}
                  </div>
              </div>
          </body>
        </html>
        `;
    return htmlTemplate;
}
    
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one.html', function (req, res) {
    var data = {
    "title": "Article 1",
    "heading" : "Article 1 heading",
    "content": "Article 1 content"
};

  res.send(data);
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 80; // Use 8080 for local development because you might already have apache running on 80
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
