/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const newOnCreateMessage = /* GraphQL */ `
  subscription NewOnCreateMessage {
    newOnCreateMessage {
      id
      createdAt
      content
      userID
      chatRoomID
      user {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        chatRoomName
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        createdAt
        updatedAt
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onCreateInviteByInvitedUserID = /* GraphQL */ `
  subscription OnCreateInviteByInvitedUserID($invitedUserID: ID!) {
    onCreateInviteByInvitedUserID(invitedUserID: $invitedUserID) {
      id
      invitedUser {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdByUser {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      invitedUserID
      createdByUserID
      chatRoomID
      chatRoom {
        id
        chatRoomUsers {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        chatRoomName
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        createdAt
        updatedAt
        __typename
      }
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateInviteByCreatedByUserID = /* GraphQL */ `
  subscription OnCreateInviteByCreatedByUserID($createdByUserID: ID!) {
    onCreateInviteByCreatedByUserID(createdByUserID: $createdByUserID) {
      id
      invitedUser {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdByUser {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      invitedUserID
      createdByUserID
      chatRoomID
      chatRoom {
        id
        chatRoomUsers {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        chatRoomName
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        createdAt
        updatedAt
        __typename
      }
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateInviteByChatRoomID = /* GraphQL */ `
  subscription OnCreateInviteByChatRoomID($chatRoomID: ID!) {
    onCreateInviteByChatRoomID(chatRoomID: $chatRoomID) {
      id
      invitedUser {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdByUser {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      invitedUserID
      createdByUserID
      chatRoomID
      chatRoom {
        id
        chatRoomUsers {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        chatRoomName
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        createdAt
        updatedAt
        __typename
      }
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateInviteByCreatedByUserID = /* GraphQL */ `
  subscription OnUpdateInviteByCreatedByUserID($createdByUserID: ID!) {
    onUpdateInviteByCreatedByUserID(createdByUserID: $createdByUserID) {
      id
      invitedUser {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdByUser {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      invitedUserID
      createdByUserID
      chatRoomID
      chatRoom {
        id
        chatRoomUsers {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        chatRoomName
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        createdAt
        updatedAt
        __typename
      }
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateInviteByInvitedUserID = /* GraphQL */ `
  subscription OnUpdateInviteByInvitedUserID($invitedUserID: ID!) {
    onUpdateInviteByInvitedUserID(invitedUserID: $invitedUserID) {
      id
      invitedUser {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdByUser {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      invitedUserID
      createdByUserID
      chatRoomID
      chatRoom {
        id
        chatRoomUsers {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        chatRoomName
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        createdAt
        updatedAt
        __typename
      }
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateInviteByChatRoomID = /* GraphQL */ `
  subscription OnUpdateInviteByChatRoomID($chatRoomID: ID!) {
    onUpdateInviteByChatRoomID(chatRoomID: $chatRoomID) {
      id
      invitedUser {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdByUser {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      invitedUserID
      createdByUserID
      chatRoomID
      chatRoom {
        id
        chatRoomUsers {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        chatRoomName
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        createdAt
        updatedAt
        __typename
      }
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateChatRoomUserByUserID = /* GraphQL */ `
  subscription OnCreateChatRoomUserByUserID($userID: ID!) {
    onCreateChatRoomUserByUserID(userID: $userID) {
      id
      userID
      chatRoomID
      user {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        chatRoomName
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteChatRoomUserByUserID = /* GraphQL */ `
  subscription OnDeleteChatRoomUserByUserID($userID: ID!) {
    onDeleteChatRoomUserByUserID(userID: $userID) {
      id
      userID
      chatRoomID
      user {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        chatRoomName
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateChatRoomUserByChatRoomID = /* GraphQL */ `
  subscription OnCreateChatRoomUserByChatRoomID($chatRoomID: ID!) {
    onCreateChatRoomUserByChatRoomID(chatRoomID: $chatRoomID) {
      id
      userID
      chatRoomID
      user {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        chatRoomName
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteChatRoomUserByChatRoomID = /* GraphQL */ `
  subscription OnDeleteChatRoomUserByChatRoomID($chatRoomID: ID!) {
    onDeleteChatRoomUserByChatRoomID(chatRoomID: $chatRoomID) {
      id
      userID
      chatRoomID
      user {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        chatRoomName
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateMessageByChatRoomID = /* GraphQL */ `
  subscription OnCreateMessageByChatRoomID($chatRoomID: ID!) {
    onCreateMessageByChatRoomID(chatRoomID: $chatRoomID) {
      id
      createdAt
      content
      userID
      chatRoomID
      user {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        chatRoomName
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        createdAt
        updatedAt
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUserByID = /* GraphQL */ `
  subscription OnUpdateUserByID($id: ID!) {
    onUpdateUserByID(id: $id) {
      id
      completedSignUp
      username
      avatar
      picture {
        id
        name
        owner
        file {
          bucket
          region
          key
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      pictureId
      awayMessageStatus
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      invitation {
        items {
          id
          invitedUserID
          createdByUserID
          chatRoomID
          status
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      lastUsedCardID
      creditCards {
        items {
          id
          userID
          status
          active
          deleted
          brand
          email
          expMonth
          expYear
          lastFour
          paymentMethodObj
          created
          postalCode
          name
          previousCardId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      transactions {
        items {
          id
          userID
          merchID
          attemptSuccess
          errorObject
          paymentIntent
          creditCardId
          purchaseId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      purchases {
        items {
          id
          userID
          paymentIntent
          creditCardId
          transactionId
          lastFour
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      packages {
        items {
          id
          name
          description
          price
          priceId
          platformFee
          productId
          active
          userID
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      userPackages {
        items {
          id
          userID
          packageId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      cogId
      emailVerified
      loggedIn
      email
      stripeCustomerId
      stripeCustomer
      stripeSubscriptionId
      stripeSubscriptionStatus
      stripeSubscriptionPaused
      stripeSubscriptionCancelAtPeriodEnd
      subscriptionId
      subscriptionModel {
        id
        name
        description
        price
        priceId
        productId
        active
        merchandiseId
        merchandise {
          id
          type
          active
          createdBy
          updatedBy
          isEvent
          name
          description
          pictureId
          date
          eventId
          productId
          priceId
          price
          platformFee
          stripeMetaData
          bandMerchType
          subscriptionId
          packageId
          version
          associatedMerchandiseEnabled
          createdAt
          updatedAt
          __typename
        }
        subscriptionMerchandise {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      accessToken
      idToken
      refreshToken
      cart {
        id
        merchandise {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      cartId
      entitlements {
        items {
          id
          merchandiseId
          userID
          fromSubscription
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      accessCodes {
        items {
          id
          merchandiseId
          code
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTicketTrackerByID = /* GraphQL */ `
  subscription OnUpdateTicketTrackerByID($id: ID!) {
    onUpdateTicketTrackerByID(id: $id) {
      id
      ga
      vip
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      completedSignUp
      username
      avatar
      picture {
        id
        name
        owner
        file {
          bucket
          region
          key
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      pictureId
      awayMessageStatus
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      invitation {
        items {
          id
          invitedUserID
          createdByUserID
          chatRoomID
          status
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      lastUsedCardID
      creditCards {
        items {
          id
          userID
          status
          active
          deleted
          brand
          email
          expMonth
          expYear
          lastFour
          paymentMethodObj
          created
          postalCode
          name
          previousCardId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      transactions {
        items {
          id
          userID
          merchID
          attemptSuccess
          errorObject
          paymentIntent
          creditCardId
          purchaseId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      purchases {
        items {
          id
          userID
          paymentIntent
          creditCardId
          transactionId
          lastFour
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      packages {
        items {
          id
          name
          description
          price
          priceId
          platformFee
          productId
          active
          userID
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      userPackages {
        items {
          id
          userID
          packageId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      cogId
      emailVerified
      loggedIn
      email
      stripeCustomerId
      stripeCustomer
      stripeSubscriptionId
      stripeSubscriptionStatus
      stripeSubscriptionPaused
      stripeSubscriptionCancelAtPeriodEnd
      subscriptionId
      subscriptionModel {
        id
        name
        description
        price
        priceId
        productId
        active
        merchandiseId
        merchandise {
          id
          type
          active
          createdBy
          updatedBy
          isEvent
          name
          description
          pictureId
          date
          eventId
          productId
          priceId
          price
          platformFee
          stripeMetaData
          bandMerchType
          subscriptionId
          packageId
          version
          associatedMerchandiseEnabled
          createdAt
          updatedAt
          __typename
        }
        subscriptionMerchandise {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      accessToken
      idToken
      refreshToken
      cart {
        id
        merchandise {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      cartId
      entitlements {
        items {
          id
          merchandiseId
          userID
          fromSubscription
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      accessCodes {
        items {
          id
          merchandiseId
          code
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      completedSignUp
      username
      avatar
      picture {
        id
        name
        owner
        file {
          bucket
          region
          key
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      pictureId
      awayMessageStatus
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      invitation {
        items {
          id
          invitedUserID
          createdByUserID
          chatRoomID
          status
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      lastUsedCardID
      creditCards {
        items {
          id
          userID
          status
          active
          deleted
          brand
          email
          expMonth
          expYear
          lastFour
          paymentMethodObj
          created
          postalCode
          name
          previousCardId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      transactions {
        items {
          id
          userID
          merchID
          attemptSuccess
          errorObject
          paymentIntent
          creditCardId
          purchaseId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      purchases {
        items {
          id
          userID
          paymentIntent
          creditCardId
          transactionId
          lastFour
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      packages {
        items {
          id
          name
          description
          price
          priceId
          platformFee
          productId
          active
          userID
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      userPackages {
        items {
          id
          userID
          packageId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      cogId
      emailVerified
      loggedIn
      email
      stripeCustomerId
      stripeCustomer
      stripeSubscriptionId
      stripeSubscriptionStatus
      stripeSubscriptionPaused
      stripeSubscriptionCancelAtPeriodEnd
      subscriptionId
      subscriptionModel {
        id
        name
        description
        price
        priceId
        productId
        active
        merchandiseId
        merchandise {
          id
          type
          active
          createdBy
          updatedBy
          isEvent
          name
          description
          pictureId
          date
          eventId
          productId
          priceId
          price
          platformFee
          stripeMetaData
          bandMerchType
          subscriptionId
          packageId
          version
          associatedMerchandiseEnabled
          createdAt
          updatedAt
          __typename
        }
        subscriptionMerchandise {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      accessToken
      idToken
      refreshToken
      cart {
        id
        merchandise {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      cartId
      entitlements {
        items {
          id
          merchandiseId
          userID
          fromSubscription
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      accessCodes {
        items {
          id
          merchandiseId
          code
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      completedSignUp
      username
      avatar
      picture {
        id
        name
        owner
        file {
          bucket
          region
          key
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      pictureId
      awayMessageStatus
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      invitation {
        items {
          id
          invitedUserID
          createdByUserID
          chatRoomID
          status
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      lastUsedCardID
      creditCards {
        items {
          id
          userID
          status
          active
          deleted
          brand
          email
          expMonth
          expYear
          lastFour
          paymentMethodObj
          created
          postalCode
          name
          previousCardId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      transactions {
        items {
          id
          userID
          merchID
          attemptSuccess
          errorObject
          paymentIntent
          creditCardId
          purchaseId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      purchases {
        items {
          id
          userID
          paymentIntent
          creditCardId
          transactionId
          lastFour
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      packages {
        items {
          id
          name
          description
          price
          priceId
          platformFee
          productId
          active
          userID
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      userPackages {
        items {
          id
          userID
          packageId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      cogId
      emailVerified
      loggedIn
      email
      stripeCustomerId
      stripeCustomer
      stripeSubscriptionId
      stripeSubscriptionStatus
      stripeSubscriptionPaused
      stripeSubscriptionCancelAtPeriodEnd
      subscriptionId
      subscriptionModel {
        id
        name
        description
        price
        priceId
        productId
        active
        merchandiseId
        merchandise {
          id
          type
          active
          createdBy
          updatedBy
          isEvent
          name
          description
          pictureId
          date
          eventId
          productId
          priceId
          price
          platformFee
          stripeMetaData
          bandMerchType
          subscriptionId
          packageId
          version
          associatedMerchandiseEnabled
          createdAt
          updatedAt
          __typename
        }
        subscriptionMerchandise {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      accessToken
      idToken
      refreshToken
      cart {
        id
        merchandise {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      cartId
      entitlements {
        items {
          id
          merchandiseId
          userID
          fromSubscription
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      accessCodes {
        items {
          id
          merchandiseId
          code
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateChatRoomUser = /* GraphQL */ `
  subscription OnCreateChatRoomUser {
    onCreateChatRoomUser {
      id
      userID
      chatRoomID
      user {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        chatRoomName
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateChatRoomUser = /* GraphQL */ `
  subscription OnUpdateChatRoomUser {
    onUpdateChatRoomUser {
      id
      userID
      chatRoomID
      user {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        chatRoomName
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteChatRoomUser = /* GraphQL */ `
  subscription OnDeleteChatRoomUser {
    onDeleteChatRoomUser {
      id
      userID
      chatRoomID
      user {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        chatRoomName
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      lastMessageID
      lastMessage {
        id
        createdAt
        content
        userID
        chatRoomID
        user {
          id
          completedSignUp
          username
          avatar
          pictureId
          awayMessageStatus
          lastUsedCardID
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          stripeSubscriptionId
          stripeSubscriptionStatus
          stripeSubscriptionPaused
          stripeSubscriptionCancelAtPeriodEnd
          subscriptionId
          accessToken
          idToken
          refreshToken
          cartId
          createdAt
          updatedAt
          __typename
        }
        chatRoom {
          id
          lastMessageID
          chatRoomName
          pictureId
          createdAt
          updatedAt
          __typename
        }
        updatedAt
        __typename
      }
      invitation {
        items {
          id
          invitedUserID
          createdByUserID
          chatRoomID
          status
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatRoomName
      picture {
        id
        name
        owner
        file {
          bucket
          region
          key
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      pictureId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      lastMessageID
      lastMessage {
        id
        createdAt
        content
        userID
        chatRoomID
        user {
          id
          completedSignUp
          username
          avatar
          pictureId
          awayMessageStatus
          lastUsedCardID
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          stripeSubscriptionId
          stripeSubscriptionStatus
          stripeSubscriptionPaused
          stripeSubscriptionCancelAtPeriodEnd
          subscriptionId
          accessToken
          idToken
          refreshToken
          cartId
          createdAt
          updatedAt
          __typename
        }
        chatRoom {
          id
          lastMessageID
          chatRoomName
          pictureId
          createdAt
          updatedAt
          __typename
        }
        updatedAt
        __typename
      }
      invitation {
        items {
          id
          invitedUserID
          createdByUserID
          chatRoomID
          status
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatRoomName
      picture {
        id
        name
        owner
        file {
          bucket
          region
          key
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      pictureId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      lastMessageID
      lastMessage {
        id
        createdAt
        content
        userID
        chatRoomID
        user {
          id
          completedSignUp
          username
          avatar
          pictureId
          awayMessageStatus
          lastUsedCardID
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          stripeSubscriptionId
          stripeSubscriptionStatus
          stripeSubscriptionPaused
          stripeSubscriptionCancelAtPeriodEnd
          subscriptionId
          accessToken
          idToken
          refreshToken
          cartId
          createdAt
          updatedAt
          __typename
        }
        chatRoom {
          id
          lastMessageID
          chatRoomName
          pictureId
          createdAt
          updatedAt
          __typename
        }
        updatedAt
        __typename
      }
      invitation {
        items {
          id
          invitedUserID
          createdByUserID
          chatRoomID
          status
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      chatRoomName
      picture {
        id
        name
        owner
        file {
          bucket
          region
          key
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      pictureId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateInvitation = /* GraphQL */ `
  subscription OnCreateInvitation {
    onCreateInvitation {
      id
      invitedUser {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdByUser {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      invitedUserID
      createdByUserID
      chatRoomID
      chatRoom {
        id
        chatRoomUsers {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        chatRoomName
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        createdAt
        updatedAt
        __typename
      }
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateInvitation = /* GraphQL */ `
  subscription OnUpdateInvitation {
    onUpdateInvitation {
      id
      invitedUser {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdByUser {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      invitedUserID
      createdByUserID
      chatRoomID
      chatRoom {
        id
        chatRoomUsers {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        chatRoomName
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        createdAt
        updatedAt
        __typename
      }
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteInvitation = /* GraphQL */ `
  subscription OnDeleteInvitation {
    onDeleteInvitation {
      id
      invitedUser {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdByUser {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      invitedUserID
      createdByUserID
      chatRoomID
      chatRoom {
        id
        chatRoomUsers {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        chatRoomName
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        createdAt
        updatedAt
        __typename
      }
      status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      createdAt
      content
      userID
      chatRoomID
      user {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        chatRoomName
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        createdAt
        updatedAt
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      createdAt
      content
      userID
      chatRoomID
      user {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        chatRoomName
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        createdAt
        updatedAt
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      createdAt
      content
      userID
      chatRoomID
      user {
        id
        completedSignUp
        username
        avatar
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        awayMessageStatus
        chatRoomUser {
          nextToken
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        lastUsedCardID
        creditCards {
          nextToken
          __typename
        }
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
        packages {
          nextToken
          __typename
        }
        userPackages {
          nextToken
          __typename
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
        stripeSubscriptionStatus
        stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd
        subscriptionId
        subscriptionModel {
          id
          name
          description
          price
          priceId
          productId
          active
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
          __typename
        }
        cartId
        entitlements {
          nextToken
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
          __typename
        }
        messages {
          nextToken
          __typename
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
          __typename
        }
        invitation {
          nextToken
          __typename
        }
        chatRoomName
        picture {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        createdAt
        updatedAt
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onCreateTicketTracker = /* GraphQL */ `
  subscription OnCreateTicketTracker {
    onCreateTicketTracker {
      id
      ga
      vip
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTicketTracker = /* GraphQL */ `
  subscription OnUpdateTicketTracker {
    onUpdateTicketTracker {
      id
      ga
      vip
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTicketTracker = /* GraphQL */ `
  subscription OnDeleteTicketTracker {
    onDeleteTicketTracker {
      id
      ga
      vip
      createdAt
      updatedAt
      __typename
    }
  }
`;
