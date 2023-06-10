import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
    init(url) {
        const webSocket = new WebSocket(url);
        webSocket.onmessage = this._onMessageHandler;
    },

    _onMessageHandler(message) {
        const restos = JSON.parse(message.data);
    
        NotificationHelper.sendNotification({
            name: `${restos.name} is on cinema!`,
            options: {
                body: restos.description,
                image: `${CONFIG.BASE_IMAGE_URL + restos.pictureId}`,
            },
        });
    },
};

export default WebSocketInitiator;