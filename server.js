{
  "name": "nasim-wedding-local",
  "version": "1.0.0",
  "private": true,
  "description": "\u0646\u0638\u0627\u0645 \u0645\u062c\u0645\u0648\u0639\u0629 \u0627\u0644\u0646\u0633\u064a\u0645 \u0627\u0644\u0645\u062d\u0644\u064a",
  "main": "server-turso.js",
  "scripts": {
    "start": "node server-turso.js",
    "check": "node --check server.js && node --check public/app.js"
  },
  "engines": {
    "node": ">=20"
  },
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "better-sqlite3": "^12.10.1",
    "cookie-parser": "^1.4.7",
    "express": "^4.21.2",
    "helmet": "^8.0.0",
    "jsonwebtoken": "^9.0.2",
    "pg": "^8.23.1",
    "qrcode": "^1.5.4",
    "@libsql/client": "^0.14.0"
  }
}