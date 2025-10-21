# 第二章：简单随机抽样 

## 导言

本章是抽样调查理论的基石。**简单随机抽样 (Simple Random Sampling, SRS)** 是所有抽样方法中最基础的一种。其核心思想是，在不对总体做任何额外区分的情况下，保证每个可能的样本被抽中的概率完全相等，从而确保每个单元都有公平的入样机会。本章的定理和公式主要围绕三个核心问题展开：
1.  **理论基础**：简单随机抽样的数学性质是什么？
2.  **核心任务**：如何用抽出的样本来估计总体的参数（如均值、总和）？
3.  **实践应用**：如何评估估计的精度，以及在调查前如何确定样本量？

---

## 第二章核心逻辑

本章所有基础定理和公式的“来龙去脉”，可以浓缩为一个解决核心问题的四步链条。

**第一步**：我们基于**定理 2.1.3** 建立了理论信心：我们敢用样本均值 $\overline{y}$ 去估计总体均值 $\overline{Y}$，是因为该定理证明了它是**无偏的** ($E(\overline{y}) = \overline{Y}$)。

**第二步**，还是这个定理，它给了我们一个衡量估计**精确度**的理论标尺——**理论方差** $V(\overline{y}) = \frac{1-f}{n}S^2$。但这个公式包含未知的总体方差 $S^2$，使其在现实中无法直接计算，这是我们面临的核心困境。

**第三步**，**定理 2.3.2** 登场，它扮演了**从理论走向实践的最关键桥梁**。该定理证明了我们可以从样本中计算出的**样本方差 $s^2$**，是那个未知总体方差 $S^2$ 的一个“公平”的、**无偏的估计量** ($E(s^2) = S^2$)。这为我们解决第二步的困境提供了合法的数学工具。

**第四步**，我们利用这个桥梁完成“插件”操作：将 $s^2$ 替换掉 $V(\overline{y})$ 公式中的 $S^2$，从而得到了我们**在实践中真正使用的误差计算公式**——**方差的估计量 $v(\overline{y}) = \frac{1-f}{n}s^2$**。

这个链条总结如下：**定理 2.1.3** 确立了 $\overline{y}$ 是一个好的（无偏的）估计量，并给出了其理论误差 $V(\overline{y})$（包含未知的 $S^2$）。接着，**定理 2.3.2** 证明了 $s^2$ 是 $S^2$ 的一个好的（无偏的）替代品。最后，我们将 $s^2$ 代入 $V(\overline{y})$，得到了可在实际中计算的误差评估工具 $v(\overline{y})$。

## 简单抽样法

### §2.3 简单估值法

一个抽样方案除了抽样方法外，还应有一个对总体目标量的估计，同时对给出的估计量的方差以及对此方差的估计都应有明确的预见。对总体采用简单随机抽样时，对总体目标量的均值或总数，可以有多种估计方法。在没有其他辅助信息时，可以用简单估值法，以样本的均值估计总体的均值；当有适宜的辅助信息利用时，则可采用比估计、回归估计等。以下阐述简单估值法的几个定理。

---

### 定理 2.3.1

设 $y_1, y_2, \cdot\cdot\cdot, y_n$ 是总体 $\mathbb{R}=\{Y_1, Y_2, \cdot\cdot\cdot, Y_N\}$ 的一个样本量为 $n$ 的简单随机样本，则样本均值 $\overline{y} = \frac{1}{n}\sum_{i=1}^{n}y_i$ 是总体均值 $\overline{Y} = \frac{1}{N}\sum_{i=1}^{N}Y_i$ 的无偏估计，该估计的均方偏差为 (无偏时即为方差)
$$V(\overline{y}) = E(\overline{y}-\overline{Y})^2 = \frac{1}{n}(1-\frac{n}{N})S^2, \quad \text{(2.3.1)}$$
其中 $S^2 = \frac{1}{N-1}\sum_{i=1}^{N}(Y_i - \overline{Y})^2$。

**证明**:
由 $D_i$ 的定义 $\overline{y} = \frac{1}{n}\sum_{i=1}^{n}y_i = \frac{1}{n}\sum_{i=1}^{N}Y_i D_i$，又由定理 2.1.2，有

1.  **无偏性**：
    * **关键技术**: 利用**期望的线性性质** ($E(\sum a_i X_i) = \sum a_i E(X_i)$) 以及**定理 2.1.2 中已知的 $E(D_i)$**。
    $$E(\overline{y}) = E\left(\frac{1}{n}\sum_{i=1}^{N}Y_i D_i\right) = \frac{1}{n}\sum_{i=1}^{N}Y_i E(D_i) = \frac{1}{n} \cdot \frac{n}{N}\sum_{i=1}^{N}Y_i = \overline{Y}$$

2.  **均方偏差 (方差)**：
    * **关键技术**: 利用**随机变量和的方差公式** ($Var(\sum a_i X_i) = \sum a_i^2 Var(X_i) + \sum_{i \neq j} a_i a_j Cov(X_i, X_j)$)，**代入定理 2.1.2 中已知的 $Var(D_i)$ 和 $Cov(D_i, D_j)$**，并通过**代数变形**结合总体方差 $S^2$ 的定义进行化简。
    $$V(\overline{y}) = E(\overline{y}-\overline{Y})^2 = var\left(\frac{1}{n}\sum_{i=1}^{N}Y_i D_i\right)$$
    $$= \frac{1}{n^2}\left[\sum_{i=1}^{N}Y_i^2 var(D_i) + \sum_{i \ne j}^{N}\sum Y_i Y_j cov(D_i, D_j)\right]$$
    $$= \frac{1}{n^2}\left[\frac{n}{N}(1-\frac{n}{N})\sum_{i=1}^{N}Y_i^2 - \frac{n}{N(N-1)}(1-\frac{n}{N})\sum_{i \ne j}^{N}\sum Y_i Y_j\right]$$
    * 注意到 $\sum_{i \ne j} Y_i Y_j = (\sum Y_i)^2 - \sum Y_i^2 = (N\overline{Y})^2 - \sum Y_i^2$
    $$= \frac{1}{nN}(1-\frac{n}{N})\left[\sum_{i=1}^{N}Y_i^2 - \frac{1}{N-1}\left((N\overline{Y})^2 - \sum_{i=1}^{N}Y_i^2\right)\right]$$
    $$= \frac{1}{nN}(1-\frac{n}{N})\frac{N}{N-1}\left[\sum_{i=1}^{N}Y_i^2 - N\overline{Y}^2\right]$$
    $$= \frac{1}{n}(1-\frac{n}{N})\frac{1}{N-1}\left[\sum_{i=1}^{N}Y_i^2 - N\overline{Y}^2\right]$$
    * 又因为 $S^2 = \frac{1}{N-1}(\sum Y_i^2 - N\overline{Y}^2)$
    $$= \frac{1}{n}\left(1-\frac{n}{N}\right)S^2$$
