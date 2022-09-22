const obj = {
  objProperty: '1',
  
}

const obj2 = Object.create(obj);
obj2.ownProperty2 = '2';
obj2.ownProperty3 = '3';

// console.log(obj2)

function selfProp(prop) {
  for (let key in prop) {
    if (prop.hasOwnProperty(key)) {
      console.log(key + ' : ' + prop[key])
    }
  }
}

selfProp(obj2)