function ElectronicDevices(name, voltage){
  this.name = name,
  this.voltage = voltage,
  this.getInfo = function(on_off) {
      if (on_off == 'On') {
      if (voltage > 220) {
      console.log(`The power grid is overloaded!`)
    } else {
      console.log(`The current load on the power grid is: ${Math.round(voltage*100/220)} %`)
    }
      console.log(`The ${name} is working from the mains, the required voltage is ${voltage} V. The device is ON`)
    }
      if (on_off == 'Off') {
       console.log(`The ${name} is working from the mains, the required voltage is ${voltage} V. The device is OFF`)
      }
  }
}

function BaseCharacteristics(country, material) {
  this.country = country,
  this.material = material,
  this.getInfo = function(name) {
    console.log(`The ${name} from ${material} made in ${country}`)
  }
}


const lamp = new ElectronicDevices('lamp', 140)
const computer = new ElectronicDevices('computer', 120)
const electricKettle = new BaseCharacteristics('China' ,'glass')


computer.getInfo('On')
lamp.getInfo('Off')
electricKettle.getInfo('electric kettle')