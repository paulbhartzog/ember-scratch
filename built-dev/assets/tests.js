'use strict';

define('ember-scratch/tests/acceptance/about-test', ['exports', 'qunit', 'ember-scratch/tests/helpers/module-for-acceptance'], function (exports, _qunit, _emberScratchTestsHelpersModuleForAcceptance) {

  (0, _emberScratchTestsHelpersModuleForAcceptance['default'])('Acceptance | about');

  (0, _qunit.test)('visiting /about', function (assert) {
    visit('/about');

    andThen(function () {
      assert.equal(currentURL(), '/about');
    });
  });
});
define('ember-scratch/tests/acceptance/about-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | acceptance/about-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/about-test.js should pass jshint.');
  });
});
define('ember-scratch/tests/acceptance/application-test', ['exports', 'qunit', 'ember-scratch/tests/helpers/module-for-acceptance'], function (exports, _qunit, _emberScratchTestsHelpersModuleForAcceptance) {

  (0, _emberScratchTestsHelpersModuleForAcceptance['default'])('Acceptance | index');

  (0, _qunit.test)('visiting /', function (assert) {
    visit('/');

    andThen(function () {
      assert.equal(currentURL(), '/');
    });
  });

  (0, _qunit.test)('should link to information about the company.', function (assert) {
    visit('/');
    click('a:contains("About")');
    andThen(function () {
      assert.equal(currentURL(), '/about', 'should navigate to about');
    });
  });

  (0, _qunit.test)('should link to contact information', function (assert) {
    visit('/');
    click('a:contains("Contact")');
    andThen(function () {
      assert.equal(currentURL(), '/contact', 'should navigate to contact');
    });
  });
});
define('ember-scratch/tests/acceptance/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | acceptance/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/application-test.js should pass jshint.');
  });
});
define('ember-scratch/tests/acceptance/contact-test', ['exports', 'qunit', 'ember-scratch/tests/helpers/module-for-acceptance'], function (exports, _qunit, _emberScratchTestsHelpersModuleForAcceptance) {

  (0, _emberScratchTestsHelpersModuleForAcceptance['default'])('Acceptance | contact');

  (0, _qunit.test)('visiting /contact', function (assert) {
    visit('/contact');

    andThen(function () {
      assert.equal(currentURL(), '/contact');
    });
  });
});
define('ember-scratch/tests/acceptance/contact-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | acceptance/contact-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/contact-test.js should pass jshint.');
  });
});
define('ember-scratch/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('ember-scratch/tests/components/nav-bar.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/nav-bar.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/nav-bar.js should pass jshint.');
  });
});
define('ember-scratch/tests/ember-scratch/templates/about.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - ember-scratch/templates/about.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-scratch/templates/about.hbs should pass TemplateLint.\n');
  });
});
define('ember-scratch/tests/ember-scratch/templates/application.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - ember-scratch/templates/application.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-scratch/templates/application.hbs should pass TemplateLint.\n');
  });
});
define('ember-scratch/tests/ember-scratch/templates/components/nav-bar.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - ember-scratch/templates/components/nav-bar.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-scratch/templates/components/nav-bar.hbs should pass TemplateLint.\n');
  });
});
define('ember-scratch/tests/ember-scratch/templates/contact.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - ember-scratch/templates/contact.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-scratch/templates/contact.hbs should pass TemplateLint.\n');
  });
});
define('ember-scratch/tests/ember-scratch/templates/index.template-lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('TemplateLint - ember-scratch/templates/index.hbs');
  QUnit.test('should pass TemplateLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-scratch/templates/index.hbs should pass TemplateLint.\n');
  });
});
define('ember-scratch/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('ember-scratch/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('ember-scratch/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'ember-scratch/tests/helpers/start-app', 'ember-scratch/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _emberScratchTestsHelpersStartApp, _emberScratchTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _emberScratchTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _emberScratchTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('ember-scratch/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('ember-scratch/tests/helpers/resolver', ['exports', 'ember-scratch/resolver', 'ember-scratch/config/environment'], function (exports, _emberScratchResolver, _emberScratchConfigEnvironment) {

  var resolver = _emberScratchResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberScratchConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberScratchConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('ember-scratch/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('ember-scratch/tests/helpers/start-app', ['exports', 'ember', 'ember-scratch/app', 'ember-scratch/config/environment'], function (exports, _ember, _emberScratchApp, _emberScratchConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _emberScratchConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _emberScratchApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('ember-scratch/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('ember-scratch/tests/integration/components/nav-bar-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('nav-bar', 'Integration | Component | nav bar', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(0);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.8.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 11
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'nav-bar', ['loc', [null, [1, 0], [1, 11]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })()));
    //assert.equal(this.$().text().trim(), '');
  });
});
define('ember-scratch/tests/integration/components/nav-bar-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/nav-bar-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/nav-bar-test.js should pass jshint.');
  });
});
define('ember-scratch/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('ember-scratch/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('ember-scratch/tests/routes/about.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/about.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass jshint.');
  });
});
define('ember-scratch/tests/routes/contact.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/contact.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contact.js should pass jshint.');
  });
});
define('ember-scratch/tests/test-helper', ['exports', 'ember-scratch/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberScratchTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberScratchTestsHelpersResolver['default']);
});
define('ember-scratch/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('ember-scratch/tests/unit/routes/about-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-scratch/tests/unit/routes/about-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/about-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass jshint.');
  });
});
define('ember-scratch/tests/unit/routes/contact-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:contact', 'Unit | Route | contact', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-scratch/tests/unit/routes/contact-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/contact-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contact-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('ember-scratch/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map