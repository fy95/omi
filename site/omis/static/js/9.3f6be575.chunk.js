webpackJsonp([9],{49:function(n,o){n.exports="## CSS\n\n\u8fd9\u91cc\u8bf4\u7684\u662f props \u7684 css\uff0c\u800c\u4e0d\u662f `YourComponent.css`\uff0c\u5b83\u63d0\u4f9b\u4e86\u4fee\u6539\u52a8\u6001\u4fee\u6539 scoped style \u7684\u80fd\u529b\u3002\n\n### \u4e3e\u4e2a\u4f8b\u5b50\n\n```jsx\nconst YourComponent = _ => (\n  <div>\n    <h1>Look at my color!<h1>\n  </div>\n)\n\nYourComponent.css = `h1 {\n  color: red;\n}`\n```\n\n\u4e0a\u9762\u7684 h1 \u6807\u7b7e\u989c\u8272\u662f\u7ea2\u8272\u3002\u6709\u4ec0\u4e48\u529e\u6cd5\u4fee\u6539\u5417\uff1f\n\n```jsx\n<YourComponent \n  css={`\n  h1{\n    color: blue !important;\n  }`} />  \n```\n\n\u901a\u8fc7 props \u52a8\u6001\u4fee\u6539\uff0c\u975e\u5e38\u7b80\u5355\u3002"}});
//# sourceMappingURL=9.3f6be575.chunk.js.map