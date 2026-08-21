Redmi 红米 AX6000 双频5952M 家用千兆Mesh无线路由器 Wi-Fi 6  

![](https://mmbiz.qpic.cn/mmbiz_jpg/ZQhJYEicbwcyNzXUUnDcKjhJURxOoQvPZMmTu3Btgicd2Alb44xZOtVZ0mTXicH0sYOtCTRvCVuNQ7jsULGelGI4g/640?wx_fmt=jpeg&from=appmsg)

* * *

### 刷机前准备

通电后，原生系统，基本上不理。直接准备刷机

提前一天在恩山论坛上浏览相关信息，发现有几个版本的固件：stock 保留官方分区刷 OP；uboot 则是 hanwckf 大佬的，新版有多种分区布局切换功能，可以选择官方分区刷，也可以切换为 110m 大分区；还有则是 ubootmod 固件。

最终决定选择刷 hanwckf 大佬的 uboot（下载最新的 bl-mt798x-release-20240123.7z，解压出里面的 mt7986\_redmi\_ax6000-fip-fixed-parts-multi-layout.bin 备用）：https://github.com/hanwckf/bl-mt798x/releases

Openwrt 的版本，我则是选择 ImmortalWrt（链接：https://firmware-selector.immortalwrt.org/）

ImmortalWrt 上的对应关系

*   stock layout 对应 stock 固件
    
*   custom U-Boot layout 对应 uboot 固件
    
*   OpenWrt U-Boot layout 对应 ubootmod 固件
    

### 解锁 ssh

参考 NormalPeople 教程：【保姆级教程】红米AX6000永久获取SSH权限（Redmi AX6000）

只需要解锁 SSH，再关闭开发者模式即可

按照教程，本来要先降级，我拿到手时固件是 1.0.67，使用链接里的降级固件时不给我降级，干脆我就没降级，不过也不影响。能正常操作

**这里简述一下解锁 ssh 过程**

*   打开管理页面：192.168.31.1
    
*   记录浏览器地址里的 stok 值，每次路由器重启，stok 值会改变
    

（这里吐槽一下张大妈，不支持代码块，这里就用分割线分割好了）

* * *

\# 记录这里的 stok，即 {stok} 部分，然后统一替换

http://192.168.31.15/cgi-bin/luci/;stok={stok}/web/home#router

\# 更改路由器的 crash 分区，使其进入到开发者模式

\# 返回 {"code":0}，下同

http://192.168.31.1/cgi-bin/luci/;stok={stok}/api/misystem/set\_sys\_time?timezone=%20%27%20%3B%20zz%3D%24%28dd%20if%3D%2Fdev%2Fzero%20bs%3D1%20count%3D2%202%3E%2Fdev%2Fnull%29%20%3B%20printf%20%27%A5%5A%25c%25c%27%20%24zz%20%24zz%20%7C%20mtd%20write%20-%20crash%20%3B%20

\# 特殊方法重启路由器

http://192.168.31.1/cgi-bin/luci/;stok={stok}/api/misystem/set\_sys\_time?timezone=%20%27%20%3b%20reboot%20%3b%20

\# 重启路由器后重新登录管理后台获取 stok

\# 设置 Redmi AX6000的 Bdata 参数

\# 设置参数 telnet\_en、 ssh\_en、uart\_en

http://192.168.31.1/cgi-bin/luci/;stok={stok}/api/misystem/set\_sys\_time?timezone=%20%27%20%3B%20bdata%20set%20telnet\_en%3D1%20%3B%20bdata%20set%20ssh\_en%3D1%20%3B%20bdata%20set%20uart\_en%3D1%20%3B%20bdata%20commit%20%3B%20

\# 特殊方法重启路由器

http://192.168.31.1/cgi-bin/luci/;stok={stok}/api/misystem/set\_sys\_time?timezone=%20%27%20%3b%20reboot%20%3b%20

\# 通过 telnet 开启 ssh，进入【ARE U OK】的界面，表示telnet成功

telnet 192.168.31.1

\# 进 telnet 后，依次输入指令开启 ssh 并修改密码为 admin

bdata set boot\_wait=on

bdata commit

nvram set ssh\_en=1

nvram set telnet\_en=1

nvram set uart\_en=1

nvram set boot\_wait=on

nvram commit

sed -i 's/channel=.\*/channel="debug"/g' /etc/init.d/dropbear

/etc/init.d/dropbear restart

echo -e 'adminnadmin' | passwd root

* * *

### 备份并刷入 uboot

* * *

\# windows 使用这行连接 openwrt，密码为 admin

ssh root@192.168.31.1

\# mac 连接 openwrt

ssh -oHostKeyAlgorithms=+ssh-rsa root@192.168.1.1

\# 备份分区命令，后面使用 scp 之类的协议将文件拷贝下来

dd if=/dev/mtd1 of=/tmp/mtd1\_BL2.bin

dd if=/dev/mtd2 of=/tmp/mtd2\_Nvram.bin

dd if=/dev/mtd3 of=/tmp/mtd3\_Bdata.bin

dd if=/dev/mtd4 of=/tmp/mtd4\_Factory.bin

dd if=/dev/mtd5 of=/tmp/mtd5\_FIP.bin

dd if=/dev/mtd8 of=/tmp/mtd8\_ubi.bin

dd if=/dev/mtd9 of=/tmp/mtd9\_ubi1.bin

\# 另外启一个命令行窗口，使用 scp 协议传输

\# mac 使用 scp 将文件备份到电脑

scp -O -oHostKeyAlgorithms=+ssh-rsa root@192.168.31.1:/tmp/mtd1\_BL2.bin /Users/xxx/Desktop/红米ax6000/bat

scp -O -oHostKeyAlgorithms=+ssh-rsa root@192.168.31.1:/tmp/mtd2\_Nvram.bin /Users/xxx/Desktop/红米ax6000/bat

scp -O -oHostKeyAlgorithms=+ssh-rsa root@192.168.31.1:/tmp/mtd3\_Bdata.bin /Users/xxx/Desktop/红米ax6000/bat

scp -O -oHostKeyAlgorithms=+ssh-rsa root@192.168.31.1:/tmp/mtd4\_Factory.bin /Users/xxx/Desktop/红米ax6000/bat

scp -O -oHostKeyAlgorithms=+ssh-rsa root@192.168.31.1:/tmp/mtd5\_FIP.bin /Users/xxx/Desktop/红米ax6000/bat

scp -O -oHostKeyAlgorithms=+ssh-rsa root@192.168.31.1:/tmp/mtd8\_ubi.bin /Users/xxx/Desktop/红米ax6000/bat

scp -O -oHostKeyAlgorithms=+ssh-rsa root@192.168.31.1:/tmp/mtd9\_ubi1.bin /Users/xxx/Desktop/红米ax6000/bat

\# mac 使用 scp 协议上传文件到路由器里

scp -O -oHostKeyAlgorithms=+ssh-rsa /Users/xxx/Desktop/红米ax6000/mt7986\_redmi\_ax6000-fip-fixed-parts-multi-layout.bin root@192.168.31.1:/tmp/mt7986\_redmi\_ax6000-fip-fixed-parts-multi-layout.bin

\# 回到 ssh 窗口，刷入 uboot

\# 检查文件的 md5

md5sum /tmp/mt7986\_redmi\_ax6000-fip-fixed-parts-multi-layout.bin

\# 将 uboot 写入 FIP 分区

mtd write /tmp/mt7986\_redmi\_ax6000-fip-fixed-parts-multi-layout.bin FIP

\# 校验数据，输出 Success 说明刷入完成

mtd verify /tmp/mt7986\_redmi\_ax6000-fip-fixed-parts-multi-layout.bin FIP

\# 清除 crash 分区并重启

mtd erase crash

reboot

* * *

其实重启不重启都OK，重启后进入管理界面后，拔掉电源即可

切记刷入 uboot 过程中，不要去切短电源之类的。

### 进入 uboot webui，刷入 ImmortalWrt

*   将电脑 IP 地址固定为 192.168.31.x（x 自己在 2～255 随便选个，我随便填了个 5）
    
*   按住路由器的 RESET 按钮后通电开机
    
*   等待 15 秒后松开 RESET（uboot 未支持 LED 指示灯，指示灯不会亮）
    
*   打开 uboot webui 页面：192.168.31.1
    
*   在 webui 页面选择 110MB 大分区固件
    
*   然后选择自己下载的 custom U-Boot layout 版的 ImmortalWrt 固件：immortalwrt-23.05.2-mediatek-filogic-xiaomi\_redmi-router-ax6000-squashfs-factory
    
*   等待刷入完成后自动重启，重启后打开 192.168.1.1，默认密码为空
    

单手操作：进 uboot 其实不需要按住 RESET 按钮后才通电，只需要在通电后 5 秒内，按住 RESET 按钮等待10秒，再松开即可

![](https://mmbiz.qpic.cn/mmbiz_jpg/ZQhJYEicbwcyNzXUUnDcKjhJURxOoQvPZ3I9P2RqwI3NflH7xCGAKVQumhuJxjTiaekclCwneBumiaXna9BqRH3zg/640?wx_fmt=jpeg)
选择 110m 大分区![](https://mmbiz.qpic.cn/mmbiz_jpg/ZQhJYEicbwcyNzXUUnDcKjhJURxOoQvPZLQJrzkwNSPCfR4lJ2jIKNj1Zzb71nI2cVNOUHL5EstMia9I42aQGIFQ/640?wx_fmt=jpeg)
![](https://mmbiz.qpic.cn/mmbiz_jpg/ZQhJYEicbwcyNzXUUnDcKjhJURxOoQvPZuM28jmib2A4K4hoKNuu4LfmwMRiaibBibEDBKJWjcZHMwZkDbicPozsfJsA/640?wx_fmt=jpeg)

接下来就拨号上网啦，在 系统 - 软件包 里，先更新列表，过滤器搜索 argon，安装 luci-theme-argon 换个界面

根据自己的需求安装插件即可

![](https://mmbiz.qpic.cn/mmbiz_jpg/ZQhJYEicbwcyNzXUUnDcKjhJURxOoQvPZRdh0xCTfcHSW4feJDaIELSqwoCa4zZTZwnAeho0kVoHtFrEvrSLkVg/640?wx_fmt=jpeg)

https://www.123865.com/s/RNlETd-S8m7d

刷机有风险 不提供技术支持