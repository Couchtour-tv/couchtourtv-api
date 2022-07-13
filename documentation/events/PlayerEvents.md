PlayerEvents.md




PURPOSE 

	to create DB records when player events occur

EVENTS

	EVENT_ENUM
		MEDIA_START
		MEDIA_STOP

	
	DATA 
		action: EVENT_ENUM
		currentSliderTime:  (media playtime slider in seconds)
		timestamp createdAt 
		userId
		mediaId:  videoId|audioId
		entitlementId


{ action: MEDIA_START, currentSliderTime, userId: cognitoUserId, mediaId, entitlementId }
{ action: MEDIA_STOP, currentSliderTime, userId: cognitoUserId, mediaId, entitlementId }



