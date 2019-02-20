export default [
  {
    year: 2017,
    publishTime: '2017-12-04',
    id: 0,
    title: '上传npm包',
    content:
      '<p><b>第一步、</b>使用npm init初始化一个package.json文件</p><p>必须要有这个文件才能上传，npm可以上传任何一个包含package.json的包，package.json的main设置入口，name表示包的名字只能小写,version代表版本，每次更新都要修改版本再发布</p><p><b>第二步、</b>如果你的npm使用的是非npm仓库，需要切换到你需要登陆提交的仓库</p><p class="code">npm npm config set registry http://registry.npmjs.org<br>npm config get registry //查看镜像</p><p><b>第三步、</b>注册npm账号</p><p>方法一，官网注册：<a href="https://www.npmjs.com/" target="_blank">npm</a></p><p>注册后需要用命令行连接npm，使用下面的命令按提示走，密码默认不显示出来</p><p class="code">npm login</p><p>方法二，使用npm 命令注册：npm adduser，</p><p><b>第四步、</b>上传</p><p class="code">npm publish</p><p>撤销上传</p><p class="code">npm unpublish --force</p><p>更新上传后的npm包</p><p>方法一，手动去package.json里面修改版本号，必须比之前大</p><p>方法二，使用npm 命令行工具更新版本号</p><p class="code">npm version major/minor/patch</p><p>再使用npm publish 上传</p><p>如果上传提示权限问题，需要以管理员权限运行cmd再上传。</p>',
    nextArchive: {
      id: 1,
      title: '111111111'
    },
    prevArchive: {
      id: '',
      title: ''
    }
  },
  {
    year: 2018,
    publishTime: '2018-12-04',
    id: 1,
    title: '11111111',
    content: '11111111',
    nextArchive: {
      id: 2,
      title: '2222'
    },
    prevArchive: {
      id: 0,
      title: '上传npm包'
    }
  },
  {
    year: 2018,
    publishTime: '2018-12-04',
    id: 2,
    title: '2222222',
    content: '222222222222',
    nextArchive: {
      id: '',
      title: ''
    },
    prevArchive: {
      id: 1,
      title: '111111'
    }
  }
]
