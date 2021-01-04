"use strict"

const checkForSpam = function(message,oneWord,secondWord) {
    const changeLower = message.toLowerCase();
    return changeLower.includes(oneWord)||changeLower.includes(secondWord);
  };
  
  
  console.log(checkForSpam('Latest technology news','spam','sale')); 
  console.log(checkForSpam('JavaScript weekly newsletter','spam','sale')); 
  console.log(checkForSpam('Get best sale offers now!','spam','sale')); 
  console.log(checkForSpam('[SPAM] How to earn fast money?','spam','sale')); 