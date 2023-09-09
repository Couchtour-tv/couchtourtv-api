/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createCartMerchandise = /* GraphQL */ `
  mutation CreateCartMerchandise(
    $input: CreateCartMerchandiseInput!
    $condition: ModelCartMerchandiseConditionInput
  ) {
    createCartMerchandise(input: $input, condition: $condition) {
      id
      merchandiseId
      cartId
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCartMerchandise = /* GraphQL */ `
  mutation UpdateCartMerchandise(
    $input: UpdateCartMerchandiseInput!
    $condition: ModelCartMerchandiseConditionInput
  ) {
    updateCartMerchandise(input: $input, condition: $condition) {
      id
      merchandiseId
      cartId
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCartMerchandise = /* GraphQL */ `
  mutation DeleteCartMerchandise(
    $input: DeleteCartMerchandiseInput!
    $condition: ModelCartMerchandiseConditionInput
  ) {
    deleteCartMerchandise(input: $input, condition: $condition) {
      id
      merchandiseId
      cartId
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
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
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
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
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
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
export const createCreditCard = /* GraphQL */ `
  mutation CreateCreditCard(
    $input: CreateCreditCardInput!
    $condition: ModelCreditCardConditionInput
  ) {
    createCreditCard(input: $input, condition: $condition) {
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
export const updateCreditCard = /* GraphQL */ `
  mutation UpdateCreditCard(
    $input: UpdateCreditCardInput!
    $condition: ModelCreditCardConditionInput
  ) {
    updateCreditCard(input: $input, condition: $condition) {
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
export const deleteCreditCard = /* GraphQL */ `
  mutation DeleteCreditCard(
    $input: DeleteCreditCardInput!
    $condition: ModelCreditCardConditionInput
  ) {
    deleteCreditCard(input: $input, condition: $condition) {
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
export const createMerchandiseTransaction = /* GraphQL */ `
  mutation CreateMerchandiseTransaction(
    $input: CreateMerchandiseTransactionInput!
    $condition: ModelMerchandiseTransactionConditionInput
  ) {
    createMerchandiseTransaction(input: $input, condition: $condition) {
      id
      transactionId
      merchandiseId
      transaction {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMerchandiseTransaction = /* GraphQL */ `
  mutation UpdateMerchandiseTransaction(
    $input: UpdateMerchandiseTransactionInput!
    $condition: ModelMerchandiseTransactionConditionInput
  ) {
    updateMerchandiseTransaction(input: $input, condition: $condition) {
      id
      transactionId
      merchandiseId
      transaction {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMerchandiseTransaction = /* GraphQL */ `
  mutation DeleteMerchandiseTransaction(
    $input: DeleteMerchandiseTransactionInput!
    $condition: ModelMerchandiseTransactionConditionInput
  ) {
    deleteMerchandiseTransaction(input: $input, condition: $condition) {
      id
      transactionId
      merchandiseId
      transaction {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
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
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
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
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
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
export const createPicture = /* GraphQL */ `
  mutation CreatePicture(
    $input: CreatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    createPicture(input: $input, condition: $condition) {
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
export const updatePicture = /* GraphQL */ `
  mutation UpdatePicture(
    $input: UpdatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    updatePicture(input: $input, condition: $condition) {
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
export const deletePicture = /* GraphQL */ `
  mutation DeletePicture(
    $input: DeletePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    deletePicture(input: $input, condition: $condition) {
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
export const createVideo = /* GraphQL */ `
  mutation CreateVideo(
    $input: CreateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    createVideo(input: $input, condition: $condition) {
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
export const updateVideo = /* GraphQL */ `
  mutation UpdateVideo(
    $input: UpdateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    updateVideo(input: $input, condition: $condition) {
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
export const deleteVideo = /* GraphQL */ `
  mutation DeleteVideo(
    $input: DeleteVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    deleteVideo(input: $input, condition: $condition) {
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
export const createSubscriptionMerchandise = /* GraphQL */ `
  mutation CreateSubscriptionMerchandise(
    $input: CreateSubscriptionMerchandiseInput!
    $condition: ModelSubscriptionMerchandiseConditionInput
  ) {
    createSubscriptionMerchandise(input: $input, condition: $condition) {
      id
      merchandiseId
      subscriptionId
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
      subscription {
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
export const updateSubscriptionMerchandise = /* GraphQL */ `
  mutation UpdateSubscriptionMerchandise(
    $input: UpdateSubscriptionMerchandiseInput!
    $condition: ModelSubscriptionMerchandiseConditionInput
  ) {
    updateSubscriptionMerchandise(input: $input, condition: $condition) {
      id
      merchandiseId
      subscriptionId
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
      subscription {
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
export const deleteSubscriptionMerchandise = /* GraphQL */ `
  mutation DeleteSubscriptionMerchandise(
    $input: DeleteSubscriptionMerchandiseInput!
    $condition: ModelSubscriptionMerchandiseConditionInput
  ) {
    deleteSubscriptionMerchandise(input: $input, condition: $condition) {
      id
      merchandiseId
      subscriptionId
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
      subscription {
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
export const createSubscriptionModel = /* GraphQL */ `
  mutation CreateSubscriptionModel(
    $input: CreateSubscriptionModelInput!
    $condition: ModelSubscriptionModelConditionInput
  ) {
    createSubscriptionModel(input: $input, condition: $condition) {
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
export const updateSubscriptionModel = /* GraphQL */ `
  mutation UpdateSubscriptionModel(
    $input: UpdateSubscriptionModelInput!
    $condition: ModelSubscriptionModelConditionInput
  ) {
    updateSubscriptionModel(input: $input, condition: $condition) {
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
export const deleteSubscriptionModel = /* GraphQL */ `
  mutation DeleteSubscriptionModel(
    $input: DeleteSubscriptionModelInput!
    $condition: ModelSubscriptionModelConditionInput
  ) {
    deleteSubscriptionModel(input: $input, condition: $condition) {
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
export const createPackageMerchandise = /* GraphQL */ `
  mutation CreatePackageMerchandise(
    $input: CreatePackageMerchandiseInput!
    $condition: ModelPackageMerchandiseConditionInput
  ) {
    createPackageMerchandise(input: $input, condition: $condition) {
      id
      merchandiseId
      packageId
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePackageMerchandise = /* GraphQL */ `
  mutation UpdatePackageMerchandise(
    $input: UpdatePackageMerchandiseInput!
    $condition: ModelPackageMerchandiseConditionInput
  ) {
    updatePackageMerchandise(input: $input, condition: $condition) {
      id
      merchandiseId
      packageId
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePackageMerchandise = /* GraphQL */ `
  mutation DeletePackageMerchandise(
    $input: DeletePackageMerchandiseInput!
    $condition: ModelPackageMerchandiseConditionInput
  ) {
    deletePackageMerchandise(input: $input, condition: $condition) {
      id
      merchandiseId
      packageId
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMerchandisePurchase = /* GraphQL */ `
  mutation CreateMerchandisePurchase(
    $input: CreateMerchandisePurchaseInput!
    $condition: ModelMerchandisePurchaseConditionInput
  ) {
    createMerchandisePurchase(input: $input, condition: $condition) {
      id
      purchaseId
      merchandiseId
      active
      purchase {
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
      merchandiseVersion
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMerchandisePurchase = /* GraphQL */ `
  mutation UpdateMerchandisePurchase(
    $input: UpdateMerchandisePurchaseInput!
    $condition: ModelMerchandisePurchaseConditionInput
  ) {
    updateMerchandisePurchase(input: $input, condition: $condition) {
      id
      purchaseId
      merchandiseId
      active
      purchase {
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
      merchandiseVersion
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMerchandisePurchase = /* GraphQL */ `
  mutation DeleteMerchandisePurchase(
    $input: DeleteMerchandisePurchaseInput!
    $condition: ModelMerchandisePurchaseConditionInput
  ) {
    deleteMerchandisePurchase(input: $input, condition: $condition) {
      id
      purchaseId
      merchandiseId
      active
      purchase {
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
      merchandiseVersion
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPurchase = /* GraphQL */ `
  mutation CreatePurchase(
    $input: CreatePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    createPurchase(input: $input, condition: $condition) {
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
export const updatePurchase = /* GraphQL */ `
  mutation UpdatePurchase(
    $input: UpdatePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    updatePurchase(input: $input, condition: $condition) {
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
export const deletePurchase = /* GraphQL */ `
  mutation DeletePurchase(
    $input: DeletePurchaseInput!
    $condition: ModelPurchaseConditionInput
  ) {
    deletePurchase(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createEntitlement = /* GraphQL */ `
  mutation CreateEntitlement(
    $input: CreateEntitlementInput!
    $condition: ModelEntitlementConditionInput
  ) {
    createEntitlement(input: $input, condition: $condition) {
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
export const updateEntitlement = /* GraphQL */ `
  mutation UpdateEntitlement(
    $input: UpdateEntitlementInput!
    $condition: ModelEntitlementConditionInput
  ) {
    updateEntitlement(input: $input, condition: $condition) {
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
export const deleteEntitlement = /* GraphQL */ `
  mutation DeleteEntitlement(
    $input: DeleteEntitlementInput!
    $condition: ModelEntitlementConditionInput
  ) {
    deleteEntitlement(input: $input, condition: $condition) {
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
export const createAccessCode = /* GraphQL */ `
  mutation CreateAccessCode(
    $input: CreateAccessCodeInput!
    $condition: ModelAccessCodeConditionInput
  ) {
    createAccessCode(input: $input, condition: $condition) {
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
export const updateAccessCode = /* GraphQL */ `
  mutation UpdateAccessCode(
    $input: UpdateAccessCodeInput!
    $condition: ModelAccessCodeConditionInput
  ) {
    updateAccessCode(input: $input, condition: $condition) {
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
export const deleteAccessCode = /* GraphQL */ `
  mutation DeleteAccessCode(
    $input: DeleteAccessCodeInput!
    $condition: ModelAccessCodeConditionInput
  ) {
    deleteAccessCode(input: $input, condition: $condition) {
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
export const createUserPackage = /* GraphQL */ `
  mutation CreateUserPackage(
    $input: CreateUserPackageInput!
    $condition: ModelUserPackageConditionInput
  ) {
    createUserPackage(input: $input, condition: $condition) {
      id
      userID
      packageId
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUserPackage = /* GraphQL */ `
  mutation UpdateUserPackage(
    $input: UpdateUserPackageInput!
    $condition: ModelUserPackageConditionInput
  ) {
    updateUserPackage(input: $input, condition: $condition) {
      id
      userID
      packageId
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUserPackage = /* GraphQL */ `
  mutation DeleteUserPackage(
    $input: DeleteUserPackageInput!
    $condition: ModelUserPackageConditionInput
  ) {
    deleteUserPackage(input: $input, condition: $condition) {
      id
      userID
      packageId
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPackage = /* GraphQL */ `
  mutation CreatePackage(
    $input: CreatePackageInput!
    $condition: ModelPackageConditionInput
  ) {
    createPackage(input: $input, condition: $condition) {
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
export const updatePackage = /* GraphQL */ `
  mutation UpdatePackage(
    $input: UpdatePackageInput!
    $condition: ModelPackageConditionInput
  ) {
    updatePackage(input: $input, condition: $condition) {
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
export const deletePackage = /* GraphQL */ `
  mutation DeletePackage(
    $input: DeletePackageInput!
    $condition: ModelPackageConditionInput
  ) {
    deletePackage(input: $input, condition: $condition) {
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
export const createChatRoomUser = /* GraphQL */ `
  mutation CreateChatRoomUser(
    $input: CreateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    createChatRoomUser(input: $input, condition: $condition) {
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
export const updateChatRoomUser = /* GraphQL */ `
  mutation UpdateChatRoomUser(
    $input: UpdateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    updateChatRoomUser(input: $input, condition: $condition) {
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
export const deleteChatRoomUser = /* GraphQL */ `
  mutation DeleteChatRoomUser(
    $input: DeleteChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    deleteChatRoomUser(input: $input, condition: $condition) {
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
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
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
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
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
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
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
export const createInvitation = /* GraphQL */ `
  mutation CreateInvitation(
    $input: CreateInvitationInput!
    $condition: ModelInvitationConditionInput
  ) {
    createInvitation(input: $input, condition: $condition) {
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
export const updateInvitation = /* GraphQL */ `
  mutation UpdateInvitation(
    $input: UpdateInvitationInput!
    $condition: ModelInvitationConditionInput
  ) {
    updateInvitation(input: $input, condition: $condition) {
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
export const deleteInvitation = /* GraphQL */ `
  mutation DeleteInvitation(
    $input: DeleteInvitationInput!
    $condition: ModelInvitationConditionInput
  ) {
    deleteInvitation(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createTicketTracker = /* GraphQL */ `
  mutation CreateTicketTracker(
    $input: CreateTicketTrackerInput!
    $condition: ModelTicketTrackerConditionInput
  ) {
    createTicketTracker(input: $input, condition: $condition) {
      id
      ga
      vip
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTicketTracker = /* GraphQL */ `
  mutation UpdateTicketTracker(
    $input: UpdateTicketTrackerInput!
    $condition: ModelTicketTrackerConditionInput
  ) {
    updateTicketTracker(input: $input, condition: $condition) {
      id
      ga
      vip
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTicketTracker = /* GraphQL */ `
  mutation DeleteTicketTracker(
    $input: DeleteTicketTrackerInput!
    $condition: ModelTicketTrackerConditionInput
  ) {
    deleteTicketTracker(input: $input, condition: $condition) {
      id
      ga
      vip
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createOnDemandFeaturedShow = /* GraphQL */ `
  mutation CreateOnDemandFeaturedShow(
    $input: CreateOnDemandFeaturedShowInput!
    $condition: ModelOnDemandFeaturedShowConditionInput
  ) {
    createOnDemandFeaturedShow(input: $input, condition: $condition) {
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
export const updateOnDemandFeaturedShow = /* GraphQL */ `
  mutation UpdateOnDemandFeaturedShow(
    $input: UpdateOnDemandFeaturedShowInput!
    $condition: ModelOnDemandFeaturedShowConditionInput
  ) {
    updateOnDemandFeaturedShow(input: $input, condition: $condition) {
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
export const deleteOnDemandFeaturedShow = /* GraphQL */ `
  mutation DeleteOnDemandFeaturedShow(
    $input: DeleteOnDemandFeaturedShowInput!
    $condition: ModelOnDemandFeaturedShowConditionInput
  ) {
    deleteOnDemandFeaturedShow(input: $input, condition: $condition) {
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
export const createFeaturedSubscription = /* GraphQL */ `
  mutation CreateFeaturedSubscription(
    $input: CreateFeaturedSubscriptionInput!
    $condition: ModelFeaturedSubscriptionConditionInput
  ) {
    createFeaturedSubscription(input: $input, condition: $condition) {
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
export const updateFeaturedSubscription = /* GraphQL */ `
  mutation UpdateFeaturedSubscription(
    $input: UpdateFeaturedSubscriptionInput!
    $condition: ModelFeaturedSubscriptionConditionInput
  ) {
    updateFeaturedSubscription(input: $input, condition: $condition) {
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
export const deleteFeaturedSubscription = /* GraphQL */ `
  mutation DeleteFeaturedSubscription(
    $input: DeleteFeaturedSubscriptionInput!
    $condition: ModelFeaturedSubscriptionConditionInput
  ) {
    deleteFeaturedSubscription(input: $input, condition: $condition) {
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
export const createMerchandise = /* GraphQL */ `
  mutation CreateMerchandise(
    $input: CreateMerchandiseInput!
    $condition: ModelMerchandiseConditionInput
  ) {
    createMerchandise(input: $input, condition: $condition) {
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
export const updateMerchandise = /* GraphQL */ `
  mutation UpdateMerchandise(
    $input: UpdateMerchandiseInput!
    $condition: ModelMerchandiseConditionInput
  ) {
    updateMerchandise(input: $input, condition: $condition) {
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
export const deleteMerchandise = /* GraphQL */ `
  mutation DeleteMerchandise(
    $input: DeleteMerchandiseInput!
    $condition: ModelMerchandiseConditionInput
  ) {
    deleteMerchandise(input: $input, condition: $condition) {
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
export const createBandMerchandise = /* GraphQL */ `
  mutation CreateBandMerchandise(
    $input: CreateBandMerchandiseInput!
    $condition: ModelBandMerchandiseConditionInput
  ) {
    createBandMerchandise(input: $input, condition: $condition) {
      id
      bandId
      merchandiseId
      band {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBandMerchandise = /* GraphQL */ `
  mutation UpdateBandMerchandise(
    $input: UpdateBandMerchandiseInput!
    $condition: ModelBandMerchandiseConditionInput
  ) {
    updateBandMerchandise(input: $input, condition: $condition) {
      id
      bandId
      merchandiseId
      band {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBandMerchandise = /* GraphQL */ `
  mutation DeleteBandMerchandise(
    $input: DeleteBandMerchandiseInput!
    $condition: ModelBandMerchandiseConditionInput
  ) {
    deleteBandMerchandise(input: $input, condition: $condition) {
      id
      bandId
      merchandiseId
      band {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBand = /* GraphQL */ `
  mutation CreateBand(
    $input: CreateBandInput!
    $condition: ModelBandConditionInput
  ) {
    createBand(input: $input, condition: $condition) {
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
export const updateBand = /* GraphQL */ `
  mutation UpdateBand(
    $input: UpdateBandInput!
    $condition: ModelBandConditionInput
  ) {
    updateBand(input: $input, condition: $condition) {
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
export const deleteBand = /* GraphQL */ `
  mutation DeleteBand(
    $input: DeleteBandInput!
    $condition: ModelBandConditionInput
  ) {
    deleteBand(input: $input, condition: $condition) {
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
export const createAssociatedMerchandise = /* GraphQL */ `
  mutation CreateAssociatedMerchandise(
    $input: CreateAssociatedMerchandiseInput!
    $condition: ModelAssociatedMerchandiseConditionInput
  ) {
    createAssociatedMerchandise(input: $input, condition: $condition) {
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
export const updateAssociatedMerchandise = /* GraphQL */ `
  mutation UpdateAssociatedMerchandise(
    $input: UpdateAssociatedMerchandiseInput!
    $condition: ModelAssociatedMerchandiseConditionInput
  ) {
    updateAssociatedMerchandise(input: $input, condition: $condition) {
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
export const deleteAssociatedMerchandise = /* GraphQL */ `
  mutation DeleteAssociatedMerchandise(
    $input: DeleteAssociatedMerchandiseInput!
    $condition: ModelAssociatedMerchandiseConditionInput
  ) {
    deleteAssociatedMerchandise(input: $input, condition: $condition) {
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
export const createDecomissionedMerchandise = /* GraphQL */ `
  mutation CreateDecomissionedMerchandise(
    $input: CreateDecomissionedMerchandiseInput!
    $condition: ModelDecomissionedMerchandiseConditionInput
  ) {
    createDecomissionedMerchandise(input: $input, condition: $condition) {
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
export const updateDecomissionedMerchandise = /* GraphQL */ `
  mutation UpdateDecomissionedMerchandise(
    $input: UpdateDecomissionedMerchandiseInput!
    $condition: ModelDecomissionedMerchandiseConditionInput
  ) {
    updateDecomissionedMerchandise(input: $input, condition: $condition) {
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
export const deleteDecomissionedMerchandise = /* GraphQL */ `
  mutation DeleteDecomissionedMerchandise(
    $input: DeleteDecomissionedMerchandiseInput!
    $condition: ModelDecomissionedMerchandiseConditionInput
  ) {
    deleteDecomissionedMerchandise(input: $input, condition: $condition) {
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
export const createDefaultPlatformFeePercentages = /* GraphQL */ `
  mutation CreateDefaultPlatformFeePercentages(
    $input: CreateDefaultPlatformFeePercentagesInput!
    $condition: ModelDefaultPlatformFeePercentagesConditionInput
  ) {
    createDefaultPlatformFeePercentages(input: $input, condition: $condition) {
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
export const updateDefaultPlatformFeePercentages = /* GraphQL */ `
  mutation UpdateDefaultPlatformFeePercentages(
    $input: UpdateDefaultPlatformFeePercentagesInput!
    $condition: ModelDefaultPlatformFeePercentagesConditionInput
  ) {
    updateDefaultPlatformFeePercentages(input: $input, condition: $condition) {
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
export const deleteDefaultPlatformFeePercentages = /* GraphQL */ `
  mutation DeleteDefaultPlatformFeePercentages(
    $input: DeleteDefaultPlatformFeePercentagesInput!
    $condition: ModelDefaultPlatformFeePercentagesConditionInput
  ) {
    deleteDefaultPlatformFeePercentages(input: $input, condition: $condition) {
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
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
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
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
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
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
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
