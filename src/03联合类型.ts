{
    // 联合类型表示取值可以为多种类型中的一种,联合类型使用|分隔每个类型
    let myFavoriteNumber: string | number;
    myFavoriteNumber = 'seven';
    myFavoriteNumber = 7;
}
{
    let myFavoriteNumber: string | number;
    myFavoriteNumber = 'seven';
    console.log(myFavoriteNumber.length);
    myFavoriteNumber = 7; //这个地方会被推断为number  所以不能使用length属性
}
