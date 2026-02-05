function validateAge(oldEnough){
  let logic = true;
  if (logic){
    document.getElementById("result").innerHTML = 'old enough';
  }
}

function validateAge(oldEnugh){
   if (oldEnough === true){
    return "old enough";
   }
}

 //     ✕ should create a function named validateAge that takes a parameter named oldEnough and returns 'old enough' only if oldEnough is true (1283 ms)
 //     ✓ should not return 'old enough' from the validateAge function if oldEnough is false (138 ms)
 // 
 //   ● the index.js file › should create a function named validateAge that takes a parameter named oldEnough and returns 'old enough' only if oldEnough is true
 // 
 //     expect(received).toBe(expected) // Object.is equality
 // 
 //     Expected: "old enough"
 //     Received: undefined
 // 
 //       47 |       });
 //       48 |
 //     > 49 |       expect(result).toBe('old enough');
 //          |                      ^
 //       50 |   });
 //       51 |
 //       52 |   it("should not return 'old enough' from the validateAge function if oldEnough is false", async function() {

//        at Object.toBe (test/verify.test.js:49:22)

//should add logic to the function named validateAge so that it returns "old enough" 
// if oldEnough is true

//should not return "old enough" from the validateAge function if oldEnough is
//  false