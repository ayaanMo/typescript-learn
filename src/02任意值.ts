{
    // 如果是一个普通类型，在赋值过程中改变类型是不被允许的；
    // 任意值用来表示允许赋值为任意类型
    let anyThing: any = 'Tom';
    anyThing = 3;
    console.log(anyThing);
}
{
    {
        let something;
        something = 'seven';
        something = 7;
        something.setName('Tom');
    }
    // ===>等同于
    {
        let something: any;
        something = 'seven';
        something = 7;
        something.setName('Tom');
    }
}
