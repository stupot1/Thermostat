describe('Thermostat', function() {

  var t;

  beforeEach(function() {
    t = new Thermostat();
  });

  it("should start with temperature of 20", function() {
    expect(t.temperature).toEqual(20);
  });

  it("can increase temp by 1 when up function called with input 1", function() {
    t.up(1);
    expect(t.temperature).toEqual(21);
  })

  it("can decrease temp by 1 when down function called with input 1", function() {
    t.down(1);
    expect(t.temperature).toEqual(19);
  })

  it("will set temp to MIN_TEMP if down tries to set it lower", function() {
    t.down(11);
    expect(t.temperature).toEqual(t.MIN_TEMPERATURE);
  })

  it("is power saving mode on & true", function() {
    expect(t.powerSavingMode).toBe(true);
  })

  it("has a default max temperature of 25, with powerSavingMode on", function() {
    expect(t.MAX_TEMPERATURE).toEqual(25);
  })

  it("has a max temperature of 32 degrees when power saving mode is off", function() {
    t.PowerSavingOff();
    expect(t.MAX_TEMPERATURE).toEqual(32);
  })

  it("has a max temperature of 25 degrees when power saving mode is on", function() {
    t.PowerSavingOff();
    t.PowerSavingOn();
    expect(t.MAX_TEMPERATURE).toEqual(25);
  })

  it("has a function to reset the temperature to 20 degrees", function() {
    t.up(5);
    t.resetTemperature();
    expect(t.temperature).toEqual(20);
  })

  describe('displaying usage levels', function() {

    describe('when the usage is lower than 18', function () {
      it('is described as low usage', function () {
        t.down(3);
        expect(t.energyUsage()).toEqual('low-usage');
      })

    })

    describe('when the usage is lower than or equal to 25', function () {
      it('is described as medium usage', function () {
        t.up(5);
        expect(t.energyUsage()).toEqual('medium-usage');
      })

    })

    describe('when the usage is more than 25', function () {
      it('is described as high usage', function () {
        t.up(6);
        expect(t.energyUsage()).toEqual('high-usage');
      })

    })

  })

});