证毕。

**系**: $N\overline{y}$ 是总体总数 $Y = \sum_{i=1}^{N}Y_i$ 的无偏估计，其均方偏差为
$$V(N\overline{y}) = \frac{N^2}{n}\left(1-\frac{n}{N}\right)S^2$$

---

### 定理 2.3.2

在简单随机抽样下，样本方差
$$s^2 = \frac{1}{n-1}\sum_{i=1}^{n}(y_i - \overline{y})^2$$
是总体方差 $S^2$ 的无偏估计，从而量
$$v(\overline{y}) = \frac{1}{n}\left(1-\frac{n}{N}\right)s^2 \quad \text{(2.3.2)}$$
是估计 $\overline{y}$ 的均方偏差 $V(\overline{y})$ 的无偏估计。

**证明**:
只需证 $Es^2 = S^2$。

* **关键技术**: 利用**期望的线性性质**，**二阶矩与方差的关系** ($E(X^2) = Var(X) + [E(X)]^2$)，以及**代入已证明的 $E(\overline{y})$ 和 $V(\overline{y})$**，最后通过**代数变形**结合 $S^2$ 的定义进行化简。

$$Es^2 = E\left[\frac{1}{n-1}\left(\sum_{i=1}^{n}y_i^2 - n\overline{y}^2\right)\right] = \frac{1}{n-1}E\left[\sum_{i=1}^{N}Y_i^2 D_i - n\overline{y}^2\right]$$
$$= \frac{1}{n-1}\left[E\left(\sum_{i=1}^{N}Y_i^2 D_i\right) - nE(\overline{y}^2)\right]$$
其中 $E(\sum Y_i^2 D_i) = \sum Y_i^2 E(D_i) = \frac{n}{N}\sum Y_i^2$。
对于 $E(\overline{y}^2)$，利用 $E(X^2) = Var(X) + [E(X)]^2$：
$$E(\overline{y}^2) = V(\overline{y}) + [E(\overline{y})]^2 = \frac{1}{n}\left(1-\frac{n}{N}\right)S^2 + \overline{Y}^2$$
代入 $Es^2$ 的表达式：
$$Es^2 = \frac{1}{n-1}\left[\frac{n}{N}\sum_{i=1}^{N}Y_i^2 - n\left(\frac{1}{n}\left(1-\frac{n}{N}\right)S^2 + \overline{Y}^2\right)\right]$$
$$= \frac{1}{n-1}\left[\frac{n}{N}\sum_{i=1}^{N}Y_i^2 - \left(1-\frac{n}{N}\right)S^2 - n\overline{Y}^2\right]$$
将 $S^2 = \frac{1}{N-1}(\sum Y_i^2 - N\overline{Y}^2)$ 代入，或者将 $\sum Y_i^2 = (N-1)S^2 + N\overline{Y}^2$ 代入中括号内：
$$Es^2 = \frac{1}{n-1}\left[\frac{n}{N}((N-1)S^2 + N\overline{Y}^2) - \left(1-\frac{n}{N}\right)S^2 - n\overline{Y}^2\right]$$
$$= \frac{1}{n-1}\left[\frac{n(N-1)}{N}S^2 + n\overline{Y}^2 - \frac{N-n}{N}S^2 - n\overline{Y}^2\right]$$
$$= \frac{1}{n-1}\left[\frac{nN-n - (N-n)}{N}S^2\right] = \frac{1}{n-1}\left[\frac{nN - N}{N}S^2\right]$$
$$= \frac{1}{n-1}\left[\frac{N(n-1)}{N}S^2\right] = S^2$$
证毕。

---

### 例题介绍

#### 例1 (社区居民食物消费)

**介绍**:
本例是一个标准的简单估值法应用。
* **总体**: 某社区 300 户居民 ($N=300$)，总人数 1100 人。
* **样本**: 简单随机抽样调查了 35 户 ($n=35$)。
* **目标**: 估计平均每月每户用于食物的支出 $\overline{Y}$ 及其估计精度。
* **数据**: 表 2.2 提供了 35 户样本的户人数、人均月收入和户月食物支出 (y)。

**计算过程**:
1.  **估计均值 $\overline{y}$**: $\overline{y} = \frac{31350}{35} = 895.70$ 元。
2.  **估计均方偏差 $v(\overline{y})$**: $v(\overline{y}) = \frac{1}{35}(1-\frac{35}{300})\frac{1}{34}[29692900 - \frac{(31350)^2}{35}] \approx 1196.77$。
3.  **估计标准差 $\sqrt{v(\overline{y})}$**: $\sqrt{1196.77} \approx 34.59$ 元。

#### 例2 (部分估计)

**介绍**:
本例说明了如何使用简单估值法来估计一个“子总体”的指标。
* **场景**: 调查地块中“耕地”子总体的蝗蝻总数。
* **方法**: 定义一个新的 (0, Y) 变量 $Z_i$，非子总体取值为 0。
* **估计**: 使用标准总数估计量 $N\overline{z}$ 估计子总体总和，方差估计仍套用标准公式。

