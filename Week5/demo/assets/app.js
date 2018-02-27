var sum = function(number1, number2) {
	return number1 + number2;
}

var sum_of_element = function(array) {
	let ans = 0;
	for(i = 0; i < array.length; i++) {
		ans += array[i];
	}
	return ans;
}

UserFactory = (function() {
    let userDatabase = [['Yong Jun', 'secret', 0], ['Stephen', 'secret', 0]];

    return {
        SignUp : function (username, password) {
            for (var i = userDatabase.length - 1; i >= 0; i--) {
                if(userDatabase[i][0] == username) {
                    return 'This username is used';
                }
            }
            let id = userDatabase.length;
            let deposit = 0;
            let myUsername = username;
            let myPassword = password;
            userDatabase.push([myUsername,myPassword, deposit]);
            return {
                getDeposit : function(){
                    return deposit;
                },
                addDeposit : function(password){
                    if(password == myPassword) {
                        deposit += parseInt(prompt('Enter the amount of deposit:'));
                        userDatabase[id][2] = deposit;
                        return 'Successfully Added';
                    }
                    else return 'Wrong Password';
                },
                resetDeposit : function(){
                    userDatabase[id][2] = deposit;
                    deposit = 0;
                }
            }
        },
        LogIn : function (username, password) {
            for (var i = userDatabase.length - 1; i >= 0; i--) {
                if(userDatabase[i][0] == username) {
                    if(userDatabase[i][1] == password){
                        let id = i;
                        let deposit = userDatabase[i][2];
                        let myUsername = username;
                        let myPassword = password;
                        return {
                            getDeposit : function(){
                                return deposit;
                            },
                            addDeposit : function(password){
                                if(password == myPassword) {
                                    deposit += parseInt(prompt('Enter the amount of deposit:'));
                                    userDatabase[id][2] = deposit;
                                    return 'Successfully Added';
                                }
                                else return 'Wrong Password';
                            },
                            resetDeposit : function(){
                                userDatabase[id][2] = deposit;
                                deposit = 0;
                            }
                        }
                    }
                    else return "Wrong Password!";
                }
            }
            return "Username Not Found!";
        },
        ShowUsers : function() {
            return userDatabase;
        }

    }

})();