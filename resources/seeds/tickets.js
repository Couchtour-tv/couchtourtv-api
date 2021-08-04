import heavyMetal_astronaut from "../images/heavyMetal_astronaut.jpeg"
// import heavyMetal_crowd from "../images/heavyMetal_crowd.jpeg"
import heavyMetal_dude from "../images/heavyMetal_dude.jpeg"
import heavyMetal_fireSkull from "../images/heavyMetal_fireSkull.jpeg"
import heavyMetal_skeleton from "../images/heavyMetal_skeleton.jpeg"


const hardCodeTicketsDev = [
  {
    ID: "f42298f7-bda8-4806-88ca-6dd1dc2ab985",
    ticketId: "tic_f42298f7-bda8-4806-88ca-6dd1dc2ab985",
    eventId: "evt_24f60b47-f814-4ece-8d98-fee2ec4e5e54",
    title: "Decibel 200th: Extremely Ex-Stream",
    price: "2424",
    priceId: "price_1IlaqVKsNNk3qPPU1eKk7NOP",
    image: heavyMetal_astronaut,
    boxedItems: ["GA", "Free DVD", "T-SHIRT", "POSTER"],
    attributes: [
      "General Admission to Decibel 200th: Extremely Ex-Stream",
      "Bonus DVD! The Decibel 200th Issue Show Extremely Ex-Stream, presented by Metal Blade Records.",
      "Signed One-Time Offering Poster From The Label",
      "Exclusive limited edition event T-shirt ",
      "Available to ship within the U.S. and Canada only.",
    ],
    soldOut: false,
  },
  {
    ID: "0b109cac-dba1-4ab3-a15f-f1ec64e580ad",
    ticketId: "tic_0b109cac-dba1-4ab3-a15f-f1ec64e580ad",
    eventId: "evt_24f60b47-f814-4ece-8d98-fee2ec4e5e54",
    title: "Decibel 200th: Extremely Ex-Stream",
    price: "1818",
    priceId: "price_1Ilaq6KsNNk3qPPUDhxU9Yo6",
    image: heavyMetal_fireSkull,
    boxedItems: ["GA", "Free DVD", "T-SHIRT"],
    attributes: [
      "General Admission to Decibel 200th: Extremely Ex-Stream",
      "Bonus DVD! The Decibel 200th Issue Show Extremely Ex-Stream, presented by Metal Blade Records.",
      "Exclusive limited edition event T-shirt ",
      "Available to ship within the U.S. and Canada only.",
    ],
    soldOut: false,
  },
  {
    ID: "cfb84032-6618-447e-b9f5-665f1122f8f1",
    ticketId: "tic_cfb84032-6618-447e-b9f5-665f1122f8f1",
    eventId: "evt_24f60b47-f814-4ece-8d98-fee2ec4e5e54",
    title: "Decibel 200th: Extremely Ex-Stream",
    price: "1212",
    priceId: "price_1IlapIKsNNk3qPPUoEGuf9DG",
    image: heavyMetal_skeleton,
    boxedItems: ["GA", "Free DVD"],
    attributes: [
      "General Admission to Decibel 200th: Extremely Ex-Stream",
      "Bonus DVD! The Decibel 200th Issue Show Extremely Ex-Stream, presented by Metal Blade Records.",
      "Available to ship within the U.S. and Canada only.",
    ],
    soldOut: false,
  },
  {
    ID: "c73947fc-2a00-4518-ae35-090dad1fe9a4",
    ticketId: "tic_c73947fc-2a00-4518-ae35-090dad1fe9a4",
    eventId: "evt_24f60b47-f814-4ece-8d98-fee2ec4e5e54",
    title: "Decibel 200th: Extremely Ex-Stream",
    price: "666",
    priceId: "price_1IlaoGKsNNk3qPPU3DzX68eW",
    image: heavyMetal_dude,
    boxedItems: ["GA"],
    attributes: [
      "General Admission to Decibel 200th: Extremely Ex-Stream",
      "Bonus DVD! The Decibel 200th Issue Show Extremely Ex-Stream, presented by Metal Blade Records.",
      "Available to ship within the U.S. and Canada only.",
    ],
    soldOut: false,
  },
]


