import Plugin from '../components/Plugin.vue'

export default {
    install: (app, options) => {
        app.config.globalProperties.$first = () => {
            console.log('Tina!!! Can you believe this??? You make a plugin from a scratch!!!')
        }
        
        app.component('Plugin', Plugin)
    }
}