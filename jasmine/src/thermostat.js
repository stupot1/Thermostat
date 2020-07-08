class Thermostat{
  
  constructor(){
    this.temperature = 20;
    this.MIN_TEMPERATURE = 10;
  } 

  up(input){
    this.temperature +=input;
  }

  down(input){

    //var desiredTemperature = this.temperature - input;

    if (( this.temperature - input ) < this.MIN_TEMPERATURE ){
      this.temperature = this.MIN_TEMPERATURE;
    } else {
      this.temperature = this.temperature - input;
    }
  }

};