const hardCodeTicketsProd = [
  // EXTREME TICKET -- 2999
  {
    ID: "f42298f7-bda8-4806-88ca-6dd1dc2ab985",
    ticketId: "tic_f42298f7-bda8-4806-88ca-6dd1dc2ab985",
    eventId: "evt_24f60b47-f814-4ece-8d98-fee2ec4e5e54",
    title: "Decibel 200th: Extremely Ex-Stream",
    price: "3999",
    priceId: "price_1Im31PKsNNk3qPPU1Koss1Li",
    image: heavyMetal_astronaut,
    boxedItems: ["GA", "T-SHIRT", "MAGAZINE"],
    attributes: [
      "General Admission to Decibel 200th: Extremely Ex-Stream",
      "Exclusive limited edition event T-shirt ",
      "Available to ship within the U.S. and Canada only.",
      "Cost: $29.99 + $10 shipping fee"
    ],
    shipping: {
      world: null,
      us: {
        id: 'shr_1Im0QlKsNNk3qPPURgaPwfAp',
        price: 825
      },
      canada: {
        id: 'shr_1Im0ReKsNNk3qPPUmUftOj4k',
        price: 21
      }
    }
    soldOut: false,
  },
  // ELITE TICKET -- 1666
  {
    ID: "0b109cac-dba1-4ab3-a15f-f1ec64e580ad",
    ticketId: "tic_0b109cac-dba1-4ab3-a15f-f1ec64e580ad",
    eventId: "evt_24f60b47-f814-4ece-8d98-fee2ec4e5e54",
    title: "Decibel 200th: Extremely Ex-Stream",
    price: "2666",
    priceId: "price_1Im30iKsNNk3qPPUuM6dRbtI",
    image: heavyMetal_fireSkull,
    boxedItems: ["GA", "T-SHIRT"],
    attributes: [
      "General Admission to Decibel 200th: Extremely Ex-Stream",
      "Exclusive limited edition event T-shirt ",
      "Available to ship within the U.S., Canada and  Most Countries Around The World",
      "Cost: $16.66 + $10 shipping fee"
    ],
    shipping: {
      world: {
        id: 'shr_1Im0NhKsNNk3qPPUDsUJdKcK',
        price: 2525
      },
      us: {
        id: 'shr_1Im0NAKsNNk3qPPUj952TZ1x',
        price: 525
      },
      canada: {
        id: 'shr_1Im0MWKsNNk3qPPU1SIYR3pX',
        price: 21
      }
    }
    soldOut: false,
  },
  // Extremely Ex-Stream! ISSUE 200 TICKET -- 999
  {
    ID: "cfb84032-6618-447e-b9f5-665f1122f8f1",
    ticketId: "tic_cfb84032-6618-447e-b9f5-665f1122f8f1",
    eventId: "evt_24f60b47-f814-4ece-8d98-fee2ec4e5e54",
    title: "Decibel 200th: Extremely Ex-Stream",
    price: "1999",
    priceId: "price_1Im2zuKsNNk3qPPUOZq5OjGD",
    image: heavyMetal_skeleton,
    boxedItems: ["GA", "MAGAZINE"],
    attributes: [
      "General Admission to Decibel 200th: Extremely Ex-Stream",
      "Get A Copy Of Our Magazine - Decibel issue 200 + gold-stamped Converge picture"
      "Available to ship within the U.S., Canada and  Most Countries Around The World",
      "Cost: $9.99 + $10 shipping fee"
    ],
    shipping: {
      world: {
        id: 'shr_1Im0LVKsNNk3qPPU6ORloBQv',
        price: 1700
      },
      us: {
        id: 'shr_1Im0KnKsNNk3qPPUxvH1I0LE',
        price: 525
      },
      canada: {
        id: 'shr_1Im0K8KsNNk3qPPU8RE3eLYp',
        price: 1400
      }
    }
    soldOut: false,
  },
  // OLD SCHOOL TICKET --6.66
  {
    ID: "c73947fc-2a00-4518-ae35-090dad1fe9a4",
    ticketId: "tic_c73947fc-2a00-4518-ae35-090dad1fe9a4",
    eventId: "evt_24f60b47-f814-4ece-8d98-fee2ec4e5e54",
    title: "Decibel 200th: Extremely Ex-Stream",
    price: "666",
    priceId: "price_1IlnbUKsNNk3qPPUNbSCg22B",
    image: heavyMetal_dude,
    boxedItems: ["GA"],
    attributes: [
      "General Admission to Decibel 200th: Extremely Ex-Stream",
    ],
    shipping: null,
    soldOut: false,
  },
]

const tixExport = process.env.REACT_APP_ENVIRONMENT === 'production' ? hardCodeTicketsProd : hardCodeTicketsDev


export default tixExport;