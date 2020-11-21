import { module, test } from 'qunit';
import { setup, visit } from 'ember-cli-fastboot-testing/test-support';

module('FastBoot | tooltip', function (hooks) {
  setup(hooks);

  test('it renders', async function (assert) {
    await visit('/fastboot/tooltip');

    assert.dom('.btn').exists();
    assert.dom('.tooltip').doesNotExist();
  });
});
