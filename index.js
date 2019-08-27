exports.helloPubSub = (event, context) => {
    try {
        const pubsubMessage = event.data;
        console.log(Buffer.from(pubsubMessage, 'base64').toString());
    
        console.info('helloPubSub finish.');
    } catch (error) {
        console.error(error);
    }
};