#### 例3 (比例估计)

**介绍**:
本例展示了“比例估计”是“部分估计”的一种特殊情况。
* **场景**: 估计总体中具有某一特征的个体所占的比例 $P$。
* **方法**: 将问题转化为 (0, 1) 变量的均值估计问题。
* **估计**:
    1.  **估计比例 $p$**: $p = \overline{z} = n_1/n$。
    2.  **估计方差 $v(p)$**: $v(p) = \frac{1-f}{n-1}p(1-p)$。
* **书中应用**: 估计人均收入低于 450 元的家庭比例及总数，并计算估计的标准差。

#### 例4 (有限总体分布估计)

**介绍**:
本例将比例估计的思想推广到估计总体的**累积分布函数 (CDF)** $F(t)$。
* **方法**: 对任意 $t$，将 $F(t) = P(Y \le t)$ 视为 $Y_i \le t$ 的个体所占的比例，定义 (0, 1) 变量 $\Delta(t-Y_i)$。
* **估计**:
    1.  **估计 $F_n(t)$**: 用样本经验分布函数 $F_n(t) = \frac{1}{n}\sum \Delta(t-y_i)$。
    2.  **估计方差 $v(F_n(t))$**: $v(F_n(t)) = \frac{1-f}{n-1}F_n(t)(1-F_n(t))$。
* **延伸**: 常用样本分位数估计总体分位数。

### §2.4 区间估计与样本量的确定

区间估计是数理统计中的重要内容。当人们不满足于只给出一个估值，还想知道这一估计是不是很可靠时，则要给出一个区间估计。大规模抽样调查由于样本量很大，因而可用大样本的理论，利用极限分布确定区间估计。但抽样调查多数方案是无放回抽样，样本不是独立同分布的，因而一般数理统计书籍中独立随机变量序列的极限定理不是完全适用。有限总体无放回抽取的样本的理论基础是下述的 Wald-Wolfowitz 定理。

---

### 定理 2.4.1 (Wald-Wolfowitz 定理)

设 $\{a_{N1}, \cdot\cdot\cdot, a_{NN}\}$ 和 $\{x_{N1}, \cdot\cdot\cdot, x_{NN}\}$ ($N=1, 2, \cdot\cdot\cdot$) 是两个实数序列的集合，满足一定正则性条件 (具体条件见书本 P27)。对每一个 $N$, $(X_1, \cdot\cdot\cdot, X_N)$ 是取值为 $(x_{N1}, \cdot\cdot\cdot, x_{NN})$ 的全部排列上均匀分布的随机向量。令
$$L_N = \sum_{i=1}^{N} a_{Ni} X_i$$
则
$$E(L_N) = N\overline{a}_N\overline{x}_N$$
$$var(L_N) = \frac{1}{N-1}\left[\sum_{i=1}^{N}(a_{Ni}-\overline{a}_N)^2\right]\left[\sum_{i=1}^{N}(x_{Ni}-\overline{x}_N)^2\right]$$
且当 $N \to \infty$ 时，
$$P\left\{\frac{L_N - E(L_N)}{\sqrt{var(L_N)}} \le z\right\} \to \Phi(z) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{z}e^{-\frac{t^2}{2}}dt$$

**证明简介**:
* **关键技术**: **矩量法 (Method of Moments)**。证明的核心是通过复杂的计算表明，当 $N \to \infty$ 时，$L_N$ 经过标准化后的任意 $m$ 阶矩都收敛到标准正态分布随机变量的相应 $m$ 阶矩。根据矩量法的原理，这足以证明标准化后的 $L_N$ 依分布收敛于标准正态分布。
* **步骤**:
    1.  **正则化**: 首先对 $a_{Ni}$ 和 $x_{Ni}$ 进行标准化处理，使得它们的均值为0，方差（近似）为1。
    2.  **计算矩**: 对标准化后的线性统计量 $L_N'$ 计算其任意 $m$ 阶矩 $E[(L_N')^m]$。
    3.  **矩收敛**: 证明当 $N \to \infty$ 时， $E\left[\left(\frac{L_N'}{\sqrt{var(L_N')}}\right)^m\right]$ 收敛到标准正态分布的 $m$ 阶矩（偶数阶矩为 $\frac{(2K)!}{2^K K!}$，奇数阶矩为 0）。
    4.  **结论**: 由矩收敛可以得出分布收敛的结论。
* (书中指出证明涉及较繁琐的计算，细节可参看原文献。)

**在简单随机抽样中的应用**:
* 取 $a_{Ni} = Y_i$，而 $(X_1, \cdot\cdot\cdot, X_N)$ 代表抽样指示向量 $(D_1, \cdot\cdot\cdot, D_N)$ 乘以 $\frac{1}{n}$（忽略顺序）。则样本均值 $\overline{y} = \frac{1}{n}\sum Y_i D_i$ 可以看作是定理中的 $L_N$ 的形式。
* 根据定理结论，可知 $(\overline{y} - E(\overline{y})) / \sqrt{var(\overline{y})}$ 近似服从 $N(0, 1)$。
* **关键技术**: **依概率收敛 (Convergence in Probability)**。可以证明，当 $N$ 足够大时，方差的估计量 $v(\overline{y})$ 依概率收敛于真实的方差 $V(\overline{y})$，即 $\frac{v(\overline{y})}{V(\overline{y})} \xrightarrow{p} 1$。
* 因此， $\frac{\overline{y}-\overline{Y}}{\sqrt{v(\overline{y})}}$ 同样近似服从 $N(0, 1)$ 分布。

---

### 区间估计

基于 $\frac{\overline{y}-\overline{Y}}{\sqrt{v(\overline{y})}} \approx N(0, 1)$，可以构造总体均值 $\overline{Y}$ 的置信区间。

* **公式**: 给定置信度 $1-\alpha$，$\overline{Y}$ 的区间估计为：
    $$[\overline{y} - u_{1-\alpha/2}\sqrt{v(\overline{y})}, \overline{y} + u_{1-\alpha/2}\sqrt{v(\overline{y})}]$$
