/**
 * Created by cyz on 2017/8/17.
 */
'use strict';
let arr=[5, 3, 7, 1];
console.log(arr);
let result =main(arr);
console.log('每个元素平方后的结果为：'+ result);

function main(collection){
    let result=[];
    collection.map(function(item){
        result.push(Math.pow(item,2));
    })
    return result;
}