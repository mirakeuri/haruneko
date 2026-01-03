import type { IFrontendInfo } from "../IFrontend";
import { FrontendResourceKey as R } from '../../i18n/ILocale';

export const Info: IFrontendInfo = {
    ID: 'single-media',
    Label: R.Frontend_SingleMedia_Label,
    Description: R.Frontend_SingleMedia_Description,
    Screenshots: [],
    LoadModule: async () => (await import('./SingleMedia')).default
};