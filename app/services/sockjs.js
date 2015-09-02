import Ember from 'ember';
var run = Ember.run;  
var socket;

export default Ember.Service.extend({
    setupSockjs: function() {
        socket = new SockJS('http://localhost:7000/echo');
        socket.addEventListener('mark', run.bind(this, function(event) {
            this.trigger('markReceived', event.data);
            console.log(event.data);
        }));
    }.on('init'),

    sendInfo: function(mark) {
        socket.send(mark);
        console.log(socket);
    }
});