* **符号解释**:
    * $u_{1-\alpha/2}$: 标准正态分布的上 $1-\alpha/2$ 分位数 (例如，当 $1-\alpha = 95\%$ 时，$u_{0.975} \approx 1.96$)。
    * $\sqrt{v(\overline{y})}$: 样本均值的标准误，是 $\sqrt{V(\overline{y})}$ 的估计值。
* **意义**: 我们有 $1-\alpha$ 的置信度（把握）认为，真实的总体均值 $\overline{Y}$ 落在这个计算出来的区间内。

---

### 样本量的确定

在调查设计阶段，可以根据预设的精度要求来反推所需的样本量 $n$。

#### (一) 按绝对精度决定样本量

* **要求**: 估计误差 $|\overline{y}-\overline{Y}|$ 不超过给定的绝对精度 $d$，置信度为 $1-\alpha$。即 $P\{|\overline{y}-\overline{Y}| \le d\} = 1-\alpha$。
* **推导**:
    * 由区间估计的原理，$d \approx u_{1-\alpha/2}\sqrt{V(\overline{y})} = u_{1-\alpha/2}\sqrt{\frac{1-f}{n}S^2}$。
    * 解出 $n$:
        $$d^2 \approx (u_{1-\alpha/2})^2 \frac{1}{n}\left(1-\frac{n}{N}\right)S^2$$
        $$n \approx \frac{(u_{1-\alpha/2})^2 S^2}{d^2 + \frac{1}{N}(u_{1-\alpha/2})^2 S^2} \quad \text{(2.4.3)}$$
* **近似公式 (当 N 很大时)**:
    $$n \approx \frac{(u_{1-\alpha/2})^2 S^2}{d^2} \quad \text{(2.4.4)}$$
* **关键问题**: $S^2$ 未知。
* **解决方法**: 使用先验信息、预调查或类推法得到 $S^2$ 的一个粗略估计值。

#### (二) 按相对精度决定样本量

* **要求**: 相对误差 $|\frac{\overline{y}-\overline{Y}}{\overline{Y}}|$ 不超过给定的相对精度 $h$，置信度为 $1-\alpha$。即 $P\{|\frac{\overline{y}-\overline{Y}}{\overline{Y}}| \le h\} = 1-\alpha$。
* **推导**:
    * $\overline{Y}h \approx u_{1-\alpha/2}\sqrt{V(\overline{y})}$。
    * 解出 $n$:
        $$n \approx \frac{(u_{1-\alpha/2})^2 S^2}{(\overline{Y}h)^2 + \frac{1}{N}(u_{1-\alpha/2})^2 S^2} = \frac{(u_{1-\alpha/2})^2 C^2}{h^2 + \frac{1}{N}(u_{1-\alpha/2})^2 C^2} \quad \text{(2.4.5)}$$
        其中 $C = S/\overline{Y}$ 是变异系数。
* **近似公式 (当 N 很大时)**:
    $$n \approx \frac{(u_{1-\alpha/2})^2 C^2}{h^2} \quad \text{(2.4.6)}$$
* **关键问题**: $C^2$ 未知 (依赖于 $S^2$ 和 $\overline{Y}^2$)。
* **解决方法**: 类似地，使用先验信息、预调查或类推法得到 $C^2$ 的粗略估计值。

#### (三) 考虑费用决定样本量

* **目标**: 在费用和精度之间取得平衡。
* **模型**: 假设总损失 = 调查费用 + 误差损失。
    * 费用: $F = F_0 + F_1 n$
    * 误差损失 (假设与均方偏差成正比): $a E(\overline{y}-\overline{Y})^2 = a \frac{1-f}{n}S^2$
    * 总损失: $L = F_0 + F_1 n + a(\frac{1}{n}-\frac{1}{N})S^2$
* **推导**:
    * **关键技术**: **求导找极值**。对 $L$ 关于 $n$ 求导，令导数等于 0。
    * $\frac{dL}{dn} = F_1 - \frac{aS^2}{n^2} = 0$
    * 解出最优 $n$:
        $$n = \sqrt{\frac{aS^2}{F_1}} \quad \text{(2.4.7)}$$
* **实际应用**: 费用与精度需要综合平衡调整。

---

### 例题介绍

#### 例1 (续§2.3例1 - 食物消费)

**介绍**:
本例展示了如何利用预调查的结果来确定正式调查所需的样本量。
* **场景**: 在§2.3例1的35户预调查基础上，要达到绝对误差不超过40元 ($d=40$) 的精度要求 (置信度95%)。
* **方法**: 使用预调查得到的 $s^2 \approx 47419.33$ 作为 $S^2$ 的粗略估计值。
* **计算**:
    * 使用近似公式 (2.4.4): $n \approx \frac{(1.96)^2 \times 47419.33}{(40)^2} \approx 114$ 户。
    * 使用精确公式 (2.4.3): $n \approx \frac{(1.96)^2 \times 47419.33}{(40)^2 + \frac{1}{300}(1.96)^2 \times 47419.33} \approx 83$ 户。
* **结论**: 精确公式考虑了有限总体修正，得到的样本量更小。实际操作中，通常会适当扩大计算出的样本量 (如扩大10%) 以确保达到精度。

#### 例2 (计算机普及率)

**介绍**:
本例是典型的比例估计样本量计算问题。
* **场景**: 估计某大城市家庭计算机普及率 $P$，要求绝对误差不超过2% ($d=0.02$) (置信度95%)。
* **方法**:
    * 比例估计的总体方差 $S^2 \approx P(1-P)$。
    * **情况1 (无先验信息)**: 取 $P=0.5$ 使得 $S^2$ 最大 ($=0.25$)，以获得最保守（最大）的样本量。
        $n \approx \frac{(1.96)^2 \times 0.25}{(0.02)^2} = 2401$ 户。
    * **情况2 (有先验信息)**: 估计 $P$ 在 10% 到 20% 之间。取此区间内使 $S^2$ 最大的值 $P=0.2$ ($S^2 = 0.2 \times 0.8 = 0.16$)。
        $n \approx \frac{(1.96)^2 \times 0.16}{(0.02)^2} \approx 1537$ 户。
