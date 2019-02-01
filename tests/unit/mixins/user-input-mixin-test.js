import EmberObject from '@ember/object';
import UserInputMixinMixin from 'portfolio/mixins/user-input-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | user-input-mixin', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let UserInputMixinObject = EmberObject.extend(UserInputMixinMixin);
    let subject = UserInputMixinObject.create();
    assert.ok(subject);
  });
});
