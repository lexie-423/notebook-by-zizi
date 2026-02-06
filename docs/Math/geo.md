# 🧭 高等数学立体几何核心知识点总结

高等数学中的立体几何（空间解析几何）是“用代数方法研究空间图形”，其核心工具是**向量**和**坐标系**。

---

## 1. 基础工具：空间向量 (Vectors)

一切计算的基础。
* **向量表示**：$\vec{a} = (x, y, z)$
* **向量运算**：加法、减法、数乘。
* **点积 (Dot Product)**：
    * $\vec{a} \cdot \vec{b} = |\vec{a}| |\vec{b}| \cos \theta$
    * $\vec{a} \cdot \vec{b} = x_1 x_2 + y_1 y_2 + z_1 z_2$
    * **应用**：
        * **求夹角**：$\cos \theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}| |\vec{b}|}$
        * **判垂直**：$\vec{a} \perp \vec{b} \iff \vec{a} \cdot \vec{b} = 0$
* **叉积 (Cross Product)**：
    * $\vec{a} \times \vec{b}$ 是一个向量，其方向垂直于 $\vec{a}$ 和 $\vec{b}$ 构成的平面（满足右手定则），其模 $|\vec{a} \times \vec{b}| = |\vec{a}| |\vec{b}| \sin \theta$。
    * **计算**：通过行列式 $\begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ x_1 & y_1 & z_1 \\ x_2 & y_2 & z_2 \end{vmatrix}$
    * **应用**：
        * **求法向量**：叉积的结果就是平面的法向量。
        * **判平行**：$\vec{a} \parallel \vec{b} \iff \vec{a} \times \vec{b} = \vec{0}$

---

## 2. 核心对象：直线与平面方程 (Line & Plane Equations)

你提到的“线面方程”主要指这个。

#### A. 平面方程 (Plane Equation)
一个平面由“**平面上一点**”和“**一个法向量**”完全确定。

* **法向量 (Normal Vector)**：$\vec{n} = (A, B, C)$，是垂直于平面的向量。
* **点法式 (Point-Normal Form)**：最基本的形式。
    * $A(x - x_0) + B(y - y_0) + C(z - z_0) = 0$
    * 其中 $(x_0, y_0, z_0)$ 是平面上一点。
* **一般式 (General Form)**：由点法式展开得到。
    * $Ax + By + Cz + D = 0$
    * (其中法向量 $\vec{n} = (A, B, C)$)

#### B. 空间直线方程 (Line Equation)
一条直线由“**直线上一点**”和“**一个方向向量**”完全确定。

* **方向向量 (Direction Vector)**：$\vec{s} = (m, n, p)$，是平行于直线的向量。
* **参数式 (Parametric Form)**：最常用的形式。
    * $\begin{cases} x = x_0 + mt \\ y = y_0 + nt \\ z = z_0 + pt \end{cases}$ (t 为参数)
    * 其中 $(x_0, y_0, z_0)$ 是直线上一点。
* **对称式 (Symmetric Form) / 点向式**：
    * $\frac{x - x_0}{m} = \frac{y - y_0}{n} = \frac{z - z_0}{p}$
    * (注意：如果 $m, n, p$ 中有 0，则该项写为 $x - x_0 = 0$)
* **一般式 (两平面交线)**：
    * $\begin{cases} A_1 x + B_1 y + C_1 z + D_1 = 0 \\ A_2 x + B_2 y + C_2 z + D_2 = 0 \end{cases}$
    * (其方向向量 $\vec{s} = \vec{n_1} \times \vec{n_2}$)

---

## 3. 核心问题：线面关系 (Line-Plane Relationships)

这是考察的重点，**核心思想是“向量关系”**。
设直线 $L$ (方向向量 $\vec{s}$) 和平面 $\Pi$ (法向量 $\vec{n}$)。

#### A. 线与线 (Line-Line)
设 $L_1$ (方向向量 $\vec{s_1}$) 和 $L_2$ (方向向量 $\vec{s_2}$)。
1.  **平行**：$\vec{s_1} \parallel \vec{s_2}$ (即 $\vec{s_1} = k \vec{s_2}$)
2.  **垂直**：$\vec{s_1} \perp \vec{s_2}$ (即 $\vec{s_1} \cdot \vec{s_2} = 0$)
3.  **相交/异面**：看 $\vec{s_1}$ 和 $\vec{s_2}$ 是否共面（通过混合积或联立方程）。

#### B. 线与面 (Line-Plane)
1.  **线面平行** ($L \parallel \Pi$)：
    * **向量判定**：$\vec{s} \perp \vec{n}$ (即 $\vec{s} \cdot \vec{n} = 0$)
    * *（注：还需排除直线在平面内的情况）*
2.  **线面垂直** ($L \perp \Pi$)：
    * **向量判定**：$\vec{s} \parallel \vec{n}$ (即 $\vec{s} = k \vec{n}$)
