module.exports = {
  'database': 'mongodb://localhost:27017/ng2_Form',
  'secret': 'cvwjhbhb439bb3b22234uuu2123', // change this to a hard to guess random string. it's for jwt encryption and decryption
  'api_user': 'YOUR SENDGRID USERNAME',
  'api_key': 'YOUR SENDGRID PASSWORD',
  'jwtExpire': '72h' //set the jwtExpire in smaller period in production
};

