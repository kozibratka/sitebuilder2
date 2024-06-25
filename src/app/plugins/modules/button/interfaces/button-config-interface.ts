import {BasePlugConfigInterface} from "../../../interfaces/base-plug-config-interface";

export interface ButtonConfigInterface extends BasePlugConfigInterface {
  label: string;
  externalUrl?: string;
  fileUrl?: string;
  pageId?: number;
  linkType?: number;
  type?: string;
  position: string;
  targetBlank: boolean;
}
