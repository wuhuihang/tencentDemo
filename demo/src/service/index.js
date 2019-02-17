import Utils from './Utils.js';

const services = [
    Utils
];

export default {
    install(Vue) {
        let $services = {};
        services.map(service => {
            if (service.name) {
                $services['$' + service.name] = service;
            }
        });
        Vue.prototype.$services = $services;
    }
}