module.exports = function (kibana) {
    return new kibana.Plugin({
        uiExports: {
            visType: ['plugins/ly-k4p-clock/clock']
        }
    });
}; 