* **结论**: 利用先验信息可以显著减少所需的样本量。例子还展示了使用相对精度 ($h$) 计算样本量的方法。

#### 例3 (人体尺寸分位数)

**介绍**:
本例讨论了更复杂的目标——估计总体分布的分位数 $\xi_p$，并给出了针对分位数的一种特殊的精度定义和样本量计算方法。
* **场景**: 制定服装标准，需要估计人群身高、腰围等尺寸的分位数。
* **精度定义**: 要求估计的分位数 $\hat{\xi}_p$ 落在真实分位数 $\xi_{p-0.01}$ 和 $\xi_{p+0.01}$ 之间。
* **方法**:
    * 利用样本分位数 $\hat{\xi}_p$ 的**渐近正态性理论**: $\hat{\xi}_p \approx N(\xi_p, \frac{p(1-p)}{n f^2(\xi_p)})$，其中 $f(\cdot)$ 是总体分布的密度函数。
    * 假设总体近似正态分布 $N(\mu, S^2)$，则 $f(\xi_p) = \frac{1}{S}\phi(u_p)$，$\xi_p = \mu + u_p S$。
    * 将精度要求转化为对渐近分布置信区间宽度的要求。
* **计算 (以p=0.8为例)**:
    * 要求 $P\{\xi_{0.79} \le \hat{\xi}_{0.8} \le \xi_{0.81}\} = 0.95$。
    * 这近似等价于 $1.96 \sqrt{Var(\hat{\xi}_{0.8})} \approx \xi_{0.81} - \xi_{0.8}$。
    * 利用正态分布的性质 $\xi_{0.81} - \xi_{0.8} \approx (u_{0.81}-u_{0.8})S \approx 0.04S$。
    * 代入 $Var(\hat{\xi}_{0.8})$ 的表达式并解出 $n$：
        $n = \left[\frac{1.96 \sqrt{p(1-p)}}{(\xi_{0.81}-\xi_{0.8})/S \cdot f(\xi_p)S}\right]^2 \approx \left[\frac{1.96 \times 0.4}{0.04 \times \phi(u_{0.8})}\right]^2 \approx 4866$。
* **结论**: 针对分位数估计，可以设定特定的精度要求，并在一定假设下（如总体分布近似正态）计算所需样本量。

### §2.5 比估计

在抽样调查中有两类情况会用到比估计：
1.  所需估计的目标值本身就是两个指标总数（或均值）的**比值**，例如估计每平方米耕地的平均蝗蝻数（总蝗蝻数 / 总耕地面积），而总耕地面积未知。
2.  所需估计的目标值是某指标的总数（或均值），但有另一个与目标变量 $Y$ 关系密切的**辅助变量 $X$** 可用，利用 $X$ 的信息（尤其是已知的总体均值 $\overline{X}$ 或总体总和 $X$）可以改进估计的精度。例如，利用已知的每户平均人口数 $\overline{X}$ 来改进对每户平均食物支出 $\overline{Y}$ 的估计。

记总体为 $\{(Y_1, X_1), (Y_2, X_2), \cdot\cdot\cdot, (Y_N, X_N)\}$，对应的样本为 $\{(y_1, x_1), (y_2, x_2), \cdot\cdot\cdot, (y_n, x_n)\}$。
要估计比值 $R = \overline{Y}/\overline{X} = Y/X$，或者利用已知的 $\overline{X}$ 估计 $\overline{Y} = R\overline{X}$。
通常用样本比值 $r = \overline{y}/\overline{x}$ 来估计 $R$，其中 $\overline{y} = \frac{1}{n}\sum y_i, \overline{x} = \frac{1}{n}\sum x_i$。

---

### 定理 2.5.1

在简单随机抽样下，若存在与 $n, N$ 无关的数 $\epsilon > 0, M$ 使 $\epsilon < X_i < M, |Y_i| < M$ ($i=1, 2, \cdot\cdot\cdot, N$)，则有：

1.  **偏倚 (Bias)**: $E(r-R) = -\frac{cov(r, \overline{x})}{\overline{X}} = O(\frac{1}{n})$ (2.5.1)
    * **解读**: 比估计量 $r$ 通常是**有偏**的，但其偏倚的大小随着样本量 $n$ 的增大而减小，量级为 $1/n$。在大样本下，偏倚通常可以忽略。

2.  **均方偏差 (MSE)**:
    $$E(r-R)^2 = \frac{1-f}{n}\frac{1}{\overline{X}^2}\frac{1}{N-1}\sum_{i=1}^{N}(Y_i - RX_i)^2 + O\left(\frac{1}{n^{3/2}}\right) \quad \text{(2.5.2)}$$
    $$= O\left(\frac{1}{n}\right)$$
    其中 $f = n/N$。
    * **解读**: 比估计量 $r$ 的均方偏差主要由第一项决定，其量级为 $1/n$。$Y_i - RX_i$ 可以理解为 $Y_i$ 相对于由 $X_i$ 预测的值（通过总体比率 $R$）的偏差。

3.  **近似方差的无偏估计的相关定理**:
    $$E\left[\frac{1}{n-1}\sum_{i=1}^{n}(y_i - rx_i)^2\right] = \frac{1}{N-1}\sum_{i=1}^{N}(Y_i - RX_i)^2 + O\left(\frac{1}{n}\right)$$
    * **解读**: 这个结果是构造 $E(r-R)^2$ 估计量的基础。它表明，样本中 $(y_i - rx_i)$ 的平方和（经过 $n-1$ 调整）可以近似无偏地估计总体中 $(Y_i - RX_i)$ 的平方和（经过 $N-1$ 调整）。

**证明**:

