{
    // 1.「类型+方括号」表示法
    let i: number[] = [1, 1, 2, 3, 5];
    // let i: number[] = [1, '1', 2, 3, 5];不能将类型“string”分配给类型“number”。ts(2322)
    // 2.数组泛型
    let ii: Array<number> = [1, 1, 2, 3, 5];
    // 3.接口表示数组
    interface NumberArray {
        [index: number]: number;
    }
    let iii: NumberArray = [1, 1, 2, 3, 5];
    // 4.类数组 不是数组类型，比如arguments
    // 内置对象 IArguments，NodeList，HTMLCollection
    /* function sum() {
        let args: number[] = arguments;
    } */
    function sum01() {
        let args: IArguments = arguments;
    }
}
