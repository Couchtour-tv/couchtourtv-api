/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBand = /* GraphQL */ `
  mutation CreateBand(
    $input: CreateBandInput!
    $condition: ModelBandConditionInput
  ) {
    createBand(input: $input, condition: $condition) {
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
export const updateBand = /* GraphQL */ `
  mutation UpdateBand(
    $input: UpdateBandInput!
    $condition: ModelBandConditionInput
  ) {
    updateBand(input: $input, condition: $condition) {
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
export const deleteBand = /* GraphQL */ `
  mutation DeleteBand(
    $input: DeleteBandInput!
    $condition: ModelBandConditionInput
  ) {
    deleteBand(input: $input, condition: $condition) {
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
export const createMerchandise = /* GraphQL */ `
  mutation CreateMerchandise(
    $input: CreateMerchandiseInput!
    $condition: ModelMerchandiseConditionInput
  ) {
    createMerchandise(input: $input, condition: $condition) {
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
export const updateMerchandise = /* GraphQL */ `
  mutation UpdateMerchandise(
    $input: UpdateMerchandiseInput!
    $condition: ModelMerchandiseConditionInput
  ) {
    updateMerchandise(input: $input, condition: $condition) {
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
export const deleteMerchandise = /* GraphQL */ `
  mutation DeleteMerchandise(
    $input: DeleteMerchandiseInput!
    $condition: ModelMerchandiseConditionInput
  ) {
    deleteMerchandise(input: $input, condition: $condition) {
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
        transactions {
          nextToken
        }
        purchases {
          nextToken
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
      creditCardId
      Purchase {
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
        transactions {
          nextToken
        }
        purchases {
          nextToken
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
      creditCardId
      Purchase {
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
        transactions {
          nextToken
        }
        purchases {
          nextToken
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
      creditCardId
      Purchase {
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
        transactions {
          nextToken
        }
        purchases {
          nextToken
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
      paymentIntent
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
        errorObject
        paymentIntent
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
        transactions {
          nextToken
        }
        purchases {
          nextToken
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
      paymentIntent
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
        errorObject
        paymentIntent
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
        transactions {
          nextToken
        }
        purchases {
          nextToken
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
      paymentIntent
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
        errorObject
        paymentIntent
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
