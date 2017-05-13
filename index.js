module.exports = function (kibana) {
    return new kibana.Plugin({
        uiExports: {
            visTypes: ['plugins/ly_k4p_clock/clock']
        }
    });
}; 