import classic from 'ember-classic-decorator';
import { computed } from '@ember/object';
import FormElementLayoutHorizontal from 'ember-bootstrap/components/base/bs-form/element/layout/horizontal';
import { isBlank } from '@ember/utils';

@classic
export default class Horizontal extends FormElementLayoutHorizontal {
  /**
   * Computed property that specifies the Bootstrap offset grid class for form controls within a horizontal layout
   * form, that have no label.
   *
   * @property horizontalInputOffsetGridClass
   * @type string
   * @readonly
   * @private
   */
  @computed('horizontalLabelGridClass')
  get horizontalInputOffsetGridClass() {
    if (isBlank(this.get('horizontalLabelGridClass'))) {
      return undefined;
    }
    let parts = this.get('horizontalLabelGridClass').split('-');
    parts.splice(0, 1, 'offset');
    return parts.join('-');
  }
}
