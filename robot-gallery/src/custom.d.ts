// 类型声明文件,css,模块化css文件，可实现按需加载css文件
declare module "*.css" {
    const css :{[key:string]:string};
    export default css;
}