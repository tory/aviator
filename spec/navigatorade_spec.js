describe('Navigatorade', function () {

  var subject, _navigator, usersResponder, routes;

  beforeEach(function () {
    subject = Navigatorade;
    _navigator = subject._navigator;
    usersResponder = { index: function () {}, show: function () {} };

    routes = {
      '/users': {
        responder: usersResponder,
        '/': 'index'
      }
    };
  });

  afterEach(function () {
    // reset the url
    window.history.replaceState({}, '', '/_SpecRunner.html');
  });

  describe('.setRoutes', function () {
    beforeEach(function () {
      spyOn( _navigator, 'setRoutes' );

      subject.setRoutes();
    });

    it('sets the routes on the _navigator', function () {
      expect( _navigator.setRoutes ).toHaveBeenCalled();
    });
  });

  describe('.dispatch', function () {
    beforeEach(function () {
      spyOn( _navigator, 'setup' );
      spyOn( _navigator, 'dispatch' );

      subject.dispatch();
    });

    it('calls setup on the private navigator object', function () {
      expect( _navigator.setup ).toHaveBeenCalled();
    });

    it('calls dispatch on the private navigator object', function () {
      expect( _navigator.dispatch ).toHaveBeenCalled();
    });

  });

  describe('.navigate', function () {
    var url     = '/partners/whatever',
        options = { showLayout: true };

    beforeEach(function () {
      spyOn( _navigator, 'navigate' );

      subject.navigate( url, options );
    });

    it('calls navigate on the navigator', function () {
      expect( _navigator.navigate ).toHaveBeenCalledWith( url, options );
    });
  });

});
