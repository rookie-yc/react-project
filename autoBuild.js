const http = require('http')
const createHandler = require('github-webhook-handler')
const { spawn } = require('child_process');
const handler = createHandler({ path: '/webhook', secret: '123456'})

function runCommand(command, args, callback) {
  const child = spawn(command, args);
  let resp = '';

  child.stdout.on('data', (buffer) => {
    resp += buffer.toString();
  });

  child.stdout.on('end', () => {
    callback(resp);
  });
}

handler.on('error', (err) => {
  console.error('Error:', err.message);
});

handler.on('push', ({ payload }) => {
  console.log(
    'Received a push event for %s to %s',
    payload.repository.name,
    payload.ref
  );
  
  runCommand('sh', ['./deploy.sh', payload.repository.name], (text) => {
    console.log(text);
  });
});

http.createServer((req, res) => {
  handler(req, res, () => {
    res.statusCode = 404;
    res.end('no such location');
  });
}).listen(7777);