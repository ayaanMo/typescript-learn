// 在面向对象语言中，接口是一个很重要的概念；它是对行为的抽象，而具体如何行动需要由类(classes)去实现(implement)
// 定义的变量比接口少一些属性和多一些属性都是不被允许的
// 可选属性?: 是该属性可以不存在
// 任意属性[propName:string]:any 希望一个接口允许有任意的属性;一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型
// 只读属性 有时候对象中的一些字段只能在创建的时候被赋值，可以用readonly定义只读属性
{
    interface Person {
        readonly id: number; //只读属性
        name: string;
        age: number;
        classMate?: number; //可选属性
        [propName: string]: any; //任意属性
    }
    let tom: Person = {
        id: 9999,
        name: 'Tom',
        age: 25,
    };
    console.log(tom);
    // tom.id = 111; 无法分配到 "id" ，因为它是只读属性。ts(2540)
}
