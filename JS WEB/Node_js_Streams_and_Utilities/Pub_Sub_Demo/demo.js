const eventBus = require('./eventBus');

let unsubscribe = eventBus.subscribe('arewethereyet', function(town) {

    console.log('yeeeee we are in', town);
});

eventBus.subscribe('customEvent', function() {

    console.log('custom event');
})


eventBus.publish('arewethereyet', 'Dobrich');
eventBus.publish('customEvent');

unsubscribe();

eventBus.publish('arewethereyet', 'Pleven');
eventBus.publish('customEvent');