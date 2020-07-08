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

});
