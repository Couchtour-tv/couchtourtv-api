/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContactTableAsExample = /* GraphQL */ `
  mutation CreateContactTableAsExample(
    $input: CreateContactTableAsExampleInput!
    $condition: ModelContactTableAsExampleConditionInput
  ) {
    createContactTableAsExample(input: $input, condition: $condition) {
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
export const updateContactTableAsExample = /* GraphQL */ `
  mutation UpdateContactTableAsExample(
    $input: UpdateContactTableAsExampleInput!
    $condition: ModelContactTableAsExampleConditionInput
  ) {
    updateContactTableAsExample(input: $input, condition: $condition) {
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
export const deleteContactTableAsExample = /* GraphQL */ `
  mutation DeleteContactTableAsExample(
    $input: DeleteContactTableAsExampleInput!
    $condition: ModelContactTableAsExampleConditionInput
  ) {
    deleteContactTableAsExample(input: $input, condition: $condition) {
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
export const createChannels = /* GraphQL */ `
  mutation CreateChannels(
    $input: CreateChannelsInput!
    $condition: ModelchannelsConditionInput
  ) {
    createChannels(input: $input, condition: $condition) {
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
export const updateChannels = /* GraphQL */ `
  mutation UpdateChannels(
    $input: UpdateChannelsInput!
    $condition: ModelchannelsConditionInput
  ) {
    updateChannels(input: $input, condition: $condition) {
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
export const deleteChannels = /* GraphQL */ `
  mutation DeleteChannels(
    $input: DeleteChannelsInput!
    $condition: ModelchannelsConditionInput
  ) {
    deleteChannels(input: $input, condition: $condition) {
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
export const createShows = /* GraphQL */ `
  mutation CreateShows(
    $input: CreateShowsInput!
    $condition: ModelshowsConditionInput
  ) {
    createShows(input: $input, condition: $condition) {
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
export const updateShows = /* GraphQL */ `
  mutation UpdateShows(
    $input: UpdateShowsInput!
    $condition: ModelshowsConditionInput
  ) {
    updateShows(input: $input, condition: $condition) {
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
export const deleteShows = /* GraphQL */ `
  mutation DeleteShows(
    $input: DeleteShowsInput!
    $condition: ModelshowsConditionInput
  ) {
    deleteShows(input: $input, condition: $condition) {
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
export const createVideos = /* GraphQL */ `
  mutation CreateVideos(
    $input: CreateVideosInput!
    $condition: ModelvideosConditionInput
  ) {
    createVideos(input: $input, condition: $condition) {
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
export const updateVideos = /* GraphQL */ `
  mutation UpdateVideos(
    $input: UpdateVideosInput!
    $condition: ModelvideosConditionInput
  ) {
    updateVideos(input: $input, condition: $condition) {
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
export const deleteVideos = /* GraphQL */ `
  mutation DeleteVideos(
    $input: DeleteVideosInput!
    $condition: ModelvideosConditionInput
  ) {
    deleteVideos(input: $input, condition: $condition) {
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
