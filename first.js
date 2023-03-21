function createUser( username, password )
{
    const user = { username, password };  //create a user object to go in the array
    users.push( user );  //put it on the end of the array
}

function getUser( username, password )
{
    //loops through each user in the array and checks the stored username and password against the one you're looking for
    return users.find( 
        eachUser => 
        {
        return eachUser.username === username && eachUser.password === password;
        }
    );
}

var users = [];