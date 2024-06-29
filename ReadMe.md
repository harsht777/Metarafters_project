#  Create a Token
We are  using Solidity here to create a Token.


## Description

This program  written in Solidity, a programming language used for developing smart contracts on the Ethereum blockchain. Here we created  token with the help of different variables , function, looping statement, and used our learning here that what we studied from our course
 We are using function Mint to  increases the total supply by that number and increases the balance 
       of the “sender” address by that amount.
And using Burn function that it will then deduct the value from the total supply and from the balance of the “sender”.
### Executing program

To run this program, you can use Remix, an online Solidity IDE. To get started, go to the Remix website at https://remix.ethereum.org/.

Once you are on the Remix website, create a new file by clicking on the "+" icon in the left-hand sidebar. Save the file with a .sol extension (e.g., HelloWorld.sol). Copy and paste the following code into the file:

    contract MyToken {

    // public variables here
     string public Nname="Etherium";
     string public Abbrv="ETH";
     uint public totalsupply = 0;

    // mapping variable here
      mapping (address => uint) public balances;

    // mint function
      function minting (address _address, uint _value) public{
          totalsupply += _value;
          balances[_address] += _value;
      }
    // burn function
       function burning (address _address, uint _value) public{
         if(balances[_address]>= _value){
          totalsupply -= _value;
          balances[_address] -= _value;
         }
      }
    }
 We goto "DEPLOY & RUN TRANSACTIONS" and click on Deploy .
 Then click on "Deployed/Unpinned Contracts".
 Then we can copy Account id and we do further use of mint and burn function .
 We can also  do check our "Token Name, Token Abbrv., Total Supply " values there.
## Authors
Harshit Saharan

harshit777saharan@gmail.com
## License

This project is licensed under the MIT License - see the LICENSE.md file for details
