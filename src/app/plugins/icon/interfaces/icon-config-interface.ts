import {BasePlugConfigInterface} from "../../shared/interfaces/base-plug-config-interface";
import {LinkAblePluginInterface} from "../../shared/interfaces/link-able-plugin-interface";
import {SizeProp} from "@fortawesome/fontawesome-svg-core";

export interface IconConfigInterface  extends BasePlugConfigInterface, LinkAblePluginInterface {
  icon: string;
  position: string;
  size: SizeProp;
}
