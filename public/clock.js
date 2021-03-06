require('plugins/ly_k4p_clock/clock.css');
require('plugins/ly_k4p_clock/clockController');
function ClockProvider (Private) {
    var TemplateVisType = Private(require('ui/template_vis_type/template_vis_type'));
    return new TemplateVisType({
        name: 'lyClock', // the internal id of the visualization
        title: 'Clock', // the name shown in the visualize list
        icon: 'fa-clock-o', // the class of the font awesome icon for this
        description: 'Add a digital clock to your dashboard.', // description shown to the users
        requiresSearch: false, // Cannot be linked to a search
        template: require('plugins/ly_k4p_clock/clock.html'), // load the template of the visualization
        params: {
            editor: require('plugins/ly_k4p_clock/clock-editor.html'),
            defaults: {
                format: 'HH:mm:ss'
            }
        }
    });
}
require('ui/registry/vis_types').register(ClockProvider);
