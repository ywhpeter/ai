//最小代价试错法
//
// function t(num) {
//     //135  2:15
//     return h+":"+m;
// }
//
// function f(arr){
//     let a={};
//     a[arr[0].city]=[];
//     a[arr[2].city]=[];
//     a[arr[0].city].push(arr[0].county);
//     a[arr[1].city].push(arr[1].county);
//     a[arr[2].city].push(arr[2].county);
//     a[arr[3].city].push(arr[3].county);
//     a[arr[4].city].push(arr[4].county);
//     a[arr[5].city].push(arr[5].county);
//     return a ;
//
// }
//
// let data=[
//     {city:"A",county:"A-1"},
//     {city:"A",county:"A-2"},
//     {city:"B",county:"B-1"},
//     {city:"B",county:"B-2"},
//     {city:"B",county:"B-3"},
//     {city:"A",county:"A-3"},
// ];

// let a = f(data);

//f
// let a={
//     "A":["A-1","A-2"],
//     "B":["B-1","B-2","B-3"]
// };
//


//
//
// function  fn(arr){
//     let k,v,o={};
//
//     k=arr[0].city;v=arr[0].county;
//     if(!o[k]){
//         o[k]=[];
//     }
//     o[k].push(v);
//     k=arr[1].city;v=arr[1].county;
//     if(!o[k]){
//         o[k]=[];
//     }
//     o[k].push(v);
//     k=arr[2].city;v=arr[2].county;
//     if(!o[k]){
//         o[k]=[];
//     }
//     o[k].push(v);
//     k=arr[3].city;v=arr[3].county;
//     if(!o[k]){
//         o[k]=[];
//     }
//     o[k].push(v);
//     k=arr[4].city;v=arr[4].county;
//     if(!o[k]){
//         o[k]=[];
//     }
//     o[k].push(v);
//     k=arr[5].city;v=arr[5].county;
//     if(!o[k]){
//         o[k]=[];
//     }
//     o[k].push(v);
//
//     return  o ;
// }

// fun()
//


// console.log(o);
// for(let key in o) {
//     console.log(key);
//     o[key].forEach( v => console.log(v))
// }
let f = arr => {
    let o = {};
    arr.forEach(x => {
        let key = x.city;
        let value = x.county;
        let address = x.address;
        if (!o[key]) {
            o[key] = {}
        }
        // console.log(o[key])
        if (!o[key][value]) {
            o[key][value] = 1;//在这里 true 为真实值，内置判断为真
        }
        // console.log(o[key][value])
        // if( !o[key][address]){
        //     o[key][address]=true;
        // }
        // console.log(o[key][address])
    });
    return o;
};

let a = f(database);
for (let city in a) {
    let countyObj = a[city];
    magic("main ul", "li", "city", city);
    for (let county in countyObj) {
        if (county !== "undefined")
            magic("main ul", "li", "count", county)
    }
}



