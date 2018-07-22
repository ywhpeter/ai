//搜索
document.querySelector(".input").oninput=function ( e ) {
    create(search (e.target.value));
}
// console.log(1)

//引入界面两种方法
//g=给我一个数组  给你一个数组
//方法一
//  let search =function( k ){
//     return database.filter(v=>{
//         return (v.name && v.name.indexOf(k) !==-1)
//             || (v.city && v.city.indexOf(k) !==-1)
//             || (v.address && v.address.indexOf(k) !==-1)
//             || (v.phone && v.phone.indexOf(k) !==-1)
//     })
// }
// let  keyword=prompt();
// search(keyword);
// console.table(search(keyword))
//方法二
let search=function (k){
    return database.filter( v=>{
        let  total=v.name +v.city+ v.county +v.address+(v.phone && v.phone.join(" "));
        return total.indexOf(k) !=-1;
    })
};



//构建数据两种方法
//方法1

// database.forEach(v=>{
//     let content=`
//                 <a href="tel:${v.phone?v.phone[0]:"114"}"></a>
//                 <p class="top">${v.county}</p>
//                 <p class="center">${v.address}</p>
//                 <i class="iconfont icon-shouji"></i>`
//              if(v.county){
//                         if ( v.address){
//                             magic("main ul","li",null,content)
//                         } else { magic("main ul","li",null,`
//                              <p class="top">${v.county}</p>
//                              <p class="center">暂无地址</p>
//                              <i class="iconfont icon-shouji"></i>
//                              `)}
//                     }
// });




//方法二
// let create =arr =>{
//      document.querySelector("main ul").innerHTML= " ";
//      arr.forEach(v=>{
//
//      })
//
//
//
// }
//
//
// create(database);
let  create = database=>{
    document.querySelector ('main ul').innerHTML =' ';
    database.forEach (v=>{
        let content=
            ` 
                <a href="tel:${v.phone?v.phone[0]:'114'}"> </a>
                <p class="top">${v.county}</p>
                <p class="center">${v.address}</p>
                `;
        magic ('main ul' ,'li', null , content, );
    })
};
create(database);