# 第三章

## 1. 唯一可译码

判定：
1. 前缀码一定唯一可译
2. 后缀分解集：
$$S_iS_{i-1}=c, \, S_{i-1}=cS_i$$
分解集中不含码字，则唯一可译。

## 2. Huffman编码

- 编码方法...
- $H(U)=-\sum_{i=1}^{10}p_i\log p_i, \, \overline{n}=\frac{H(U)}{\overline{n}\log D}$, $D$ 为码元

## 3. 马尔可夫信源编码

- 编码定理：对平稳信源块编码，$\bar{n}$ 可逼近 $H_{\infty}(U) / \log_2 D$。

![](image/lQDPJxdJlgvIimfNAhXNBCiw_12joIfukxIH_5Xj7hD9AA_1064_533.jpg)

以上例子中：

$H(U|s_i)=\sum_{j=1}^3p(a_j|s_i)\log\frac{1}{p(a_j|s_i)}$
$H_{\infty}(U)=\sum_{j=1}^3 q(i)H(U|s_i)$
Huffman编码：
S1状态下$q(a_1)=\frac{1}{2},q(a_2)=\frac{1}{4},q(a_3)=\frac{1}{4}$, Huffman编码 ...
平均码长$\overline{n}=\sum_{i=1}^3q(i)\overline{n_i}$

---

![](image/Pasted%20image%2020250510093953.png)

![](image/Pasted%20image%2020250510094017.png)


