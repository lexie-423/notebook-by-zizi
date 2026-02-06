# 曲线积分与曲面积分计算指南

本文档总结了多元微积分中两类曲线积分和两类曲面积分的定义、计算方法和核心技巧。

---

## 一、曲线积分 (Line Integrals)

曲线积分分为第一类曲线积分（对弧长的积分）和第二类曲线积分（对坐标的积分）。

### 1. 第一类曲线积分 (对弧长的积分)

* **形式**: $\int_L f(x, y, z) \, ds$
* **物理意义**: 若 $f(x, y, z)$ 为曲线 $L$ 的线密度，则积分为 $L$ 的总质量。
* **核心思想**: **“化N定一”** —— 将曲线积分转化为参数 $t$ 的定积分。
* **计算步骤**:
    1.  **参数化**: 将曲线 $L$ 表示为参数方程 $\mathbf{r}(t) = (x(t), y(t), z(t))$，其中 $t \in [\alpha, \beta]$。
    2.  **计算弧长微元 $ds$**:
        * $ds = |\mathbf{r}'(t)| \, dt = \sqrt{x'(t)^2 + y'(t)^2 + z'(t)^2} \, dt$
    3.  **代入并积分**:
        * $\int_L f(x, y, z) \, ds = \int_{\alpha}^{\beta} f(x(t), y(t), z(t)) \sqrt{x'(t)^2 + y'(t)^2 + z'(t)^2} \, dt$
* **二维特例**:
    * 若 $L$ 由 $y = g(x)$ 给出 ($x \in [a, b]$)，则 $ds = \sqrt{1 + g'(x)^2} \, dx$。
    * $\int_L f(x, y) \, ds = \int_{a}^{b} f(x, g(x)) \sqrt{1 + g'(x)^2} \, dx$
* **技巧**:
    * **对称性**: 若 $L$ 关于 $y$ 轴对称，而 $f(x, y)$ 是关于 $x$ 的奇函数（即 $f(-x, y) = -f(x, y)$），则积分为 0。
    * **奇偶性**: 善用被积函数和积分路径的对称性来简化计算。

### 2. 第二类曲线积分 (对坐标的积分)

* **形式**: $\int_L P \, dx + Q \, dy + R \, dz$
* **物理意义**: 向量场 $\mathbf{F} = (P, Q, R)$ 沿路径 $L$ 所做的**功**。
* **核心思想**: **“化N定一”** —— 同样是化为参数 $t$ 的定积分。
* **关键点**: **积分与路径方向有关**。
* **计算步骤**:
    1.  **参数化**: $\mathbf{r}(t) = (x(t), y(t), z(t))$， $t$ 从 $\alpha$ 到 $\beta$ (注意 $t$ 的起点和终点必须对应 $L$ 的方向)。
    2.  **计算坐标微元**:
        * $dx = x'(t) \, dt$
        * $dy = y'(t) \, dt$
        * $dz = z'(t) \, dt$
    3.  **代入并积分**:
        * $\int_L P \, dx + Q \, dy + R \, dz = \int_{\alpha}^{\beta} \left[ P(x(t), ...)x'(t) + Q(x(t), ...)y'(t) + R(x(t), ...)z'(t) \right] \, dt$

### 3. 曲线积分的核心定理

#### (1) 格林公式 (Green's Theorem) - (2D)

* **作用**: 沟通了**平面闭合曲线**上的第二类曲线积分与它所围**区域的二重积分**。
* **公式**: $\oint_L P \, dx + Q \, dy = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) \, dx \, dy$
* **条件**: $L$ 是分段光滑的**闭合**曲线，取**逆时针**方向；$D$ 是 $L$ 围成的区域；$P, Q$ 在 $D$ 上一阶偏导连续。
* **技巧**:
    * **计算积分**: 当 $\int_L P \, dx + Q \, dy$ 不好算，但 $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}$ 很简单（如常数）时，用格林公式。
    * **计算面积**: $Area(D) = \oint_L x \, dy = -\oint_L y \, dx = \frac{1}{2} \oint_L x \, dy - y \, dx$。
    * **挖洞**: 如果 $D$ 内部有“洞”（如 $L = L_1 + L_2$， $L_1$ 逆时针, $L_2$ 顺时针），则 $\iint_D = \int_{L_1} + \int_{L_2}$。

#### (2) 曲线积分与路径无关 (Path Independence) - (2D/3D)

* **作用**: 当满足条件时，第二类曲线积分 $\int_L \mathbf{F} \cdot d\mathbf{r}$ 只与起点 $A$ 和终点 $B$ 有关，与路径 $L$ 无关。
* **等价条件**:
    1.  **保守场 (梯度场)**: $\mathbf{F}$ 是某个标量函数 $u$ (势函数) 的梯度，$\mathbf{F} = \nabla u = (\frac{\partial u}{\partial x}, \frac{\partial u}{\partial y}, \frac{\partial u}{\partial z})$。
    2.  **环路积分/旋度**: 对**单连通区域**内任意闭合路径 $C$，$\oint_C \mathbf{F} \cdot d\mathbf{r} = 0$。这等价于 $\text{curl}(\mathbf{F}) = \mathbf{0}$。
        * (2D): $\frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}$
        * (3D): $\frac{\partial R}{\partial y} = \frac{\partial Q}{\partial z}$, $\frac{\partial P}{\partial z} = \frac{\partial R}{\partial x}$, $\frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}$
