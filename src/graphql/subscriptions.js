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
export const onCreateCartMerchandise = /* GraphQL */ `
  subscription OnCreateCartMerchandise {
    onCreateCartMerchandise {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
export const onUpdateCartMerchandise = /* GraphQL */ `
  subscription OnUpdateCartMerchandise {
    onUpdateCartMerchandise {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
export const onDeleteCartMerchandise = /* GraphQL */ `
  subscription OnDeleteCartMerchandise {
    onDeleteCartMerchandise {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction {
    onCreateTransaction {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction {
    onUpdateTransaction {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction {
    onDeleteTransaction {
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
export const onCreateMerchandiseTransaction = /* GraphQL */ `
  subscription OnCreateMerchandiseTransaction {
    onCreateMerchandiseTransaction {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMerchandiseTransaction = /* GraphQL */ `
  subscription OnUpdateMerchandiseTransaction {
    onUpdateMerchandiseTransaction {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMerchandiseTransaction = /* GraphQL */ `
  subscription OnDeleteMerchandiseTransaction {
    onDeleteMerchandiseTransaction {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEntitlement = /* GraphQL */ `
  subscription OnCreateEntitlement {
    onCreateEntitlement {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
        createdAt
        updatedAt
      }
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEntitlement = /* GraphQL */ `
  subscription OnUpdateEntitlement {
    onUpdateEntitlement {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
        createdAt
        updatedAt
      }
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEntitlement = /* GraphQL */ `
  subscription OnDeleteEntitlement {
    onDeleteEntitlement {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
        createdAt
        updatedAt
      }
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart {
    onCreateCart {
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
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart {
    onUpdateCart {
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
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart {
    onDeleteCart {
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
export const onCreateBand = /* GraphQL */ `
  subscription OnCreateBand {
    onCreateBand {
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
      merchandise {
        items {
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
          bandId
          bandMerchType
          subscriptionId
          packageId
          version
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
export const onUpdateBand = /* GraphQL */ `
  subscription OnUpdateBand {
    onUpdateBand {
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
      merchandise {
        items {
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
          bandId
          bandMerchType
          subscriptionId
          packageId
          version
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
export const onDeleteBand = /* GraphQL */ `
  subscription OnDeleteBand {
    onDeleteBand {
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
      merchandise {
        items {
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
          bandId
          bandMerchType
          subscriptionId
          packageId
          version
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
export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture {
    onCreatePicture {
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
export const onUpdatePicture = /* GraphQL */ `
  subscription OnUpdatePicture {
    onUpdatePicture {
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
export const onDeletePicture = /* GraphQL */ `
  subscription OnDeletePicture {
    onDeletePicture {
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
export const onCreateSubscriptionMerchandise = /* GraphQL */ `
  subscription OnCreateSubscriptionMerchandise {
    onCreateSubscriptionMerchandise {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
          bandId
          bandMerchType
          subscriptionId
          packageId
          version
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
export const onUpdateSubscriptionMerchandise = /* GraphQL */ `
  subscription OnUpdateSubscriptionMerchandise {
    onUpdateSubscriptionMerchandise {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
          bandId
          bandMerchType
          subscriptionId
          packageId
          version
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
export const onDeleteSubscriptionMerchandise = /* GraphQL */ `
  subscription OnDeleteSubscriptionMerchandise {
    onDeleteSubscriptionMerchandise {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
          bandId
          bandMerchType
          subscriptionId
          packageId
          version
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
export const onCreateSubscriptionModel = /* GraphQL */ `
  subscription OnCreateSubscriptionModel {
    onCreateSubscriptionModel {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
export const onUpdateSubscriptionModel = /* GraphQL */ `
  subscription OnUpdateSubscriptionModel {
    onUpdateSubscriptionModel {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
export const onDeleteSubscriptionModel = /* GraphQL */ `
  subscription OnDeleteSubscriptionModel {
    onDeleteSubscriptionModel {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
export const onCreatePackageMerchandise = /* GraphQL */ `
  subscription OnCreatePackageMerchandise {
    onCreatePackageMerchandise {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
          bandId
          bandMerchType
          subscriptionId
          packageId
          version
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
export const onUpdatePackageMerchandise = /* GraphQL */ `
  subscription OnUpdatePackageMerchandise {
    onUpdatePackageMerchandise {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
          bandId
          bandMerchType
          subscriptionId
          packageId
          version
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
export const onDeletePackageMerchandise = /* GraphQL */ `
  subscription OnDeletePackageMerchandise {
    onDeletePackageMerchandise {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
          bandId
          bandMerchType
          subscriptionId
          packageId
          version
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
export const onCreateMerchandisePurchase = /* GraphQL */ `
  subscription OnCreateMerchandisePurchase {
    onCreateMerchandisePurchase {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
        createdAt
        updatedAt
      }
      merchandiseVersion
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMerchandisePurchase = /* GraphQL */ `
  subscription OnUpdateMerchandisePurchase {
    onUpdateMerchandisePurchase {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
        createdAt
        updatedAt
      }
      merchandiseVersion
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMerchandisePurchase = /* GraphQL */ `
  subscription OnDeleteMerchandisePurchase {
    onDeleteMerchandisePurchase {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
        createdAt
        updatedAt
      }
      merchandiseVersion
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
          bandId
          bandMerchType
          subscriptionId
          packageId
          version
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
          bandId
          bandMerchType
          subscriptionId
          packageId
          version
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
          bandId
          bandMerchType
          subscriptionId
          packageId
          version
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
export const onCreateUserPackage = /* GraphQL */ `
  subscription OnCreateUserPackage {
    onCreateUserPackage {
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
          bandId
          bandMerchType
          subscriptionId
          packageId
          version
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
export const onUpdateUserPackage = /* GraphQL */ `
  subscription OnUpdateUserPackage {
    onUpdateUserPackage {
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
          bandId
          bandMerchType
          subscriptionId
          packageId
          version
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
export const onDeleteUserPackage = /* GraphQL */ `
  subscription OnDeleteUserPackage {
    onDeleteUserPackage {
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
          bandId
          bandMerchType
          subscriptionId
          packageId
          version
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
export const onCreatePackage = /* GraphQL */ `
  subscription OnCreatePackage {
    onCreatePackage {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
export const onUpdatePackage = /* GraphQL */ `
  subscription OnUpdatePackage {
    onUpdatePackage {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
export const onDeletePackage = /* GraphQL */ `
  subscription OnDeletePackage {
    onDeletePackage {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
export const onCreateMerchandise = /* GraphQL */ `
  subscription OnCreateMerchandise {
    onCreateMerchandise {
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
        merchandise {
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
      bandId
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
          bandId
          bandMerchType
          subscriptionId
          packageId
          version
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
          bandId
          bandMerchType
          subscriptionId
          packageId
          version
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
        merchandise {
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
      bandId
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
          bandId
          bandMerchType
          subscriptionId
          packageId
          version
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
          bandId
          bandMerchType
          subscriptionId
          packageId
          version
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
        merchandise {
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
      bandId
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
          bandId
          bandMerchType
          subscriptionId
          packageId
          version
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
          bandId
          bandMerchType
          subscriptionId
          packageId
          version
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDecomissionedMerchandise = /* GraphQL */ `
  subscription OnCreateDecomissionedMerchandise {
    onCreateDecomissionedMerchandise {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
export const onUpdateDecomissionedMerchandise = /* GraphQL */ `
  subscription OnUpdateDecomissionedMerchandise {
    onUpdateDecomissionedMerchandise {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
export const onDeleteDecomissionedMerchandise = /* GraphQL */ `
  subscription OnDeleteDecomissionedMerchandise {
    onDeleteDecomissionedMerchandise {
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
        band {
          id
          bandName
          createdBy
          updatedBy
          website
          pictureId
          email
          createdAt
          updatedAt
        }
        bandId
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
export const onCreateDefaultPlatformFeePercentages = /* GraphQL */ `
  subscription OnCreateDefaultPlatformFeePercentages {
    onCreateDefaultPlatformFeePercentages {
      id
      ticket_stream_event
      vod
      package
      subscription
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDefaultPlatformFeePercentages = /* GraphQL */ `
  subscription OnUpdateDefaultPlatformFeePercentages {
    onUpdateDefaultPlatformFeePercentages {
      id
      ticket_stream_event
      vod
      package
      subscription
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDefaultPlatformFeePercentages = /* GraphQL */ `
  subscription OnDeleteDefaultPlatformFeePercentages {
    onDeleteDefaultPlatformFeePercentages {
      id
      ticket_stream_event
      vod
      package
      subscription
      createdAt
      updatedAt
    }
  }
`;
