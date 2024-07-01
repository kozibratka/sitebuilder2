import { Injectable } from '@angular/core';
import {AbstractPluginResolver} from '../../../page/services/abstract-classes/abstract-plugin-resolver';
import {PluginIdentifier} from '../../shared/constants/plugin-identifier';
import {IconAdminComponent} from "../pages/icon-admin/icon-admin.component";
import {IconConfigInterface} from "../interfaces/icon-config-interface";
import {IconComponent} from "../components/icon/icon.component";


@Injectable({
  providedIn: 'root'
})
export class IconResolverService extends AbstractPluginResolver<IconConfigInterface>{

  constructor() { super(); }

  get componentClass(): new(...args: any[]) => {} {
    return IconComponent;
  }

  adminComponentsClass = [
    {
      label: 'Ikonka',
      component: IconAdminComponent,
      path: ''
    },
  ];

  getMenuImage(): string {
    return 'hotel_class';
  }

  get identifier(): string {
    return PluginIdentifier.ICON_V1;
  }

  get description(): string {
    return 'Ikonka';
  }

  get name(): string {
    return 'Ikonka';
  }

  isAutoResizeHeight(): boolean {
    return false;
  }

  gridWidth(): number {
    return 9;
  }

  gridHeight(): number {
    return 18;
  }

  getEmptySettings(): IconConfigInterface {
    return {
      identifier: PluginIdentifier.ICON_V1,
      icon: '',
      position: 'center',
      size: "5x",
    };
  }
}
