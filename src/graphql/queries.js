/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBand = /* GraphQL */ `
  query GetBand($id: ID!) {
    getBand(id: $id) {
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
export const listBands = /* GraphQL */ `
  query ListBands(
    $filter: ModelBandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBands(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMerchandise = /* GraphQL */ `
  query GetMerchandise($id: ID!) {
    getMerchandise(id: $id) {
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
export const listMerchandises = /* GraphQL */ `
  query ListMerchandises(
    $filter: ModelMerchandiseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMerchandises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      completedSignUp
      username
      avatar
      awayMessageStatus
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
          brand
          email
          expMonth
          expYear
          lastFour
          paymentMethodObj
          created
          postalCode
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      transactions {
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
      subscriptionId
      accessToken
      idToken
      refreshToken
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        completedSignUp
        username
        avatar
        awayMessageStatus
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactions {
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
        subscriptionId
        accessToken
        idToken
        refreshToken
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
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
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPurchase = /* GraphQL */ `
  query GetPurchase($id: ID!) {
    getPurchase(id: $id) {
      id
      userID
      user {
        id
        completedSignUp
        username
        avatar
        awayMessageStatus
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactions {
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
        subscriptionId
        accessToken
        idToken
        refreshToken
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
          awayMessageStatus
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          subscriptionId
          accessToken
          idToken
          refreshToken
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
        brand
        email
        expMonth
        expYear
        lastFour
        paymentMethodObj
        created
        postalCode
        name
        createdAt
        updatedAt
      }
      transactions {
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
export const listPurchases = /* GraphQL */ `
  query ListPurchases(
    $filter: ModelPurchaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPurchases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        user {
          id
          completedSignUp
          username
          avatar
          awayMessageStatus
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          subscriptionId
          accessToken
          idToken
          refreshToken
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
          brand
          email
          expMonth
          expYear
          lastFour
          paymentMethodObj
          created
          postalCode
          name
          createdAt
          updatedAt
        }
        transactions {
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
      nextToken
    }
  }
`;
export const getCreditCard = /* GraphQL */ `
  query GetCreditCard($id: ID!) {
    getCreditCard(id: $id) {
      id
      userID
      user {
        id
        completedSignUp
        username
        avatar
        awayMessageStatus
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactions {
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
        subscriptionId
        accessToken
        idToken
        refreshToken
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
          awayMessageStatus
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          subscriptionId
          accessToken
          idToken
          refreshToken
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
          brand
          email
          expMonth
          expYear
          lastFour
          paymentMethodObj
          created
          postalCode
          name
          createdAt
          updatedAt
        }
        transactions {
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
      brand
      email
      expMonth
      expYear
      lastFour
      paymentMethodObj
      created
      postalCode
      name
      createdAt
      updatedAt
    }
  }
`;
export const listCreditCards = /* GraphQL */ `
  query ListCreditCards(
    $filter: ModelCreditCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCreditCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        user {
          id
          completedSignUp
          username
          avatar
          awayMessageStatus
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          subscriptionId
          accessToken
          idToken
          refreshToken
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
        brand
        email
        expMonth
        expYear
        lastFour
        paymentMethodObj
        created
        postalCode
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatRoomUser = /* GraphQL */ `
  query GetChatRoomUser($id: ID!) {
    getChatRoomUser(id: $id) {
      id
      userID
      chatRoomID
      user {
        id
        completedSignUp
        username
        avatar
        awayMessageStatus
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactions {
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
        subscriptionId
        accessToken
        idToken
        refreshToken
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
export const listChatRoomUsers = /* GraphQL */ `
  query ListChatRoomUsers(
    $filter: ModelChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRoomUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        chatRoomID
        user {
          id
          completedSignUp
          username
          avatar
          awayMessageStatus
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          subscriptionId
          accessToken
          idToken
          refreshToken
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
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
          awayMessageStatus
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          subscriptionId
          accessToken
          idToken
          refreshToken
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
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getInvitation = /* GraphQL */ `
  query GetInvitation($id: ID!) {
    getInvitation(id: $id) {
      id
      invitedUser {
        id
        completedSignUp
        username
        avatar
        awayMessageStatus
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactions {
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
        subscriptionId
        accessToken
        idToken
        refreshToken
        createdAt
        updatedAt
      }
      createdByUser {
        id
        completedSignUp
        username
        avatar
        awayMessageStatus
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactions {
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
        subscriptionId
        accessToken
        idToken
        refreshToken
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
export const listInvitations = /* GraphQL */ `
  query ListInvitations(
    $filter: ModelInvitationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvitations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        invitedUser {
          id
          completedSignUp
          username
          avatar
          awayMessageStatus
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          subscriptionId
          accessToken
          idToken
          refreshToken
          createdAt
          updatedAt
        }
        createdByUser {
          id
          completedSignUp
          username
          avatar
          awayMessageStatus
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          subscriptionId
          accessToken
          idToken
          refreshToken
          createdAt
          updatedAt
        }
        invitedUserID
        createdByUserID
        chatRoomID
        chatRoom {
          id
          lastMessageID
          createdAt
          updatedAt
        }
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
        awayMessageStatus
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactions {
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
        subscriptionId
        accessToken
        idToken
        refreshToken
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          awayMessageStatus
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          subscriptionId
          accessToken
          idToken
          refreshToken
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
      nextToken
    }
  }
`;
export const getUserByUsername = /* GraphQL */ `
  query GetUserByUsername(
    $username: String
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        completedSignUp
        username
        avatar
        awayMessageStatus
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactions {
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
        subscriptionId
        accessToken
        idToken
        refreshToken
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSubscriptionIdByUserId = /* GraphQL */ `
  query GetSubscriptionIdByUserId(
    $id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getSubscriptionIdByUserId(
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        completedSignUp
        username
        avatar
        awayMessageStatus
        chatRoomUser {
          nextToken
        }
        invitation {
          nextToken
        }
        creditCards {
          nextToken
        }
        transactions {
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
        subscriptionId
        accessToken
        idToken
        refreshToken
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCreditCardByUserID = /* GraphQL */ `
  query GetCreditCardByUserID(
    $userID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelCreditCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCreditCardByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        user {
          id
          completedSignUp
          username
          avatar
          awayMessageStatus
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          subscriptionId
          accessToken
          idToken
          refreshToken
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
        brand
        email
        expMonth
        expYear
        lastFour
        paymentMethodObj
        created
        postalCode
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const messagesByChatRoom = /* GraphQL */ `
  query MessagesByChatRoom(
    $chatRoomID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatRoom(
      chatRoomID: $chatRoomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          awayMessageStatus
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          subscriptionId
          accessToken
          idToken
          refreshToken
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
      nextToken
    }
  }
`;
