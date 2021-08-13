/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBand = /* GraphQL */ `
  subscription OnCreateBand {
    onCreateBand {
      id
      bandName
      socialMediaLinks {
        id
        band
        website
        logo
        url
      }
      contacts {
        id
        name
      }
      createdBy
      updatedBy
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBand = /* GraphQL */ `
  subscription OnUpdateBand {
    onUpdateBand {
      id
      bandName
      socialMediaLinks {
        id
        band
        website
        logo
        url
      }
      contacts {
        id
        name
      }
      createdBy
      updatedBy
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBand = /* GraphQL */ `
  subscription OnDeleteBand {
    onDeleteBand {
      id
      bandName
      socialMediaLinks {
        id
        band
        website
        logo
        url
      }
      contacts {
        id
        name
      }
      createdBy
      updatedBy
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
      id
      eventId
      bandName
      promoter
      promoterLogo
      timeOfEvent
      isLive
      landingImageUrl
      eventFeature {
        id
        description
        type
      }
      priceDescription {
        id
        description
        type
      }
      eventDetail {
        id
        description
        type
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
      id
      eventId
      bandName
      promoter
      promoterLogo
      timeOfEvent
      isLive
      landingImageUrl
      eventFeature {
        id
        description
        type
      }
      priceDescription {
        id
        description
        type
      }
      eventDetail {
        id
        description
        type
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
      id
      eventId
      bandName
      promoter
      promoterLogo
      timeOfEvent
      isLive
      landingImageUrl
      eventFeature {
        id
        description
        type
      }
      priceDescription {
        id
        description
        type
      }
      eventDetail {
        id
        description
        type
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMerchandise = /* GraphQL */ `
  subscription OnCreateMerchandise {
    onCreateMerchandise {
      id
      type
      metaData {
        id
        priceId
        band {
          id
          bandName
          createdBy
          updatedBy
          createdAt
          updatedAt
        }
        image
      }
      band {
        id
        bandName
        socialMediaLinks {
          id
          band
          website
          logo
          url
        }
        contacts {
          id
          name
        }
        createdBy
        updatedBy
        createdAt
        updatedAt
      }
      active
      createdBy
      updatedBy
      bandId
      isEvent
      eventId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMerchandise = /* GraphQL */ `
  subscription OnUpdateMerchandise {
    onUpdateMerchandise {
      id
      type
      metaData {
        id
        priceId
        band {
          id
          bandName
          createdBy
          updatedBy
          createdAt
          updatedAt
        }
        image
      }
      band {
        id
        bandName
        socialMediaLinks {
          id
          band
          website
          logo
          url
        }
        contacts {
          id
          name
        }
        createdBy
        updatedBy
        createdAt
        updatedAt
      }
      active
      createdBy
      updatedBy
      bandId
      isEvent
      eventId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMerchandise = /* GraphQL */ `
  subscription OnDeleteMerchandise {
    onDeleteMerchandise {
      id
      type
      metaData {
        id
        priceId
        band {
          id
          bandName
          createdBy
          updatedBy
          createdAt
          updatedAt
        }
        image
      }
      band {
        id
        bandName
        socialMediaLinks {
          id
          band
          website
          logo
          url
        }
        contacts {
          id
          name
        }
        createdBy
        updatedBy
        createdAt
        updatedAt
      }
      active
      createdBy
      updatedBy
      bandId
      isEvent
      eventId
      createdAt
      updatedAt
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
      status
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
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
        }
        nextToken
      }
      creditCards {
        items {
          id
          userID
          status
          active
          createdAt
          updatedAt
        }
        nextToken
      }
      transactionAttempts {
        items {
          id
          userID
          merchID
          attemptSuccess
          createdAt
          updatedAt
        }
        nextToken
      }
      purchases {
        items {
          id
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      cogId
      emailVerified
      loggedIn
      email
      stripeCustomerId
      stripeCustomer
      createdAt
      updatedAt
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
      status
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
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
        }
        nextToken
      }
      creditCards {
        items {
          id
          userID
          status
          active
          createdAt
          updatedAt
        }
        nextToken
      }
      transactionAttempts {
        items {
          id
          userID
          merchID
          attemptSuccess
          createdAt
          updatedAt
        }
        nextToken
      }
      purchases {
        items {
          id
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      cogId
      emailVerified
      loggedIn
      email
      stripeCustomerId
      stripeCustomer
      createdAt
      updatedAt
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
      status
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
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
        }
        nextToken
      }
      creditCards {
        items {
          id
          userID
          status
          active
          createdAt
          updatedAt
        }
        nextToken
      }
      transactionAttempts {
        items {
          id
          userID
          merchID
          attemptSuccess
          createdAt
          updatedAt
        }
        nextToken
      }
      purchases {
        items {
          id
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      cogId
      emailVerified
      loggedIn
      email
      stripeCustomerId
      stripeCustomer
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTransactionAttempt = /* GraphQL */ `
  subscription OnCreateTransactionAttempt {
    onCreateTransactionAttempt {
      id
      userID
      merchID
      merchandise {
        id
        type
        metaData {
          id
          priceId
          image
        }
        band {
          id
          bandName
          createdBy
          updatedBy
          createdAt
          updatedAt
        }
        active
        createdBy
        updatedBy
        bandId
        isEvent
        eventId
        createdAt
        updatedAt
      }
      attemptSuccess
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTransactionAttempt = /* GraphQL */ `
  subscription OnUpdateTransactionAttempt {
    onUpdateTransactionAttempt {
      id
      userID
      merchID
      merchandise {
        id
        type
        metaData {
          id
          priceId
          image
        }
        band {
          id
          bandName
          createdBy
          updatedBy
          createdAt
          updatedAt
        }
        active
        createdBy
        updatedBy
        bandId
        isEvent
        eventId
        createdAt
        updatedAt
      }
      attemptSuccess
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTransactionAttempt = /* GraphQL */ `
  subscription OnDeleteTransactionAttempt {
    onDeleteTransactionAttempt {
      id
      userID
      merchID
      merchandise {
        id
        type
        metaData {
          id
          priceId
          image
        }
        band {
          id
          bandName
          createdBy
          updatedBy
          createdAt
          updatedAt
        }
        active
        createdBy
        updatedBy
        bandId
        isEvent
        eventId
        createdAt
        updatedAt
      }
      attemptSuccess
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePurchase = /* GraphQL */ `
  subscription OnCreatePurchase {
    onCreatePurchase {
      id
      userID
      user {
        id
        completedSignUp
        username
        avatar
        status
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactionAttempts {
          nextToken
        }
        purchases {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        createdAt
        updatedAt
      }
      merchandise {
        id
        type
        metaData {
          id
          priceId
          image
        }
        band {
          id
          bandName
          createdBy
          updatedBy
          createdAt
          updatedAt
        }
        active
        createdBy
        updatedBy
        bandId
        isEvent
        eventId
        createdAt
        updatedAt
      }
      creditCard {
        id
        userID
        user {
          id
          completedSignUp
          username
          avatar
          status
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          createdAt
          updatedAt
        }
        purchases {
          id
          userID
          createdAt
          updatedAt
        }
        status
        active
        createdAt
        updatedAt
      }
      transactionAttempt {
        id
        userID
        merchID
        merchandise {
          id
          type
          active
          createdBy
          updatedBy
          bandId
          isEvent
          eventId
          createdAt
          updatedAt
        }
        attemptSuccess
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePurchase = /* GraphQL */ `
  subscription OnUpdatePurchase {
    onUpdatePurchase {
      id
      userID
      user {
        id
        completedSignUp
        username
        avatar
        status
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactionAttempts {
          nextToken
        }
        purchases {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        createdAt
        updatedAt
      }
      merchandise {
        id
        type
        metaData {
          id
          priceId
          image
        }
        band {
          id
          bandName
          createdBy
          updatedBy
          createdAt
          updatedAt
        }
        active
        createdBy
        updatedBy
        bandId
        isEvent
        eventId
        createdAt
        updatedAt
      }
      creditCard {
        id
        userID
        user {
          id
          completedSignUp
          username
          avatar
          status
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          createdAt
          updatedAt
        }
        purchases {
          id
          userID
          createdAt
          updatedAt
        }
        status
        active
        createdAt
        updatedAt
      }
      transactionAttempt {
        id
        userID
        merchID
        merchandise {
          id
          type
          active
          createdBy
          updatedBy
          bandId
          isEvent
          eventId
          createdAt
          updatedAt
        }
        attemptSuccess
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePurchase = /* GraphQL */ `
  subscription OnDeletePurchase {
    onDeletePurchase {
      id
      userID
      user {
        id
        completedSignUp
        username
        avatar
        status
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactionAttempts {
          nextToken
        }
        purchases {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        createdAt
        updatedAt
      }
      merchandise {
        id
        type
        metaData {
          id
          priceId
          image
        }
        band {
          id
          bandName
          createdBy
          updatedBy
          createdAt
          updatedAt
        }
        active
        createdBy
        updatedBy
        bandId
        isEvent
        eventId
        createdAt
        updatedAt
      }
      creditCard {
        id
        userID
        user {
          id
          completedSignUp
          username
          avatar
          status
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          createdAt
          updatedAt
        }
        purchases {
          id
          userID
          createdAt
          updatedAt
        }
        status
        active
        createdAt
        updatedAt
      }
      transactionAttempt {
        id
        userID
        merchID
        merchandise {
          id
          type
          active
          createdBy
          updatedBy
          bandId
          isEvent
          eventId
          createdAt
          updatedAt
        }
        attemptSuccess
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCreditCard = /* GraphQL */ `
  subscription OnCreateCreditCard {
    onCreateCreditCard {
      id
      userID
      user {
        id
        completedSignUp
        username
        avatar
        status
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactionAttempts {
          nextToken
        }
        purchases {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        createdAt
        updatedAt
      }
      purchases {
        id
        userID
        user {
          id
          completedSignUp
          username
          avatar
          status
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          createdAt
          updatedAt
        }
        merchandise {
          id
          type
          active
          createdBy
          updatedBy
          bandId
          isEvent
          eventId
          createdAt
          updatedAt
        }
        creditCard {
          id
          userID
          status
          active
          createdAt
          updatedAt
        }
        transactionAttempt {
          id
          userID
          merchID
          attemptSuccess
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      status
      active
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCreditCard = /* GraphQL */ `
  subscription OnUpdateCreditCard {
    onUpdateCreditCard {
      id
      userID
      user {
        id
        completedSignUp
        username
        avatar
        status
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactionAttempts {
          nextToken
        }
        purchases {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        createdAt
        updatedAt
      }
      purchases {
        id
        userID
        user {
          id
          completedSignUp
          username
          avatar
          status
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          createdAt
          updatedAt
        }
        merchandise {
          id
          type
          active
          createdBy
          updatedBy
          bandId
          isEvent
          eventId
          createdAt
          updatedAt
        }
        creditCard {
          id
          userID
          status
          active
          createdAt
          updatedAt
        }
        transactionAttempt {
          id
          userID
          merchID
          attemptSuccess
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      status
      active
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCreditCard = /* GraphQL */ `
  subscription OnDeleteCreditCard {
    onDeleteCreditCard {
      id
      userID
      user {
        id
        completedSignUp
        username
        avatar
        status
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactionAttempts {
          nextToken
        }
        purchases {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        createdAt
        updatedAt
      }
      purchases {
        id
        userID
        user {
          id
          completedSignUp
          username
          avatar
          status
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          createdAt
          updatedAt
        }
        merchandise {
          id
          type
          active
          createdBy
          updatedBy
          bandId
          isEvent
          eventId
          createdAt
          updatedAt
        }
        creditCard {
          id
          userID
          status
          active
          createdAt
          updatedAt
        }
        transactionAttempt {
          id
          userID
          merchID
          attemptSuccess
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      status
      active
      createdAt
      updatedAt
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
        status
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactionAttempts {
          nextToken
        }
        purchases {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        status
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactionAttempts {
          nextToken
        }
        purchases {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        status
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactionAttempts {
          nextToken
        }
        purchases {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        nextToken
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
          status
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        nextToken
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
          status
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        nextToken
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
          status
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
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
        status
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactionAttempts {
          nextToken
        }
        purchases {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        createdAt
        updatedAt
      }
      createdByUser {
        id
        completedSignUp
        username
        avatar
        status
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactionAttempts {
          nextToken
        }
        purchases {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        createdAt
        updatedAt
      }
      invitedUserID
      createdByUserID
      chatRoomID
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
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
        status
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactionAttempts {
          nextToken
        }
        purchases {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        createdAt
        updatedAt
      }
      createdByUser {
        id
        completedSignUp
        username
        avatar
        status
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactionAttempts {
          nextToken
        }
        purchases {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        createdAt
        updatedAt
      }
      invitedUserID
      createdByUserID
      chatRoomID
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
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
        status
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactionAttempts {
          nextToken
        }
        purchases {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        createdAt
        updatedAt
      }
      createdByUser {
        id
        completedSignUp
        username
        avatar
        status
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactionAttempts {
          nextToken
        }
        purchases {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        createdAt
        updatedAt
      }
      invitedUserID
      createdByUserID
      chatRoomID
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
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
        status
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactionAttempts {
          nextToken
        }
        purchases {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
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
        status
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactionAttempts {
          nextToken
        }
        purchases {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
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
        status
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactionAttempts {
          nextToken
        }
        purchases {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
