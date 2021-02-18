const tableName = "MoonUsers"



const getUsers = (connectionID) => {
    console.log("**************************    USER MODEL SCAN   ", connectionID)
	/*
		get users where status is connected
	*/

    // let filterExpression = `currentstatus = :currentstatus`;
    // let expressionAttributes = {
    //     ':currentstatus': 'connected',
    // };

    const users = await Dynamo.scan({
        TableName: tableName,
        // filterExpression,
        // expressionAttributes,
    });


    const userIDS = users.map((user) => user.ID)

    console.log("USER MODEL SCAN-2", users, userIDS)

	return userIDS
}













module.exports = {
	getUsers
}