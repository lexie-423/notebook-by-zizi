# 服务器 | 备忘录

```bash
tmux new -s xinli 
```

- tmux 创建工作区，关掉电脑也会继续运行
## 创建虚拟环境

```bash
conda create -n yolov11_env python=3.9
conda activate yolov11_env
```

## 下载正确的pytorch

- 查看cuda版本：

```bash
nvidia-smi | less
```

这样就能停留在第一行，就有cuda版本了。

查阅官网 https://pytorch.org/get-started/locally/ 

```bash
pip3 install torch torchvision --index-url https://download.pytorch.org/whl/cu126
```

