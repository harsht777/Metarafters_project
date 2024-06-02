/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFT_holder=[]; //array

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (Name, Built, Country, ID_Num ) {
   const dataForNFT = {
      "name":Name,
      "built":Built, 
      "country":Country,
      "id_num":ID_Num
   }
      NFT_holder.push(dataForNFT);
      console.log("called:"+Name)  //for reference
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for(var i=0; i < NFT_holder.length; i++){
   
   console.log("-------------------")
   console.log("id\t " + (i+1));
   console.log("Name:\t "+NFT_holder[i].name);
   console.log("Built:\t "+NFT_holder[i].built);
   console.log("Country: "+NFT_holder[i].country);
   console.log("Id_Num:\t "+NFT_holder[i].id_num);
         
  
}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
 console.log(NFT_holder.length);

}

// call your functions below this line
mintNFT("Max","Muscular","Belgium","AA01");
mintNFT("Riccardo","lean","Australia","BB02");
mintNFT("Riccardo","lean","Australia","BB02");
listNFTs();
getTotalSupply();
