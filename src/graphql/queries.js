/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContactTableAsExample = /* GraphQL */ `
  query GetContactTableAsExample(
    $lastName: String!
    $firstName: String!
    $age: Int!
  ) {
    getContactTableAsExample(
      lastName: $lastName
      firstName: $firstName
      age: $age
    ) {
      lastName
      firstName
      age
      favoriteColor
      favoriteFood
      createdAt
      updatedAt
    }
  }
`;
export const listContactTableAsExamples = /* GraphQL */ `
  query ListContactTableAsExamples(
    $lastName: String
    $firstNameAge: ModelContactTableAsExamplePrimaryCompositeKeyConditionInput
    $filter: ModelContactTableAsExampleFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listContactTableAsExamples(
      lastName: $lastName
      firstNameAge: $firstNameAge
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        lastName
        firstName
        age
        favoriteColor
        favoriteFood
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChannels = /* GraphQL */ `
  query GetChannels($id: ID!, $shows: String!, $active: String!) {
    getChannels(id: $id, shows: $shows, active: $active) {
      id
      shows
      active
      createdAt
      createdByEmail
      createdById
      updatedAt
    }
  }
`;
export const listChannels = /* GraphQL */ `
  query ListChannels(
    $id: ID
    $showsActive: ModelchannelsPrimaryCompositeKeyConditionInput
    $filter: ModelchannelsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listChannels(
      id: $id
      showsActive: $showsActive
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        shows
        active
        createdAt
        createdByEmail
        createdById
        updatedAt
      }
      nextToken
    }
  }
`;
export const getShows = /* GraphQL */ `
  query GetShows($id: ID!, $videos: String!, $active: String!) {
    getShows(id: $id, videos: $videos, active: $active) {
      id
      videos
      active
      createdAt
      createdByEmail
      createdById
      updatedAt
    }
  }
`;
export const listShows = /* GraphQL */ `
  query ListShows(
    $id: ID
    $videosActive: ModelshowsPrimaryCompositeKeyConditionInput
    $filter: ModelshowsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listShows(
      id: $id
      videosActive: $videosActive
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        videos
        active
        createdAt
        createdByEmail
        createdById
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVideos = /* GraphQL */ `
  query GetVideos($id: ID!, $eventId: ID!, $channelId: ID!) {
    getVideos(id: $id, eventId: $eventId, channelId: $channelId) {
      id
      eventId
      channelId
      isProcessed
      isUploaded
      bandId
      createdAt
      createdByEmail
      createdById
      date
      venue
      location
      description
      price
      publicUrl
      updatedAt
    }
  }
`;
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $id: ID
    $eventIdChannelId: ModelvideosPrimaryCompositeKeyConditionInput
    $filter: ModelvideosFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listVideos(
      id: $id
      eventIdChannelId: $eventIdChannelId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        eventId
        channelId
        isProcessed
        isUploaded
        bandId
        createdAt
        createdByEmail
        createdById
        date
        venue
        location
        description
        price
        publicUrl
        updatedAt
      }
      nextToken
    }
  }
`;
export const contactsByFavoriteColor = /* GraphQL */ `
  query ContactsByFavoriteColor(
    $lastName: String
    $favoriteColor: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelContactTableAsExampleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contactsByFavoriteColor(
      lastName: $lastName
      favoriteColor: $favoriteColor
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        lastName
        firstName
        age
        favoriteColor
        favoriteFood
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const contactsByFavoriteFoorAndColor = /* GraphQL */ `
  query ContactsByFavoriteFoorAndColor(
    $favoriteFood: String
    $favoriteColor: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelContactTableAsExampleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contactsByFavoriteFoorAndColor(
      favoriteFood: $favoriteFood
      favoriteColor: $favoriteColor
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        lastName
        firstName
        age
        favoriteColor
        favoriteFood
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const isVideoProcessed = /* GraphQL */ `
  query IsVideoProcessed(
    $id: ID
    $isProcessedIsUploaded: ModelvideosIsProcessedCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelvideosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    isVideoProcessed(
      id: $id
      isProcessedIsUploaded: $isProcessedIsUploaded
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventId
        channelId
        isProcessed
        isUploaded
        bandId
        createdAt
        createdByEmail
        createdById
        date
        venue
        location
        description
        price
        publicUrl
        updatedAt
      }
      nextToken
    }
  }
`;
export const isAssociatedToBand = /* GraphQL */ `
  query IsAssociatedToBand(
    $id: ID
    $bandId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelvideosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    isAssociatedToBand(
      id: $id
      bandId: $bandId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventId
        channelId
        isProcessed
        isUploaded
        bandId
        createdAt
        createdByEmail
        createdById
        date
        venue
        location
        description
        price
        publicUrl
        updatedAt
      }
      nextToken
    }
  }
`;
