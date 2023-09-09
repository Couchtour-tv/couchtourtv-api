/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        __typename
      }
      priceDescription {
        id
        description
        type
        __typename
      }
      eventDetail {
        id
        description
        type
        __typename
      }
      createdAt
      updatedAt
      __typename
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
          __typename
        }
        priceDescription {
          id
          description
          type
          __typename
        }
        eventDetail {
          id
          description
          type
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
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
        items {
          id
          transactionId
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      attemptSuccess
      errorObject
      paymentIntent
      creditCard {
        id
        userID
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
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
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
      creditCardId
      Purchase {
        id
        userID
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
        merchandisePurchases {
          nextToken
          __typename
        }
        creditCard {
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
        paymentIntent
        transactions {
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
        creditCardId
        transactionId
        lastFour
        createdAt
        updatedAt
        __typename
      }
      purchaseId
      createdAt
      updatedAt
      __typename
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
          nextToken
          __typename
        }
        attemptSuccess
        errorObject
        paymentIntent
        creditCard {
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
        creditCardId
        Purchase {
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
        purchaseId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
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
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
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
  }
`;
export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
    getCart(id: $id) {
      id
      merchandise {
        items {
          id
          merchandiseId
          cartId
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
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        merchandise {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPicture = /* GraphQL */ `
  query GetPicture($id: ID!) {
    getPicture(id: $id) {
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
  }
`;
export const listPictures = /* GraphQL */ `
  query ListPictures(
    $filter: ModelPictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
      id
      name
      owner
      file {
        bucket
        region
        key
        __typename
      }
      displayName
      band
      date
      videoURL
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        owner
        file {
          bucket
          region
          key
          __typename
        }
        displayName
        band
        date
        videoURL
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSubscriptionModel = /* GraphQL */ `
  query GetSubscriptionModel($id: ID!) {
    getSubscriptionModel(id: $id) {
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
        transactions {
          nextToken
          __typename
        }
        merchandisePurchases {
          nextToken
          __typename
        }
        active
        createdBy
        updatedBy
        isEvent
        streamMetaData {
          streamId
          eventId
          bandName
          promoter
          videoURL
          nameOfEvent
          location
          promoterLogo
          timeOfEvent
          isLive
          landingImageUrl
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        date
        eventId
        productId
        priceId
        price
        platformFee
        stripeMetaData
        carts {
          nextToken
          __typename
        }
        VODMetaData {
          band
          date
          venue
          location
          maestro_channel
          description
          price
          videoURL
          __typename
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
          __typename
        }
        packageMerchandise {
          nextToken
          __typename
        }
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
        subscriptionId
        package {
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
        packageId
        decomissionedMerchandises {
          nextToken
          __typename
        }
        version
        associatedMerchandise {
          nextToken
          __typename
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      subscriptionMerchandise {
        items {
          id
          merchandiseId
          subscriptionId
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
export const listSubscriptionModels = /* GraphQL */ `
  query ListSubscriptionModels(
    $filter: ModelSubscriptionModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscriptionModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
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
      merchandisePurchases {
        items {
          id
          purchaseId
          merchandiseId
          active
          merchandiseVersion
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      creditCard {
        id
        userID
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
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
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
      paymentIntent
      transactions {
        id
        userID
        merchID
        merchandise {
          nextToken
          __typename
        }
        attemptSuccess
        errorObject
        paymentIntent
        creditCard {
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
        creditCardId
        Purchase {
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
        purchaseId
        createdAt
        updatedAt
        __typename
      }
      creditCardId
      transactionId
      lastFour
      createdAt
      updatedAt
      __typename
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
        merchandisePurchases {
          nextToken
          __typename
        }
        creditCard {
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
        paymentIntent
        transactions {
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
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
      nextToken
      __typename
    }
  }
`;
export const getEntitlement = /* GraphQL */ `
  query GetEntitlement($id: ID!) {
    getEntitlement(id: $id) {
      id
      merchandiseId
      merchandise {
        id
        type
        transactions {
          nextToken
          __typename
        }
        merchandisePurchases {
          nextToken
          __typename
        }
        active
        createdBy
        updatedBy
        isEvent
        streamMetaData {
          streamId
          eventId
          bandName
          promoter
          videoURL
          nameOfEvent
          location
          promoterLogo
          timeOfEvent
          isLive
          landingImageUrl
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        date
        eventId
        productId
        priceId
        price
        platformFee
        stripeMetaData
        carts {
          nextToken
          __typename
        }
        VODMetaData {
          band
          date
          venue
          location
          maestro_channel
          description
          price
          videoURL
          __typename
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
          __typename
        }
        packageMerchandise {
          nextToken
          __typename
        }
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
        subscriptionId
        package {
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
        packageId
        decomissionedMerchandises {
          nextToken
          __typename
        }
        version
        associatedMerchandise {
          nextToken
          __typename
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userID
      fromSubscription
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listEntitlements = /* GraphQL */ `
  query ListEntitlements(
    $filter: ModelEntitlementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEntitlements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
        userID
        fromSubscription
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAccessCode = /* GraphQL */ `
  query GetAccessCode($id: ID!) {
    getAccessCode(id: $id) {
      id
      merchandiseId
      code
      userId
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAccessCodes = /* GraphQL */ `
  query ListAccessCodes(
    $filter: ModelAccessCodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccessCodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        merchandiseId
        code
        userId
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPackage = /* GraphQL */ `
  query GetPackage($id: ID!) {
    getPackage(id: $id) {
      id
      name
      description
      price
      priceId
      platformFee
      productId
      active
      userID
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
      merchandiseId
      merchandise {
        id
        type
        transactions {
          nextToken
          __typename
        }
        merchandisePurchases {
          nextToken
          __typename
        }
        active
        createdBy
        updatedBy
        isEvent
        streamMetaData {
          streamId
          eventId
          bandName
          promoter
          videoURL
          nameOfEvent
          location
          promoterLogo
          timeOfEvent
          isLive
          landingImageUrl
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        date
        eventId
        productId
        priceId
        price
        platformFee
        stripeMetaData
        carts {
          nextToken
          __typename
        }
        VODMetaData {
          band
          date
          venue
          location
          maestro_channel
          description
          price
          videoURL
          __typename
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
          __typename
        }
        packageMerchandise {
          nextToken
          __typename
        }
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
        subscriptionId
        package {
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
        packageId
        decomissionedMerchandises {
          nextToken
          __typename
        }
        version
        associatedMerchandise {
          nextToken
          __typename
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      packageMerchandise {
        items {
          id
          merchandiseId
          packageId
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
export const listPackages = /* GraphQL */ `
  query ListPackages(
    $filter: ModelPackageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPackages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        userPackages {
          nextToken
          __typename
        }
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
        packageMerchandise {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
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
      nextToken
      __typename
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
        createdByUser {
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
        invitedUserID
        createdByUserID
        chatRoomID
        chatRoom {
          id
          lastMessageID
          chatRoomName
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
      nextToken
      __typename
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
      nextToken
      __typename
    }
  }
`;
export const getTicketTracker = /* GraphQL */ `
  query GetTicketTracker($id: ID!) {
    getTicketTracker(id: $id) {
      id
      ga
      vip
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTicketTrackers = /* GraphQL */ `
  query ListTicketTrackers(
    $filter: ModelTicketTrackerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTicketTrackers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ga
        vip
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOnDemandFeaturedShow = /* GraphQL */ `
  query GetOnDemandFeaturedShow($id: ID!) {
    getOnDemandFeaturedShow(id: $id) {
      id
      merchId
      merch {
        id
        type
        transactions {
          nextToken
          __typename
        }
        merchandisePurchases {
          nextToken
          __typename
        }
        active
        createdBy
        updatedBy
        isEvent
        streamMetaData {
          streamId
          eventId
          bandName
          promoter
          videoURL
          nameOfEvent
          location
          promoterLogo
          timeOfEvent
          isLive
          landingImageUrl
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        date
        eventId
        productId
        priceId
        price
        platformFee
        stripeMetaData
        carts {
          nextToken
          __typename
        }
        VODMetaData {
          band
          date
          venue
          location
          maestro_channel
          description
          price
          videoURL
          __typename
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
          __typename
        }
        packageMerchandise {
          nextToken
          __typename
        }
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
        subscriptionId
        package {
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
        packageId
        decomissionedMerchandises {
          nextToken
          __typename
        }
        version
        associatedMerchandise {
          nextToken
          __typename
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
          __typename
        }
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
export const listOnDemandFeaturedShows = /* GraphQL */ `
  query ListOnDemandFeaturedShows(
    $filter: ModelOnDemandFeaturedShowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOnDemandFeaturedShows(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        merchId
        merch {
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFeaturedSubscription = /* GraphQL */ `
  query GetFeaturedSubscription($id: ID!) {
    getFeaturedSubscription(id: $id) {
      id
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFeaturedSubscriptions = /* GraphQL */ `
  query ListFeaturedSubscriptions(
    $filter: ModelFeaturedSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeaturedSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMerchandise = /* GraphQL */ `
  query GetMerchandise($id: ID!) {
    getMerchandise(id: $id) {
      id
      type
      transactions {
        items {
          id
          transactionId
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      merchandisePurchases {
        items {
          id
          purchaseId
          merchandiseId
          active
          merchandiseVersion
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      active
      createdBy
      updatedBy
      isEvent
      streamMetaData {
        streamId
        eventId
        bandName
        promoter
        videoURL
        nameOfEvent
        location
        promoterLogo
        timeOfEvent
        isLive
        landingImageUrl
        eventFeature {
          id
          description
          type
          __typename
        }
        priceDescription {
          id
          description
          type
          __typename
        }
        eventDetail {
          id
          description
          type
          __typename
        }
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
      name
      description
      image {
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
      date
      eventId
      productId
      priceId
      price
      platformFee
      stripeMetaData
      carts {
        items {
          id
          merchandiseId
          cartId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      VODMetaData {
        band
        date
        venue
        location
        maestro_channel
        description
        price
        videoURL
        __typename
      }
      bandMerchType
      subscriptionMerchandise {
        items {
          id
          merchandiseId
          subscriptionId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      packageMerchandise {
        items {
          id
          merchandiseId
          packageId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
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
      subscriptionId
      package {
        id
        name
        description
        price
        priceId
        platformFee
        productId
        active
        userID
        userPackages {
          nextToken
          __typename
        }
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
        packageMerchandise {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      packageId
      decomissionedMerchandises {
        items {
          id
          updatedByUserId
          updatedByUserEmail
          previousMerchId
          decomissionedMerchandiseJSON
          version
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      version
      associatedMerchandise {
        items {
          id
          associatedMerchandiseId
          associatedToId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      associatedMerchandiseEnabled
      bandMerchandise {
        items {
          id
          bandId
          merchandiseId
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
        transactions {
          nextToken
          __typename
        }
        merchandisePurchases {
          nextToken
          __typename
        }
        active
        createdBy
        updatedBy
        isEvent
        streamMetaData {
          streamId
          eventId
          bandName
          promoter
          videoURL
          nameOfEvent
          location
          promoterLogo
          timeOfEvent
          isLive
          landingImageUrl
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        date
        eventId
        productId
        priceId
        price
        platformFee
        stripeMetaData
        carts {
          nextToken
          __typename
        }
        VODMetaData {
          band
          date
          venue
          location
          maestro_channel
          description
          price
          videoURL
          __typename
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
          __typename
        }
        packageMerchandise {
          nextToken
          __typename
        }
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
        subscriptionId
        package {
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
        packageId
        decomissionedMerchandises {
          nextToken
          __typename
        }
        version
        associatedMerchandise {
          nextToken
          __typename
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBand = /* GraphQL */ `
  query GetBand($id: ID!) {
    getBand(id: $id) {
      id
      bandName
      createdBy
      updatedBy
      website
      logo {
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
      email
      bandMerchandise {
        items {
          id
          bandId
          merchandiseId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      socialMediaLinks {
        twitterLink
        facebookLink
        instagramLink
        twitchLink
        youtubeLink
        tiktokLink
        __typename
      }
      createdAt
      updatedAt
      __typename
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
        createdBy
        updatedBy
        website
        logo {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        email
        bandMerchandise {
          nextToken
          __typename
        }
        socialMediaLinks {
          twitterLink
          facebookLink
          instagramLink
          twitchLink
          youtubeLink
          tiktokLink
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAssociatedMerchandise = /* GraphQL */ `
  query GetAssociatedMerchandise($id: ID!) {
    getAssociatedMerchandise(id: $id) {
      id
      associatedMerchandise {
        id
        type
        transactions {
          nextToken
          __typename
        }
        merchandisePurchases {
          nextToken
          __typename
        }
        active
        createdBy
        updatedBy
        isEvent
        streamMetaData {
          streamId
          eventId
          bandName
          promoter
          videoURL
          nameOfEvent
          location
          promoterLogo
          timeOfEvent
          isLive
          landingImageUrl
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        date
        eventId
        productId
        priceId
        price
        platformFee
        stripeMetaData
        carts {
          nextToken
          __typename
        }
        VODMetaData {
          band
          date
          venue
          location
          maestro_channel
          description
          price
          videoURL
          __typename
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
          __typename
        }
        packageMerchandise {
          nextToken
          __typename
        }
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
        subscriptionId
        package {
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
        packageId
        decomissionedMerchandises {
          nextToken
          __typename
        }
        version
        associatedMerchandise {
          nextToken
          __typename
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      associatedMerchandiseId
      associatedTo {
        id
        type
        transactions {
          nextToken
          __typename
        }
        merchandisePurchases {
          nextToken
          __typename
        }
        active
        createdBy
        updatedBy
        isEvent
        streamMetaData {
          streamId
          eventId
          bandName
          promoter
          videoURL
          nameOfEvent
          location
          promoterLogo
          timeOfEvent
          isLive
          landingImageUrl
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        date
        eventId
        productId
        priceId
        price
        platformFee
        stripeMetaData
        carts {
          nextToken
          __typename
        }
        VODMetaData {
          band
          date
          venue
          location
          maestro_channel
          description
          price
          videoURL
          __typename
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
          __typename
        }
        packageMerchandise {
          nextToken
          __typename
        }
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
        subscriptionId
        package {
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
        packageId
        decomissionedMerchandises {
          nextToken
          __typename
        }
        version
        associatedMerchandise {
          nextToken
          __typename
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      associatedToId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAssociatedMerchandises = /* GraphQL */ `
  query ListAssociatedMerchandises(
    $filter: ModelAssociatedMerchandiseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssociatedMerchandises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        associatedMerchandise {
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
        associatedMerchandiseId
        associatedTo {
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
        associatedToId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDecomissionedMerchandise = /* GraphQL */ `
  query GetDecomissionedMerchandise($id: ID!) {
    getDecomissionedMerchandise(id: $id) {
      id
      updatedByUserId
      updatedByUserEmail
      previousMerchId
      merchandise {
        id
        type
        transactions {
          nextToken
          __typename
        }
        merchandisePurchases {
          nextToken
          __typename
        }
        active
        createdBy
        updatedBy
        isEvent
        streamMetaData {
          streamId
          eventId
          bandName
          promoter
          videoURL
          nameOfEvent
          location
          promoterLogo
          timeOfEvent
          isLive
          landingImageUrl
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        date
        eventId
        productId
        priceId
        price
        platformFee
        stripeMetaData
        carts {
          nextToken
          __typename
        }
        VODMetaData {
          band
          date
          venue
          location
          maestro_channel
          description
          price
          videoURL
          __typename
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
          __typename
        }
        packageMerchandise {
          nextToken
          __typename
        }
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
        subscriptionId
        package {
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
        packageId
        decomissionedMerchandises {
          nextToken
          __typename
        }
        version
        associatedMerchandise {
          nextToken
          __typename
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      decomissionedMerchandiseJSON
      version
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDecomissionedMerchandises = /* GraphQL */ `
  query ListDecomissionedMerchandises(
    $filter: ModelDecomissionedMerchandiseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDecomissionedMerchandises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        updatedByUserId
        updatedByUserEmail
        previousMerchId
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
        decomissionedMerchandiseJSON
        version
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDefaultPlatformFeePercentages = /* GraphQL */ `
  query GetDefaultPlatformFeePercentages($id: ID!) {
    getDefaultPlatformFeePercentages(id: $id) {
      id
      ticket_stream_event
      ticket_stream_event_FeeName
      vod
      vodFeeName
      package
      packageFeeName
      subscription
      subscriptionFeeName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDefaultPlatformFeePercentagess = /* GraphQL */ `
  query ListDefaultPlatformFeePercentagess(
    $filter: ModelDefaultPlatformFeePercentagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDefaultPlatformFeePercentagess(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ticket_stream_event
        ticket_stream_event_FeeName
        vod
        vodFeeName
        package
        packageFeeName
        subscription
        subscriptionFeeName
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getContact = /* GraphQL */ `
  query GetContact($lastName: String!, $firstName: String!, $age: Int!) {
    getContact(lastName: $lastName, firstName: $firstName, age: $age) {
      lastName
      firstName
      age
      favoriteColor
      favoriteFood
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $lastName: String
    $firstNameAge: ModelContactPrimaryCompositeKeyConditionInput
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listContacts(
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
        __typename
      }
      nextToken
      __typename
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
        transactions {
          nextToken
          __typename
        }
        purchases {
          nextToken
          __typename
        }
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
  }
`;
export const getUserByStripeCustomerId = /* GraphQL */ `
  query GetUserByStripeCustomerId(
    $stripeCustomerId: String
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserByStripeCustomerId(
      stripeCustomerId: $stripeCustomerId
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
      nextToken
      __typename
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
      nextToken
      __typename
    }
  }
`;
export const acccessCodesbyCode = /* GraphQL */ `
  query AcccessCodesbyCode(
    $code: String
    $merchandiseId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAccessCodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    acccessCodesbyCode(
      code: $code
      merchandiseId: $merchandiseId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        merchandiseId
        code
        userId
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChatRoomUserByUserID = /* GraphQL */ `
  query GetChatRoomUserByUserID(
    $userID: ID
    $chatRoomID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getChatRoomUserByUserID(
      userID: $userID
      chatRoomID: $chatRoomID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChatRoomUsersByChatRoomID = /* GraphQL */ `
  query GetChatRoomUsersByChatRoomID(
    $chatRoomID: ID
    $userID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getChatRoomUsersByChatRoomID(
      chatRoomID: $chatRoomID
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
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
      nextToken
      __typename
    }
  }
`;
export const getMerchandiseBySubscriptionId = /* GraphQL */ `
  query GetMerchandiseBySubscriptionId(
    $subscriptionId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelMerchandiseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getMerchandiseBySubscriptionId(
      subscriptionId: $subscriptionId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        transactions {
          nextToken
          __typename
        }
        merchandisePurchases {
          nextToken
          __typename
        }
        active
        createdBy
        updatedBy
        isEvent
        streamMetaData {
          streamId
          eventId
          bandName
          promoter
          videoURL
          nameOfEvent
          location
          promoterLogo
          timeOfEvent
          isLive
          landingImageUrl
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        date
        eventId
        productId
        priceId
        price
        platformFee
        stripeMetaData
        carts {
          nextToken
          __typename
        }
        VODMetaData {
          band
          date
          venue
          location
          maestro_channel
          description
          price
          videoURL
          __typename
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
          __typename
        }
        packageMerchandise {
          nextToken
          __typename
        }
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
        subscriptionId
        package {
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
        packageId
        decomissionedMerchandises {
          nextToken
          __typename
        }
        version
        associatedMerchandise {
          nextToken
          __typename
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMerchandiseByPackageId = /* GraphQL */ `
  query GetMerchandiseByPackageId(
    $packageId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelMerchandiseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getMerchandiseByPackageId(
      packageId: $packageId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        transactions {
          nextToken
          __typename
        }
        merchandisePurchases {
          nextToken
          __typename
        }
        active
        createdBy
        updatedBy
        isEvent
        streamMetaData {
          streamId
          eventId
          bandName
          promoter
          videoURL
          nameOfEvent
          location
          promoterLogo
          timeOfEvent
          isLive
          landingImageUrl
          __typename
        }
        accessCodes {
          nextToken
          __typename
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
          __typename
        }
        pictureId
        date
        eventId
        productId
        priceId
        price
        platformFee
        stripeMetaData
        carts {
          nextToken
          __typename
        }
        VODMetaData {
          band
          date
          venue
          location
          maestro_channel
          description
          price
          videoURL
          __typename
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
          __typename
        }
        packageMerchandise {
          nextToken
          __typename
        }
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
        subscriptionId
        package {
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
        packageId
        decomissionedMerchandises {
          nextToken
          __typename
        }
        version
        associatedMerchandise {
          nextToken
          __typename
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const contactsByFavoriteColor = /* GraphQL */ `
  query ContactsByFavoriteColor(
    $lastName: String
    $favoriteColor: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelContactFilterInput
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const contactsByFavoriteFoorAndColor = /* GraphQL */ `
  query ContactsByFavoriteFoorAndColor(
    $favoriteFood: String
    $favoriteColor: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelContactFilterInput
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
        __typename
      }
      nextToken
      __typename
    }
  }
`;
