class ElectronicDevices {
  constructor(name, voltage) {
    this.name = name,
    this.voltage = voltage
  }
  getInfo = function(on_off) {
    if (on_off == 'On') { 
      
      if (this.voltage > 220) {
        return `The power grid is overloaded!`
      } else {
        return `The current load on the power grid is: ${Math.round(this.voltage*100/220)} %`
      }
      return `The ${this.name} is working from the mains, the required voltage is ${this.voltage} V. The device is ON`
    }
    if (on_off == 'Off') {
      return `The ${this.name} is working from the mains, the required voltage is ${this.voltage} V. The device is OFF`
    }
  }
}


class BaseCharacteristics extends ElectronicDevices {
  constructor(name, country, material) {
    super(name);
    this.country = country;
    this.material = material;
  }
      getInfo = function() {
      return `The ${this.name} from ${this.material} made in ${this.country}`
    }
}

const lamp = new ElectronicDevices('lamp', 230)
const electricKettle  = new BaseCharacteristics('electric kettle', 'China', 'glass')
console.log(lamp.getInfo('Off'))
console.log(electricKettle.getInfo())