3.  **线面夹角** (设为 $\alpha$)：
    * $\vec{s}$ 和 $\vec{n}$ 的夹角为 $\theta$。
    * $\alpha$ 和 $\theta$ 互余，即 $\alpha + \theta = 90^\circ$。
    * $\sin \alpha = |\cos \theta| = \frac{|\vec{s} \cdot \vec{n}|}{|\vec{s}| |\vec{n}|}$

#### C. 面与面 (Plane-Plane)
设 $\Pi_1$ (法向量 $\vec{n_1}$) 和 $\Pi_2$ (法向量 $\vec{n_2}$)。
1.  **面面平行** ($\Pi_1 \parallel \Pi_2$)：
    * **向量判定**：$\vec{n_1} \parallel \vec{n_2}$ (即 $\vec{n_1} = k \vec{n_2}$)
2.  **面面垂直** ($\Pi_1 \perp \Pi_2$)：
    * **向量判定**：$\vec{n_1} \perp \vec{n_2}$ (即 $\vec{n_1} \cdot \vec{n_2} = 0$)
3.  **二面角** (即两平面夹角 $\alpha$)：
    * $\alpha$ 等于或互补于法向量夹角 $\theta$。
    * $\cos \alpha = |\cos \theta| = \frac{|\vec{n_1} \cdot \vec{n_2}|}{|\vec{n_1}| |\vec{n_2}|}$

#### D. 距离 (Distance)
* **点到平面距离**：点 $P(x_0, y_0, z_0)$ 到平面 $Ax+By+Cz+D=0$ 的距离。
    * $d = \frac{|Ax_0 + By_0 + Cz_0 + D|}{\sqrt{A^2 + B^2 + C^2}}$
* **点到直线距离**：(方法较多，常用向量法)
* **两条异面直线距离**：(利用公垂向量)

---

## 4. 进阶应用：切面与切线 (Tangent Plane & Tangent Line)

这是多元函数微分学（微积分）在几何上的应用。

#### A. 空间曲线的切线 (Tangent Line to a Space Curve)
空间曲线通常由**参数方程**给出：
$ L: \begin{cases} x = x(t) \\ y = y(t) \\ z = z(t) \end{cases}$

* **切向量 (Tangent Vector)**：s
    * $\vec{r}(t) = (x(t), y(t), z(t))$
    * $\vec{r}'(t) = (x'(t), y'(t), z'(t))$
* 在点 $t_0$（对应点 $P_0(x_0, y_0, z_0)$）处的**切线方程**：
    * $\frac{x - x_0}{x'(t_0)} = \frac{y - y_0}{y'(t_0)} = \frac{z - z_0}{z'(t_0)}$
* **法平面 (Normal Plane)**：
    * 过 $P_0$ 且与切向量 $\vec{r}'(t_0)$ 垂直的平面。
    * $x'(t_0)(x - x_0) + y'(t_0)(y - y_0) + z'(t_0)(z - z_0) = 0$

#### B. 曲面的切平面 (Tangent Plane to a Surface)
曲面通常由**隐函数** $F(x, y, z) = 0$ 或**显函数** $z = f(x, y)$ 给出。

**核心工具：梯度 (Gradient)**
对于曲面 $F(x, y, z) = 0$，其在点 $P_0(x_0, y_0, z_0)$ 的**法向量**就是该点处的**梯度**：
$\nabla F = (\frac{\partial F}{\partial x}, \frac{\partial F}{\partial y}, \frac{\partial F}{\partial z})$

* **切平面方程 (Tangent Plane)**：
    * 在点 $P_0$ 的法向量为 $\vec{n} = \nabla F(P_0)$。
    * 使用点法式：
    $$F_x(P_0)(x - x_0) + F_y(P_0)(y - y_0) + F_z(P_0)(z - z_0) = 0$$
    * (其中 $F_x, F_y, F_z$ 是 $F$ 对 $x, y, z$ 的偏导数)

* **法线方程 (Normal Line)**：
    * 过 $P_0$ 且以 $\nabla F(P_0)$ 为方向向量的直线。
    * $\frac{x - x_0}{F_x(P_0)} = \frac{y - y_0}{F_y(P_0)} = \frac{z - z_0}{F_z(P_0)}$

> **[特例]** 如果曲面是 $z = f(x, y)$：
> 构造 $F(x, y, z) = f(x, y) - z = 0$。
> 此时 $F_x = f_x$, $F_y = f_y$, $F_z = -1$。
> * **法向量**：$(f_x(x_0, y_0), f_y(x_0, y_0), -1)$
> * **切平面**：$f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0) - (z - z_0) = 0$

---

## 5. 补充：常见曲面 (Surfaces)

除了平面，高等数学还要求了解一些基本曲面：
* **二次曲面 (Quadric Surfaces)**：
    * 球面 (Sphere)
    * 椭球面 (Ellipsoid)
    * 柱面 (Cylindrical Surface) (如 $x^2 + y^2 = R^2$)
    * 锥面 (Conical Surface) (如 $z^2 = x^2 + y^2$)
    * 抛物面 (Paraboloid) (如 $z = x^2 + y^2$)
    * 双曲面 (Hyperboloid)
* **旋转曲面 (Surface of Revolution)**：一条曲线绕一条轴旋转形成的曲面。