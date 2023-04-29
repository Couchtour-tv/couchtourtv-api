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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
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
