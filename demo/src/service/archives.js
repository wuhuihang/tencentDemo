export default [
  {
    year: 2018,
    publishTime: '2018-12-30',
    id: 0,
    title: '上传npm包',
    content:
      '<p><b>第一步、</b>使用npm init初始化一个package.json文件</p><p>必须要有这个文件才能上传，npm可以上传任何一个包含package.json的包，package.json的main设置入口，name表示包的名字只能小写,version代表版本，每次更新都要修改版本再发布</p><p><b>第二步、</b>如果你的npm使用的是非npm仓库，需要切换到你需要登陆提交的仓库</p><p class="code">npm config set registry http://registry.npmjs.org<br>npm config get registry //查看镜像</p><p><b>第三步、</b>注册npm账号</p><p>方法一，官网注册：<a href="https://www.npmjs.com/" target="_blank">npm</a></p><p>注册后需要用命令行连接npm，使用下面的命令按提示走，密码默认不显示出来</p><p class="code">npm login</p><p>方法二，使用npm 命令注册：npm adduser，</p><p><b>第四步、</b>上传</p><p class="code">npm publish</p><p>撤销上传</p><p class="code">npm unpublish --force</p><p>更新上传后的npm包</p><p>方法一，手动去package.json里面修改版本号，必须比之前大</p><p>方法二，使用npm 命令行工具更新版本号</p><p class="code">npm version major/minor/patch</p><p>再使用npm publish 上传</p><p>如果上传提示权限问题，需要以管理员权限运行cmd再上传。</p>',
    nextArchive: {
      id: 1,
      title: '用sinopia在linux系统中搭建npm私有库'
    },
    prevArchive: {
      id: '',
      title: ''
    }
  },
  {
    year: 2018,
    publishTime: '2018-12-31',
    id: 1,
    title: '用sinopia在linux系统中搭建npm私有库',
    content:
      '<p>sinopia是一个零配置（不需要其它依赖且配置简单）带缓存只（缓存下载过的包，而不是全部同步）的npm包管理工具，下载的时候优先下载私有仓库，如无则会缓存npm公有库的依赖到本地私有库。</p><p><b>第一步、</b>安装配置sinopia（windows系统可能会有问题，需要更新某些包）</p><p class="code">$ npm install -g sinopia</p><p>安装完成，启动</p><p class="code">$ sinopia<br>warn --- config file - /home/{user}/.config/sinopia/config.yaml<br>warn --- http address - http://localhost:4873/</p><p>上面信息第一行是生成的配置文件，第二行是默认地址，浏览器打开可看到</p><p>配置文件上（隐藏文件在SSH客户端没显示，可以直接通过访问文件夹路径查找设置）存有：依赖包存放路径（压缩后，需要考虑磁盘空间），用户信息，上游地址（如果是内网需要改成内网可以访问的镜像地址），可设置包发布、安装权限，设置监听地址（也可通过-l可以指定主机和端口如下命令）</p><p class="code">$ sinopia -l 255.255.255.255:4873</p><p>这样就能通过ip来访问服务了</p><p>推荐一个管理registry的工具nrm</p><p class="code">$ npm install -g nrm<br>$ nrm add mynpm http://255.255.255.255:4873<br>$ nrm use mynpm<br>$ nrm ls // 列出所有的本地registry</p><p>服务器搭建好后就可以开始发布了</p><p>registry需切回私有库的地址，其余步骤和上篇类似，创建用户，登陆，发布，在此就不一一展开</p><p class="code">$ npm adduser --registry http://255.255.255.255:4873</p><p>上面方式启动sinopia只是暂时的，退出命令行就关闭，因此需要一个长期开启sinopia方案,可以使用pm2托管让sinopia进程永远活着，此处暂不展开，说说另一方案</p><p class="code">nohup （command） & // 开始进程<br>netstate -nap // 查看进程PID<br>kill -9 pid // 结束进程</p>',
    nextArchive: {
      id: 2,
      title: 'nginx介绍'
    },
    prevArchive: {
      id: 0,
      title: '上传npm包'
    }
  },
  {
    year: 2019,
    publishTime: '2018-02-20',
    id: 2,
    title: 'nginx介绍',
    content:
      '<p>搭建一个文件服务器</p><p class="code">server {<br>listen 8123;<br>server_name localhost;<br>charset utf-8;<br>location / {<br>default_type "application/octet-stream";<br>add_header Content-disposition "attachment";<br>root /User/sonofelice/mm;<br>}<br>}</p><p>启动nginx之后，通过请求下面的url就可以下载文件了：http://127.0.0.1:8123/fileName</p><p>强制浏览器下载文件，而不是进行json解析后直接显示内容,add_header Content-disposition "attachment",需要设置header选项add_header Content-disposition "attachment";</p>',
    nextArchive: {
      id: '',
      title: ''
    },
    prevArchive: {
      id: 1,
      title: '用sinopia在linux系统中搭建npm私有库'
    }
  }
]
