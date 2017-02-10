var builder = require('xmlbuilder');
var xml = builder.create('root').ele('xml1').ele('repo', { 'type': 'git' },
    'git:github.com/oox/bmlx').end({ pretty: true });

console.log(xml);

var swig  = require('swig');
var template = swig.compileFile('template.html');
var output = template({
    pagename: 'awesome people',
    authors: ['Paul', 'Jim', 'Jane']
});
console.log(output);

var fs = require('fs');
let id = 235;
let filename = 'file_prefix_' + id + '.xml';
var stream = fs.createWriteStream(filename);
stream.once('open', function(fd) {
  stream.write(output);
  stream.end();
});
console.info("Generated " + filename);
process.exit();