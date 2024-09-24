// var str = prompt("Enter some text");
//  var numChars = str.length;
//  for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) === "25") {
//  alert("Number Found");
//  }
// }
// For Replacing text
// var text = `Pakistan is located in Asia. People of Pakistan like music, dance, and yummy food like biryani and kababs. `
//  console.log(text.replace("biryani","karahi"))
//  for(i = 0; i < text.length; i++){
//         if(text.slice(i,i + 7) === "biryani"){
//             text = text.slice(0 , i) + "Karahi" + text.slice(i + 7)
//         }
//      }
// var index = text.indexOf("biryani");
// var starting_text = text.slice(0,87)
// var changing = "Pasta "
// var end = text.slice(index + 8)
// console.log(starting_text + changing + end)  
    //  console.log(text)
// var text = `Pakistan is located in Asia. People of Pakistan like music, dance, and yummy food like biryani and biryani. `
// console.log(text.replaceAll("biryani" , "Karahi"))

//     // Chapter 26
//     // Jb Bh . point ke baad wali value 1 se 4 tk hogi toh uski value kam hojaigi like 2.3 = 2 or agr ziyda hogi toh value increase hojaigi like 2.6 = 3
//     // Java Script mein jo Math Ha yeh ek Object ha Us mein se hmne ek object nikala Math.round asey hi type hoga yeh thk
//     var num = +prompt("enter a DEcimal Num")
//     // parseInt ka jo function ha wo decimal axpt nh krta baki + or number krty hain (Sir ne Kaha Interview Qs ha)
//     // Math.ceil Kia krta ha agr ceil ko koi bh decimal do 1 se 9 tk wo num increase krdega like 2.1 toh yeh 3 krde ga round ka method 1 se 4 tk pevhe waly num se round krta ha but ceil ko koi bh do wo agye waly se hi round krega
//     // Math.floor yeh isky opposite ha isko koi bh decimal do yeh back waly se hi round krega liek 2.9 = 2 yeh peche waly num se round krega
//     console.log("Round",Math.round(num))
//     console.log("Ceil",Math.ceil(num))
//     console.log("Floor",Math.floor(num))

    // parsefloat decimal bh axpt krta ha parseint nh krta axpt
    // Agr Data Ko Strng mein krn ha agr num ho boola=ean ho koi bh toh .tostring ka method ha hmary pass
    // yeh direct call nh hota
    // var  num = 121
    // console.log(num.toString())
    // Math.random random num deta ha barey project ke liye
    var num = Math.random()
    console.log(num.toFixed(3))