* **计算**: 若路径无关，则 $\int_A^B \mathbf{F} \cdot d\mathbf{r} = u(B) - u(A)$。

---

## 二、曲面积分 (Surface Integrals)

曲面积分也分为第一类（对面积的积分）和第二类（对坐标的积分）。

### 1. 第一类曲面积分 (对面积的积分)

* **形式**: $\iint_\Sigma f(x, y, z) \, dS$
* **物理意义**: 若 $f(x, y, z)$ 为曲面 $\Sigma$ 的面密度，则积分为 $\Sigma$ 的总质量。
* **核心思想**: **“化N定二”** —— 将曲面积分转化为二重积分（通常使用**投影法**）。
* **计算步骤**:
    1.  **投影**: 将曲面 $\Sigma$ 投影到某个坐标平面，例如 $xy$ 平面，得到投影区域 $D_{xy}$。
    2.  **曲面方程**: 将 $\Sigma$ 表示为 $z = z(x, y)$。
    3.  **计算面积微元 $dS$**:
        * $dS = \sqrt{1 + (\frac{\partial z}{\partial x})^2 + (\frac{\partial z}{\partial y})^2} \, dx \, dy$
    4.  **代入并积分**:
        * $\iint_\Sigma f(x, y, z) \, dS = \iint_{D_{xy}} f(x, y, z(x, y)) \sqrt{1 + z_x^2 + z_y^2} \, dx \, dy$
* **技巧**:
    * **对称性**: 与第一类曲线积分类似，善用被积函数和积分曲面的对称性。
    * **选择投影面**: 选择最简单的投影面。如果曲面方程是 $x = x(y, z)$，则投影到 $yz$ 平面，$dS = \sqrt{1 + x_y^2 + x_z^2} \, dy \, dz$。

### 2. 第二类曲面积分 (对坐标的积分)

* **形式**: $\iint_\Sigma P \, dy \, dz + Q \, dz \, dx + R \, dx \, dy$
* **物理意义**: 向量场 $\mathbf{F} = (P, Q, R)$ 穿过曲面 $\Sigma$ 的**通量** (Flux)。
* **核心思想**: **“化N定二”** —— 转化为二重积分。
* **关键点**: **积分与曲面方向（侧）有关**。例如“上侧”、“外侧”。
* **计算步骤 (投影法)**:
    1.  **拆分**: 将积分拆成三项：$\iint_\Sigma P \, dy \, dz$，$\iint_\Sigma Q \, dz \, dx$，$\iint_\Sigma R \, dx \, dy$。
    2.  **分别投影**:
        * $\iint_\Sigma R \, dx \, dy$: 投影到 $xy$ 平面 ($D_{xy}$)，曲面 $z = z(x, y)$。
            * $\iint_\Sigma R \, dx \, dy = \pm \iint_{D_{xy}} R(x, y, z(x, y)) \, dx \, dy$
            * **符号 $\pm$ 判断**:
                * 如果 $\Sigma$ 取**上侧** (法向量 $\mathbf{n}$ 的 $z$ 分量为正)，则取 **+**。
                * 如果 $\Sigma$ 取**下侧** (法向量 $\mathbf{n}$ 的 $z$ 分量为负)，则取 **-**。
        * $\iint_\Sigma P \, dy \, dz$: 投影到 $yz$ 平面 ($D_{yz}$)，曲面 $x = x(y, z)$。
            * $\iint_\Sigma P \, dy \, dz = \pm \iint_{D_{yz}} P(x(y, z), y, z) \, dy \, dz$
            * **符号 $\pm$ 判断**:
                * 如果 $\Sigma$ 取**前侧** (法向量 $x$ 分量为正)，则取 **+**。
                * 如果 $\Sigma$ 取**后侧** (法向量 $x$ 分量为负)，则取 **-**。
        * $\iint_\Sigma Q \, dz \, dx$: 投影到 $xz$ 平面 ($D_{xz}$)，曲面 $y = y(x, z)$。
            * $\iint_\Sigma Q \, dz \, dx = \pm \iint_{D_{xz}} Q(x, y(x, z), z) \, dz \, dx$
            * **符号 $\pm$ 判断**:
                * 如果 $\Sigma$ 取**右侧** (法向量 $y$ 分量为正)，则取 **+**。
                * 如果 $\Sigma$ 取**左侧** (法向量 $y$ 分量为负)，则取 **-**。
    3.  **求和**: 将三项的结果相加。

* **两类曲面积分的关系**:
    * $\iint_\Sigma P \, dy \, dz + Q \, dz \, dx + R \, dx \, dy = \iint_\Sigma (P \cos\alpha + Q \cos\beta + R \cos\gamma) \, dS$
    * 其中 $\mathbf{n} = (\cos\alpha, \cos\beta, \cos\gamma)$ 是 $\Sigma$ 指定侧的单位法向量。