1.  **偏倚 (Bias)**:
    * **关键技术**: 恒等变形，利用协方差定义 $cov(A, B) = E(AB) - E(A)E(B)$，以及**柯西-施瓦茨不等式** ($|E(XY)| \le \sqrt{E(X^2)E(Y^2)}$) 进行阶的估计。
    $$r - R = \frac{\overline{y}}{\overline{x}} - R = \frac{\overline{y} - R\overline{x}}{\overline{x}}$$
    考虑 $E(r-R)$：
    $$E(r-R) = E\left(\frac{\overline{y} - R\overline{x}}{\overline{x}}\right)$$
    对 $\frac{1}{\overline{x}}$ 在 $\overline{X}$ 处进行近似（忽略高阶项）：$\frac{1}{\overline{x}} \approx \frac{1}{\overline{X}} - \frac{\overline{x}-\overline{X}}{\overline{X}^2}$
    $$E(r-R) \approx E\left[(\overline{y} - R\overline{x})\left(\frac{1}{\overline{X}} - \frac{\overline{x}-\overline{X}}{\overline{X}^2}\right)\right]$$
    $$= \frac{1}{\overline{X}}E(\overline{y} - R\overline{x}) - \frac{1}{\overline{X}^2}E[(\overline{y} - R\overline{x})(\overline{x}-\overline{X})]$$
    由于 $E(\overline{y} - R\overline{x}) = E(\overline{y}) - RE(\overline{x}) = \overline{Y} - R\overline{X} = 0$，第一项为 0。
    $$E(r-R) \approx -\frac{1}{\overline{X}^2} cov(\overline{y}-R\overline{x}, \overline{x}) = -\frac{1}{\overline{X}^2}(cov(\overline{y}, \overline{x}) - R \cdot var(\overline{x}))$$
    书中给出的另一种推导（通过 $r-R = \frac{(r-R)(\overline{X}-\overline{x})}{\overline{X}} + \frac{\overline{y}-R\overline{x}}{\overline{X}}$）更简洁：
    两边取期望: $E(r-R) = \frac{1}{\overline{X}}E[(r-R)(\overline{X}-\overline{x})] + \frac{1}{\overline{X}}E(\overline{y}-R\overline{x})$
    $E(r-R) = -\frac{1}{\overline{X}}E[(r-R)(\overline{x}-\overline{X})] = -\frac{cov(r, \overline{x})}{\overline{X}}$
    估计阶 $O(1/n)$:
    $$|E(r-R)| = \left|\frac{cov(r, \overline{x})}{\overline{X}}\right| \le \frac{1}{|\overline{X}|} \sqrt{Var(r) Var(\overline{x})}$$
    更直接地用书中 (2.5.3) 的推导：
    $$|E(r-R)| \le E\left|\frac{(\overline{x}-\overline{X})(\overline{y}-R\overline{x})}{\overline{x}\overline{X}}\right| \le \frac{1}{\epsilon|\overline{X}|} E|(\overline{x}-\overline{X})(\overline{y}-R\overline{x})|$$
    $$ \le \frac{1}{\epsilon|\overline{X}|} \sqrt{E(\overline{x}-\overline{X})^2 E(\overline{y}-R\overline{x})^2}$$
    * **关键技术**: 应用 **定理 2.1.3** 的结论。因为 $\sum(X_i - \overline{X}) = 0$ 且 $\sum(Y_i - RX_i) = \sum Y_i - R \sum X_i = N\overline{Y} - R N\overline{X} = 0$，所以 $\overline{x}-\overline{X}$ 和 $\overline{y}-R\overline{x}$ 分别是零均值总体的样本均值。根据定理 2.1.3 (2)，它们的二阶矩（方差）都是 $O(1/n)$。
    $$|E(r-R)| \le \frac{1}{\epsilon|\overline{X}|} \sqrt{O(1/n) \cdot O(1/n)} = O(1/n)$$

