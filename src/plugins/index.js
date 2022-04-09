import Plugin from '../components/Plugin.vue'

export default {
    install: (app, options) => {
        app.config.globalProperties.$first = () => {
            console.log('Make a plugin from scratch!!!')
        }
        
        app.component('Plugin', Plugin)
    }
}
