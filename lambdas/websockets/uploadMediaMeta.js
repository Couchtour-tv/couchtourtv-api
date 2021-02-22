import Responses from '../common/API_Responses';
import Dynamo from '../common/Dynamo';
import { MediaMetaTableName } from '../common/constants';

exports.handler = async event => {
    
    console.log('-----------------------------', '\n');
    console.log(':: uploadMediatMeta.js', '\n');
    const { connectionId, domainName, stage, requestId } = event.requestContext;
    const postData = JSON.parse(event.body).message;

    console.log('[12] postData:', postData);
    Dynamo.write(postData, SocketTableName);

    console.log('[15] pre-return message');
    return Responses._200({ 
        success: true,
        message: 'media_meta_uploaded' 
    });
};
