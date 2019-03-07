var app = new Vue({
    el: '#app',
    data: {
        num: 25
    },
    methods: {
    },
    watch: {
        num: function(val) {
            //do something when the data changes.
            if(_canvas){
                _canvas.freeDrawingBrush.width = val;
                _canvas.renderAll();
            }
        }
    }
});
