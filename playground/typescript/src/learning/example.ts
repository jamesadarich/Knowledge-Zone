import test = require('test-folder/UserInAFolder');

function greet(person : IUser){
  return 'hello, ' + person.firstName + '!';
}

console.log(greet(new test.UserInAFolder('james', 'richford')));
