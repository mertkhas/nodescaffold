'use strict';

describe('Service: alert', function () {

  // load the service's module
  beforeEach(module('p01App'));

  // instantiate service
  var alert;
  beforeEach(inject(function (_alert_) {
    alert = _alert_;
  }));

  it('should do something', function () {
    expect(!!alert).toBe(true);
  });

});