const Responses = {
  _200(data = {}) {
    console.log("API_RESPONSES._200:", data)
    return {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 200,
      body: JSON.stringify({ ...data, ConnectionId: "asdf" }),
    }
  },
  _301(data = {}) {
    console.log("API_RESPONSES._400:", data)
    return {
      headers: {
        Location: data.url,
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 301,
      body: JSON.stringify(data),
    }
  },
  _400(data = {}) {
    console.log("API_RESPONSES._400:", data)
    return {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 400,
      body: JSON.stringify(data),
    }
  },
  _500(data = {}) {
    console.log("API_RESPONSES._500:", data)
    return {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 500,
      body: JSON.stringify(data),
    }
  },
}

export default Responses
