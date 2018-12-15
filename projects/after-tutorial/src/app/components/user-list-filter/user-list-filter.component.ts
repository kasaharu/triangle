import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UserListFilter } from '../../state';

@Component({
  selector: 'at-user-list-filter',
  templateUrl: './user-list-filter.component.html',
  styleUrls: ['./user-list-filter.component.scss'],
})
export class UserListFilterComponent implements OnInit {
  @Input()
  set value(value: UserListFilter) {
    this.setFormValue(value);
  }

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({ nameFilter: [''] });
  }

  ngOnInit() {}

  private setFormValue(value: UserListFilter) {
    this.form.setValue(value);
  }
}
