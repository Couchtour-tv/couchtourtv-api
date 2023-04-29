const Responses = {
  _200(data = {}) {
    console.log("API_RESPONSES._200:", data)
    return {
      "headers": {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Origin": "*",
      },
      "statusCode": 200,
      "isBase64Encoded": false,
      "body": JSON.stringify({ ...data}),
    }
  },
  _400(data = {}) {
    console.log("API_RESPONSES._400:", data)
    return {
      "headers": {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Origin": "*",
      },
      "statusCode": 400,
      "isBase64Encoded": false,
      "body": JSON.stringify(data),
    }
  },
  _404(data = {}) {
    console.log("API_RESPONSES._404:", data)
    return {
      "headers": {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Origin": "*",
      },
      "statusCode": 404,
      "isBase64Encoded": false,
      "body": JSON.stringify(data),
    }
  },
  _500(data = {}) {
    console.log("API_RESPONSES._500:", data)
    return {
      "headers": {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Origin": "*",
      },
      "statusCode": 500,
      "isBase64Encoded": false,
      "body": JSON.stringify(data),
    }
  },
}

export default Responses
