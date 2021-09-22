1. 使用:指定变量的类型，:的前后有没有空格都可以；
2. TypeScript只会在编译时对类型进行静态检查，如果发现有错误，编译的时候就会报错；而在运行时，与普通的JavaScript文件一样，不会对类型进行检查;
3. TypeScript编译时候及时报错了，还是会生成编译结果，如果要再报错的时候终止js文件生成，可以在tsconfig.json中配置noEmitOnError即可；
4. JavaScript的类型分为两种：原始数据类型和对象类型；原始数据类型：布尔值、数值、字符串、null、undefined以及ES6中新类型Symbol和ES10中的新类型BigInt；
5. 如果没有明确的指定类型，但是TypeScript会依照类型推断（Type Inference）的规则推断出一个类型；
6. 在TypeScript使用接口(Interfaces)来定义对象的类型；