
var actor = {
    name: 'Krish',
    realName: 'Hrithik Roshan'
  };
  var name     = actor.name;
  var realName = actor.realName;
  console.log(name);     // => 'Krish',
  console.log(realName);
 

var actor = {
name: 'Krish',
realName: 'Hrithik Roshan'
};

({name,realName} = actor);
console.log(name);     // => 'Krish',
console.log(realName);
