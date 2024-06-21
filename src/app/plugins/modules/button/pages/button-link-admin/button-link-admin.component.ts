import { Component } from '@angular/core';
import {AbstractAdminSetting} from "../../../../abstract-class/abstract-admin-setting";
import {ButtonConfigInterface} from "../../interfaces/button-config-interface";
import {FormService} from "../../../../../core/services/form.service";
import {PageListResolverService} from "../../../../../page/services/page-list-resolver.service";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule, NgSwitch} from "@angular/common";

@Component({
  selector: 'app-button-link-admin',
  standalone: true,
  templateUrl: './button-link-admin.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSwitch
  ],
  styleUrls: ['./button-link-admin.component.css']
})
export class ButtonLinkAdminComponent extends AbstractAdminSetting<ButtonConfigInterface> {
  linkType = [{id: 1, name: 'Stránka'}, {id: 2, name: 'Url'}, {id: 3, name: 'Soubor'}];
  public pageList$ = null;

  constructor(
    protected adminFormService: FormService,
    public pageListResolverService: PageListResolverService,
  ) {
    super();
  }
  createAdminForm(settings: ButtonConfigInterface): void {
    this.pageList$ = this.pageListResolverService.getPageList();

    this.adminForm = this.adminFormService.createForm(
      {
        linkType: [null],
        pageId: [null],
      },
      settings
    );
  }
}
