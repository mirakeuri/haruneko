import type { IAppWindow } from '../../engine/platform/AppWindow';
import type { IFrontendModule } from '../IFrontend';
import App from './App.vue';
import { createApp } from 'vue';

class SingleMedia implements IFrontendModule {
    async Render(root: HTMLElement, windowController: IAppWindow): Promise<void> {
        const app = createApp(App);
        app.mount(root);
        app.component('WindowController', windowController);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

export default new SingleMedia();