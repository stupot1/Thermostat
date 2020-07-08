describe('Thermostat', function() {

  var t;

  beforeEach(function() {
    t = new Thermostat();
  });

  it("should start with temperature of 20", function() {
    expect(t.temp).toEqual(20);
  });

  it("can increase temp by 1 when up funtion called with input 1", function() {
    t.up(1);
    expect(t.temp).toEqual(21);
  })
  it("can decrease temp by 1 when down funtion called with input 1", function() {
    t.down(1);
    expect(t.temp).toEqual(19);
  })
});