2.  **均方偏差 (MSE)**:
    * **关键技术**: 恒等变形，将主要项与次要项（误差项）分离，利用期望和柯西-施瓦茨不等式估计误差项的阶。
    $$(r-R)^2 = \left(\frac{\overline{y}-R\overline{x}}{\overline{x}}\right)^2 = \frac{(\overline{y}-R\overline{x})^2}{\overline{X}^2 + (\overline{x}^2 - \overline{X}^2)}$$
    近似处理分母：
    $$(r-R)^2 = \frac{(\overline{y}-R\overline{x})^2}{\overline{X}^2} \left(1 + \frac{\overline{x}^2 - \overline{X}^2}{\overline{X}^2}\right)^{-1} \approx \frac{(\overline{y}-R\overline{x})^2}{\overline{X}^2} \left(1 - \frac{\overline{x}^2 - \overline{X}^2}{\overline{X}^2}\right)$$
    $$(r-R)^2 \approx \frac{(\overline{y}-R\overline{x})^2}{\overline{X}^2} - \frac{(\overline{y}-R\overline{x})^2 (\overline{x}-\overline{X})(\overline{x}+\overline{X})}{\overline{X}^4}$$
    书中直接用的变形更巧妙：
    $$(r-R)^2 = \frac{(\overline{y}-R\overline{x})^2}{\overline{x}^2} = \frac{(\overline{y}-R\overline{x})^2}{\overline{X}^2} \cdot \frac{\overline{X}^2}{\overline{x}^2} = \frac{(\overline{y}-R\overline{x})^2}{\overline{X}^2} \left(1 + \frac{\overline{X}^2-\overline{x}^2}{\overline{x}^2}\right)$$
    $$(r-R)^2 = \frac{(\overline{y}-R\overline{x})^2}{\overline{X}^2} - \frac{(\overline{y}-R\overline{x})^2 (\overline{x}^2 - \overline{X}^2)}{\overline{x}^2 \overline{X}^2}$$
    取期望：
    $$E(r-R)^2 = E\left[\frac{(\overline{y}-R\overline{x})^2}{\overline{X}^2}\right] - E\left[\frac{(\overline{y}-R\overline{x})^2 (\overline{x}-\overline{X})(\overline{x}+\overline{X})}{\overline{x}^2 \overline{X}^2}\right]$$
    * **关键技术**: 应用 **定理 2.1.3** 的结论。第一项 $E[(\overline{y}-R\overline{x})^2]$ 是零均值总体 $\{Y_i - RX_i\}$ 的样本均值的二阶矩，根据定理 2.1.3 (2)，它等于 $\frac{1-f}{n}\frac{1}{N-1}\sum(Y_i - RX_i)^2 = O(1/n)$。
    $$E\left[\frac{(\overline{y}-R\overline{x})^2}{\overline{X}^2}\right] = \frac{1}{\overline{X}^2} \frac{1-f}{n}\frac{1}{N-1}\sum_{i=1}^{N}(Y_i - RX_i)^2$$
    估计第二项（误差项）的阶：
    $$\left|E\left[\frac{(\overline{y}-R\overline{x})^2 (\overline{x}-\overline{X})(\overline{x}+\overline{X})}{\overline{x}^2 \overline{X}^2}\right]\right| \le \frac{E[|\overline{y}-R\overline{x}|^2 |\overline{x}-\overline{X}| |\overline{x}+\overline{X}|]}{\epsilon^2 \overline{X}^2}$$
    $$ \le \frac{(M+R M)^2 (M+\overline{X})}{\epsilon^2 \overline{X}^2} E|\overline{x}-\overline{X}| \approx O(1/\sqrt{n})$$
    书中用柯西-施瓦茨不等式估计更严谨：
    $$\le \frac{2M}{\epsilon^2 \overline{X}^2} E[|\overline{x}-\overline{X}|(\overline{y}-R\overline{x})^2]$$
    $$ \le \frac{2M}{\epsilon^2 \overline{X}^2} \sqrt{E(\overline{x}-\overline{X})^2 E(\overline{y}-R\overline{x})^4}$$
    * **关键技术**: 应用 **定理 2.1.3** 的结论。(2) $E(\overline{x}-\overline{X})^2 = O(1/n)$。(4) $E(\overline{y}-R\overline{x})^4 = O(1/n^2)$。
    $$ \le \frac{2M}{\epsilon^2 \overline{X}^2} \sqrt{O(1/n) \cdot O(1/n^2)} = O(1/n^{3/2})$$
    合并结果即得定理 (2)。

3.  **近似方差的无偏估计相关定理**:
    * **关键技术**: 拆分平方项，逐项求期望，利用 **定理 2.3.2** ($Es^2 = S^2$) 的思想，以及对包含 $(r-R)$ 的项进行阶的估计。
    $$E\left[\frac{1}{n-1}\sum_{i=1}^{n}(y_i - rx_i)^2\right] = E\left[\frac{1}{n-1}\sum_{i=1}^{n}((y_i - Rx_i) - x_i(r-R))^2\right]$$
    $$= E\left[\frac{1}{n-1}\sum(y_i - Rx_i)^2\right] + E\left[\frac{(r-R)^2}{n-1}\sum x_i^2\right] - E\left[\frac{2(r-R)}{n-1}\sum x_i(y_i - Rx_i)\right]$$
    **第一项**:
    $$E\left[\frac{1}{n-1}\sum(y_i - Rx_i)^2\right] = E\left[\frac{1}{n-1}\left(\sum((y_i-Rx_i)-(\overline{y}-R\overline{x}))^2 + n(\overline{y}-R\overline{x})^2\right)\right]$$
    $$= E(s_{Y-RX}^2) + \frac{n}{n-1}E(\overline{y}-R\overline{x})^2$$
    $$= S_{Y-RX}^2 + \frac{n}{n-1}O(1/n) = S_{Y-RX}^2 + O(1/n)$$
    其中 $S_{Y-RX}^2 = \frac{1}{N-1}\sum(Y_i - RX_i)^2$。
    **第二项**:
    $$E\left[\frac{(r-R)^2}{n-1}\sum x_i^2\right] \le \frac{nM^2}{n-1}E(r-R)^2 = O(1) \cdot O(1/n) = O(1/n)$$
    **第三项**:
    $$E\left[\frac{2(r-R)}{n-1}\sum x_i(y_i - Rx_i)\right] = \frac{2n}{n-1} E[(r-R)(\overline{u})]$$
    其中 $u_i = x_i(y_i-Rx_i)$，$\overline{u}$ 是 $u_i$ 的样本均值。
    $$= \frac{2n}{n-1} E[(r-R)(\overline{u}-\overline{U}) + (r-R)\overline{U}]$$
    $$ \le \frac{2n}{n-1} \sqrt{E(r-R)^2 E(\overline{u}-\overline{U})^2} + \frac{2n\overline{U}}{n-1}E(r-R)$$
    $$ = O(1) \sqrt{O(1/n) O(1/n)} + O(1) O(1/n) = O(1/n)$$
    综合三项结果即得定理 (3)。
证毕。

---

### 比估计的应用

由定理 2.5.1 知，$r$ 估计 $R$ 近似无偏，其均方偏差近似为 (忽略 $O(1/n^{3/2})$ 项)：
$$E(r-R)^2 \approx \frac{1-f}{n}\frac{1}{\overline{X}^2}S_{Y-RX}^2 \quad \text{(近似式 2.5.4)}$$
其中 $S_{Y-RX}^2 = \frac{1}{N-1}\sum(Y_i - RX_i)^2$。

当 $\overline{X}$ 已知时，可用 $\overline{y}_R = r\overline{X}$ 估计 $\overline{Y}$，其均方偏差近似为：
$$V(\overline{y}_R) = \overline{X}^2 E(r-R)^2 \approx \frac{1-f}{n}S_{Y-RX}^2 \quad \text{(近似式 2.5.5)}$$
其估计量可采用：
$$v(\overline{y}_R) = \frac{1-f}{n}s_{y-rx}^2 = \frac{1-f}{n}\frac{1}{n-1}\sum_{i=1}^{n}(y_i - rx_i)^2 \quad \text{(2.5.6)}$$

