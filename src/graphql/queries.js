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
              lastFour
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
              lastFour
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
        transactions {
          items {
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
              lastFour
              createdAt
              updatedAt
            }
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
            lastFour
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
      creditCardId
      Purchase {
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
              lastFour
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
        merchandisePurchases {
          items {
            id
            purchaseId
            merchandiseId
            active
            purchase {
              id
              userID
              paymentIntent
              creditCardId
              transactionId
              lastFour
              createdAt
              updatedAt
            }
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
            lastUsedCardID
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
              lastFour
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
        paymentIntent
        transactions {
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
            lastFour
            createdAt
            updatedAt
          }
          purchaseId
          createdAt
          updatedAt
        }
        creditCardId
        transactionId
        lastFour
        createdAt
        updatedAt
      }
      purchaseId
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
          items {
            id
            transactionId
            merchandiseId
            transaction {
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
            lastUsedCardID
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
              lastFour
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
        creditCardId
        Purchase {
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
            lastUsedCardID
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
              lastFour
              createdAt
              updatedAt
            }
            purchaseId
            createdAt
            updatedAt
          }
          creditCardId
          transactionId
          lastFour
          createdAt
          updatedAt
        }
        purchaseId
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
            }
            chatRoom {
              id
              lastMessageID
              chatRoomName
              pictureId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        invitation {
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
            }
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        lastUsedCardID
        creditCards {
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
          nextToken
        }
        transactions {
          items {
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
              lastFour
              createdAt
              updatedAt
            }
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
            lastFour
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
          nextToken
        }
        userPackages {
          items {
            id
            userID
            packageId
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
              merchandiseId
              createdAt
              updatedAt
            }
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
        accessToken
        idToken
        refreshToken
        cart {
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
        cartId
        entitlements {
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
            }
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
            }
            createdAt
            updatedAt
          }
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
            lastFour
            createdAt
            updatedAt
          }
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
            lastUsedCardID
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
              lastFour
              createdAt
              updatedAt
            }
            purchaseId
            createdAt
            updatedAt
          }
          creditCardId
          transactionId
          lastFour
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
              lastFour
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
        transactions {
          items {
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
              lastFour
              createdAt
              updatedAt
            }
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
            lastFour
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
      nextToken
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
        nextToken
      }
      createdAt
      updatedAt
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
          items {
            id
            merchandiseId
            cartId
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
            cart {
              id
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
      }
      createdAt
      updatedAt
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
        }
        createdAt
        updatedAt
      }
      nextToken
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
      }
      displayName
      band
      date
      createdAt
      updatedAt
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
        }
        displayName
        band
        date
        createdAt
        updatedAt
      }
      nextToken
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
          items {
            id
            transactionId
            merchandiseId
            transaction {
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
            purchase {
              id
              userID
              paymentIntent
              creditCardId
              transactionId
              lastFour
              createdAt
              updatedAt
            }
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
            }
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
            cart {
              id
              createdAt
              updatedAt
            }
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
            subscription {
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
        packageId
        decomissionedMerchandises {
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
            }
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
            }
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
            createdAt
            updatedAt
          }
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
        nextToken
      }
      createdAt
      updatedAt
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
        subscriptionMerchandise {
          items {
            id
            merchandiseId
            subscriptionId
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
            subscription {
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
            createdAt
            updatedAt
          }
          nextToken
        }
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
            }
            chatRoom {
              id
              lastMessageID
              chatRoomName
              pictureId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        invitation {
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
            }
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        lastUsedCardID
        creditCards {
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
          nextToken
        }
        transactions {
          items {
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
              lastFour
              createdAt
              updatedAt
            }
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
            lastFour
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
          nextToken
        }
        userPackages {
          items {
            id
            userID
            packageId
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
              merchandiseId
              createdAt
              updatedAt
            }
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
        accessToken
        idToken
        refreshToken
        cart {
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
        cartId
        entitlements {
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
            }
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
            }
            createdAt
            updatedAt
          }
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
            lastFour
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
              lastFour
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
        transactions {
          items {
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
              lastFour
              createdAt
              updatedAt
            }
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
            lastFour
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
      paymentIntent
      transactions {
        id
        userID
        merchID
        merchandise {
          items {
            id
            transactionId
            merchandiseId
            transaction {
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
            lastUsedCardID
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
              lastFour
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
        creditCardId
        Purchase {
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
            lastUsedCardID
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
              lastFour
              createdAt
              updatedAt
            }
            purchaseId
            createdAt
            updatedAt
          }
          creditCardId
          transactionId
          lastFour
          createdAt
          updatedAt
        }
        purchaseId
        createdAt
        updatedAt
      }
      creditCardId
      transactionId
      lastFour
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
              lastFour
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
        merchandisePurchases {
          items {
            id
            purchaseId
            merchandiseId
            active
            purchase {
              id
              userID
              paymentIntent
              creditCardId
              transactionId
              lastFour
              createdAt
              updatedAt
            }
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
            lastUsedCardID
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
              lastFour
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
        paymentIntent
        transactions {
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
            lastFour
            createdAt
            updatedAt
          }
          purchaseId
          createdAt
          updatedAt
        }
        creditCardId
        transactionId
        lastFour
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
            lastUsedCardID
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
            picture {
              id
              name
              owner
              createdAt
              updatedAt
            }
            pictureId
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      invitation {
        items {
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
            lastUsedCardID
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
            lastUsedCardID
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
            picture {
              id
              name
              owner
              createdAt
              updatedAt
            }
            pictureId
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      lastUsedCardID
      creditCards {
        items {
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
            lastUsedCardID
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
              lastFour
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
        nextToken
      }
      transactions {
        items {
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
            lastFour
            createdAt
            updatedAt
          }
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
            lastUsedCardID
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
              lastFour
              createdAt
              updatedAt
            }
            purchaseId
            createdAt
            updatedAt
          }
          creditCardId
          transactionId
          lastFour
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
        nextToken
      }
      userPackages {
        items {
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
            lastUsedCardID
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
        nextToken
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
        subscriptionMerchandise {
          items {
            id
            merchandiseId
            subscriptionId
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
            subscription {
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
            createdAt
            updatedAt
          }
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
          items {
            id
            merchandiseId
            cartId
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
            cart {
              id
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
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
        nextToken
      }
      accessCodes {
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
            lastUsedCardID
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
        nextToken
      }
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
            }
            chatRoom {
              id
              lastMessageID
              chatRoomName
              pictureId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        invitation {
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
            }
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        lastUsedCardID
        creditCards {
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
          nextToken
        }
        transactions {
          items {
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
              lastFour
              createdAt
              updatedAt
            }
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
            lastFour
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
          nextToken
        }
        userPackages {
          items {
            id
            userID
            packageId
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
              merchandiseId
              createdAt
              updatedAt
            }
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
        accessToken
        idToken
        refreshToken
        cart {
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
        cartId
        entitlements {
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
            }
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
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
          items {
            id
            transactionId
            merchandiseId
            transaction {
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
            purchase {
              id
              userID
              paymentIntent
              creditCardId
              transactionId
              lastFour
              createdAt
              updatedAt
            }
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
            }
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
            cart {
              id
              createdAt
              updatedAt
            }
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
            subscription {
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
        packageId
        decomissionedMerchandises {
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
            }
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
            }
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
            createdAt
            updatedAt
          }
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
        userID
        fromSubscription
        createdAt
        updatedAt
      }
      nextToken
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
            }
            chatRoom {
              id
              lastMessageID
              chatRoomName
              pictureId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        invitation {
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
            }
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        lastUsedCardID
        creditCards {
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
          nextToken
        }
        transactions {
          items {
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
              lastFour
              createdAt
              updatedAt
            }
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
            lastFour
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
          nextToken
        }
        userPackages {
          items {
            id
            userID
            packageId
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
              merchandiseId
              createdAt
              updatedAt
            }
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
        accessToken
        idToken
        refreshToken
        cart {
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
        cartId
        entitlements {
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
            }
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
            }
            createdAt
            updatedAt
          }
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
              lastFour
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
        createdAt
        updatedAt
      }
      nextToken
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
            lastUsedCardID
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
        nextToken
      }
      merchandiseId
      merchandise {
        id
        type
        transactions {
          items {
            id
            transactionId
            merchandiseId
            transaction {
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
            purchase {
              id
              userID
              paymentIntent
              creditCardId
              transactionId
              lastFour
              createdAt
              updatedAt
            }
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
            }
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
            cart {
              id
              createdAt
              updatedAt
            }
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
            subscription {
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
        packageId
        decomissionedMerchandises {
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
            }
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
            }
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
            createdAt
            updatedAt
          }
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
        nextToken
      }
      createdAt
      updatedAt
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
          items {
            id
            userID
            packageId
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
              merchandiseId
              createdAt
              updatedAt
            }
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
        packageMerchandise {
          items {
            id
            merchandiseId
            packageId
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
            createdAt
            updatedAt
          }
          nextToken
        }
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
            }
            chatRoom {
              id
              lastMessageID
              chatRoomName
              pictureId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        invitation {
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
            }
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        lastUsedCardID
        creditCards {
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
          nextToken
        }
        transactions {
          items {
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
              lastFour
              createdAt
              updatedAt
            }
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
            lastFour
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
          nextToken
        }
        userPackages {
          items {
            id
            userID
            packageId
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
              merchandiseId
              createdAt
              updatedAt
            }
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
        accessToken
        idToken
        refreshToken
        cart {
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
        cartId
        entitlements {
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
            }
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
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
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
            }
            chatRoom {
              id
              lastMessageID
              chatRoomName
              pictureId
              createdAt
              updatedAt
            }
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
            }
            chatRoom {
              id
              lastMessageID
              chatRoomName
              pictureId
              createdAt
              updatedAt
            }
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
            lastUsedCardID
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
            picture {
              id
              name
              owner
              createdAt
              updatedAt
            }
            pictureId
            createdAt
            updatedAt
          }
          updatedAt
        }
        invitation {
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
            }
            status
            createdAt
            updatedAt
          }
          nextToken
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
          }
          createdAt
          updatedAt
        }
        pictureId
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
              lastFour
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
        chatRoom {
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
            }
            chatRoom {
              id
              lastMessageID
              chatRoomName
              pictureId
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
            lastUsedCardID
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
            picture {
              id
              name
              owner
              createdAt
              updatedAt
            }
            pictureId
            createdAt
            updatedAt
          }
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
            lastUsedCardID
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
            picture {
              id
              name
              owner
              createdAt
              updatedAt
            }
            pictureId
            createdAt
            updatedAt
          }
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
              lastFour
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
        chatRoom {
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
            }
            chatRoom {
              id
              lastMessageID
              chatRoomName
              pictureId
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
          createdAt
          updatedAt
        }
        updatedAt
      }
      invitation {
        items {
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
            lastUsedCardID
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
            lastUsedCardID
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
            picture {
              id
              name
              owner
              createdAt
              updatedAt
            }
            pictureId
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
        }
        nextToken
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
        }
        createdAt
        updatedAt
      }
      pictureId
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
            }
            chatRoom {
              id
              lastMessageID
              chatRoomName
              pictureId
              createdAt
              updatedAt
            }
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
            }
            chatRoom {
              id
              lastMessageID
              chatRoomName
              pictureId
              createdAt
              updatedAt
            }
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
            lastUsedCardID
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
            picture {
              id
              name
              owner
              createdAt
              updatedAt
            }
            pictureId
            createdAt
            updatedAt
          }
          updatedAt
        }
        invitation {
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
            }
            status
            createdAt
            updatedAt
          }
          nextToken
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
          }
          createdAt
          updatedAt
        }
        pictureId
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
            }
            chatRoom {
              id
              lastMessageID
              chatRoomName
              pictureId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        invitation {
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
            }
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        lastUsedCardID
        creditCards {
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
          nextToken
        }
        transactions {
          items {
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
              lastFour
              createdAt
              updatedAt
            }
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
            lastFour
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
          nextToken
        }
        userPackages {
          items {
            id
            userID
            packageId
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
              merchandiseId
              createdAt
              updatedAt
            }
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
        accessToken
        idToken
        refreshToken
        cart {
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
        cartId
        entitlements {
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
            }
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
            }
            createdAt
            updatedAt
          }
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
            }
            chatRoom {
              id
              lastMessageID
              chatRoomName
              pictureId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        invitation {
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
            }
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        lastUsedCardID
        creditCards {
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
          nextToken
        }
        transactions {
          items {
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
              lastFour
              createdAt
              updatedAt
            }
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
            lastFour
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
          nextToken
        }
        userPackages {
          items {
            id
            userID
            packageId
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
              merchandiseId
              createdAt
              updatedAt
            }
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
        accessToken
        idToken
        refreshToken
        cart {
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
        cartId
        entitlements {
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
            }
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
            }
            createdAt
            updatedAt
          }
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
            }
            chatRoom {
              id
              lastMessageID
              chatRoomName
              pictureId
              createdAt
              updatedAt
            }
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
            }
            chatRoom {
              id
              lastMessageID
              chatRoomName
              pictureId
              createdAt
              updatedAt
            }
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
            lastUsedCardID
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
            picture {
              id
              name
              owner
              createdAt
              updatedAt
            }
            pictureId
            createdAt
            updatedAt
          }
          updatedAt
        }
        invitation {
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
            }
            status
            createdAt
            updatedAt
          }
          nextToken
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
          }
          createdAt
          updatedAt
        }
        pictureId
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
              lastFour
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
        createdByUser {
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
              lastFour
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
        invitedUserID
        createdByUserID
        chatRoomID
        chatRoom {
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
            }
            chatRoom {
              id
              lastMessageID
              chatRoomName
              pictureId
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
            }
            chatRoom {
              id
              lastMessageID
              chatRoomName
              pictureId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        invitation {
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
            }
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        lastUsedCardID
        creditCards {
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
          nextToken
        }
        transactions {
          items {
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
              lastFour
              createdAt
              updatedAt
            }
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
            lastFour
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
          nextToken
        }
        userPackages {
          items {
            id
            userID
            packageId
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
              merchandiseId
              createdAt
              updatedAt
            }
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
        accessToken
        idToken
        refreshToken
        cart {
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
        cartId
        entitlements {
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
            }
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
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        chatRoomUsers {
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
            }
            chatRoom {
              id
              lastMessageID
              chatRoomName
              pictureId
              createdAt
              updatedAt
            }
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
            }
            chatRoom {
              id
              lastMessageID
              chatRoomName
              pictureId
              createdAt
              updatedAt
            }
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
            lastUsedCardID
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
            picture {
              id
              name
              owner
              createdAt
              updatedAt
            }
            pictureId
            createdAt
            updatedAt
          }
          updatedAt
        }
        invitation {
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
            }
            status
            createdAt
            updatedAt
          }
          nextToken
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
          }
          createdAt
          updatedAt
        }
        pictureId
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
              lastFour
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
        chatRoom {
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
            }
            chatRoom {
              id
              lastMessageID
              chatRoomName
              pictureId
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
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
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
          items {
            id
            transactionId
            merchandiseId
            transaction {
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
            purchase {
              id
              userID
              paymentIntent
              creditCardId
              transactionId
              lastFour
              createdAt
              updatedAt
            }
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
            }
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
            cart {
              id
              createdAt
              updatedAt
            }
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
            subscription {
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
        packageId
        decomissionedMerchandises {
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
            }
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
            }
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
            createdAt
            updatedAt
          }
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
        createdAt
        updatedAt
      }
      nextToken
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
        subscriptionMerchandise {
          items {
            id
            merchandiseId
            subscriptionId
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
            subscription {
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
            createdAt
            updatedAt
          }
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
      transactions {
        items {
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
              lastFour
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
        nextToken
      }
      merchandisePurchases {
        items {
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
            lastFour
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
            lastUsedCardID
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
        nextToken
      }
      packageMerchandise {
        items {
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
        subscriptionMerchandise {
          items {
            id
            merchandiseId
            subscriptionId
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
            subscription {
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
            createdAt
            updatedAt
          }
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
          items {
            id
            userID
            packageId
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
              merchandiseId
              createdAt
              updatedAt
            }
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
        packageMerchandise {
          items {
            id
            merchandiseId
            packageId
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
            createdAt
            updatedAt
          }
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
        nextToken
      }
      version
      associatedMerchandise {
        items {
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
        nextToken
      }
      associatedMerchandiseEnabled
      bandMerchandise {
        items {
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
        nextToken
      }
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
        transactions {
          items {
            id
            transactionId
            merchandiseId
            transaction {
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
            purchase {
              id
              userID
              paymentIntent
              creditCardId
              transactionId
              lastFour
              createdAt
              updatedAt
            }
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
            }
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
            cart {
              id
              createdAt
              updatedAt
            }
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
            subscription {
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
        packageId
        decomissionedMerchandises {
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
            }
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
            }
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
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
      nextToken
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
          items {
            id
            transactionId
            merchandiseId
            transaction {
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
            purchase {
              id
              userID
              paymentIntent
              creditCardId
              transactionId
              lastFour
              createdAt
              updatedAt
            }
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
            }
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
            cart {
              id
              createdAt
              updatedAt
            }
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
            subscription {
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
        packageId
        decomissionedMerchandises {
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
            }
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
            }
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
            createdAt
            updatedAt
          }
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
          items {
            id
            transactionId
            merchandiseId
            transaction {
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
            purchase {
              id
              userID
              paymentIntent
              creditCardId
              transactionId
              lastFour
              createdAt
              updatedAt
            }
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
            }
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
            cart {
              id
              createdAt
              updatedAt
            }
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
            subscription {
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
        packageId
        decomissionedMerchandises {
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
            }
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
            }
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
            createdAt
            updatedAt
          }
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
        associatedMerchandiseId
        associatedTo {
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
        associatedToId
        createdAt
        updatedAt
      }
      nextToken
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
          items {
            id
            transactionId
            merchandiseId
            transaction {
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
            purchase {
              id
              userID
              paymentIntent
              creditCardId
              transactionId
              lastFour
              createdAt
              updatedAt
            }
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
            }
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
            cart {
              id
              createdAt
              updatedAt
            }
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
            subscription {
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
        packageId
        decomissionedMerchandises {
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
            }
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
            }
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
            createdAt
            updatedAt
          }
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
        decomissionedMerchandiseJSON
        version
        createdAt
        updatedAt
      }
      nextToken
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
    }
  }
`;
export const listDefaultPlatformFeePercentages = /* GraphQL */ `
  query ListDefaultPlatformFeePercentages(
    $filter: ModelDefaultPlatformFeePercentagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDefaultPlatformFeePercentages(
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
      }
      nextToken
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
              lastFour
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
        transactions {
          items {
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
              lastFour
              createdAt
              updatedAt
            }
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
            lastFour
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
      nextToken
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
            }
            chatRoom {
              id
              lastMessageID
              chatRoomName
              pictureId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        invitation {
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
            }
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        lastUsedCardID
        creditCards {
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
          nextToken
        }
        transactions {
          items {
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
              lastFour
              createdAt
              updatedAt
            }
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
            lastFour
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
          nextToken
        }
        userPackages {
          items {
            id
            userID
            packageId
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
              merchandiseId
              createdAt
              updatedAt
            }
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
        accessToken
        idToken
        refreshToken
        cart {
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
        cartId
        entitlements {
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
            }
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
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
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
            }
            chatRoom {
              id
              lastMessageID
              chatRoomName
              pictureId
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        invitation {
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
            }
            status
            createdAt
            updatedAt
          }
          nextToken
        }
        lastUsedCardID
        creditCards {
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
          nextToken
        }
        transactions {
          items {
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
              lastFour
              createdAt
              updatedAt
            }
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
            lastFour
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
          nextToken
        }
        userPackages {
          items {
            id
            userID
            packageId
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
              merchandiseId
              createdAt
              updatedAt
            }
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
        accessToken
        idToken
        refreshToken
        cart {
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
        cartId
        entitlements {
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
            }
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
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
              lastFour
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
        createdAt
        updatedAt
      }
      nextToken
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
              lastFour
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
        chatRoom {
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
            }
            chatRoom {
              id
              lastMessageID
              chatRoomName
              pictureId
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
              lastFour
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
        chatRoom {
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
            }
            chatRoom {
              id
              lastMessageID
              chatRoomName
              pictureId
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
              lastFour
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
        chatRoom {
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
            }
            chatRoom {
              id
              lastMessageID
              chatRoomName
              pictureId
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
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
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
          items {
            id
            transactionId
            merchandiseId
            transaction {
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
            purchase {
              id
              userID
              paymentIntent
              creditCardId
              transactionId
              lastFour
              createdAt
              updatedAt
            }
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
            }
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
            cart {
              id
              createdAt
              updatedAt
            }
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
            subscription {
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
        packageId
        decomissionedMerchandises {
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
            }
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
            }
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
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
          items {
            id
            transactionId
            merchandiseId
            transaction {
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
            purchase {
              id
              userID
              paymentIntent
              creditCardId
              transactionId
              lastFour
              createdAt
              updatedAt
            }
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
            }
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
            cart {
              id
              createdAt
              updatedAt
            }
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
            subscription {
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
        packageId
        decomissionedMerchandises {
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
            }
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
            }
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
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
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
      }
      nextToken
    }
  }
`;
