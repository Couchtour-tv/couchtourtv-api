import Responses from '../common/API_Responses';
import Dynamo from '../common/Dynamo';
import { MediaMetaTableName } from '../common/constants';
import { v4 as uuidv4 } from 'uuid';

exports.handler = async event => {

    let postData = JSON.parse(event.body).message.values;

    postData.ID = postData.id;
    postData.movieId = uuidv4();
    postData.artistId = uuidv4();
    delete postData.id;

    Dynamo.write(postData, MediaMetaTableName );

    return Responses._200({
        success: true,
        message: 'media_meta_uploaded'
    });
};