---

### 例题介绍

#### 例1 (续§2.3例1 - 食物消费)

**介绍**:
本例展示了如何利用辅助变量（户人数 $X_1$）通过比估计来提高对目标变量（户月食物支出 $Y$）的估计精度。假设总户数 $N=300$，总人口 $X_{total} = 1100$ 人，所以 $\overline{X}_1 = 1100/300$。
* **目标1**: 估计比率 $R = \overline{Y}/\overline{X}_1$ (平均每“人份”对应的月食物支出)。
* **目标2**: 利用已知的 $\overline{X}_1$ 估计 $\overline{Y}$ (平均每户月食物支出)。

**计算**:
1.  **估计比率 $r$**:
    * $\overline{y} = 31350/35 = 895.71$
    * $\overline{x}_1 = 120/35 = 3.429$
    * $r = \overline{y}/\overline{x}_1 = 895.71 / 3.429 \approx 261.25$ 元/人份。
2.  **估计 $r$ 的均方偏差 $v(r)$**: (书中计算的是 $v(r)$ 而非 $E(r-R)^2$)
    * $v(r) \approx \frac{1}{\overline{x}_1^2} v(\overline{y}_R) = \frac{1}{(120/35)^2} \times 453.6942 \approx 38.5955$ (此步书中表述略有歧义，实际计算的是 $v(r)$)
3.  **估计均值 $\overline{y}_R$**:
    * $\overline{y}_R = r \overline{X}_1 = 261.25 \times (1100/300) \approx 957.92$ 元/户。
4.  **估计 $\overline{y}_R$ 的均方偏差 $v(\overline{y}_R)$**:
    * $v(\overline{y}_R) = \frac{1-f}{n}\frac{1}{n-1}\sum(y_i - rx_{1i})^2$
    * $\sum(y_i - rx_{1i})^2 = \sum y_i^2 - 2r \sum x_{1i}y_i + r^2 \sum x_{1i}^2$
    * 需要计算 $\sum x_{1i}y_i$。代入数据（ $\sum y_i^2 = 29692900, \sum x_{1i}^2 = 450$, 需补充 $\sum x_{1i}y_i = 11440$）
    * $v(\overline{y}_R) = \frac{1-(35/300)}{35} \frac{1}{34} [29692900 - 2(261.25)(11440) + (261.25)^2(450)] \approx 453.6942$。
5.  **估计标准差**: $\sqrt{v(\overline{y}_R)} \approx \sqrt{453.6942} \approx 21.3$ 元/户。

**比较**:
* 简单估计 $\overline{y} = 895.71$，标准差估计为 34.59。
* 比估计 $\overline{y}_R = 957.92$，标准差估计为 21.3。
* **结论**: 在此例中，比估计的标准差更小，说明利用“户人数”信息提高了估计精度。

**理论比较 (比估计 vs. 简单估计)**:
* $V(\overline{y}) = \frac{1-f}{n}S_Y^2$
* $V(\overline{y}_R) \approx \frac{1-f}{n}(S_Y^2 + R^2 S_X^2 - 2R S_{XY}) = \frac{1-f}{n}(S_Y^2 + R^2 S_X^2 - 2R \rho S_X S_Y)$
* 比估计优于简单估计的条件是 $V(\overline{y}_R) \le V(\overline{y})$，近似等价于：
    $$ \rho \ge \frac{1}{2}\frac{RS_X}{S_Y} = \frac{1}{2}\frac{S_X/\overline{X}}{S_Y/\overline{Y}} = \frac{1}{2}\frac{C_X}{C_Y} \quad \text{(2.5.7)}$$
    其中 $C_X, C_Y$ 分别是 $X, Y$ 的变异系数。
* **结论**: 当 $Y$ 和 $X$ 的相关系数 $\rho$ 足够大（超过 $X, Y$ 变异系数比值的一半）时，比估计更优。

**设计效应 (Deff)**:
* 定义: $Deff = \frac{\text{某方案估计量的方差}}{\text{同样本量下简单随机抽样简单估计量的方差}} = \frac{V(\hat{\theta})}{V_{srs}(\overline{y})}$ (2.5.8)
* 用途: 在确定样本量时，可以先按简单随机抽样计算所需样本量 $n_0$，再乘以 Deff 得到实际方案所需样本量 $n = n_0 \times Deff$ (2.5.9)。

#### 例2 (部分估计之比估值法)

**介绍**:
本例是 §2.3 例2 (部分估计) 的延续，解决了当子总体大小 $N_1$ 未知时，如何估计子总体均值（如每平方米耕地的平均蝗蝻数）的问题。
* **目标**: 估计比率 $R = \frac{\text{子总体总和 } Z}{\text{子总体大小 } N_1}$。
* **方法**: 定义两个变量：
    $$Z_i = \begin{cases} Y_i, & \text{当个体属于子总体} \\ 0, & \text{否则} \end{cases}$$
    $$X_i = \begin{cases} 1, & \text{当个体属于子总体} \\ 0, & \text{否则} \end{cases}$$
    则要估计的就是 $R = \sum Z_i / \sum X_i = \overline{Z} / \overline{X}$。
* **估计**:
    * 使用样本比值 $r = \overline{z} / \overline{x} = (\sum z_i / n) / (n_1 / n) = \sum z_i / n_1$ （即样本中属于子总体的 $Y$ 值的均值）来估计 $R$。
    * 估计量 $r$ 的均方偏差 $v(r)$ 可套用标准比估计方差公式：
        $$v(r) = \frac{1-f}{n}\frac{1}{\overline{x}^2}\frac{1}{n-1}\sum_{i=1}^{n}(z_i - rx_i)^2$$
        $$= \frac{1-f}{n}\frac{1}{(n_1/n)^2}\frac{1}{n-1}\left[\sum_{i=1}^{n_1}y_i^2 - \frac{(\sum y_i)^2}{n_1}\right]$$ (化简后形式)