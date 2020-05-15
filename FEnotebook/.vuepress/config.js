module.exports = {
  title: 'myNotebook',
  description: 'Just playing around',
  base: '/FEnotebook/',
  themeConfig: {
    sidebar: [
      {
        title: '设计模式',   // 必要的
        path: '/设计模式/0.导语',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
          '/设计模式/0.导语.md',
          '/设计模式/1.定义.md',
          '/设计模式/2.对象的前提知识整理.md',
          '/设计模式/3.Constructor模式.md',
          '/设计模式/4.Module模式.md'
        ]
      }]
  }
}