// 类型断言
// 类型断言可以用来手动指定一个值的类型
// 值 as 类型 或者 <类型>值
// 建议使用 值 as 类型 这种类型
{
    // 用途
    // 1.将一个联合类型断言为其中一个类型 手动断言虽然可以欺骗编译器，但是再运行阶段有可能还是会出错
    interface Cat {
        name: string;
        run(): void;
    }
    interface Fish {
        name: string;
        swim(): void;
    }
    function getName(animal: Cat | Fish) {
        return animal.name;
    }
    function isFish(animal: Cat | Fish) {
        if (typeof (animal as Fish).swim === 'function') {
            return true;
        }
        return false;
    }
}
{
    // 将一个父类断言为更加具体的子类
    class ApiError extends Error {
        code: number = 0;
    }
    class HttpError extends Error {
        statusCode: number = 200;
    }
    function isApiError(error: Error) {
        if (typeof (error as ApiError).code === 'number') {
            return true;
        }
        return false;
    }
}
{
    // 将任何一个类型断言为any
    // 将any断言为一个具体的类型
    function getCacheData(key: string): any {
        return (window as any).cache[key];
    }
    interface Cat {
        name: string;
        run(): void;
    }
    const tom = getCacheData('tom') as Cat;
    tom.run();
}
{
    // 类型断言的限制
    interface Animal {
        name: string;
    }
    interface Cat {
        name: string;
        run(): void;
    }
    let tom: Cat = {
        name: 'Tom',
        run: () => {
            console.log('run');
        },
    };
    let animal: Animal = tom;
}
{
    interface Animal {
        name: string;
    }
    interface Cat extends Animal {
        name: string;
        run(): void;
    }
    function testAnimal(animal: Animal) {
        return animal as Cat;
    }
    function testCat(cat: Cat) {}
}
