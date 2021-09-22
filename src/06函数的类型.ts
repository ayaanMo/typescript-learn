{
    // 1.函数声明
    function sum(x: number, y: number): number {
        return x + y;
    }
    sum(3, 4);
    // 2.函数表达式
    let mySum = function (x: number, y: number): number {
        return x + y;
    };
    console.log(mySum(20, 10));
    // TypeScript的类型定义中，=>用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型
    let mySum01: (x: number, y: number) => number = function (x: number, y: number): number {
        return x + y;
    };
    console.log(mySum01(10, 10));
    // 3.接口定义函数的形状
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }
    let mySearch: SearchFunc;
    mySearch = function (source: string, subStrting: string) {
        return source.search(subStrting) !== -1;
    };
    // 4.可选参数
    function buildName(firstName: string, lastName?: string) {
        if (lastName) {
            return firstName + ' ' + lastName;
        } else {
            return firstName;
        }
    }
    let tomcat = buildName('Tom', 'Cat');
    let tom = buildName('Tom');
    console.log(tomcat);
    console.log(tom);
    // 5.参数默认值
    function setName(firstName: string, lastName: string = 'Jerry') {
        return firstName + ' ' + lastName;
    }
    let to = setName('Tom', 'Cat');
    let t = setName('Tom');
    console.log(to);
    console.log(t);
    // 6.剩余参数
    function push(array: any[], ...items: any[]): void {
        items.forEach(function (item) {
            array.push(item);
        });
    }
    let a: any[] = [];
    push(a, 1, 2, 3);
    // 7.重载允许一个函数接受不同数量或类型的参数时，作出不同的处理
    function reverse(x: number): number;
    function reverse(x: string): string;
    function reverse(x: number | string): number | string | void {
        if (typeof x === 'number') {
            return Number(x.toString().split('').reverse().join(''));
        } else if (typeof x === 'string') {
            return x.split('').reverse().join('');
        }
    }
    console.log(reverse('ayaan'));
    console.log(reverse(123456));
}
