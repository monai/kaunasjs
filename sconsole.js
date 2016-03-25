var sconsole = require('sconsole');

sconsole.setup({
  upto: sconsole.priority.info,
  ident: 'theapp',
  stdio: process.stdin.isTTY,
  syslog: {
    upto: sconsole.priority.error // overrides value in parent object
  }
});

sconsole.error('error message');
sconsole.warn('warning message');
sconsole.info('info message');
