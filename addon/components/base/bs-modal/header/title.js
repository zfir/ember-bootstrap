import classic from 'ember-classic-decorator';
import { classNames, tagName, layout as templateLayout } from '@ember-decorators/component';
import Component from '@ember/component';
import layout from 'ember-bootstrap/templates/components/bs-modal/header/title';

/**

 @class ModalHeaderTitle
 @namespace Components
 @extends Ember.Component
 @private
 */
@classic
@templateLayout(layout)
@tagName('h4')
@classNames('modal-title')
export default class Title extends Component {}
