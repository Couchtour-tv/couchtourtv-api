import Responses from '../common/API_Responses';
import Dynamo from '../common/Dynamo';
import { MediaMetaTableName } from '../common/constants';
import { v4 as uuidv4 } from 'uuid';


exports.handler = async event => {

    // const { connectionId, domainName, stage, requestId } = event.requestContext;
    let postData = JSON.parse(event.body).message.values;

    /*
        "ID" swap btwn payload and db write
        TODO -- make robust

        uuid generationg for [artist and movie] is prototypical
            just neeed a fast and dirty to prototype the db write

    */
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
