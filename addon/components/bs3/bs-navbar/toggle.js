import classic from 'ember-classic-decorator';
import { classNames } from '@ember-decorators/component';
import NavbarToggle from 'ember-bootstrap/components/base/bs-navbar/toggle';

@classic
@classNames('navbar-toggle')
export default class Toggle extends NavbarToggle {}
