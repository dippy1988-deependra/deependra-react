// find a single value of an array of object through for loop
var temp = []
for (var i = 0; i < json.length; i++) {
  temp.push(json[i].projectName)
  console.log(temp)
}

// check if select box is empty or not via api call
const seacrhClusterConnection = (connectionValue, value) => {
    for (var i = 0; i < connectionValue.length; i++) {
      if (connectionValue[i]["name"] === value) {
        return i;
      }
    }
    return -1;
  }

//   use effect api call using fetch method
React.useEffect(() => {
    const fetchConnectionName = () => {
      setLoader1(true)
      const requestOption = {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${login.userDetails.jwtToken}`,
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          'Ocp-Apim-Subscription-Key': `${login.userDetails.apiKey}`
        },
      };
      fetch(`${process.env.REACT_APP_MATCHPOINT_GET_ALL_CONNECTIONS}`, requestOption)
        .then(Response => Response.json())
        .then((json) => {
          setAllProjectList(json)
          console.log(json)
          // setMpConnections(json)
          var temp = []
          for (var i = 0; i < json.length; i++) {
            temp.push(json[i].projectName)
            console.log(temp)
          }
          setMatchpointProjectList(temp)

        })
    }
    fetchConnectionName()
  }, [login.userDetails.jwtToken, login.userDetails.apiKey])