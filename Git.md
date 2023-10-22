### 本地

1. git init 初始化仓库
2. git config --global user.name " "
3. git config -- global user.email ""
4. git remote 查看远程仓库是否存在
5. git remote add "name" <仓库地址> 给链接添加一个别名
6. git remote -v 查看连接的仓库地址
7. touch 创建文件
8. ls -al 查看所有文件
9. git add . 添加至暂存区
10. git commit -m " 注释" 添加至本地仓库
11. git status 查看文件状态
12. git branch 查看分支
13. git checkout " " 切换分支
14. git checkout -b " " 创建并切换分支
15. git branch -d/-D "" 删除分支
16. rm + filename 删除文件
17. sudo rm + filename 管理员权限删除文件
18. vim + filename 创建文件
19. esc -> :wq 保存并退出vim
20. mkdir + filename 创建文件夹

### Remote

1. 连接远程仓库:

   配置SSH公钥：ssh -keygen -t rsa

   获取公钥：cat ~/.ssh/id_rsa.pub

2. remote code:

   推送：git push -f 远端名称 [本地分支]:[远端分支]

   查看关联：git branch -vv

   克隆：git clone <仓库路径>

#### PS

1. 如果commit失败，尝试使用 '*'通配符提交，例：git add filename/ *