### 3. 曲面积分的核心定理

#### (1) 高斯公式 (Gauss's Divergence Theorem) - (3D)

* **作用**: 沟通了**空间闭合曲面**上的第二类曲面积分（通量）与它所围**立体的三重积分**。
* **公式**:
    * $\oiint_\Sigma P \, dy \, dz + Q \, dz \, dx + R \, dx \, dy = \iiint_\Omega \left( \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} \right) \, dV$
    * **向量形式**: $\oiint_\Sigma \mathbf{F} \cdot \mathbf{n} \, dS = \iiint_\Omega \text{div}(\mathbf{F}) \, dV$
* **条件**: $\Sigma$ 是分段光滑的**闭合**曲面，取**外侧**；$\Omega$ 是 $\Sigma$ 围成的立体；$P, Q, R$ 在 $\Omega$ 上一阶偏导连续。
* **技巧**:
    * **计算通量**: 当 $\oiint_\Sigma$ 不好算（如曲面分片），但 $\text{div}(\mathbf{F}) = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$ 很简单（如常数）时，用高斯公式。
    * **计算积分**: 当 $\iiint_\Omega$ 不好算，但 $\mathbf{F}$ 在 $\Sigma$ 上的通量易求时，反用高斯公式。
    * **挖洞**: 与格林公式类似。
    * **补面**: 如果 $\Sigma$ 是一个**不封闭**的曲面，可以补一个简单的面 $S_1$ 使其封闭（$\Sigma_0 = \Sigma + S_1$），然后用高斯公式：
        * $\iint_\Sigma = \oiint_{\Sigma_0} - \iint_{S_1}$
        * $\iint_\Sigma \mathbf{F} \cdot \mathbf{n} \, dS = \iiint_\Omega \text{div}(\mathbf{F}) \, dV - \iint_{S_1} \mathbf{F} \cdot \mathbf{n}_1 \, dS$

#### (2) 斯托克斯公式 (Stokes' Theorem) - (3D)

* **作用**: 沟通了**空间开曲面的边界曲线**上的第二类曲线积分（环量）与穿过该**曲面的旋度通量**。
* **公式**:
    * $\oint_L P \, dx + Q \, dy + R \, dz = \iint_\Sigma \left( \frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} \right) \, dy \, dz + \left( \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} \right) \, dz \, dx + \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) \, dx \, dy$
    * **向量形式**: $\oint_L \mathbf{F} \cdot d\mathbf{r} = \iint_\Sigma (\text{curl} \, \mathbf{F}) \cdot \mathbf{n} \, dS$
* **条件**: $L$ 是 $\Sigma$ 的边界；$L$ 的方向与 $\Sigma$ 的法向量 $\mathbf{n}$（侧）符合**右手定则**。
* **技巧**:
    * **计算环量**: 当 $\oint_L$ 不好算（如 $L$ 是空间折线），但 $\text{curl} \, \mathbf{F}$ 简单，或 $\Sigma$ 是简单平面时，用斯托克斯公式。
    * **计算通量**: 当 $\iint_\Sigma (\text{curl} \, \mathbf{F}) \cdot \mathbf{n} \, dS$ 不好算，但 $\oint_L$ 很容易算时（如 $\text{curl} \, \mathbf{F}$ 复杂），反用斯托克斯公式。
    * **换面**: 如果 $\Sigma$ 很复杂，但其边界 $L$ 也同时是另一个简单曲面 $S_1$ 的边界，则 $\iint_\Sigma (\text{curl} \, \mathbf{F}) \cdot \mathbf{n} \, dS = \iint_{S_1} (\text{curl} \, \mathbf{F}) \cdot \mathbf{n}_1 \, dS$。
* **注**: 格林公式是斯托克斯公式在 $xy$ 平面上的特例。

---

## 三、四大定理总结

| 定理 | 维度 | 从 | 到 | 公式 (向量) | 物理意义 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **牛顿-莱布尼茨** | 1D | 0维 (点) | 1维 (线) | $\int_a^b f'(x) \, dx = f(b) - f(a)$ | 变化率的积累 = 总变化 |
| **格林公式** | 2D | 1维 (线) | 2维 (面) | $\oint_L \mathbf{F} \cdot d\mathbf{r} = \iint_D (\text{curl} \, \mathbf{F}) \cdot \mathbf{k} \, dA$ | 2D环量 = 旋度的通量 |
| **斯托克斯公式** | 3D | 1维 (线) | 2维 (面) | $\oint_L \mathbf{F} \cdot d\mathbf{r} = \iint_\Sigma (\text{curl} \, \mathbf{F}) \cdot \mathbf{n} \, dS$ | 3D环量 = 旋度的通量 |
| **高斯公式** | 3D | 2维 (面) | 3维 (体) | $\oiint_\Sigma \mathbf{F} \cdot \mathbf{n} \, dS = \iiint_\Omega \text{div}(\mathbf{F}) \, dV$ | 通量 = 散度的积累 |