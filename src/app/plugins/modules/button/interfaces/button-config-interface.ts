import {BasePlugConfigInterface} from "../../../interfaces/base-plug-config-interface";

export interface ButtonConfigInterface extends BasePlugConfigInterface {
  label: string;
  externalUrl?: string;
  fileUrl?: string;
  pageId?: number;
  pageUrl?: string;
  linkType?: number;
  type?: string;
  position: string;
  targetBlank: boolean;
}
