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
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      cart {
        id
        merchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      cart {
        id
        merchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      cart {
        id
        merchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        nextToken
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
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          stripeSubscriptionId
          subscriptionId
          accessToken
          idToken
          refreshToken
          cartId
          createdAt
          updatedAt
        }
        transactions {
          nextToken
        }
        purchases {
          nextToken
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
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          stripeSubscriptionId
          subscriptionId
          accessToken
          idToken
          refreshToken
          cartId
          createdAt
          updatedAt
        }
        merchandisePurchases {
          nextToken
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
        }
        creditCardId
        transactionId
        createdAt
        updatedAt
      }
      purchaseId
      createdAt
      updatedAt
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
        }
        nextToken
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
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          stripeSubscriptionId
          subscriptionId
          accessToken
          idToken
          refreshToken
          cartId
          createdAt
          updatedAt
        }
        transactions {
          nextToken
        }
        purchases {
          nextToken
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
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          stripeSubscriptionId
          subscriptionId
          accessToken
          idToken
          refreshToken
          cartId
          createdAt
          updatedAt
        }
        merchandisePurchases {
          nextToken
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
        }
        creditCardId
        transactionId
        createdAt
        updatedAt
      }
      purchaseId
      createdAt
      updatedAt
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
        }
        nextToken
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
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          stripeSubscriptionId
          subscriptionId
          accessToken
          idToken
          refreshToken
          cartId
          createdAt
          updatedAt
        }
        transactions {
          nextToken
        }
        purchases {
          nextToken
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
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          stripeSubscriptionId
          subscriptionId
          accessToken
          idToken
          refreshToken
          cartId
          createdAt
          updatedAt
        }
        merchandisePurchases {
          nextToken
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
        }
        creditCardId
        transactionId
        createdAt
        updatedAt
      }
      purchaseId
      createdAt
      updatedAt
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
        }
        pictureId
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
        packages {
          nextToken
        }
        userPackages {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
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
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
        }
        cartId
        entitlements {
          nextToken
        }
        accessCodes {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        nextToken
      }
      purchases {
        items {
          id
          userID
          paymentIntent
          creditCardId
          transactionId
          createdAt
          updatedAt
        }
        nextToken
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
        }
        pictureId
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
        packages {
          nextToken
        }
        userPackages {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
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
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
        }
        cartId
        entitlements {
          nextToken
        }
        accessCodes {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        nextToken
      }
      purchases {
        items {
          id
          userID
          paymentIntent
          creditCardId
          transactionId
          createdAt
          updatedAt
        }
        nextToken
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
        }
        pictureId
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
        packages {
          nextToken
        }
        userPackages {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
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
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
        }
        cartId
        entitlements {
          nextToken
        }
        accessCodes {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        nextToken
      }
      purchases {
        items {
          id
          userID
          paymentIntent
          creditCardId
          transactionId
          createdAt
          updatedAt
        }
        nextToken
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
        }
        creditCardId
        Purchase {
          id
          userID
          paymentIntent
          creditCardId
          transactionId
          createdAt
          updatedAt
        }
        purchaseId
        createdAt
        updatedAt
      }
      merchandise {
        id
        type
        transactions {
          nextToken
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        creditCardId
        Purchase {
          id
          userID
          paymentIntent
          creditCardId
          transactionId
          createdAt
          updatedAt
        }
        purchaseId
        createdAt
        updatedAt
      }
      merchandise {
        id
        type
        transactions {
          nextToken
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        creditCardId
        Purchase {
          id
          userID
          paymentIntent
          creditCardId
          transactionId
          createdAt
          updatedAt
        }
        purchaseId
        createdAt
        updatedAt
      }
      merchandise {
        id
        type
        transactions {
          nextToken
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        nextToken
      }
      createdAt
      updatedAt
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
      }
      createdAt
      updatedAt
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
      }
      createdAt
      updatedAt
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
      }
      createdAt
      updatedAt
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
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        subscriptionMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        subscriptionMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        subscriptionMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      subscriptionMerchandise {
        items {
          id
          merchandiseId
          subscriptionId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      subscriptionMerchandise {
        items {
          id
          merchandiseId
          subscriptionId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      subscriptionMerchandise {
        items {
          id
          merchandiseId
          subscriptionId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        packageMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        packageMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        packageMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          stripeSubscriptionId
          subscriptionId
          accessToken
          idToken
          refreshToken
          cartId
          createdAt
          updatedAt
        }
        merchandisePurchases {
          nextToken
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
        }
        creditCardId
        transactionId
        createdAt
        updatedAt
      }
      merchandise {
        id
        type
        transactions {
          nextToken
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      merchandiseVersion
      createdAt
      updatedAt
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
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          stripeSubscriptionId
          subscriptionId
          accessToken
          idToken
          refreshToken
          cartId
          createdAt
          updatedAt
        }
        merchandisePurchases {
          nextToken
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
        }
        creditCardId
        transactionId
        createdAt
        updatedAt
      }
      merchandise {
        id
        type
        transactions {
          nextToken
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      merchandiseVersion
      createdAt
      updatedAt
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
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          stripeSubscriptionId
          subscriptionId
          accessToken
          idToken
          refreshToken
          cartId
          createdAt
          updatedAt
        }
        merchandisePurchases {
          nextToken
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
        }
        creditCardId
        transactionId
        createdAt
        updatedAt
      }
      merchandise {
        id
        type
        transactions {
          nextToken
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      merchandiseVersion
      createdAt
      updatedAt
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
        }
        pictureId
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
        packages {
          nextToken
        }
        userPackages {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
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
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
        }
        cartId
        entitlements {
          nextToken
        }
        accessCodes {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        nextToken
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
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          stripeSubscriptionId
          subscriptionId
          accessToken
          idToken
          refreshToken
          cartId
          createdAt
          updatedAt
        }
        transactions {
          nextToken
        }
        purchases {
          nextToken
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
      }
      paymentIntent
      transactions {
        id
        userID
        merchID
        merchandise {
          nextToken
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
        }
        creditCardId
        Purchase {
          id
          userID
          paymentIntent
          creditCardId
          transactionId
          createdAt
          updatedAt
        }
        purchaseId
        createdAt
        updatedAt
      }
      creditCardId
      transactionId
      createdAt
      updatedAt
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
        }
        pictureId
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
        packages {
          nextToken
        }
        userPackages {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
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
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
        }
        cartId
        entitlements {
          nextToken
        }
        accessCodes {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        nextToken
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
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          stripeSubscriptionId
          subscriptionId
          accessToken
          idToken
          refreshToken
          cartId
          createdAt
          updatedAt
        }
        transactions {
          nextToken
        }
        purchases {
          nextToken
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
      }
      paymentIntent
      transactions {
        id
        userID
        merchID
        merchandise {
          nextToken
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
        }
        creditCardId
        Purchase {
          id
          userID
          paymentIntent
          creditCardId
          transactionId
          createdAt
          updatedAt
        }
        purchaseId
        createdAt
        updatedAt
      }
      creditCardId
      transactionId
      createdAt
      updatedAt
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
        }
        pictureId
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
        packages {
          nextToken
        }
        userPackages {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
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
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
        }
        cartId
        entitlements {
          nextToken
        }
        accessCodes {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        nextToken
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
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          stripeSubscriptionId
          subscriptionId
          accessToken
          idToken
          refreshToken
          cartId
          createdAt
          updatedAt
        }
        transactions {
          nextToken
        }
        purchases {
          nextToken
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
      }
      paymentIntent
      transactions {
        id
        userID
        merchID
        merchandise {
          nextToken
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
        }
        creditCardId
        Purchase {
          id
          userID
          paymentIntent
          creditCardId
          transactionId
          createdAt
          updatedAt
        }
        purchaseId
        createdAt
        updatedAt
      }
      creditCardId
      transactionId
      createdAt
      updatedAt
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
        }
        createdAt
        updatedAt
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
        }
        nextToken
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
        }
        nextToken
      }
      purchases {
        items {
          id
          userID
          paymentIntent
          creditCardId
          transactionId
          createdAt
          updatedAt
        }
        nextToken
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
        }
        nextToken
      }
      userPackages {
        items {
          id
          userID
          packageId
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
      stripeSubscriptionId
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
        }
        subscriptionMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      accessToken
      idToken
      refreshToken
      cart {
        id
        merchandise {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        nextToken
      }
      accessCodes {
        items {
          id
          merchandiseId
          code
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        createdAt
        updatedAt
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
        }
        nextToken
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
        }
        nextToken
      }
      purchases {
        items {
          id
          userID
          paymentIntent
          creditCardId
          transactionId
          createdAt
          updatedAt
        }
        nextToken
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
        }
        nextToken
      }
      userPackages {
        items {
          id
          userID
          packageId
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
      stripeSubscriptionId
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
        }
        subscriptionMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      accessToken
      idToken
      refreshToken
      cart {
        id
        merchandise {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        nextToken
      }
      accessCodes {
        items {
          id
          merchandiseId
          code
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        createdAt
        updatedAt
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
        }
        nextToken
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
        }
        nextToken
      }
      purchases {
        items {
          id
          userID
          paymentIntent
          creditCardId
          transactionId
          createdAt
          updatedAt
        }
        nextToken
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
        }
        nextToken
      }
      userPackages {
        items {
          id
          userID
          packageId
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
      stripeSubscriptionId
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
        }
        subscriptionMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      accessToken
      idToken
      refreshToken
      cart {
        id
        merchandise {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        nextToken
      }
      accessCodes {
        items {
          id
          merchandiseId
          code
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      fromSubscription
      createdAt
      updatedAt
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
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      fromSubscription
      createdAt
      updatedAt
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
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      userID
      fromSubscription
      createdAt
      updatedAt
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
        }
        pictureId
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
        packages {
          nextToken
        }
        userPackages {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
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
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
        }
        cartId
        entitlements {
          nextToken
        }
        accessCodes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        pictureId
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
        packages {
          nextToken
        }
        userPackages {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
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
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
        }
        cartId
        entitlements {
          nextToken
        }
        accessCodes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        pictureId
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
        packages {
          nextToken
        }
        userPackages {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
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
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
        }
        cartId
        entitlements {
          nextToken
        }
        accessCodes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        pictureId
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
        packages {
          nextToken
        }
        userPackages {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
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
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
        }
        cartId
        entitlements {
          nextToken
        }
        accessCodes {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        packageMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        pictureId
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
        packages {
          nextToken
        }
        userPackages {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
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
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
        }
        cartId
        entitlements {
          nextToken
        }
        accessCodes {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        packageMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        pictureId
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
        packages {
          nextToken
        }
        userPackages {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
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
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
        }
        cartId
        entitlements {
          nextToken
        }
        accessCodes {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        packageMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        nextToken
      }
      merchandiseId
      merchandise {
        id
        type
        transactions {
          nextToken
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      packageMerchandise {
        items {
          id
          merchandiseId
          packageId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        nextToken
      }
      merchandiseId
      merchandise {
        id
        type
        transactions {
          nextToken
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      packageMerchandise {
        items {
          id
          merchandiseId
          packageId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        nextToken
      }
      merchandiseId
      merchandise {
        id
        type
        transactions {
          nextToken
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      packageMerchandise {
        items {
          id
          merchandiseId
          packageId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        pictureId
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
        packages {
          nextToken
        }
        userPackages {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
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
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
        }
        cartId
        entitlements {
          nextToken
        }
        accessCodes {
          nextToken
        }
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
        invitation {
          nextToken
        }
        chatRoomName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        pictureId
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
        packages {
          nextToken
        }
        userPackages {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
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
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
        }
        cartId
        entitlements {
          nextToken
        }
        accessCodes {
          nextToken
        }
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
        invitation {
          nextToken
        }
        chatRoomName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        pictureId
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
        packages {
          nextToken
        }
        userPackages {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
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
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
        }
        cartId
        entitlements {
          nextToken
        }
        accessCodes {
          nextToken
        }
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
        invitation {
          nextToken
        }
        chatRoomName
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
          pictureId
          awayMessageStatus
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          stripeSubscriptionId
          subscriptionId
          accessToken
          idToken
          refreshToken
          cartId
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          chatRoomName
          createdAt
          updatedAt
        }
        updatedAt
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
      chatRoomName
      createdAt
      updatedAt
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
          pictureId
          awayMessageStatus
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          stripeSubscriptionId
          subscriptionId
          accessToken
          idToken
          refreshToken
          cartId
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          chatRoomName
          createdAt
          updatedAt
        }
        updatedAt
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
      chatRoomName
      createdAt
      updatedAt
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
          pictureId
          awayMessageStatus
          cogId
          emailVerified
          loggedIn
          email
          stripeCustomerId
          stripeCustomer
          stripeSubscriptionId
          subscriptionId
          accessToken
          idToken
          refreshToken
          cartId
          createdAt
          updatedAt
        }
        chatRoom {
          id
          lastMessageID
          chatRoomName
          createdAt
          updatedAt
        }
        updatedAt
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
      chatRoomName
      createdAt
      updatedAt
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
        }
        pictureId
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
        packages {
          nextToken
        }
        userPackages {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
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
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
        }
        cartId
        entitlements {
          nextToken
        }
        accessCodes {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        pictureId
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
        packages {
          nextToken
        }
        userPackages {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
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
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
        }
        cartId
        entitlements {
          nextToken
        }
        accessCodes {
          nextToken
        }
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
        invitation {
          nextToken
        }
        chatRoomName
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
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
        }
        pictureId
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
        packages {
          nextToken
        }
        userPackages {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
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
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
        }
        cartId
        entitlements {
          nextToken
        }
        accessCodes {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        pictureId
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
        packages {
          nextToken
        }
        userPackages {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
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
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
        }
        cartId
        entitlements {
          nextToken
        }
        accessCodes {
          nextToken
        }
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
        invitation {
          nextToken
        }
        chatRoomName
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
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
        }
        pictureId
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
        packages {
          nextToken
        }
        userPackages {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
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
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
        }
        cartId
        entitlements {
          nextToken
        }
        accessCodes {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        pictureId
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
        packages {
          nextToken
        }
        userPackages {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
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
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
        }
        cartId
        entitlements {
          nextToken
        }
        accessCodes {
          nextToken
        }
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
        invitation {
          nextToken
        }
        chatRoomName
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
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
        }
        pictureId
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
        packages {
          nextToken
        }
        userPackages {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
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
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
        }
        cartId
        entitlements {
          nextToken
        }
        accessCodes {
          nextToken
        }
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
        invitation {
          nextToken
        }
        chatRoomName
        createdAt
        updatedAt
      }
      updatedAt
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
        }
        pictureId
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
        packages {
          nextToken
        }
        userPackages {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
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
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
        }
        cartId
        entitlements {
          nextToken
        }
        accessCodes {
          nextToken
        }
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
        invitation {
          nextToken
        }
        chatRoomName
        createdAt
        updatedAt
      }
      updatedAt
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
        }
        pictureId
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
        packages {
          nextToken
        }
        userPackages {
          nextToken
        }
        cogId
        emailVerified
        loggedIn
        email
        stripeCustomerId
        stripeCustomer
        stripeSubscriptionId
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
        }
        accessToken
        idToken
        refreshToken
        cart {
          id
          createdAt
          updatedAt
        }
        cartId
        entitlements {
          nextToken
        }
        accessCodes {
          nextToken
        }
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
        invitation {
          nextToken
        }
        chatRoomName
        createdAt
        updatedAt
      }
      updatedAt
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
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        subscriptionMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        subscriptionMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        subscriptionMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        nextToken
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
        }
        nextToken
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
      }
      accessCodes {
        items {
          id
          merchandiseId
          code
          userId
          createdAt
          updatedAt
        }
        nextToken
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
        }
        createdAt
        updatedAt
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
        }
        nextToken
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
      }
      bandMerchType
      subscriptionMerchandise {
        items {
          id
          merchandiseId
          subscriptionId
          createdAt
          updatedAt
        }
        nextToken
      }
      packageMerchandise {
        items {
          id
          merchandiseId
          packageId
          createdAt
          updatedAt
        }
        nextToken
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
        }
        subscriptionMerchandise {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        packageMerchandise {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        nextToken
      }
      version
      associatedMerchandise {
        items {
          id
          associatedMerchandiseId
          associatedToId
          createdAt
          updatedAt
        }
        nextToken
      }
      associatedMerchandiseEnabled
      bandMerchandise {
        items {
          id
          bandId
          merchandiseId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        nextToken
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
        }
        nextToken
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
      }
      accessCodes {
        items {
          id
          merchandiseId
          code
          userId
          createdAt
          updatedAt
        }
        nextToken
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
        }
        createdAt
        updatedAt
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
        }
        nextToken
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
      }
      bandMerchType
      subscriptionMerchandise {
        items {
          id
          merchandiseId
          subscriptionId
          createdAt
          updatedAt
        }
        nextToken
      }
      packageMerchandise {
        items {
          id
          merchandiseId
          packageId
          createdAt
          updatedAt
        }
        nextToken
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
        }
        subscriptionMerchandise {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        packageMerchandise {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        nextToken
      }
      version
      associatedMerchandise {
        items {
          id
          associatedMerchandiseId
          associatedToId
          createdAt
          updatedAt
        }
        nextToken
      }
      associatedMerchandiseEnabled
      bandMerchandise {
        items {
          id
          bandId
          merchandiseId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        nextToken
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
        }
        nextToken
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
      }
      accessCodes {
        items {
          id
          merchandiseId
          code
          userId
          createdAt
          updatedAt
        }
        nextToken
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
        }
        createdAt
        updatedAt
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
        }
        nextToken
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
      }
      bandMerchType
      subscriptionMerchandise {
        items {
          id
          merchandiseId
          subscriptionId
          createdAt
          updatedAt
        }
        nextToken
      }
      packageMerchandise {
        items {
          id
          merchandiseId
          packageId
          createdAt
          updatedAt
        }
        nextToken
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
        }
        subscriptionMerchandise {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        packageMerchandise {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        nextToken
      }
      version
      associatedMerchandise {
        items {
          id
          associatedMerchandiseId
          associatedToId
          createdAt
          updatedAt
        }
        nextToken
      }
      associatedMerchandiseEnabled
      bandMerchandise {
        items {
          id
          bandId
          merchandiseId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        pictureId
        email
        bandMerchandise {
          nextToken
        }
        socialMediaLinks {
          twitterLink
          facebookLink
          instagramLink
          twitchLink
          youtubeLink
          tiktokLink
        }
        createdAt
        updatedAt
      }
      merchandise {
        id
        type
        transactions {
          nextToken
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        pictureId
        email
        bandMerchandise {
          nextToken
        }
        socialMediaLinks {
          twitterLink
          facebookLink
          instagramLink
          twitchLink
          youtubeLink
          tiktokLink
        }
        createdAt
        updatedAt
      }
      merchandise {
        id
        type
        transactions {
          nextToken
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        pictureId
        email
        bandMerchandise {
          nextToken
        }
        socialMediaLinks {
          twitterLink
          facebookLink
          instagramLink
          twitchLink
          youtubeLink
          tiktokLink
        }
        createdAt
        updatedAt
      }
      merchandise {
        id
        type
        transactions {
          nextToken
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        createdAt
        updatedAt
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
        }
        nextToken
      }
      socialMediaLinks {
        twitterLink
        facebookLink
        instagramLink
        twitchLink
        youtubeLink
        tiktokLink
      }
      createdAt
      updatedAt
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
        }
        createdAt
        updatedAt
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
        }
        nextToken
      }
      socialMediaLinks {
        twitterLink
        facebookLink
        instagramLink
        twitchLink
        youtubeLink
        tiktokLink
      }
      createdAt
      updatedAt
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
        }
        createdAt
        updatedAt
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
        }
        nextToken
      }
      socialMediaLinks {
        twitterLink
        facebookLink
        instagramLink
        twitchLink
        youtubeLink
        tiktokLink
      }
      createdAt
      updatedAt
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
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      associatedMerchandiseId
      associatedTo {
        id
        type
        transactions {
          nextToken
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      associatedToId
      createdAt
      updatedAt
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
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      associatedMerchandiseId
      associatedTo {
        id
        type
        transactions {
          nextToken
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      associatedToId
      createdAt
      updatedAt
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
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      associatedMerchandiseId
      associatedTo {
        id
        type
        transactions {
          nextToken
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      associatedToId
      createdAt
      updatedAt
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
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      decomissionedMerchandiseJSON
      version
      createdAt
      updatedAt
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
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      decomissionedMerchandiseJSON
      version
      createdAt
      updatedAt
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
        }
        merchandisePurchases {
          nextToken
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
        }
        accessCodes {
          nextToken
        }
        name
        description
        image {
          id
          name
          owner
          createdAt
          updatedAt
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
        }
        bandMerchType
        subscriptionMerchandise {
          nextToken
        }
        packageMerchandise {
          nextToken
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
        }
        packageId
        decomissionedMerchandises {
          nextToken
        }
        version
        associatedMerchandise {
          nextToken
        }
        associatedMerchandiseEnabled
        bandMerchandise {
          nextToken
        }
        createdAt
        updatedAt
      }
      decomissionedMerchandiseJSON
      version
      createdAt
      updatedAt
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
    }
  }
`;
