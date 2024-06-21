                                                 SOLIDITY PROJECT EXPLAINATION

Firstly, I created a virtual environment inside remix.

Inside it I created a contract which is named MyToken.

                                                        MAIN BODY OF CODE
Inside the contract I added 3 variables named (“name”,  “abbrv”, “totalsupply”). All 3 were set to public for better access for the sake of demonstration.

Total supply was set to zero at initialisation and its datatype is taken as uint as negative value for inside the crypto wallet would be weird and non-feasible.

Next mapping of (address =>uint) was done and it was named as balances it was done to access the balance inside the wallet can be accessed easily. 

                                                           FUNCTIONS
A minting function was created for ease of adding values to our wallet. This function will add integer values inside totalsupply variable which is given by the user.

Finally before closing the contract I made a burn function, if I wanted to windrow my currency from the wallet it will be done the same way as minting function but instead of adding to the address it takes away value from the address and works as subtracting from the address of the wallet. Burning function also has a control statement which is to protect the wallet from having negative currency It will not subtract from the wallet is the amount to be burned is greater than the balance inside the wallet.





