/* =========================================================
   小玩同学的Java学习站 — 课程内容
   把 18 关的内容单独放在这里，方便阅读和修改。
   ========================================================= */

window.COURSE_CHAPTERS = [
  /* =======================================================
     第 01 关
     ======================================================= */
  {
    id: 1,
    phase: 1,
    phaseLabel: "阶段一 · 语法地基",
    minutes: 25,
    title: "先让程序说一句话",
    lead: "第一次运行 Java，不追求理解全部。先让代码跑起来，再回头把每一行拆清楚。",
    skills: ["类与文件", "main 方法", "控制台输出"],
    steps: [
      {
        title: "先看：最短的 Java 程序",
        html: `<p>目标是让电脑说一句话。新建一个文件，名字必须叫 <code>HelloJava.java</code>，然后把下面 6 行照抄进去。大小写、引号和分号都要用英文半角。</p>`,
        filename: "HelloJava.java",
        language: "java",
        code: String.raw`public class HelloJava {
    public static void main(String[] args) {
        System.out.println("你好，Java！");
    }
}`,
        output: "你好，Java！",
      },
      {
        title: "拆开：每一行都在做什么",
        html: `<p>暂时不用背术语，先建立对应关系：哪一行是“外壳”，哪一行是“入口”，哪一行真正执行动作。</p>
          <div class="table-wrap">
            <table class="explain-table">
              <thead><tr><th>代码</th><th>它的作用</th></tr></thead>
              <tbody>
                <tr><td>public class HelloJava</td><td>声明一个公开类。文件名必须与类名完全一致，也就是 <code>HelloJava.java</code>。</td></tr>
                <tr><td>public static void main(String[] args)</td><td>程序入口。JVM 启动后，会从 main 方法的第一行开始执行。</td></tr>
                <tr><td>System.out.println("...");</td><td>把括号里的内容打印到控制台，并换行。每条语句以英文分号结束。</td></tr>
                <tr><td>{ }</td><td>代码块。花括号成对出现，里面的内容从属于外层结构。</td></tr>
              </tbody>
            </table>
          </div>
          <div class="callout callout-warn"><strong>最容易踩的坑</strong>中文引号 “ ”、中文分号 ；、中文括号（ ）都会让编译器报错。写代码时把输入法切到英文。</div>`,
      },
      {
        title: "运行：从 .java 到一行输出",
        html: `<p>如果使用 IntelliJ IDEA，右键文件或点击绿色三角就能运行。用终端则按下面四步：</p>
          <ol class="run-steps">
            <li>把文件保存为 <code>HelloJava.java</code></li>
            <li>打开终端，进入文件所在文件夹</li>
            <li>运行 <code>javac HelloJava.java</code> 编译</li>
            <li>运行 <code>java HelloJava</code> 启动程序</li>
          </ol>
          <div class="micro-code"><code>javac HelloJava.java
java HelloJava</code></div>
          <p>第一行会生成 <code>HelloJava.class</code>，第二行才是真正运行。注意运行命令后面<strong>不要</strong>加 <code>.java</code> 或 <code>.class</code>。</p>
          <div class="callout"><strong>看到报错先别慌</strong>读第一行：它会告诉你错误类型和行号，例如 <code>';' expected</code> 通常就是漏了分号。修一个，重新运行一次。</div>`,
      },
    ],
    keys: [
      "一个 public 类放在同名 .java 文件里",
      "程序从 main 方法开始执行",
      "语句用英文分号结束，花括号成对出现",
    ],
    css: {
      title: "CSS 的第一条规则",
      intro: "CSS 的语法只有三段：选择器、属性、值。它负责“长什么样”，不负责“有什么内容”。",
      code: String.raw`/* 选择器 { 属性: 值; } */
.demo-rule {
  color: #173b2b;
  background: #f8d9c5;
  font-weight: 700;
}`,
      demo: `<div class="demo-rule"><span class="demo-rule-dot"></span><span>选择器给“谁”定规则，声明决定“变成什么样”。</span></div>`,
      note: "选择器写在大括号前；每条声明用冒号连接属性与值，再用分号收尾。注释写成 /* ... */。",
    },
    challenge: `<p>把程序改成你的版本，至少完成两件事：</p>
      <ul>
        <li>把输出改成 <code>我正在学 Java</code>；</li>
        <li>再加一行，输出 <code>今天是第 1 天</code>。</li>
        <li>进阶：故意删掉一个分号运行一次，观察报错，再把它补回来。</li>
      </ul>`,
    exercises: [
      {
        tag: "Java",
        prompt: "Java 程序入口方法的名字是什么？只写方法名。",
        placeholder: "例如：start",
        answers: ["main"],
        hint: "每个 Java 程序都从它开始执行，名字是四个字母。",
        explain: "程序入口是 <code>main</code> 方法，完整签名是 <code>public static void main(String[] args)</code>。",
      },
      {
        tag: "CSS",
        prompt: "CSS 声明中，属性与值之间用哪个符号连接？",
        placeholder: "输入一个符号",
        answers: [":", "：", "冒号"],
        hint: "不是等号。想想 color 后面跟什么。",
        explain: "CSS 用冒号 <code>:</code> 连接属性和值，例如 <code>color: red;</code>。",
      },
    ],
    codeTask: {
      title: "写一个会打招呼的 Java 程序",
      description: "补全 main 方法，让程序输出一句话。先自己写，卡住再看参考实现。",
      filename: "HelloJava.java",
      starter: String.raw`public class HelloJava {
    public static void main(String[] args) {
        // TODO: 用 System.out.println 输出：你好，Java！
    }
}`,
      reference: String.raw`public class HelloJava {
    public static void main(String[] args) {
        System.out.println("你好，Java！");
    }
}`,
      expected: "你好，Java！",
      hints: [
        "先只改 main 里面的代码，你只需要补一行输出语句。",
        "格式是 <code>System.out.println(&quot;你好，Java！&quot;);</code>，注意字符串用英文双引号，语句末尾有英文分号。",
      ],
      requirements: [
        "类名保持 <code>HelloJava</code>，并保留 <code>main</code> 方法",
        "在 main 中用 <code>System.out.println</code> 输出「你好，Java！」",
        "删除所有 TODO 注释",
      ],
      mustContain: [
        { label: "声明 public class HelloJava", text: "public class HelloJava" },
        { label: "保留 main 方法", text: "public static void main(String[] args)" },
        { label: "输出指定句子", text: 'System.out.println("你好，Java！");' },
      ],
    },
    quiz: {
      question: "Java 程序启动后，从哪个方法开始执行？",
      options: ["start()", "main()", "run()"],
      answer: 1,
      explain: "main 方法是 JVM 约定的程序入口。签名通常写作 <code>public static void main(String[] args)</code>。",
    },
  },

  /* =======================================================
     第 02 关
     ======================================================= */
  {
    id: 2,
    phase: 1,
    phaseLabel: "阶段一 · 语法地基",
    minutes: 25,
    title: "给数据贴个标签",
    lead: "变量是给数据起的名字。类型决定这个“盒子”里能放什么，也决定它可以做什么运算。",
    skills: ["变量", "数据类型", "字符串拼接"],
    steps: [
      {
        title: "先看：一张个人名片",
        html: `<p>下面的程序保存了姓名、年龄、身高和一个“是否喜欢 Java”的判断，再把它们打印出来。运行前先猜猜输出长什么样。</p>`,
        filename: "Profile.java",
        language: "java",
        code: String.raw`public class Profile {
    public static void main(String[] args) {
        String name = "小明";
        int age = 18;
        double height = 1.75;
        boolean likesJava = true;

        System.out.println(name + " 今年 " + age + " 岁");
        System.out.println("身高：" + height + " 米");
        System.out.println("喜欢 Java？" + likesJava);
    }
}`,
        output: "小明 今年 18 岁\n身高：1.75 米\n喜欢 Java？true",
      },
      {
        title: "拆开：类型、名字、值",
        html: `<p>一行变量声明可以拆成三块：<code>类型 名字 = 值;</code>。等号不是“数学相等”，而是“把右边的值放进左边的变量”。</p>
          <div class="table-wrap">
            <table class="explain-table">
              <thead><tr><th>类型</th><th>适合保存</th><th>例子</th></tr></thead>
              <tbody>
                <tr><td>String</td><td>一串文本，用双引号包起来</td><td><code>"小明"</code></td></tr>
                <tr><td>int</td><td>整数，没有小数点</td><td><code>18</code></td></tr>
                <tr><td>double</td><td>带小数点的数</td><td><code>1.75</code></td></tr>
                <tr><td>boolean</td><td>只有真或假</td><td><code>true</code> / <code>false</code></td></tr>
              </tbody>
            </table>
          </div>
          <div class="callout callout-tip"><strong>命名习惯</strong>变量用“小驼峰”：<code>totalPrice</code>、<code>userName</code>。名字不能以数字开头，区分大小写，也不能有空格。类名则用大写开头的 <code>HelloJava</code>。</div>`,
      },
      {
        title: "类型不是装饰",
        html: `<p>Java 是强类型语言：变量一旦声明成某种类型，就只能装这种类型的数据。下面两行，第二行会出错。</p>
          <div class="micro-code"><code>int age = 18;        // 正确
int wrong = "18";   // 错误：String 不能直接放进 int</code></div>
          <p>另外，<code>+</code> 遇到字符串时会变成“拼接”。所以 <code>"年龄：" + 18</code> 得到的是文本 <code>年龄：18</code>，而不是数字 18。想把用户输入的文字转成数字，第 3 关会用到专门的读取方法。</p>`,
      },
    ],
    keys: [
      "变量 = 类型 + 名字 + 值",
      "String 文本；int 整数；double 小数；boolean 真假",
      "变量名用小驼峰，等号表示赋值",
    ],
    css: {
      title: "CSS 变量与单位",
      intro: "CSS 也可以定义变量，名字以 -- 开头，用 var() 取出来。改一处，引用它的地方都会跟着变。",
      code: String.raw`:root {
  --accent: #e76f3c;
  --radius: 12px;
}

.demo-swatch {
  background: var(--accent);
  border-radius: var(--radius);
  padding: 1rem;
}`,
      demo: `<div class="demo-swatches"><span class="demo-swatch">#e76f3c</span><span class="demo-swatch demo-swatch--blue">#6f9aad</span><span class="demo-swatch demo-swatch--green">#2f7656</span></div>`,
      note: "px 是固定像素，rem 相对根字号，% 相对父元素。初学先用 px 和 rem，别一次记太多单位。",
    },
    challenge: `<p>改出一个属于你的 Profile：</p>
      <ul>
        <li>改成自己的名字、年龄和身高；</li>
        <li>再声明一个 <code>char level = 'A';</code>（字符用单引号）并打印它；</li>
        <li>故意把 <code>int age = 18.5;</code> 运行一次，看懂“类型不匹配”的报错。</li>
      </ul>`,
    exercises: [
      {
        tag: "Java",
        prompt: "保存 1.75 这样的小数，应该用哪个基本数据类型？",
        placeholder: "输入类型名",
        answers: ["double"],
        hint: "比 float 更常用，第 3 关也会继续遇到它。",
        explain: "<code>double</code> 用来保存带小数点的数；整数用 <code>int</code>。",
      },
      {
        tag: "CSS",
        prompt: "CSS 自定义变量的名字通常以哪两个字符开头？",
        placeholder: "输入两个字符",
        answers: ["--"],
        hint: "例如 --accent 就是本页使用的一个变量。",
        explain: "CSS 变量以两个短横线开头，例如 <code>--accent</code>，用 <code>var(--accent)</code> 读取。",
      },
    ],
    codeTask: {
      title: "用变量拼出一张名片",
      description: "声明 name 和 age 两个变量，再用字符串拼接把它们输出成一句话。",
      filename: "Profile.java",
      starter: String.raw`public class Profile {
    public static void main(String[] args) {
        // TODO: 声明 String name = "小明";
        // TODO: 声明 int age = 18;
        // TODO: 用 + 拼接变量，输出：小明 今年 18 岁
    }
}`,
      reference: String.raw`public class Profile {
    public static void main(String[] args) {
        String name = "小明";
        int age = 18;
        System.out.println(name + " 今年 " + age + " 岁");
    }
}`,
      expected: "小明 今年 18 岁",
      hints: [
        "先声明两个变量，再用 + 把它们和中文文字拼起来。",
        "输出表达式类似 <code>name + &quot; 今年 &quot; + age + &quot; 岁&quot;</code>，注意空格要放在引号里面。",
      ],
      requirements: [
        "变量名必须是 <code>name</code> 和 <code>age</code>",
        "使用 <code>String</code> 和 <code>int</code> 类型，值分别为「小明」和 18",
        "用 <code>+</code> 拼接变量后输出，不要直接写死整句文字",
      ],
      mustContain: [
        { label: "声明 String name", text: 'String name = "小明";' },
        { label: "声明 int age", text: "int age = 18;" },
        { label: "用变量拼接并输出", text: 'System.out.println(name + " 今年 " + age + " 岁");' },
      ],
    },
    quiz: {
      question: "想保存商品价格 19.9 元，最合适的类型是？",
      options: ["int", "double", "boolean"],
      answer: 1,
      explain: "19.9 带小数，应该用 double。if 条件中的真假判断则用 boolean。",
    },
  },

  /* =======================================================
     第 03 关
     ======================================================= */
  {
    id: 3,
    phase: 1,
    phaseLabel: "阶段一 · 语法地基",
    minutes: 30,
    title: "让程序听你说话",
    lead: "程序不只会输出，也可以接收输入。用 Scanner 读数字，用运算符算账，这一步开始有“交互”的感觉。",
    skills: ["Scanner 输入", "算术运算", "整数除法"],
    steps: [
      {
        title: "先看：算一笔小账",
        html: `<p>程序先问单价，再问数量，最后算出总价。运行它，然后在控制台里输入数字并回车。</p>`,
        filename: "Bill.java",
        language: "java",
        code: String.raw`import java.util.Scanner;

public class Bill {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("单价：");
        double price = input.nextDouble();

        System.out.print("数量：");
        int count = input.nextInt();

        double total = price * count;
        System.out.println("合计：" + total + " 元");

        input.close();
    }
}`,
        output: "单价：12.5\n数量：3\n合计：37.5 元\n（12.5 和 3 是你输入的）",
      },
      {
        title: "拆开：程序如何“等”你输入",
        html: `<p><code>new Scanner(System.in)</code> 创建了一个读取键盘输入的扫描器。执行到 <code>nextDouble()</code> 时，程序会停下来，等你输入并回车。</p>
          <div class="table-wrap">
            <table class="explain-table">
              <thead><tr><th>写法</th><th>作用</th></tr></thead>
              <tbody>
                <tr><td>nextInt()</td><td>读取一个整数</td></tr>
                <tr><td>nextDouble()</td><td>读取一个带小数的数</td></tr>
                <tr><td>nextLine()</td><td>读取一整行文字</td></tr>
                <tr><td>System.out.print()</td><td>输出后不换行，适合提示语</td></tr>
                <tr><td>input.close()</td><td>用完后关闭输入流，养成好习惯</td></tr>
              </tbody>
            </table>
          </div>
          <div class="callout"><strong>先提示，再读取</strong>用 <code>print</code> 输出“单价：”，再用 <code>nextDouble()</code> 等待输入，体验才自然。提示语和读取顺序反了，用户会不知道程序在等什么。</div>`,
      },
      {
        title: "算一算：运算符",
        html: `<p>常用算术运算符有 <code>+</code>、<code>-</code>、<code>*</code>、<code>/</code>、<code>%</code>。其中 <code>%</code> 是取余数。</p>
          <div class="micro-code"><code>int a = 7;
int b = 2;

System.out.println(a / b);    // 3，整数除法会丢掉小数
System.out.println(a % b);    // 1，7 除以 2 的余数
System.out.println(a / 2.0);  // 3.5，有一边是小数，结果就是小数</code></div>
          <div class="callout callout-warn"><strong>整数除法陷阱</strong>两个 int 相除，结果仍然是 int。<code>7 / 2</code> 不是 3.5，而是 3。需要小数时，把其中一个变成 <code>double</code>，例如 <code>7 / 2.0</code>。</div>`,
      },
    ],
    keys: [
      "Scanner 读取输入，nextInt / nextDouble 按类型读",
      "print 不换行，println 换行",
      "两个整数相除，结果仍是整数",
    ],
    css: {
      title: "盒模型：元素也有“厚度”",
      intro: "每个 HTML 元素都像一个盒子：内容、内边距、边框、外边距，从里到外一层层包着。",
      code: String.raw`.demo-box-padding {
  padding: 12px;          /* 内边距 */
  border: 4px solid #edba4e;
  border-radius: 6px;
  margin: 10px;           /* 外边距 */
}`,
      demo: `<div class="demo-box"><span class="demo-box-label">margin 外边距</span><div class="demo-box-border"><span class="demo-box-label">border 边框</span><div class="demo-box-padding"><span class="demo-box-label">padding 内边距</span><div class="demo-box-content">content</div></div></div></div>`,
      note: "padding 撑开盒子内部，margin 推开其他盒子。加 box-sizing: border-box，宽高就会把 padding 和 border 一起算进去。",
    },
    challenge: `<p>把算账程序升级：</p>
      <ul>
        <li>算出总价后，再输出打八折的价格（<code>total * 0.8</code>）；</li>
        <li>输出“满 100 减 10”后的实付金额；</li>
        <li>试试把数量输入成 <code>abc</code>，看看 Scanner 会抛出什么错误。</li>
      </ul>`,
    exercises: [
      {
        tag: "Java",
        prompt: "用 Scanner 读取一个整数，应该调用哪个方法？",
        placeholder: "例如：next...",
        answers: ["nextInt()", "nextInt"],
        hint: "读取小数是 nextDouble，读取整数是 next...",
        explain: "读取整数用 <code>nextInt()</code>，读取小数用 <code>nextDouble()</code>。",
        code: true,
      },
      {
        tag: "CSS",
        prompt: "padding 和 margin，哪个在边框内侧？",
        placeholder: "输入属性名",
        answers: ["padding"],
        hint: "padding 是内边距，margin 是外边距。",
        explain: "<code>padding</code> 在边框内侧，撑开内容与边框的距离；<code>margin</code> 在边框外侧。",
      },
    ],
    codeTask: {
      title: "写一个会算账的小程序",
      description: "用 Scanner 读取单价和数量，计算总价并输出。写完后可以下载到 IDEA 里实际输入运行。",
      filename: "Bill.java",
      starter: String.raw`import java.util.Scanner;

public class Bill {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        // TODO: 用 nextDouble() 读取单价，保存到 double price
        // TODO: 用 nextInt() 读取数量，保存到 int count
        // TODO: 计算 total，并输出：合计：xx 元
        // TODO: 最后关闭 input
    }
}`,
      reference: String.raw`import java.util.Scanner;

public class Bill {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("单价：");
        double price = input.nextDouble();

        System.out.print("数量：");
        int count = input.nextInt();

        double total = price * count;
        System.out.println("合计：" + total + " 元");

        input.close();
    }
}`,
      expected: "单价输入 12.5，数量输入 3\n合计：37.5 元",
      hints: [
        "读取顺序是：先用 nextDouble() 读单价，再用 nextInt() 读数量。",
        "把总价存成 <code>double total = price * count;</code>，输出后再调用 <code>input.close();</code>。",
      ],
      requirements: [
        "用 <code>nextDouble()</code> 读取 price，用 <code>nextInt()</code> 读取 count",
        "用 <code>price * count</code> 计算 total",
        "输出以「合计：」开头，以「 元」结尾，并关闭 Scanner",
      ],
      mustContain: [
        { label: "导入 Scanner", text: "import java.util.Scanner;" },
        { label: "创建 Scanner 对象", text: "new Scanner(System.in)" },
        { label: "读取小数单价", text: "double price = input.nextDouble();" },
        { label: "读取整数数量", text: "int count = input.nextInt();" },
        { label: "计算总价", text: "double total = price * count;" },
        { label: "输出合计", text: 'System.out.println("合计：" + total + " 元");' },
        { label: "关闭 input", text: "input.close();" },
      ],
    },
    quiz: {
      question: "在 Java 里，7 / 2 的结果是什么？",
      options: ["3", "3.5", "1"],
      answer: 0,
      explain: "两个操作数都是 int，所以执行整数除法，小数部分被丢掉。写成 <code>7 / 2.0</code> 才会得到 3.5。",
    },
  },

  /* =======================================================
     第 04 关
     ======================================================= */
  {
    id: 4,
    phase: 1,
    phaseLabel: "阶段一 · 语法地基",
    minutes: 30,
    title: "让程序做选择",
    lead: "if 让程序根据条件走不同的路。条件必须是一个 boolean，顺序写错，结果就可能完全相反。",
    skills: ["if / else", "比较运算符", "逻辑运算符"],
    steps: [
      {
        title: "先看：分数等级",
        html: `<p>输入一个分数，程序输出 A、B、C 中的一种。注意它是从高分往低分判断的。</p>`,
        filename: "ScoreLevel.java",
        language: "java",
        code: String.raw`import java.util.Scanner;

public class ScoreLevel {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("输入分数（0-100）：");
        int score = input.nextInt();

        if (score >= 90) {
            System.out.println("A：很稳！");
        } else if (score >= 60) {
            System.out.println("B：及格，继续加油");
        } else {
            System.out.println("C：再复习一遍");
        }

        input.close();
    }
}`,
        output: "输入分数（0-100）：85\nB：及格，继续加油",
      },
      {
        title: "拆开：条件与分支",
        html: `<p><code>if</code> 后面的括号里放条件。条件为 <code>true</code> 就执行下面的代码块；否则继续看 <code>else if</code>；都不满足时执行 <code>else</code>。</p>
          <div class="table-wrap">
            <table class="explain-table">
              <thead><tr><th>运算符</th><th>含义</th><th>例子</th></tr></thead>
              <tbody>
                <tr><td>&gt;=</td><td>大于或等于</td><td><code>score &gt;= 60</code></td></tr>
                <tr><td>==</td><td>是否相等</td><td><code>day == 1</code></td></tr>
                <tr><td>!=</td><td>是否不相等</td><td><code>name != null</code></td></tr>
                <tr><td>&amp;&amp;</td><td>并且（两边都真）</td><td><code>score &gt;= 60 &amp;&amp; score &lt; 90</code></td></tr>
                <tr><td>||</td><td>或者（一边真就行）</td><td><code>score &lt; 0 || score &gt; 100</code></td></tr>
                <tr><td>!</td><td>取反</td><td><code>!isDone</code></td></tr>
              </tbody>
            </table>
          </div>
          <div class="callout callout-warn"><strong>= 和 == 不是一回事</strong><code>=</code> 是赋值，把右边放进左边；<code>==</code> 才是比较。判断两个字符串内容是否相同，要用 <code>a.equals(b)</code>，不要用 <code>==</code>。</div>`,
      },
      {
        title: "顺序决定了谁能进门",
        html: `<p>如果先判断 <code>score &gt;= 60</code>，那么 95 分也会被它拦住，永远进不了 A 分支。所以条件要从“更严格”写到“更宽松”。</p>
          <div class="micro-code"><code>if (score &gt;= 90) {          // 90 及以上
    // A
} else if (score &gt;= 60) {    // 到这里一定是 60-89
    // B
} else {                       // 剩下的
    // C
}</code></div>
          <div class="callout callout-tip"><strong>switch 是什么？</strong>当你要根据“几个固定值”分支（如 1、2、3、4），也可以用 switch。现在先把 if 练熟，它已经能表达绝大多数条件。</div>`,
      },
    ],
    keys: [
      "if 条件必须是 boolean",
      "else if 从上到下判断，命中一个就结束",
      "比较用 ==，赋值用 =；字符串比较用 equals",
    ],
    css: {
      title: "文字也有层次",
      intro: "字号、行高、颜色、粗细，是最常改的四类文字样式。把 line-height 设成 1.6—1.9，长文会立刻好读很多。",
      code: String.raw`.demo-type-title {
  font-size: 20px;
  line-height: 1.3;
  color: #173b2b;
  font-weight: 700;
}

.demo-type-body {
  color: #65756a;
  line-height: 1.8;
}`,
      demo: `<div class="demo-type"><p class="demo-type-kicker">LINE-HEIGHT · 1.8</p><p class="demo-type-title">好排版，让代码也愿意被读完。</p><p class="demo-type-body">font-size 控制字号，line-height 控制行与行之间的距离。行高用不带单位的数字，会跟着字号一起缩放。</p></div>`,
      note: "font-family 决定字体，font-weight 控制粗细，text-align 控制对齐。正文不要小于 14px。",
    },
    challenge: `<p>给分数程序加上“合法性检查”：</p>
      <ul>
        <li>如果分数小于 0 或大于 100，输出 <code>分数必须在 0-100 之间</code> 并结束判断；</li>
        <li>提示：新条件要放在最前面，用 <code>||</code> 组合两个比较；</li>
        <li>再试一个 input 为 100 和一个为 59 的情况。</li>
      </ul>`,
    exercises: [
      {
        tag: "Java",
        prompt: "写出判断 score 至少为 60 的条件表达式，不写 if 和括号。",
        placeholder: "例如：score ... 60",
        answers: ["score>=60"],
        hint: "“至少”包含等于，使用大于等于号。",
        explain: "至少 60 分要包含 60，因此条件写成 <code>score &gt;= 60</code>。",
        code: true,
      },
      {
        tag: "CSS",
        prompt: "设置文字颜色的 CSS 属性名是什么？",
        placeholder: "输入属性名",
        answers: ["color"],
        hint: "不是 background，也不是 font-color。",
        explain: "文字颜色用 <code>color</code>，例如 <code>color: #173b2b;</code>。",
      },
    ],
    codeTask: {
      title: "给分数分个等级",
      description: "用 if / else if / else，把分数分成 A、B、C 三档。注意判断顺序。",
      filename: "ScoreLevel.java",
      starter: String.raw`import java.util.Scanner;

public class ScoreLevel {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("输入分数：");
        int score = input.nextInt();

        // TODO: 90 及以上输出 A
        // TODO: 60 及以上输出 B
        // TODO: 其余输出 C

        input.close();
    }
}`,
      reference: String.raw`import java.util.Scanner;

public class ScoreLevel {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("输入分数：");
        int score = input.nextInt();

        if (score >= 90) {
            System.out.println("A");
        } else if (score >= 60) {
            System.out.println("B");
        } else {
            System.out.println("C");
        }

        input.close();
    }
}`,
      expected: "输入 85\nB",
      hints: [
        "从高分往低分判断：先判断 90 分及以上，再判断 60 分及以上。",
        "三个分支分别只输出 A、B、C，例如 <code>System.out.println(&quot;A&quot;);</code>。",
      ],
      requirements: [
        "先用 <code>if (score &gt;= 90)</code> 判断 A",
        "再用 <code>else if (score &gt;= 60)</code> 判断 B，最后用 <code>else</code> 处理 C",
        "三档分别输出大写字母 A、B、C",
      ],
      mustContain: [
        { label: "判断 90 分及以上", text: "if (score >= 90)" },
        { label: "继续判断 60 分及以上", text: "else if (score >= 60)" },
        { label: "保留最后的 else", text: "else {" },
        { label: "输出 A", text: 'System.out.println("A");' },
        { label: "输出 B", text: 'System.out.println("B");' },
        { label: "输出 C", text: 'System.out.println("C");' },
      ],
    },
    quiz: {
      question: "判断“分数至少 60 分”，正确的写法是？",
      options: ["score >= 60", "score > 60", "score = 60"],
      answer: 0,
      explain: "“至少 60”包含 60，所以是 <code>&gt;=</code>。只用 <code>&gt;</code> 会漏掉刚好 60 分。<code>=</code> 是赋值，不会产生条件。",
    },
  },

  /* =======================================================
     第 05 关
     ======================================================= */
  {
    id: 5,
    phase: 1,
    phaseLabel: "阶段一 · 语法地基",
    minutes: 30,
    title: "把重复交给循环",
    lead: "循环让一段代码重复执行。写循环的关键只有三件事：从哪开始、什么时候停、每次怎么变。",
    skills: ["for 循环", "while 循环", "break / continue"],
    steps: [
      {
        title: "先看：五秒倒计时",
        html: `<p>这段程序会从 5 数到 1，然后宣布起飞。观察 <code>i</code> 是怎样一步步变小的。</p>`,
        filename: "Countdown.java",
        language: "java",
        code: String.raw`public class Countdown {
    public static void main(String[] args) {
        for (int i = 5; i >= 1; i--) {
            System.out.println(i);
        }

        System.out.println("起飞！");
    }
}`,
        output: "5\n4\n3\n2\n1\n起飞！",
      },
      {
        title: "拆开：for 的三个格子",
        html: `<p>圆括号里有三个部分，用两个分号隔开：</p>
          <div class="micro-code"><code>for (初始化; 循环条件; 每轮之后做什么) {
    循环体;
}</code></div>
          <div class="table-wrap">
            <table class="explain-table">
              <thead><tr><th>位置</th><th>例子</th><th>执行时机</th></tr></thead>
              <tbody>
                <tr><td>初始化</td><td>int i = 5</td><td>只在开始前执行一次</td></tr>
                <tr><td>条件</td><td>i &gt;= 1</td><td>每轮开始前检查；false 就停止</td></tr>
                <tr><td>更新</td><td>i--</td><td>每轮循环体结束后执行</td></tr>
              </tbody>
            </table>
          </div>
          <div class="callout"><strong>执行顺序</strong>初始化 → 判断条件 → 执行循环体 → 更新 → 再判断条件。第一轮开始前，条件已经检查过一次了。</div>`,
      },
      {
        title: "while 与两个“紧急按钮”",
        html: `<p>如果不知道要循环多少次，只有“继续的条件”，可以用 while。它和 for 能表达同样的逻辑，只是写法不同。</p>
          <div class="micro-code"><code>int i = 1;
while (i &lt;= 3) {
    System.out.println(i);
    i++;              // 千万别忘，否则会死循环
}</code></div>
          <p><code>break</code> 立刻结束整个循环；<code>continue</code> 跳过本轮剩下的代码，直接进入下一轮。它们不是必需品，但读别人代码时会经常遇到。</p>
          <div class="callout callout-warn"><strong>死循环</strong>如果循环条件永远为 true，或者忘了更新循环变量，程序会一直运行。先检查“每次循环，什么发生了变化”。</div>`,
      },
    ],
    keys: [
      "for(初始化; 条件; 更新) 表达次数明确的循环",
      "条件为 false 时循环停止，循环变量要变化",
      "break 结束整个循环，continue 跳过本轮",
    ],
    css: {
      title: "悬停，是一次状态变化",
      intro: ":hover 是伪类：当鼠标移到元素上时，才应用里面的样式。配合 transition，变化会变得平滑。",
      code: String.raw`.demo-hover {
  background: #e76f3c;
  transition: transform 180ms ease;
}

.demo-hover:hover {
  transform: translateY(3px);
}`,
      demo: `<button class="demo-hover" type="button">把鼠标放上来</button>`,
      note: "transition 写在“平时的状态”里，不是写在 :hover 里。180ms 是持续时间，ease 是速度曲线。",
    },
    challenge: `<p>用循环做两道小题：</p>
      <ul>
        <li>计算 1 + 2 + 3 + … + 100，输出 5050；</li>
        <li>只把其中的偶数加起来，和是多少？</li>
        <li>提示：累加器写成 <code>int sum = 0;</code>，循环里用 <code>sum += i;</code>。判断偶数用 <code>i % 2 == 0</code>。</li>
      </ul>`,
    exercises: [
      {
        tag: "Java",
        prompt: "让整数变量 i 自增 1，写出最常见的简写。",
        placeholder: "例如：i...",
        answers: ["i++", "i+=1", "i = i + 1"],
        hint: "两个加号，写在变量名后面。",
        explain: "<code>i++</code> 等价于 <code>i = i + 1</code>；<code>i += 1</code> 也可以。",
        code: true,
      },
      {
        tag: "CSS",
        prompt: "鼠标悬停时应用的伪类选择器是什么？以冒号开头。",
        placeholder: ":...",
        answers: [":hover"],
        hint: "hover 就是“悬停”的意思。",
        explain: "<code>:hover</code> 在鼠标指针移到元素上时生效，例如 <code>.button:hover</code>。",
        code: true,
      },
    ],
    codeTask: {
      title: "用循环算出 1 到 100 的和",
      description: "用 for 循环和累加器 sum，把 1 到 100 加起来并输出结果。",
      filename: "LoopSum.java",
      starter: String.raw`public class LoopSum {
    public static void main(String[] args) {
        int sum = 0;

        // TODO: 用 for 循环让 i 从 1 走到 100
        // TODO: 每一轮把 i 加到 sum
        // TODO: 输出：1 到 100 的和是：5050
    }
}`,
      reference: String.raw`public class LoopSum {
    public static void main(String[] args) {
        int sum = 0;

        for (int i = 1; i <= 100; i++) {
            sum += i;
        }

        System.out.println("1 到 100 的和是：" + sum);
    }
}`,
      expected: "1 到 100 的和是：5050",
      hints: [
        "for 从 <code>int i = 1</code> 开始，条件是 <code>i &lt;= 100</code>，每轮执行 <code>i++</code>。",
        "循环体里只负责累加，输出语句要放在循环结束之后。",
      ],
      requirements: [
        "用 <code>for (int i = 1; i &lt;= 100; i++)</code> 遍历 1 到 100",
        "在循环里用 <code>sum += i;</code> 累加",
        "输出「1 到 100 的和是：」加上 sum",
      ],
      mustContain: [
        { label: "初始化 sum", text: "int sum = 0;" },
        { label: "写出 1 到 100 的 for 循环", text: "for (int i = 1; i <= 100; i++)" },
        { label: "累加 i", text: "sum += i;" },
        { label: "输出最终结果", text: 'System.out.println("1 到 100 的和是：" + sum);' },
      ],
    },
    quiz: {
      question: "for (int i = 1; i &lt;= 3; i++) 的循环体会执行几次？",
      options: ["2 次", "3 次", "4 次"],
      answer: 1,
      explain: "i 依次为 1、2、3，每次都满足 &lt;= 3，所以执行 3 次；i 变成 4 时条件为 false，循环结束。",
    },
  },

  /* =======================================================
     第 06 关
     ======================================================= */
  {
    id: 6,
    phase: 2,
    phaseLabel: "阶段二 · 组织代码",
    minutes: 30,
    title: "一次装下一组数据",
    lead: "数组适合保存一组同类型的数据。学会从 0 开始编号，是理解 Java 数据结构的第一步。",
    skills: ["数组声明", "索引", "增强 for"],
    steps: [
      {
        title: "先看：五个人的分数",
        html: `<p>把五个分数装进一个 int 数组，循环求和，再算平均分。注意平均分的除法为什么需要一个小转换。</p>`,
        filename: "Scores.java",
        language: "java",
        code: String.raw`public class Scores {
    public static void main(String[] args) {
        int[] scores = {88, 92, 76, 100, 65};
        int sum = 0;

        for (int score : scores) {
            sum += score;
        }

        double average = (double) sum / scores.length;
        System.out.println("总分：" + sum);
        System.out.println("平均分：" + average);
        System.out.println("第一项：" + scores[0]);
    }
}`,
        output: "总分：421\n平均分：84.2\n第一项：88",
      },
      {
        title: "拆开：编号从 0 开始",
        html: `<p>数组像一排连续的储物格：每个格子类型相同，编号从 0 开始，长度在创建后固定。五个元素的索引是 0、1、2、3、4。</p>
          <div class="table-wrap">
            <table class="explain-table">
              <thead><tr><th>写法</th><th>含义</th></tr></thead>
              <tbody>
                <tr><td>int[] scores = {88, 92};</td><td>声明并直接初始化一个整数数组</td></tr>
                <tr><td>scores[0]</td><td>第一个元素，值是 88</td></tr>
                <tr><td>scores.length</td><td>元素个数，这里是 5（注意没有括号）</td></tr>
                <tr><td>scores[5]</td><td>越界！最大索引是 length - 1</td></tr>
              </tbody>
            </table>
          </div>
          <div class="callout callout-warn"><strong>为什么要 (double)？</strong><code>sum</code> 和 <code>length</code> 都是 int，直接相除会得到整数。加上 <code>(double)</code> 先把 sum 转成小数，再做除法，结果才保留小数。</div>`,
      },
      {
        title: "遍历：for 与增强 for",
        html: `<p><code>for (int score : scores)</code> 叫增强 for（for-each），意思是“依次取出数组里的每个值，赋给 score”。它读起来短，但拿不到索引。</p>
          <div class="micro-code"><code>// 增强 for：只读每个值
for (int score : scores) {
    System.out.println(score);
}

// 普通 for：既需要值，也需要索引
for (int i = 0; i &lt; scores.length; i++) {
    System.out.println((i + 1) + ". " + scores[i]);
}</code></div>
          <p>如果要把元素改掉，用普通 for 加索引。增强 for 里的循环变量只是副本，改它不会改数组。</p>`,
      },
    ],
    keys: [
      "数组保存同类型、固定数量的一组数据",
      "索引从 0 开始，最后一个是 length - 1",
      "增强 for 适合遍历，普通 for 适合同时使用索引",
    ],
    css: {
      title: "Flexbox：排成一行",
      intro: "给父元素 display: flex，子元素就会沿主轴排开。gap 控制间距，align-items 控制交叉轴对齐。",
      code: String.raw`.demo-flex {
  display: flex;
  gap: 8px;
  align-items: center;
}

.demo-flex span {
  flex: 1;
}`,
      demo: `<div class="demo-flex"><span>Java</span><span>CSS</span><span>HTML</span></div>`,
      note: "flex: 1 让每个子元素平分剩余空间。justify-content 控制主轴，align-items 控制交叉轴。",
    },
    challenge: `<p>数组练习：</p>
      <ul>
        <li>找出 scores 里的最高分，输出它；</li>
        <li>提示：先写 <code>int max = scores[0];</code>，再遍历比较；</li>
        <li>进阶：同时输出最高分的索引（从 0 开始）。</li>
      </ul>`,
    exercises: [
      {
        tag: "Java",
        prompt: "数组 scores 的长度是 5，最后一个元素的索引是多少？",
        placeholder: "输入一个数字",
        answers: ["4"],
        hint: "Java 数组的索引从 0 开始。",
        explain: "长度 5 的数组索引是 0、1、2、3、4，所以最后一个是 <code>4</code>。",
      },
      {
        tag: "CSS",
        prompt: "启用 Flex 布局时，display 应该写成什么值？",
        placeholder: "display: ___;",
        answers: ["flex"],
        hint: "这个值就是 Flex 布局的名字。",
        explain: "父元素设置 <code>display: flex;</code> 后，子元素会沿主轴排列。",
        code: true,
      },
    ],
    codeTask: {
      title: "算出一组分数的平均分",
      description: "遍历数组求和，再用 (double) 转换做除法，输出平均分。",
      filename: "Scores.java",
      starter: String.raw`public class Scores {
    public static void main(String[] args) {
        int[] scores = {88, 92, 76, 100, 65};
        int sum = 0;

        // TODO: 用增强 for 遍历 scores，把每个分数加到 sum
        // TODO: 计算 double average，并输出：平均分：84.2
    }
}`,
      reference: String.raw`public class Scores {
    public static void main(String[] args) {
        int[] scores = {88, 92, 76, 100, 65};
        int sum = 0;

        for (int score : scores) {
            sum += score;
        }

        double average = (double) sum / scores.length;
        System.out.println("平均分：" + average);
    }
}`,
      expected: "平均分：84.2",
      hints: [
        "先用增强 for 把数组里的每个分数加到 sum。",
        "平均分公式是 <code>(double) sum / scores.length</code>；漏掉转换会执行整数除法。",
      ],
      requirements: [
        "保留数组 <code>scores</code>，用增强 for 遍历",
        "用 <code>sum += score;</code> 累加，再用 <code>(double) sum / scores.length</code> 求平均",
        "输出「平均分：」加上变量 average",
      ],
      mustContain: [
        { label: "声明并初始化数组", text: "int[] scores = {88, 92, 76, 100, 65};" },
        { label: "使用增强 for", text: "for (int score : scores)" },
        { label: "累加分数", text: "sum += score;" },
        { label: "用 double 计算平均分", text: "double average = (double) sum / scores.length;" },
        { label: "输出平均分", text: 'System.out.println("平均分：" + average);' },
      ],
    },
    quiz: {
      question: "数组 int[] nums = {10, 20, 30}; 中，nums[0] 的值是？",
      options: ["0", "10", "30"],
      answer: 1,
      explain: "Java 数组的索引从 0 开始，所以 nums[0] 是第一个元素 10；nums[2] 才是 30。",
    },
  },

  /* =======================================================
     第 07 关
     ======================================================= */
  {
    id: 7,
    phase: 2,
    phaseLabel: "阶段二 · 组织代码",
    minutes: 30,
    title: "把逻辑装进方法",
    lead: "方法是带名字的代码块。把“加法”和“打招呼”封装起来，需要时调用一次，重复逻辑就不必复制粘贴。",
    skills: ["方法声明", "参数与返回值", "作用域"],
    steps: [
      {
        title: "先看：两个小方法",
        html: `<p>main 方法负责流程，add 和 greet 负责具体的活。调用方法时，把实参传给形参，方法执行完把结果 return 回来。</p>`,
        filename: "MethodDemo.java",
        language: "java",
        code: String.raw`public class MethodDemo {
    public static void main(String[] args) {
        int total = add(3, 5);
        String message = greet("小明");

        System.out.println("3 + 5 = " + total);
        System.out.println(message);
    }

    static int add(int a, int b) {
        return a + b;
    }

    static String greet(String name) {
        return "你好，" + name + "！";
    }
}`,
        output: "3 + 5 = 8\n你好，小明！",
      },
      {
        title: "拆开：一个方法的五个零件",
        html: `<p>以 <code>static int add(int a, int b)</code> 为例：</p>
          <div class="table-wrap">
            <table class="explain-table">
              <thead><tr><th>零件</th><th>这里是什么</th><th>作用</th></tr></thead>
              <tbody>
                <tr><td>修饰符</td><td>static</td><td>先记住它：让 main 能直接调用。第 8 关会看到对象方法。</td></tr>
                <tr><td>返回类型</td><td>int</td><td>方法执行完交回一个整数</td></tr>
                <tr><td>方法名</td><td>add</td><td>调用时使用，习惯用小驼峰</td></tr>
                <tr><td>参数</td><td>(int a, int b)</td><td>方法的输入；调用时传入的是实参</td></tr>
                <tr><td>方法体</td><td>{ return a + b; }</td><td>具体逻辑；return 会结束方法并交回结果</td></tr>
              </tbody>
            </table>
          </div>
          <div class="callout"><strong>参数 vs 实参</strong>定义处的 <code>a</code>、<code>b</code> 是形参；调用处 <code>add(3, 5)</code> 的 3、5 是实参。方法内部的变量只在这个方法里活着，这叫作用域。</div>`,
      },
      {
        title: "void：只做事，不交结果",
        html: `<p><code>void</code> 表示方法不返回任何值。它照样可以接收参数，只是调用后拿不到结果，适合“打印”“保存”这类动作。</p>
          <div class="micro-code"><code>static void sayHi(String name) {
    System.out.println("你好，" + name);
}

// 调用时不能写 int x = sayHi("小明");
sayHi("小明");</code></div>
          <div class="callout callout-warn"><strong>返回类型要对应</strong>声明 int 就必须用 return 交回 int；如果方法某条分支需要返回值，所有可能执行的路径都要有 return。编译器会检查这一点。</div>`,
      },
    ],
    keys: [
      "方法 = 名字 + 参数 + 返回值 + 逻辑",
      "return 结束方法并把结果交回调用处",
      "void 表示不返回值；方法内变量只属于方法",
    ],
    css: {
      title: "Grid：排成网格",
      intro: "Grid 是二维布局：同时控制行和列。repeat(2, 1fr) 表示两列，每列各占一份剩余空间。",
      code: String.raw`.demo-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
}`,
      demo: `<div class="demo-grid"><span>1</span><span>2</span><span>3</span><span>4</span></div>`,
      note: "1fr 是一份可用空间。两列用 repeat(2, 1fr)。Flex 更擅长一行排列，Grid 更擅长行列同时控制。",
    },
    challenge: `<p>写一个自己的方法：</p>
      <ul>
        <li>声明 <code>static boolean isPass(int score)</code>，60 分及以上返回 true；</li>
        <li>在 main 里调用它并打印结果；</li>
        <li>提示：方法体可以只有一行 <code>return score &gt;= 60;</code>。</li>
      </ul>`,
    exercises: [
      {
        tag: "Java",
        prompt: "补全方法，使 add(3, 5) 返回 8：<code>return ___;</code>",
        placeholder: "输入 return 后面的表达式",
        answers: ["a+b", "b+a"],
        hint: "把两个参数相加。",
        explain: "返回两个参数的和：<code>return a + b;</code>。",
        code: true,
      },
      {
        tag: "CSS",
        prompt: "Grid 里表示“一份剩余空间”的单位是什么？",
        placeholder: "输入单位",
        answers: ["fr"],
        hint: "fraction 的缩写。",
        explain: "<code>1fr</code> 表示一份可用空间，<code>repeat(2, 1fr)</code> 就是两列平分。",
      },
    ],
    codeTask: {
      title: "把加法封装成方法",
      description: "写一个 add 方法，在 main 中调用它，并把返回值打印出来。",
      filename: "MethodDemo.java",
      starter: String.raw`public class MethodDemo {
    public static void main(String[] args) {
        // TODO: 调用 add(3, 5)，保存结果并输出：3 + 5 = 8
    }

    // TODO: 声明 static int add(int a, int b)，返回 a + b
}`,
      reference: String.raw`public class MethodDemo {
    public static void main(String[] args) {
        int total = add(3, 5);
        System.out.println("3 + 5 = " + total);
    }

    static int add(int a, int b) {
        return a + b;
    }
}`,
      expected: "3 + 5 = 8",
      hints: [
        "先写方法，再从 main 调用；方法定义放在 main 外面、类里面。",
        "用 <code>int total = add(3, 5);</code> 接住返回值，再输出 <code>&quot;3 + 5 = &quot; + total</code>。",
      ],
      requirements: [
        "方法签名必须是 <code>static int add(int a, int b)</code>",
        "方法体用 <code>return a + b;</code> 交回结果",
        "在 main 中调用 <code>add(3, 5)</code> 并保存到 <code>total</code>，输出「3 + 5 = 8」",
      ],
      mustContain: [
        { label: "声明 add 方法", text: "static int add(int a, int b)" },
        { label: "返回 a + b", text: "return a + b;" },
        { label: "在 main 中调用方法", text: "add(3, 5)" },
        { label: "输出结果", text: 'System.out.println("3 + 5 = " + total);' },
      ],
    },
    quiz: {
      question: "方法声明中的 void 表示什么？",
      options: ["没有参数", "不返回任何值", "只能被调用一次"],
      answer: 1,
      explain: "void 表示方法不需要 return 一个结果。没有参数看空括号；能不能多次调用和 void 无关。",
    },
  },

  /* =======================================================
     第 08 关
     ======================================================= */
  {
    id: 8,
    phase: 3,
    phaseLabel: "阶段三 · 面向对象",
    minutes: 35,
    title: "从类，到对象",
    lead: "类是一张设计图，对象是按图造出来的具体实例。字段保存状态，方法定义行为，构造函数负责出生时的初始化。",
    skills: ["类与对象", "字段", "构造方法", "this"],
    steps: [
      {
        title: "先看：两个学生对象",
        html: `<p>Student 类描述“学生应该有姓名和分数”。main 里用 <code>new</code> 创建了两个具体学生，并分别调用它们的方法。</p>`,
        filename: "School.java",
        language: "java",
        code: String.raw`class Student {
    String name;
    int score;

    Student(String name, int score) {
        this.name = name;
        this.score = score;
    }

    void introduce() {
        System.out.println("我是" + name + "，得分 " + score);
    }
}

public class School {
    public static void main(String[] args) {
        Student xiaoming = new Student("小明", 92);
        Student xiaohong = new Student("小红", 88);

        xiaoming.introduce();
        xiaohong.introduce();
    }
}`,
        output: "我是小明，得分 92\n我是小红，得分 88",
      },
      {
        title: "拆开：图纸、房子和住户",
        html: `<p>把类想成房屋设计图，对象是实际建出来的房子。每栋房子有自己独立的门牌号（字段值），但户型（字段和方法）来自同一张图。</p>
          <div class="table-wrap">
            <table class="explain-table">
              <thead><tr><th>概念</th><th>在代码里</th><th>理解方式</th></tr></thead>
              <tbody>
                <tr><td>类</td><td>class Student</td><td>设计图，描述一类事物</td></tr>
                <tr><td>字段</td><td>name、score</td><td>对象的状态 / 属性</td></tr>
                <tr><td>构造方法</td><td>Student(...)</td><td>new 时自动执行，用于初始化</td></tr>
                <tr><td>对象</td><td>new Student(...)</td><td>按图造出来的具体实例</td></tr>
                <tr><td>方法</td><td>introduce()</td><td>对象能做的行为</td></tr>
                <tr><td>this</td><td>this.name = name</td><td>指“当前这个对象”，区分字段与参数</td></tr>
              </tbody>
            </table>
          </div>
          <div class="callout"><strong>为什么 this 不能省？</strong>参数名和字段名都叫 name。左边的 <code>this.name</code> 是对象的字段，右边的 <code>name</code> 是传入的参数。没有 this，就容易变成“自己赋值给自己”。</div>`,
      },
      {
        title: "一个文件里能放几个类？",
        html: `<p>一个 .java 文件里最多只能有一个 <code>public</code> 类，而且文件名必须和这个 public 类同名。这里的文件叫 <code>School.java</code>，所以 public 类是 School；Student 前面没有 public，可以放在同一文件里。</p>
          <div class="callout callout-tip"><strong>先这样写，没问题</strong>初学阶段把几个小类放在同一文件里方便练习。等第 9 关习惯以后，再拆成 Student.java 和 School.java 两个文件，也是更常见的组织方式。</div>
          <p>注意构造方法：名字必须和类名完全相同，而且<strong>没有返回类型</strong>。写成 <code>void Student(...)</code> 就不再是构造方法了。</p>`,
      },
    ],
    keys: [
      "类描述模板，对象是具体实例",
      "构造方法与类同名、无返回类型，new 时调用",
      "字段存状态，方法定义行为，this 指当前对象",
    ],
    css: {
      title: "class 选择器：样式也能复用",
      intro: "HTML 里 class 可以重复使用，一个元素还能有多个 class。CSS 用点号选中 class，把公共样式和特殊样式拆开。",
      code: String.raw`.demo-tag {
  padding: 4px 9px;
  border-radius: 999px;
  border: 1px solid #d8cfbd;
}

.demo-tag--hot {
  background: #e76f3c;
  color: #fff8ed;
}`,
      demo: `<div class="demo-tags"><span class="demo-tag">HTML</span><span class="demo-tag demo-tag--hot">Java</span><span class="demo-tag">CSS</span></div>`,
      note: "HTML 写 class=\"demo-tag demo-tag--hot\"，多个 class 用空格分开。CSS 里选择器前要加点：.demo-tag。",
    },
    challenge: `<p>让学生对象“长本事”：</p>
      <ul>
        <li>在 Student 里加一个方法 <code>void addScore(int points)</code>，把分数加上去；</li>
        <li>在 main 里调用 <code>xiaoming.addScore(5);</code>，再打印介绍；</li>
        <li>观察：修改 xiaoming 的分数，会不会影响 xiaohong？为什么？</li>
      </ul>`,
    exercises: [
      {
        tag: "Java",
        prompt: "创建 Student 对象，变量名为 s，参数是「小明」和 90。写出完整语句。",
        placeholder: "Student s = ...",
        answers: ['Student s = new Student("小明", 90);'],
        hint: "用 new 调用构造方法，注意变量名是 s。",
        explain: "正确写法是 <code>Student s = new Student(\"小明\", 90);</code>，右边先创建对象，再赋给变量。",
        code: true,
      },
      {
        tag: "CSS",
        prompt: "选中 class 为 card 的元素，CSS 选择器怎么写？",
        placeholder: "输入选择器",
        answers: [".card"],
        hint: "class 选择器用点号开头。",
        explain: "class 选择器写成 <code>.card</code>，点号表示按 class 匹配。",
        code: true,
      },
    ],
    codeTask: {
      title: "写一个 Student 类",
      description: "补全字段、构造方法和 introduce 方法，再在 main 里创建对象并调用它。",
      filename: "School.java",
      starter: String.raw`class Student {
    // TODO: 声明 String name 和 int score

    // TODO: 写构造方法 Student(String name, int score)

    // TODO: 写 void introduce()，输出：我是X，得分Y
}

public class School {
    public static void main(String[] args) {
        // TODO: 创建 Student 对象 xiaoming，参数为 小明 和 92
        // TODO: 调用 xiaoming.introduce()
    }
}`,
      reference: String.raw`class Student {
    String name;
    int score;

    Student(String name, int score) {
        this.name = name;
        this.score = score;
    }

    void introduce() {
        System.out.println("我是" + name + "，得分 " + score);
    }
}

public class School {
    public static void main(String[] args) {
        Student xiaoming = new Student("小明", 92);
        xiaoming.introduce();
    }
}`,
      expected: "我是小明，得分 92",
      hints: [
        "顺序是：字段 → 构造方法 → introduce → 在 main 里创建对象。",
        "构造方法里用 <code>this.name = name;</code> 区分字段和参数；main 里的变量名必须是 xiaoming。",
      ],
      requirements: [
        "Student 类包含 <code>String name</code>、<code>int score</code> 和带两个参数的构造方法",
        "构造方法中用 <code>this.name</code>、<code>this.score</code> 保存参数",
        "写 <code>void introduce()</code>，并创建名为 xiaoming 的对象调用它",
      ],
      mustContain: [
        { label: "声明 name 字段", text: "String name;" },
        { label: "声明 score 字段", text: "int score;" },
        { label: "写 Student 构造方法", text: "Student(String name, int score)" },
        { label: "用 this 保存 name", text: "this.name = name;" },
        { label: "用 this 保存 score", text: "this.score = score;" },
        { label: "声明 introduce 方法", text: "void introduce()" },
        { label: "按格式输出", text: 'System.out.println("我是" + name + "，得分 " + score);' },
        { label: "创建 xiaoming 对象", text: 'Student xiaoming = new Student("小明", 92);' },
        { label: "调用 introduce", text: "xiaoming.introduce();" },
      ],
    },
    quiz: {
      question: "Java 中用哪个关键字创建对象？",
      options: ["create", "new", "class"],
      answer: 1,
      explain: "<code>new Student(\"小明\", 92)</code> 会分配对象并调用构造方法。class 用来声明类，不是创建实例。",
    },
  },

  /* =======================================================
     第 09 关
     ======================================================= */
  {
    id: 9,
    phase: 3,
    phaseLabel: "阶段三 · 面向对象",
    minutes: 35,
    title: "藏好细节，继承能力",
    lead: "封装让对象更可靠，继承让子类复用父类。最后那两行 Person 变量，还会让你第一次看到“多态”。",
    skills: ["private / getter", "extends", "super", "多态"],
    steps: [
      {
        title: "先看：学生也是人",
        html: `<p>Person 保存姓名，Student 继承 Person，再加上年级。子类重写了介绍方法；最后一行用父类类型接住子类对象，调用时却执行了子类版本。</p>`,
        filename: "School2.java",
        language: "java",
        code: String.raw`class Person {
    private String name;

    Person(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void introduce() {
        System.out.println("我是" + name);
    }
}

class Student extends Person {
    private int grade;

    Student(String name, int grade) {
        super(name);
        this.grade = grade;
    }

    @Override
    public void introduce() {
        System.out.println("我是" + getName() + "，读 " + grade + " 年级");
    }
}

public class School2 {
    public static void main(String[] args) {
        Student xiaoming = new Student("小明", 7);
        xiaoming.introduce();

        Person xiaohong = new Student("小红", 8);
        xiaohong.introduce();
    }
}`,
        output: "我是小明，读 7 年级\n我是小红，读 8 年级",
      },
      {
        title: "拆开：三个关键词",
        html: `<div class="table-wrap">
            <table class="explain-table">
              <thead><tr><th>关键词</th><th>它解决什么问题</th><th>注意</th></tr></thead>
              <tbody>
                <tr><td>private</td><td>把字段藏起来，外部不能随便改</td><td>只能在本类中访问；用 public 方法提供受控访问</td></tr>
                <tr><td>extends</td><td>让子类复用父类的字段和方法</td><td>Java 类只能单继承，一个子类只有一个直接父类</td></tr>
                <tr><td>super(...)</td><td>调用父类的构造方法</td><td>必须放在子类构造方法的第一行</td></tr>
                <tr><td>@Override</td><td>告诉编译器“我要重写父类方法”</td><td>写错名字或参数时，编译器会提醒你</td></tr>
              </tbody>
            </table>
          </div>
          <div class="callout"><strong>封装不是“藏起来不让人用”</strong>而是“只通过安全的方式使用”。比如 getName() 只读，不提供 setName()，名字就不能被随意改掉。</div>`,
      },
      {
        title: "多态：同一句话，不同表现",
        html: `<p><code>Person xiaohong = new Student("小红", 8);</code> 左边是父类类型，右边是子类对象。Java 允许这样写，因为学生本来就是人。</p>
          <div class="micro-code"><code>Person p1 = new Person("普通人");
Person p2 = new Student("小红", 8);

p1.introduce();   // 执行 Person 的版本
p2.introduce();   // 执行 Student 重写后的版本</code></div>
          <p>同一个 <code>introduce()</code> 调用，运行时根据对象的真实类型选择方法，这就是多态。现在先认识它，不必一次掌握所有细节。</p>`,
      },
    ],
    keys: [
      "private 保护字段，public 方法提供访问",
      "extends 继承，super(...) 调用父类构造方法",
      "@Override 重写；父类引用可以指向子类对象",
    ],
    css: {
      title: "层叠与优先级",
      intro: "多条规则同时命中一个元素时，浏览器会算优先级。粗略记：ID > class > 标签。权重相同，后写的赢。",
      code: String.raw`.demo-specificity p { color: #65756a; }  /* 标签：最弱 */
.demo-spec            { color: #6f9aad; }  /* class：中等 */
#demoSpec             { color: #e76f3c; }  /* ID：最强 */`,
      demo: `<div class="demo-specificity"><p id="demoSpec" class="demo-spec">最终颜色由优先级更高的规则决定。<br><small>ID 选择器赢了 class 和标签</small></p></div>`,
      note: "!important 会强行提高优先级，但很难维护。优先用更清晰的选择器，而不是互相“压权重”。",
    },
    challenge: `<p>新增一个 Teacher 类：</p>
      <ul>
        <li>让它 <code>extends Person</code>，增加 <code>private String subject</code>；</li>
        <li>构造方法里先 <code>super(name)</code>，再赋值科目；</li>
        <li>用 <code>@Override</code> 重写 introduce，输出“我是 X，教 Y”。</li>
      </ul>`,
    exercises: [
      {
        tag: "Java",
        prompt: "子类构造方法中，调用父类构造方法的写法是什么？",
        placeholder: "输入关键字",
        answers: ["super()", "super"],
        hint: "不是 this；它指向父类。",
        explain: "<code>super(...)</code> 调用父类构造方法，而且要放在子类构造方法的第一行。",
        code: true,
      },
      {
        tag: "CSS",
        prompt: "ID 选择器、class 选择器、标签选择器，哪个优先级最高？",
        placeholder: "输入选择器类型",
        answers: ["ID", "Id", "id", "ID选择器", "id选择器"],
        hint: "它在一页中应该是唯一的，选择器用 # 开头。",
        explain: "优先级从高到低大致是 ID 选择器 &gt; class 选择器 &gt; 标签选择器。",
      },
    ],
    codeTask: {
      title: "让学生继承 Person",
      description: "补全 Student 的构造方法和 introduce 重写，让子类复用父类的能力。",
      filename: "School2.java",
      starter: String.raw`class Person {
    private String name;

    Person(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void introduce() {
        System.out.println("我是" + name);
    }
}

class Student extends Person {
    private int grade;

    // TODO: 写构造方法，调用 super(name)，再保存 grade

    // TODO: 用 @Override 重写 introduce，输出：我是X，读Y年级
}

public class School2 {
    public static void main(String[] args) {
        // TODO: 创建 Student 对象 xiaoming，参数为 小明 和 7
        // TODO: 调用 xiaoming.introduce()
    }
}`,
      reference: String.raw`class Person {
    private String name;

    Person(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void introduce() {
        System.out.println("我是" + name);
    }
}

class Student extends Person {
    private int grade;

    Student(String name, int grade) {
        super(name);
        this.grade = grade;
    }

    @Override
    public void introduce() {
        System.out.println("我是" + getName() + "，读 " + grade + " 年级");
    }
}

public class School2 {
    public static void main(String[] args) {
        Student xiaoming = new Student("小明", 7);
        xiaoming.introduce();
    }
}`,
      expected: "我是小明，读 7 年级",
      hints: [
        "子类构造方法的第一行先调用 <code>super(name);</code>，再保存 grade。",
        "重写方法前加 <code>@Override</code>，输出时用 <code>getName()</code> 读取姓名。",
      ],
      requirements: [
        "Student 继承 Person，字段 <code>grade</code> 保持 private",
        "构造方法第一行调用 <code>super(name)</code>",
        "用 <code>@Override</code> 重写 introduce，用 <code>getName()</code> 读取姓名",
      ],
      mustContain: [
        { label: "Student 继承 Person", text: "class Student extends Person" },
        { label: "调用父类构造方法", text: "super(name);" },
        { label: "保存 grade", text: "this.grade = grade;" },
        { label: "使用 @Override", text: "@Override" },
        { label: "按格式输出", text: 'System.out.println("我是" + getName() + "，读 " + grade + " 年级");' },
        { label: "创建 xiaoming 对象", text: 'Student xiaoming = new Student("小明", 7);' },
        { label: "调用 introduce", text: "xiaoming.introduce();" },
      ],
    },
    quiz: {
      question: "子类构造方法中，想调用父类带参数的构造方法，应该用？",
      options: ["parent(name)", "super(name)", "this(name)"],
      answer: 1,
      explain: "super(...) 调用父类构造方法，且必须是子类构造方法的第一条语句。this(...) 调用的是本类的另一个构造方法。",
    },
  },

  /* =======================================================
     第 10 关
     ======================================================= */
  {
    id: 10,
    phase: 3,
    phaseLabel: "阶段三 · 面向对象",
    minutes: 35,
    title: "会长大的数据容器",
    lead: "数组长度固定，集合可以随时添加和删除。ArrayList 管有序列表，HashMap 管“键 → 值”的查找。",
    skills: ["ArrayList", "HashMap", "泛型"],
    steps: [
      {
        title: "先看：待办和分数表",
        html: `<p>ArrayList 用来存一列待办；HashMap 用名字作为键，快速查分数。注意尖括号里的类型，它告诉 Java 这个容器准备装什么。</p>`,
        filename: "CollectionDemo.java",
        language: "java",
        code: String.raw`import java.util.ArrayList;
import java.util.HashMap;

public class CollectionDemo {
    public static void main(String[] args) {
        ArrayList<String> todos = new ArrayList<>();
        todos.add("复习 Java");
        todos.add("写一个小项目");
        todos.add("休息一下");

        System.out.println("待办数量：" + todos.size());
        System.out.println("第一项：" + todos.get(0));

        HashMap<String, Integer> scores = new HashMap<>();
        scores.put("小明", 92);
        scores.put("小红", 88);

        System.out.println("小明的分数：" + scores.get("小明"));
        System.out.println("小红在名单里吗？" + scores.containsKey("小红"));
    }
}`,
        output: "待办数量：3\n第一项：复习 Java\n小明的分数：92\n小红在名单里吗？true",
      },
      {
        title: "拆开：列表 vs 键值表",
        html: `<div class="table-wrap">
            <table class="explain-table">
              <thead><tr><th>容器</th><th>擅长</th><th>常用方法</th></tr></thead>
              <tbody>
                <tr><td>ArrayList&lt;String&gt;</td><td>有顺序的一列数据，可重复、可增长</td><td>add、get、set、remove、size</td></tr>
                <tr><td>HashMap&lt;String, Integer&gt;</td><td>按键快速查找，比如“姓名 → 分数”</td><td>put、get、containsKey、remove</td></tr>
              </tbody>
            </table>
          </div>
          <p><code>ArrayList</code> 用索引访问，索引同样从 0 开始；<code>HashMap</code> 用键访问，没有“第几个”的概念。键是唯一的，重复 put 同一个键会覆盖旧值。</p>
          <div class="micro-code"><code>for (String todo : todos) {
    System.out.println(todo);
}

scores.put("小明", 95);       // 覆盖原来的 92
todos.remove("休息一下");      // 按内容删除
System.out.println(todos.size());</code></div>`,
      },
      {
        title: "泛型：让容器更安全",
        html: `<p>尖括号里的 <code>String</code>、<code>Integer</code> 叫泛型参数。它让编译器提前检查类型，避免把数字塞进字符串列表。</p>
          <div class="callout callout-tip"><strong>为什么是 Integer 不是 int？</strong>泛型只能使用对象类型，不能直接用基本类型 int。Java 会自动把 int 装箱成 Integer，初学时先照写即可。</div>
          <p>集合非常适合做“数量不确定”的功能。下一关的项目会用 ArrayList 保存任意数量的待办，而不是一开始就写死数组长度。</p>`,
      },
    ],
    keys: [
      "ArrayList 有序、可增长，用 get(index) 取值",
      "HashMap 用键查值，键唯一",
      "尖括号泛型限定容器里装什么类型",
    ],
    css: {
      title: "媒体查询：随屏幕变化",
      intro: "@media 让同一份 CSS 在不同屏幕宽度下应用不同规则。这个页面本身就在使用它。",
      code: String.raw`.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 700px) {
  .cards {
    grid-template-columns: 1fr;
  }
}`,
      demo: `<div class="demo-devices"><div class="demo-device"><span>宽屏：2 列</span><div class="demo-device-grid"><i></i><i></i><i></i><i></i></div></div><div class="demo-device demo-device--narrow"><span>窄屏：1 列</span><div class="demo-device-grid"><i></i><i></i><i></i></div></div></div>`,
      note: "max-width: 700px 表示“视口不超过 700px 时”。别忘了 HTML 里的 viewport meta 标签，手机才会按真实宽度渲染。",
    },
    challenge: `<p>用集合改造输出：</p>
      <ul>
        <li>用普通 for 循环打印带编号的待办：1. 复习 Java；</li>
        <li>删除“休息一下”，再打印剩余数量和列表；</li>
        <li>给 scores 增加“小刚 → 76”，再用 get 查出来。</li>
      </ul>`,
    exercises: [
      {
        tag: "Java",
        prompt: "从 <code>ArrayList&lt;String&gt; todos</code> 中取出第一个元素，写出表达式。",
        placeholder: "todos....",
        answers: ["todos.get(0)", "get(0)"],
        hint: "ArrayList 用 get，不用方括号。",
        explain: "第一个元素的索引是 0，所以写成 <code>todos.get(0)</code>。",
        code: true,
      },
      {
        tag: "CSS",
        prompt: "媒体查询中，表示“最大宽度 700px”的媒体特性怎么写？",
        placeholder: "例如：max-width...",
        answers: ["max-width:700px", "max-width: 700px"],
        hint: "使用 max-width，后面接冒号和 700px。",
        explain: "写成 <code>max-width: 700px</code>，表示视口宽度不超过 700px 时应用样式。",
        code: true,
      },
    ],
    codeTask: {
      title: "把待办装进 ArrayList",
      description: "创建 ArrayList，添加三条待办，再输出数量和第一项。体会集合和数组的不同。",
      filename: "TodoList.java",
      starter: String.raw`import java.util.ArrayList;

public class TodoList {
    public static void main(String[] args) {
        ArrayList<String> todos = new ArrayList<>();

        // TODO: 添加三条待办：复习 Java、写一个小项目、休息一下
        // TODO: 输出：待办数量：3
        // TODO: 输出：第一项：复习 Java
    }
}`,
      reference: String.raw`import java.util.ArrayList;

public class TodoList {
    public static void main(String[] args) {
        ArrayList<String> todos = new ArrayList<>();

        todos.add("复习 Java");
        todos.add("写一个小项目");
        todos.add("休息一下");

        System.out.println("待办数量：" + todos.size());
        System.out.println("第一项：" + todos.get(0));
    }
}`,
      expected: "待办数量：3\n第一项：复习 Java",
      hints: [
        "集合不用数组的 length 和方括号，改用 <code>size()</code> 和 <code>get(0)</code>。",
        "先添加三条待办，再输出 <code>todos.size()</code> 和 <code>todos.get(0)</code>。",
      ],
      requirements: [
        "保留 <code>ArrayList&lt;String&gt; todos</code>，用 <code>add</code> 添加三条指定内容",
        "用 <code>size()</code> 输出数量，用 <code>get(0)</code> 取第一项",
        "不要用数组的 length 或方括号访问",
      ],
      mustContain: [
        { label: "导入 ArrayList", text: "import java.util.ArrayList;" },
        { label: "创建 ArrayList", text: "ArrayList<String> todos = new ArrayList<>();" },
        { label: "添加第一条待办", text: 'todos.add("复习 Java");' },
        { label: "添加第二条待办", text: 'todos.add("写一个小项目");' },
        { label: "添加第三条待办", text: 'todos.add("休息一下");' },
        { label: "输出数量", text: 'System.out.println("待办数量：" + todos.size());' },
        { label: "输出第一项", text: 'System.out.println("第一项：" + todos.get(0));' },
      ],
    },
    quiz: {
      question: "想按“姓名”快速查分数，最合适用哪个？",
      options: ["ArrayList", "HashMap", "int[]"],
      answer: 1,
      explain: "HashMap 用键值对保存数据，put 姓名和分数后，可以用 get(name) 按姓名查。ArrayList 更适合按顺序保存一列数据。",
    },
  },

  /* =======================================================
     第 11 关
     ======================================================= */
  {
    id: 11,
    phase: 4,
    phaseLabel: "阶段四 · 做出东西",
    minutes: 35,
    title: "出错，也是一种信息",
    lead: "异常不是“你很差”，而是程序在告诉你哪里出了问题。会读异常、会做保底处理，才算真正能独立写程序。",
    skills: ["try / catch", "finally", "调试思路"],
    steps: [
      {
        title: "先看：安全的除法",
        html: `<p>用户可能输入 0，也可能输入字母。程序用两个 catch 接住不同类型的问题，finally 无论成功失败都会执行。</p>`,
        filename: "SafeDivide.java",
        language: "java",
        code: String.raw`import java.util.InputMismatchException;
import java.util.Scanner;

public class SafeDivide {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        try {
            System.out.print("被除数：");
            int a = input.nextInt();

            System.out.print("除数：");
            int b = input.nextInt();

            System.out.println("结果：" + (a / b));
        } catch (ArithmeticException e) {
            System.out.println("不能除以 0");
        } catch (InputMismatchException e) {
            System.out.println("请输入整数");
        } finally {
            input.close();
            System.out.println("程序结束");
        }
    }
}`,
        output: "被除数：10\n除数：0\n不能除以 0\n程序结束",
      },
      {
        title: "拆开：try、catch、finally",
        html: `<div class="table-wrap">
            <table class="explain-table">
              <thead><tr><th>结构</th><th>作用</th></tr></thead>
              <tbody>
                <tr><td>try { ... }</td><td>可能出错的代码放这里</td></tr>
                <tr><td>catch (异常类型 e)</td><td>接住指定异常；同一 try 可以接多个 catch</td></tr>
                <tr><td>finally { ... }</td><td>无论成功还是异常都会执行，适合收尾</td></tr>
                <tr><td>throw</td><td>主动抛出异常，让别人知道这里出问题了</td></tr>
              </tbody>
            </table>
          </div>
          <div class="callout callout-warn"><strong>不要抓了就忘</strong>空 catch 会把错误悄悄吞掉，程序看起来“正常”，问题却还在。<code>catch (Exception e) { }</code> 这种大网也不推荐，先抓你明确的异常类型。</div>`,
      },
      {
        title: "调试：从报错里找线索",
        html: `<p>报错并不可怕，它其实给了你三样东西：异常类型、错误消息、行号。按这个顺序读：</p>
          <ol class="plain-list">
            <li><strong>看类型：</strong>ArithmeticException、NullPointerException，还是 InputMismatchException？</li>
            <li><strong>看消息：</strong><code>/ by zero</code> 比“程序坏了”具体得多。</li>
            <li><strong>看行号：</strong>回到对应代码，检查那一行的输入和变量。</li>
            <li><strong>缩小范围：</strong>在关键位置打印变量，确认程序走到了哪一步。</li>
            <li><strong>一次只改一处：</strong>改完立刻重新运行，别同时改五个地方。</li>
          </ol>
          <div class="callout callout-tip"><strong>先复现，再修</strong>能稳定复现的问题才有稳定的修复。记下“输入了什么、期待什么、实际发生了什么”。</div>`,
      },
    ],
    keys: [
      "try 放可能出错的代码，catch 接住指定异常",
      "finally 无论成功失败都会执行",
      "读异常先看类型、消息、行号，再缩小范围",
    ],
    css: {
      title: "关键帧：让元素动起来",
      intro: "@keyframes 定义动画过程，animation 把它应用到元素上。一个循环里可以写多个百分比节点。",
      code: String.raw`.demo-anim-dot {
  animation: demo-pulse 1.8s ease-out infinite;
}

@keyframes demo-pulse {
  0%   { transform: scale(0.92); }
  50%  { transform: scale(1); }
  100% { transform: scale(0.92); }
}`,
      demo: `<div class="demo-anim"><span class="demo-anim-dot"></span><span>1.8 秒一轮，无限循环</span></div>`,
      note: "animation 的常用顺序：名字 时长 速度曲线 延迟 次数。给晕动症用户留一条 prefers-reduced-motion 的退路。",
    },
    challenge: `<p>给错误加一层保护：</p>
      <ul>
        <li>用 <code>int[] nums = {10};</code>，故意访问 <code>nums[3]</code>；</li>
        <li>把访问放进 try，接住 <code>ArrayIndexOutOfBoundsException</code>；</li>
        <li>在 catch 里输出“索引越界”，确认 finally 仍然执行。</li>
      </ul>`,
    exercises: [
      {
        tag: "Java",
        prompt: "捕获指定异常使用哪个关键字？",
        placeholder: "输入关键字",
        answers: ["catch"],
        hint: "它和 try 搭配使用。",
        explain: "<code>catch</code> 用来接住 try 中抛出的异常，例如 <code>catch (ArithmeticException e)</code>。",
      },
      {
        tag: "CSS",
        prompt: "声明关键帧动画使用哪个 at-rule？",
        placeholder: "以 @ 开头",
        answers: ["@keyframes", "keyframes"],
        hint: "名字由 key 和 frames 组成。",
        explain: "用 <code>@keyframes</code> 定义动画关键帧，再用 <code>animation</code> 应用到元素。",
        code: true,
      },
    ],
    codeTask: {
      title: "接住一个除零异常",
      description: "用 try / catch / finally 处理 10 除以 0 的情况，观察异常流程。",
      filename: "SafeDivide.java",
      starter: String.raw`public class SafeDivide {
    public static void main(String[] args) {
        int a = 10;
        int b = 0;

        // TODO: 用 try 输出 a / b
        // TODO: catch ArithmeticException，输出：不能除以 0
        // TODO: finally 输出：程序结束
    }
}`,
      reference: String.raw`public class SafeDivide {
    public static void main(String[] args) {
        int a = 10;
        int b = 0;

        try {
            System.out.println("结果：" + (a / b));
        } catch (ArithmeticException e) {
            System.out.println("不能除以 0");
        } finally {
            System.out.println("程序结束");
        }
    }
}`,
      expected: "不能除以 0\n程序结束",
      hints: [
        "把可能出错的除法放进 try，异常类型写 <code>ArithmeticException</code>。",
        "catch 里处理除零提示，finally 里输出「程序结束」；两段都会走到。",
      ],
      requirements: [
        "把除法放进 <code>try</code> 块",
        "用 <code>catch (ArithmeticException e)</code> 接住异常并输出提示",
        "用 <code>finally</code> 输出「程序结束」",
      ],
      mustContain: [
        { label: "写出 try 块", text: "try {" },
        { label: "进行除法", text: "(a / b)" },
        { label: "捕获 ArithmeticException", text: "catch (ArithmeticException e)" },
        { label: "输出除零提示", text: 'System.out.println("不能除以 0");' },
        { label: "写出 finally 块", text: "finally {" },
        { label: "输出程序结束", text: 'System.out.println("程序结束");' },
      ],
    },
    quiz: {
      question: "try 块里的代码抛出异常后，通常会执行什么？",
      options: ["直接跳过整个程序", "匹配的 catch 块", "只执行 finally，不执行 catch"],
      answer: 1,
      explain: "异常会从上往下寻找匹配的 catch。无论是否被接住，finally 都会执行；没有被任何 catch 接住时，程序才会终止。",
    },
  },

  /* =======================================================
     第 12 关
     ======================================================= */
  {
    id: 12,
    phase: 4,
    phaseLabel: "阶段四 · 做出东西",
    minutes: 50,
    title: "做出第一个完整项目",
    lead: "把变量、循环、条件、方法、集合和异常组装起来，做一个真正能用的命令行待办清单。",
    skills: ["综合项目", "菜单循环", "ArrayList", "异常处理"],
    steps: [
      {
        title: "先看：项目地图",
        html: `<p>这个项目不靠新语法取胜，它靠的是把旧知识组织起来。先看每个部分负责什么，再读完整代码：</p>
          <div class="table-wrap">
            <table class="explain-table">
              <thead><tr><th>部分</th><th>用了什么</th><th>负责什么</th></tr></thead>
              <tbody>
                <tr><td>数据</td><td>ArrayList&lt;String&gt;</td><td>保存任意数量的待办</td></tr>
                <tr><td>主循环</td><td>while + boolean</td><td>反复显示菜单，直到用户选 0</td></tr>
                <tr><td>路由</td><td>switch</td><td>根据选择调用添加、查看或删除</td></tr>
                <tr><td>功能</td><td>方法</td><td>每个功能独立成一个方法，主流程更清楚</td></tr>
                <tr><td>防护</td><td>if + try-catch</td><td>处理空内容、错误序号、非数字输入</td></tr>
              </tbody>
            </table>
          </div>
          <div class="callout callout-tip"><strong>版本要求</strong>代码用了 Java 14+ 的箭头 switch。本课建议安装 JDK 17 或 21；如果使用更老的版本，把箭头 case 改成传统写法即可。</div>`,
      },
      {
        title: "完整代码：TodoApp.java",
        html: `<p>新建 <code>TodoApp.java</code>，把代码完整敲进去。第一次运行先不要改逻辑，按菜单实际用一遍。</p>`,
        filename: "TodoApp.java",
        language: "java",
        code: String.raw`import java.util.ArrayList;
import java.util.Scanner;

public class TodoApp {
    static ArrayList<String> todos = new ArrayList<>();
    static Scanner input = new Scanner(System.in);

    public static void main(String[] args) {
        boolean running = true;

        while (running) {
            printMenu();
            String choice = input.nextLine();

            switch (choice) {
                case "1" -> addTodo();
                case "2" -> listTodos();
                case "3" -> removeTodo();
                case "0" -> running = false;
                default -> System.out.println("请输入 0-3");
            }
        }

        System.out.println("再见！");
        input.close();
    }

    static void printMenu() {
        System.out.println("\n=== 我的待办 ===");
        System.out.println("1. 添加  2. 查看  3. 删除  0. 退出");
        System.out.print("选择：");
    }

    static void addTodo() {
        System.out.print("内容：");
        String text = input.nextLine().trim();

        if (text.isEmpty()) {
            System.out.println("内容不能为空");
            return;
        }

        todos.add(text);
        System.out.println("已添加：" + text);
    }

    static void listTodos() {
        if (todos.isEmpty()) {
            System.out.println("还没有待办，先添加一条吧");
            return;
        }

        for (int i = 0; i < todos.size(); i++) {
            System.out.println((i + 1) + ". " + todos.get(i));
        }
    }

    static void removeTodo() {
        listTodos();
        if (todos.isEmpty()) {
            return;
        }

        System.out.print("删除第几项：");
        try {
            int index = Integer.parseInt(input.nextLine());

            if (index >= 1 && index <= todos.size()) {
                String removed = todos.remove(index - 1);
                System.out.println("已删除：" + removed);
            } else {
                System.out.println("没有这个序号");
            }
        } catch (NumberFormatException e) {
            System.out.println("请输入数字");
        }
    }
}`,
        output: "=== 我的待办 ===\n1. 添加  2. 查看  3. 删除  0. 退出\n选择：1\n内容：复习 Java\n已添加：复习 Java\n（菜单再次出现，选择 2）\n1. 复习 Java\n（选择 0）\n再见！",
      },
      {
        title: "跑起来：第一次使用的顺序",
        html: `<p>不要一上来就改代码。先按下面顺序操作，确认数据和流程都能走通：</p>
          <ol class="run-steps">
            <li>运行程序，应出现菜单和“选择：”</li>
            <li>输入 <code>1</code>，添加“复习 Java”</li>
            <li>输入 <code>2</code>，确认能看到编号列表</li>
            <li>输入 <code>3</code>，按编号删除一项</li>
            <li>输入 <code>0</code>，正常退出</li>
          </ol>
          <p>然后测试异常输入：直接回车、输入字母、输入不存在的编号。观察程序如何用 if 和 catch 兜住这些问题。</p>
          <div class="callout"><strong>为什么编号要 +1 / -1？</strong>用户看到的是 1、2、3，而 ArrayList 的索引是 0、1、2。显示时 <code>i + 1</code>，删除时 <code>index - 1</code>，两者刚好抵消。</div>`,
      },
      {
        title: "读懂它，再改造它",
        html: `<p>建议按这个顺序阅读代码，而不是从头盯到尾：</p>
          <ol class="plain-list">
            <li><strong>先找状态：</strong>todos 和 input 是全局共享的数据和工具。</li>
            <li><strong>再看主循环：</strong>while 控制“一直显示菜单”，running 控制“何时退出”。</li>
            <li><strong>再看 switch：</strong>它只负责分发任务，真正的任务在下面的方法里。</li>
            <li><strong>最后逐个方法读：</strong>addTodo 校验空值，listTodos 处理空列表，removeTodo 处理错误输入。</li>
          </ol>
          <p>这就是“组织代码”：主流程短，细节各自待在方法里。等你觉得一眼能看懂了，再开始加功能。</p>`,
      },
    ],
    keys: [
      "项目用 ArrayList 保存可增长的待办列表",
      "while 菜单 + switch 分发 + 方法处理细节",
      "对用户输入永远做校验，异常处理是功能的一部分",
    ],
    css: {
      title: "用变量管理一套主题",
      intro: "这个页面切换深色模式，靠的不是重写所有样式，而是换一组 CSS 变量。变量会从 :root 继承下来。",
      code: String.raw`:root {
  --paper: #f5efe3;
  --ink: #173b2b;
}

html[data-theme="night"] {
  --paper: #0e1a14;
  --ink: #f2ecdd;
}

body {
  background: var(--paper);
  color: var(--ink);
}`,
      demo: `<div class="demo-theme"><div class="demo-theme-card">浅色主题<br><small>--paper / --ink</small></div><div class="demo-theme-card is-night">深色主题<br><small>换一组变量</small></div></div>`,
      note: "[data-theme=\"night\"] 是属性选择器。JavaScript 只改 html 上的属性，整套颜色就会跟着变。",
    },
    challenge: `<p>做完基础版，再选一个方向升级：</p>
      <ul>
        <li><strong>加功能：</strong>增加“清空全部”选项，用 <code>todos.clear()</code>；</li>
        <li><strong>加状态：</strong>把待办从 String 升级成 Todo 类，增加 boolean done 字段；</li>
        <li><strong>加持久化：</strong>用 <code>Files.write</code> 把待办保存到文件，下次启动再读回来。</li>
      </ul>
      <p>每次只做一个升级，做完重新运行。项目不是一次写完的，是一小步一小步长出来的。</p>`,
    exercises: [
      {
        tag: "Java",
        prompt: "项目里哪个集合类用来保存数量不固定的待办？",
        placeholder: "输入集合类名",
        answers: ["ArrayList", "ArrayList&lt;String&gt;"],
        hint: "第 10 关学的、能按索引访问的列表。",
        explain: "用 <code>ArrayList&lt;String&gt;</code> 保存待办，大小可以动态增长。",
      },
      {
        tag: "CSS",
        prompt: "读取 CSS 变量使用哪个函数？写函数名即可。",
        placeholder: "例如：var...",
        answers: ["var()", "var"],
        hint: "例如 var(--accent)。",
        explain: "用 <code>var(--变量名)</code> 读取 CSS 变量，例如 <code>color: var(--ink)</code>。",
        code: true,
      },
    ],
    codeTask: {
      title: "给待办清单加上编号",
      description: "用 ArrayList 保存三条待办，再用普通 for 循环输出带编号的列表。",
      filename: "TodoMini.java",
      starter: String.raw`import java.util.ArrayList;

public class TodoMini {
    public static void main(String[] args) {
        ArrayList<String> todos = new ArrayList<>();

        // TODO: 添加三条待办：复习 Java、写一个小项目、休息一下
        // TODO: 用普通 for 循环，按「1. 复习 Java」的格式输出
    }
}`,
      reference: String.raw`import java.util.ArrayList;

public class TodoMini {
    public static void main(String[] args) {
        ArrayList<String> todos = new ArrayList<>();

        todos.add("复习 Java");
        todos.add("写一个小项目");
        todos.add("休息一下");

        for (int i = 0; i < todos.size(); i++) {
            System.out.println((i + 1) + ". " + todos.get(i));
        }
    }
}`,
      expected: "1. 复习 Java\n2. 写一个小项目\n3. 休息一下",
      hints: [
        "先添加三条待办，再用普通 for 循环遍历索引。",
        "编号从 1 开始，所以输出时用 <code>(i + 1)</code>；内容用 <code>todos.get(i)</code>。",
      ],
      requirements: [
        "用 <code>ArrayList</code> 保存三条指定待办",
        "用普通 for 循环，索引从 0 开始",
        "显示编号用 <code>i + 1</code>，内容用 <code>todos.get(i)</code>",
      ],
      mustContain: [
        { label: "导入 ArrayList", text: "import java.util.ArrayList;" },
        { label: "创建 ArrayList", text: "ArrayList<String> todos = new ArrayList<>();" },
        { label: "添加第一条待办", text: 'todos.add("复习 Java");' },
        { label: "添加第二条待办", text: 'todos.add("写一个小项目");' },
        { label: "添加第三条待办", text: 'todos.add("休息一下");' },
        { label: "写出普通 for 循环", text: "for (int i = 0; i < todos.size(); i++)" },
        { label: "按编号格式输出", text: 'System.out.println((i + 1) + ". " + todos.get(i));' },
      ],
    },
    quiz: {
      question: "这个项目用哪个类保存“数量不固定、有顺序”的待办？",
      options: ["ArrayList", "HashMap", "int[]"],
      answer: 0,
      explain: "ArrayList 有顺序、可增长，适合保存一列待办。HashMap 更适合键值查找，int[] 长度固定。",
    },
  },

  /* =======================================================
     第 13 关
     ======================================================= */
  {
    id: 13,
    phase: 5,
    phaseLabel: "阶段五 · 进阶表达",
    minutes: 35,
    title: "让文字听话",
    lead: "字符串是 Java 里最常见的对象。清理空格、截取片段、比较内容，这些方法会让程序处理文本时更可靠。",
    skills: ["String 常用方法", "trim / equals", "不可变字符串"],
    steps: [
      {
        title: "先看：清理并检查用户名",
        html: `<p>用户输入的名字前后可能带空格。先用 <code>trim()</code> 清理，再调用几个字符串方法观察结果。</p>`,
        filename: "TextDemo.java",
        language: "java",
        code: String.raw`public class TextDemo {
    public static void main(String[] args) {
        String raw = "  JavaLearner  ";
        String name = raw.trim();

        System.out.println("长度：" + name.length());
        System.out.println("小写：" + name.toLowerCase());
        System.out.println("前四位：" + name.substring(0, 4));
        System.out.println("包含 Java？" + name.contains("Java"));
        System.out.println("内容是 JavaLearner？" + name.equals("JavaLearner"));
    }
}`,
        output: "长度：11\n小写：javaleaner\n前四位：Java\n包含 Java？true\n内容是 JavaLearner？true",
      },
      {
        title: "拆开：常用的字符串方法",
        html: `<div class="table-wrap">
            <table class="explain-table">
              <thead><tr><th>方法</th><th>作用</th></tr></thead>
              <tbody>
                <tr><td>trim()</td><td>去掉字符串首尾的空白字符</td></tr>
                <tr><td>length()</td><td>返回字符个数，注意有括号</td></tr>
                <tr><td>toLowerCase() / toUpperCase()</td><td>转成小写 / 大写</td></tr>
                <tr><td>substring(0, 4)</td><td>截取索引 0、1、2、3，包含头不包含尾</td></tr>
                <tr><td>contains("Java")</td><td>判断是否包含一段文字，返回 boolean</td></tr>
                <tr><td>equals("...")</td><td>比较两个字符串的内容是否完全相同</td></tr>
              </tbody>
            </table>
          </div>
          <div class="callout"><strong>索引和数组一样</strong>字符串索引也从 0 开始。<code>substring(0, 4)</code> 得到 4 个字符，结束索引 <code>4</code> 本身不包含在内。</div>`,
      },
      {
        title: "字符串不可变，比较要用 equals",
        html: `<p>String 一旦创建，内容就不能被直接修改。像 <code>trim()</code> 这样的方法会返回一个新字符串，所以要把结果保存回变量。</p>
          <div class="micro-code"><code>String raw = "  Java  ";
String clean = raw.trim();  // 必须接住返回值

System.out.println(raw.equals(clean));  // false</code></div>
          <div class="callout callout-warn"><strong>不要用 == 比较内容</strong><code>==</code> 比较的是两个变量是否指向同一个对象，<code>.equals()</code> 才比较字符内容。判断文本是否相等，始终优先用 <code>equals</code>。</div>`,
      },
    ],
    keys: [
      "trim、length、substring、contains 是最常用的字符串方法",
      "字符串不可变，方法返回新字符串要接住",
      "比较内容用 equals，不要用 ==",
    ],
    css: {
      title: "太长？给它一个省略号",
      intro: "单行文字太长时，可以用三件套把它限制在一行，并在末尾显示省略号。",
      code: String.raw`.demo-ellipsis {
  max-width: 220px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`,
      demo: `<div class="demo-ellipsis">这是一段很长很长的用户名，超出宽度后应该显示省略号</div>`,
      note: "三个属性要一起用：nowrap 强制一行，hidden 裁掉溢出，ellipsis 显示“…”。缺少任何一个都不会出现省略号。",
    },
    challenge: `<p>处理一个邮箱字符串：</p>
      <ul>
        <li>从 <code>student@example.com</code> 中找出 <code>@</code> 的位置；</li>
        <li>用 <code>substring</code> 取出域名 <code>example.com</code>；</li>
        <li>把域名转成大写并输出。</li>
      </ul>`,
    exercises: [
      {
        tag: "Java",
        prompt: "去掉字符串首尾空格，用哪个方法？",
        placeholder: "输入方法名",
        answers: ["trim()", "trim"],
        hint: "名字来自“修剪”的英文。",
        explain: "<code>trim()</code> 返回去掉首尾空白后的新字符串，记得用变量接住返回值。",
        code: true,
      },
      {
        tag: "CSS",
        prompt: "让单行文字超宽时显示省略号，用哪个 CSS 属性？",
        placeholder: "输入属性名",
        answers: ["text-overflow"],
        hint: "它专门控制溢出文字的显示方式。",
        explain: "<code>text-overflow: ellipsis;</code> 需要配合 <code>white-space: nowrap;</code> 和 <code>overflow: hidden;</code> 才生效。",
      },
    ],
    codeTask: {
      title: "清理用户名并输出",
      description: "把带空格的原始用户名清理干净，再输出长度和小写形式。",
      filename: "TextDemo.java",
      starter: String.raw`public class TextDemo {
    public static void main(String[] args) {
        String raw = "  JavaLearner  ";

        // TODO: 用 trim() 清理 raw，保存到 String name
        // TODO: 输出：长度：11
        // TODO: 输出：小写：javaleaner
    }
}`,
      reference: String.raw`public class TextDemo {
    public static void main(String[] args) {
        String raw = "  JavaLearner  ";
        String name = raw.trim();

        System.out.println("长度：" + name.length());
        System.out.println("小写：" + name.toLowerCase());
    }
}`,
      expected: "长度：11\n小写：javaleaner",
      hints: [
        "先用 <code>raw.trim()</code> 得到干净的字符串，保存到 name。",
        "长度用 <code>name.length()</code>，小写用 <code>name.toLowerCase()</code>，都要放进 println。",
      ],
      requirements: [
        "用 <code>trim()</code> 清理 raw，把结果保存到变量 name",
        "输出「长度：」加上 name 的长度",
        "输出「小写：」加上 name 的小写形式",
      ],
      mustContain: [
        { label: "用 trim 清理并保存", text: "String name = raw.trim();" },
        { label: "输出长度", text: 'System.out.println("长度：" + name.length());' },
        { label: "输出小写形式", text: 'System.out.println("小写：" + name.toLowerCase());' },
      ],
    },
    quiz: {
      question: "比较两个字符串的内容是否相同，应该使用？",
      options: ["==", ".equals()", "!="],
      answer: 1,
      explain: "<code>==</code> 比较引用地址，<code>.equals()</code> 才比较字符串内容。判断文本相等时用 equals。",
    },
  },

  /* =======================================================
     第 14 关
     ======================================================= */
  {
    id: 14,
    phase: 5,
    phaseLabel: "阶段五 · 进阶表达",
    minutes: 35,
    title: "接口是一份约定",
    lead: "接口只规定“必须能做什么”，具体怎么做交给实现类。它让不同的类可以被同一种方式调用。",
    skills: ["interface", "implements", "面向接口编程"],
    steps: [
      {
        title: "先看：一支乐队",
        html: `<p><code>Playable</code> 规定所有乐器都必须有 <code>play()</code>。钢琴和吉他各自实现，再用一个 <code>Playable[]</code> 统一遍历。</p>`,
        filename: "Music.java",
        language: "java",
        code: String.raw`interface Playable {
    void play();
}

class Piano implements Playable {
    public void play() {
        System.out.println("钢琴：叮咚");
    }
}

class Guitar implements Playable {
    public void play() {
        System.out.println("吉他：扫弦");
    }
}

public class Music {
    public static void main(String[] args) {
        Playable[] band = { new Piano(), new Guitar() };

        for (Playable instrument : band) {
            instrument.play();
        }
    }
}`,
        output: "钢琴：叮咚\n吉他：扫弦",
      },
      {
        title: "拆开：接口与实现类",
        html: `<div class="table-wrap">
            <table class="explain-table">
              <thead><tr><th>写法</th><th>含义</th></tr></thead>
              <tbody>
                <tr><td>interface Playable</td><td>声明一份约定，规定实现类必须具备哪些方法</td></tr>
                <tr><td>void play();</td><td>接口里的方法默认是 public abstract，只有签名没有方法体</td></tr>
                <tr><td>implements Playable</td><td>表示这个类承诺实现接口中的全部方法</td></tr>
                <tr><td>public void play()</td><td>实现方法时访问权限必须是 public，并加上方法体</td></tr>
                <tr><td>Playable[] band</td><td>接口类型数组可以装不同实现类的对象</td></tr>
              </tbody>
            </table>
          </div>
          <div class="callout"><strong>接口不能 new</strong>不能写 <code>new Playable()</code>，因为接口没有具体实现。你只能创建实现了它的类，再用接口类型去引用。</div>`,
      },
      {
        title: "多态：调用同一句，执行不同实现",
        html: `<p>在循环里，<code>instrument</code> 的编译类型是 <code>Playable</code>，但运行时分别指向 Piano 和 Guitar。Java 会根据对象的真实类型，调用对应的 <code>play()</code>。</p>
          <div class="micro-code"><code>Playable p1 = new Piano();
Playable p2 = new Guitar();

p1.play();   // 钢琴：叮咚
p2.play();   // 吉他：扫弦</code></div>
          <p>这就是多态。接口把“能做什么”抽出来，调用方不需要知道具体是哪一种乐器。</p>`,
      },
    ],
    keys: [
      "interface 定义能力约定，implements 表示实现",
      "接口方法默认 public abstract，实现类要写 public",
      "接口类型可以引用不同实现类，调用时表现为多态",
    ],
    css: {
      title: "::before 和 ::after",
      intro: "伪元素可以在元素内容的前后插入装饰内容，不需要额外写 HTML 标签。",
      code: String.raw`.demo-note::before {
  content: "★ ";
  color: #e76f3c;
}

.demo-note::after {
  content: " ✓";
  color: #2f7656;
}`,
      demo: `<span class="demo-note">今天也要写代码</span>`,
      note: "content 是伪元素的必需属性。::before 插在内容前，::after 插在内容后；它们不会出现在真实 DOM 文本里。",
    },
    challenge: `<p>给乐队增加第三种乐器：</p>
      <ul>
        <li>新增 <code>Violin implements Playable</code>；</li>
        <li>实现 <code>play()</code>，输出「小提琴：悠扬」；</li>
        <li>把它加入 band 数组，再次遍历。</li>
      </ul>`,
    exercises: [
      {
        tag: "Java",
        prompt: "类实现接口时使用哪个关键字？",
        placeholder: "输入关键字",
        answers: ["implements"],
        hint: "不是 extends；Java 用另一个词表示“实现约定”。",
        explain: "<code>implements</code> 表示类承诺实现接口中的方法，例如 <code>class Piano implements Playable</code>。",
      },
      {
        tag: "CSS",
        prompt: "CSS 伪元素选择器通常以哪两个冒号开头？",
        placeholder: "输入两个符号",
        answers: ["::", "双冒号"],
        hint: "::before 和 ::after 都使用它。",
        explain: "伪元素用双冒号 <code>::</code>，例如 <code>::before</code>、<code>::after</code>。",
      },
    ],
    codeTask: {
      title: "用接口统一乐器",
      description: "实现两个乐器类，再用 Playable 接口数组统一调用它们的 play 方法。",
      filename: "Music.java",
      starter: String.raw`interface Playable {
    void play();
}

class Piano implements Playable {
    // TODO: 实现 play，输出：钢琴：叮咚
}

class Guitar implements Playable {
    // TODO: 实现 play，输出：吉他：扫弦
}

public class Music {
    public static void main(String[] args) {
        Playable[] band = { new Piano(), new Guitar() };

        // TODO: 用增强 for 遍历 band，调用每个乐器的 play()
    }
}`,
      reference: String.raw`interface Playable {
    void play();
}

class Piano implements Playable {
    public void play() {
        System.out.println("钢琴：叮咚");
    }
}

class Guitar implements Playable {
    public void play() {
        System.out.println("吉他：扫弦");
    }
}

public class Music {
    public static void main(String[] args) {
        Playable[] band = { new Piano(), new Guitar() };

        for (Playable instrument : band) {
            instrument.play();
        }
    }
}`,
      expected: "钢琴：叮咚\n吉他：扫弦",
      hints: [
        "两个类都需要写 <code>public void play()</code> 方法体。",
        "遍历写成 <code>for (Playable instrument : band)</code>，循环里调用 <code>instrument.play()</code>。",
      ],
      requirements: [
        "Piano 和 Guitar 都 implements Playable，并实现 play()",
        "两个 play() 分别输出对应的乐器声音",
        "用增强 for 遍历 Playable 数组并调用 play()",
      ],
      mustContain: [
        { label: "声明 Playable 接口", text: "interface Playable" },
        { label: "接口声明 play 方法", text: "void play();" },
        { label: "Piano 实现接口", text: "class Piano implements Playable" },
        { label: "Guitar 实现接口", text: "class Guitar implements Playable" },
        { label: "实现 play 方法", text: "public void play()" },
        { label: "Piano 输出", text: 'System.out.println("钢琴：叮咚");' },
        { label: "Guitar 输出", text: 'System.out.println("吉他：扫弦");' },
        { label: "创建接口数组", text: "Playable[] band = { new Piano(), new Guitar() };" },
        { label: "用增强 for 遍历", text: "for (Playable instrument : band)" },
        { label: "调用 play", text: "instrument.play();" },
      ],
    },
    quiz: {
      question: "Java 中类实现接口使用哪个关键字？",
      options: ["extends", "implements", "interface"],
      answer: 1,
      explain: "类用 <code>implements</code> 实现接口；接口之间才用 <code>extends</code> 继承。",
    },
  },

  /* =======================================================
     第 15 关
     ======================================================= */
  {
    id: 15,
    phase: 5,
    phaseLabel: "阶段五 · 进阶表达",
    minutes: 30,
    title: "枚举：把固定选项列清楚",
    lead: "订单状态、星期、颜色这类取值有限的类型，很适合用 enum。再配合 switch 表达式，可以让分支既完整又好读。",
    skills: ["enum", "switch 表达式", "穷尽分支"],
    steps: [
      {
        title: "先看：订单状态翻译",
        html: `<p>枚举把一组固定值收进一个类型。下面的 switch 表达式把每个状态映射成一句提示。</p>`,
        filename: "OrderDemo.java",
        language: "java",
        code: String.raw`enum OrderStatus {
    NEW, PAID, SHIPPED, DONE
}

public class OrderDemo {
    public static void main(String[] args) {
        OrderStatus status = OrderStatus.PAID;

        String message = switch (status) {
            case NEW -> "等待支付";
            case PAID -> "已支付，准备发货";
            case SHIPPED -> "运输中";
            case DONE -> "已完成";
        };

        System.out.println(message);
    }
}`,
        output: "已支付，准备发货",
      },
      {
        title: "拆开：enum 与 switch 表达式",
        html: `<div class="table-wrap">
            <table class="explain-table">
              <thead><tr><th>写法</th><th>含义</th></tr></thead>
              <tbody>
                <tr><td>enum OrderStatus</td><td>声明一个枚举类型，里面只能出现列出的常量</td></tr>
                <tr><td>OrderStatus.PAID</td><td>使用枚举值，必须带类型名</td></tr>
                <tr><td>switch (status)</td><td>根据枚举值选择分支</td></tr>
                <tr><td>case PAID -&gt;</td><td>箭头写法不写 break，也不会“贯穿”到下一个分支</td></tr>
                <tr><td>String message = switch ...</td><td>每个分支返回一个值，整体得到结果</td></tr>
              </tbody>
            </table>
          </div>
          <div class="callout callout-warn"><strong>枚举 switch 要写全</strong>switch 表达式没有 default、又漏掉某个枚举值时，编译器会报错。这不是麻烦，而是在帮你保证每种状态都有处理。</div>`,
      },
      {
        title: "为什么不用字符串？",
        html: `<p>如果状态写成 <code>"PAID"</code> 这样的字符串，拼错成 <code>"PAIDD"</code> 编译器也不会提醒；用 enum 时，值必须在枚举里出现，拼错会直接报错。</p>
          <div class="micro-code"><code>// 不推荐：拼写错误只有运行时才发现
String status = "PAIDD";

// 推荐：类型安全，IDE 会提示可选值
OrderStatus status = OrderStatus.PAID;</code></div>
          <p>枚举让“固定的几个选项”变成一个有类型的集合，代码读起来也更明确。</p>`,
      },
    ],
    keys: [
      "enum 定义固定选项，类型安全、不会拼错",
      "箭头 switch 不需要 break，可直接形成表达式",
      "switch 枚举时所有常量都要覆盖",
    ],
    css: {
      title: "position: sticky：滚动时吸附",
      intro: "sticky 元素会正常参与布局，但当它滚动到设定的位置时，会像被粘住一样停在那里。",
      code: String.raw`.demo-sticky-head {
  position: sticky;
  top: 0;
  background: #f8d9c5;
}`,
      demo: `<div class="demo-sticky"><div class="demo-sticky-head">STICKY · 我会吸附在顶部</div><p>向下滚动这个框。</p><p>标题会停在顶部。</p><p>直到容器结束。</p><p>再试一次。</p></div>`,
      note: "sticky 需要同时设置 top/bottom 等偏移量，并且滚动必须发生在外层容器或页面上才会看出来。",
    },
    challenge: `<p>扩展订单状态：</p>
      <ul>
        <li>给枚举增加 <code>CANCELLED</code>；</li>
        <li>在 switch 中增加「已取消」分支；</li>
        <li>把 status 改成 <code>OrderStatus.CANCELLED</code> 运行一次。</li>
      </ul>`,
    exercises: [
      {
        tag: "Java",
        prompt: "定义枚举类型使用哪个关键字？",
        placeholder: "输入关键字",
        answers: ["enum"],
        hint: "它是 enumeration 的缩写。",
        explain: "用 <code>enum</code> 定义枚举，例如 <code>enum OrderStatus { NEW, PAID }</code>。",
      },
      {
        tag: "CSS",
        prompt: "让元素在滚动容器里吸附在顶部，position 应该用什么值？",
        placeholder: "输入值",
        answers: ["sticky"],
        hint: "不是 fixed，也不是 absolute。",
        explain: "<code>position: sticky;</code> 再配合 <code>top: 0;</code>，元素会在滚动时吸附在指定位置。",
      },
    ],
    codeTask: {
      title: "把订单状态翻译成中文",
      description: "用 enum 定义状态，再用 switch 表达式得到对应提示并输出。",
      filename: "OrderDemo.java",
      starter: String.raw`enum OrderStatus {
    NEW, PAID, SHIPPED, DONE
}

public class OrderDemo {
    public static void main(String[] args) {
        OrderStatus status = OrderStatus.PAID;

        // TODO: 用 switch 表达式把四种状态映射成中文提示
        // NEW -> 等待支付
        // PAID -> 已支付，准备发货
        // SHIPPED -> 运输中
        // DONE -> 已完成

        // TODO: 输出 message
    }
}`,
      reference: String.raw`enum OrderStatus {
    NEW, PAID, SHIPPED, DONE
}

public class OrderDemo {
    public static void main(String[] args) {
        OrderStatus status = OrderStatus.PAID;

        String message = switch (status) {
            case NEW -> "等待支付";
            case PAID -> "已支付，准备发货";
            case SHIPPED -> "运输中";
            case DONE -> "已完成";
        };

        System.out.println(message);
    }
}`,
      expected: "已支付，准备发货",
      hints: [
        "把 switch 的结果赋给一个 String message，四个 case 都要写。",
        "箭头写法是 <code>case PAID -&gt; &quot;已支付，准备发货&quot;;</code>，最后输出 message。",
      ],
      requirements: [
        "保留枚举 OrderStatus 和四个常量",
        "用 switch 表达式覆盖 NEW、PAID、SHIPPED、DONE 四种状态",
        "把 switch 结果保存到 message 并输出",
      ],
      mustContain: [
        { label: "声明枚举", text: "enum OrderStatus" },
        { label: "使用 PAID 状态", text: "OrderStatus status = OrderStatus.PAID;" },
        { label: "定义 switch 表达式", text: "String message = switch (status)" },
        { label: "NEW 分支", text: 'case NEW -> "等待支付";' },
        { label: "PAID 分支", text: 'case PAID -> "已支付，准备发货";' },
        { label: "SHIPPED 分支", text: 'case SHIPPED -> "运输中";' },
        { label: "DONE 分支", text: 'case DONE -> "已完成";' },
        { label: "输出 message", text: "System.out.println(message);" },
      ],
    },
    quiz: {
      question: "下面哪种是 Java 14+ switch 表达式的箭头写法？",
      options: ["case PAID: ...", "case PAID -> ...", "case PAID => ..."],
      answer: 1,
      explain: "Java 使用箭头 <code>-&gt;</code>，不是 JavaScript 的 <code>=&gt;</code>；箭头分支不需要 break。",
    },
  },

  /* =======================================================
     第 16 关
     ======================================================= */
  {
    id: 16,
    phase: 5,
    phaseLabel: "阶段五 · 进阶表达",
    minutes: 35,
    title: "Set：只留一份",
    lead: "列表允许重复，集合 Set 不允许。学会用泛型表达“这个容器装什么”，再让 HashSet 帮你自动去重。",
    skills: ["泛型", "HashSet", "去重与查找"],
    steps: [
      {
        title: "先看：三个名字，两个结果",
        html: `<p>ArrayList 保留了重复的“小明”，把它传给 HashSet 后，重复项被自动去掉。注意：Set 没有索引，所以不能用 get(0)。</p>`,
        filename: "UniqueNames.java",
        language: "java",
        code: String.raw`import java.util.ArrayList;
import java.util.HashSet;

public class UniqueNames {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("小明");
        names.add("小红");
        names.add("小明");

        HashSet<String> unique = new HashSet<>(names);

        System.out.println("原始数量：" + names.size());
        System.out.println("去重后：" + unique.size());
        System.out.println("包含小红：" + unique.contains("小红"));
    }
}`,
        output: "原始数量：3\n去重后：2\n包含小红：true",
      },
      {
        title: "拆开：List 与 Set 的分工",
        html: `<div class="table-wrap">
            <table class="explain-table">
              <thead><tr><th>容器</th><th>是否允许重复</th><th>能否按索引取</th><th>适合</th></tr></thead>
              <tbody>
                <tr><td>ArrayList</td><td>允许</td><td>能，get(i)</td><td>有顺序的一列数据</td></tr>
                <tr><td>HashSet</td><td>不允许</td><td>不能</td><td>去重、判断存在</td></tr>
                <tr><td>HashMap</td><td>键唯一</td><td>按键 get</td><td>键值查找</td></tr>
              </tbody>
            </table>
          </div>
          <p><code>new HashSet&lt;&gt;(names)</code> 会把列表里的元素逐个放进集合，重复的值只保留一份。HashSet 不保证展示顺序，所以不要依赖它的输出次序。</p>
          <div class="callout"><strong>contains 很快</strong>集合最擅长回答“这个东西在不在里面”。<code>unique.contains("小红")</code> 会返回 boolean，比手写循环查找更清楚。</div>`,
      },
      {
        title: "泛型：让容器说清楚自己装什么",
        html: `<p>尖括号里的类型就是泛型参数。<code>HashSet&lt;String&gt;</code> 明确表示只能放字符串，编译器会提前阻止你把整数塞进去。</p>
          <div class="micro-code"><code>HashSet&lt;String&gt; names = new HashSet&lt;&gt;();
names.add("小明");
names.add(18);        // 编译错误：需要 String

System.out.println(names.size());
System.out.println(names.contains("小明"));</code></div>
          <p>泛型让集合“知道自己的类型”，也省去了取出元素时的强制转换。初学阶段先坚持写完整类型，不要用原始类型。</p>`,
      },
    ],
    keys: [
      "Set 不允许重复元素，没有索引",
      "HashSet 适合去重和 contains 判断",
      "泛型 &lt;String&gt; 限定容器能装什么类型",
    ],
    css: {
      title: "clamp()：字号自动伸缩",
      intro: "clamp(最小值, 理想值, 最大值) 会随着视口变化选一个合适的值，非常适合响应式字号。",
      code: String.raw`.demo-clamp p:first-child {
  font-size: clamp(14px, 4vw, 20px);
}`,
      demo: `<div class="demo-clamp"><p>响应式标题</p><p>clamp(14px, 4vw, 20px)</p></div>`,
      note: "4vw 表示视口宽度的 4%。浏览器会在 14px 和 20px 之间取一个合适值，避免字太大或太小。",
    },
    challenge: `<p>统计一组单词里有多少个不同的单词：</p>
      <ul>
        <li>创建 <code>String[] words = {"java", "css", "java", "sql", "css"};</code>；</li>
        <li>把数组放进 <code>HashSet&lt;String&gt;</code>；</li>
        <li>输出原始数量、去重数量和集合内容（顺序不作要求）。</li>
      </ul>`,
    exercises: [
      {
        tag: "Java",
        prompt: "哪个集合接口不允许出现重复元素？",
        placeholder: "输入集合名",
        answers: ["Set", "HashSet"],
        hint: "它的名字就是“集合”，与 List 相对。",
        explain: "Set 不允许重复元素，<code>HashSet</code> 是它最常见的实现之一。",
      },
      {
        tag: "CSS",
        prompt: "同时设置最小值、理想值和最大值，用哪个 CSS 函数？",
        placeholder: "输入函数名",
        answers: ["clamp()", "clamp"],
        hint: "三个参数用逗号分隔。",
        explain: "<code>clamp(min, preferred, max)</code> 可以把字号、宽度等限制在一个范围内。",
        code: true,
      },
    ],
    codeTask: {
      title: "给名单去重",
      description: "用 HashSet 从 ArrayList 中去掉重复名字，再输出统计结果。",
      filename: "UniqueNames.java",
      starter: String.raw`import java.util.ArrayList;
import java.util.HashSet;

public class UniqueNames {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("小明");
        names.add("小红");
        names.add("小明");

        // TODO: 用 names 创建 HashSet<String> unique
        // TODO: 输出原始数量、去重数量和是否包含小红
    }
}`,
      reference: String.raw`import java.util.ArrayList;
import java.util.HashSet;

public class UniqueNames {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("小明");
        names.add("小红");
        names.add("小明");

        HashSet<String> unique = new HashSet<>(names);

        System.out.println("原始数量：" + names.size());
        System.out.println("去重后：" + unique.size());
        System.out.println("包含小红：" + unique.contains("小红"));
    }
}`,
      expected: "原始数量：3\n去重后：2\n包含小红：true",
      hints: [
        "用 <code>new HashSet&lt;&gt;(names)</code> 把列表直接交给集合。",
        "数量分别用 <code>names.size()</code> 和 <code>unique.size()</code>，判断存在用 <code>contains</code>。",
      ],
      requirements: [
        "用 ArrayList names 创建 HashSet&lt;String&gt; unique",
        "分别输出原始数量 3 和去重数量 2",
        "用 contains 判断集合是否包含小红",
      ],
      mustContain: [
        { label: "导入 HashSet", text: "import java.util.HashSet;" },
        { label: "创建去重集合", text: "HashSet<String> unique = new HashSet<>(names);" },
        { label: "输出原始数量", text: 'System.out.println("原始数量：" + names.size());' },
        { label: "输出去重数量", text: 'System.out.println("去重后：" + unique.size());' },
        { label: "判断包含小红", text: 'System.out.println("包含小红：" + unique.contains("小红"));' },
      ],
    },
    quiz: {
      question: "HashSet 最主要的特点是什么？",
      options: ["元素有固定顺序", "不允许重复元素", "可以用索引访问"],
      answer: 1,
      explain: "Set 通过元素的 equals/hashCode 判断重复，重复项只保留一份；它没有索引，也不保证顺序。",
    },
  },

  /* =======================================================
     第 17 关
     ======================================================= */
  {
    id: 17,
    phase: 6,
    phaseLabel: "阶段六 · 文件与项目",
    minutes: 40,
    title: "把数据写进文件",
    lead: "程序关闭后，内存里的数据会消失。用 Files 把内容写进文件，再读回来，数据就能留下来。",
    skills: ["Path", "Files 读写", "IOException"],
    steps: [
      {
        title: "先看：写入，再读回",
        html: `<p><code>Path.of("notes.txt")</code> 表示文件路径。写入后立即读回同一文件，把内容打印出来。注意文件操作必须处理 IOException。</p>`,
        filename: "SaveNotes.java",
        language: "java",
        code: String.raw`import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class SaveNotes {
    public static void main(String[] args) {
        Path file = Path.of("notes.txt");

        try {
            Files.writeString(file, "第一条笔记\n第二条笔记\n");
            String content = Files.readString(file);

            System.out.println("文件内容：");
            System.out.print(content);
        } catch (IOException e) {
            System.out.println("文件操作失败：" + e.getMessage());
        }
    }
}`,
        output: "文件内容：\n第一条笔记\n第二条笔记",
      },
      {
        title: "拆开：路径、写入和读取",
        html: `<div class="table-wrap">
            <table class="explain-table">
              <thead><tr><th>代码</th><th>作用</th></tr></thead>
              <tbody>
                <tr><td>Path.of("notes.txt")</td><td>表示当前工作目录下的 notes.txt</td></tr>
                <tr><td>Files.writeString(file, text)</td><td>把整个字符串写入文件，已存在时覆盖</td></tr>
                <tr><td>Files.readString(file)</td><td>把整个文件读成一个字符串</td></tr>
                <tr><td>Files.exists(file)</td><td>判断文件是否存在</td></tr>
                <tr><td>catch (IOException e)</td><td>接住文件不存在、没有权限等输入输出问题</td></tr>
              </tbody>
            </table>
          </div>
          <div class="callout callout-warn"><strong>IOException 是受检异常</strong>编译器会要求你处理它：要么放进 try-catch，要么在方法签名上声明 throws。初学阶段先用 try-catch，把失败提示给用户。</div>`,
      },
      {
        title: "文件在哪里？",
        html: `<p><code>"notes.txt"</code> 是相对路径，位置取决于程序运行时的工作目录。在 IDEA 里直接运行，一般会出现在项目根目录。</p>
          <p>路径中可以使用 <code>\\n</code> 表示换行；写入多行内容时，再读出来就仍然是多行。后续做项目时，可以先写文件、重启程序、再读文件，验证数据是否真的留下来了。</p>`,
      },
    ],
    keys: [
      "Path 表示路径，Files 负责读写",
      "writeString 覆盖写入，readString 读回全文",
      "IOException 是受检异常，必须处理",
    ],
    css: {
      title: ":focus-within：让整个表单有焦点",
      intro: "输入框获得焦点时，除了改变输入框自身，还可以用 :focus-within 改变它外面的表单容器。",
      code: String.raw`.demo-form:focus-within {
  border-color: #e76f3c;
  box-shadow: 0 0 0 3px #f8d9c5;
}`,
      demo: `<div class="demo-form"><span>USERNAME</span><input type="text" placeholder="点进来试试"></div>`,
      note: "focus-within 表示“内部有元素聚焦时”。它常用于搜索框、表单卡片和无障碍焦点样式。",
    },
    challenge: `<p>把文件读写改成多行列表：</p>
      <ul>
        <li>写入三行不同的待办；</li>
        <li>用 <code>Files.readAllLines(file)</code> 读成 <code>List&lt;String&gt;</code>；</li>
        <li>用 for-each 逐行打印并编号。</li>
      </ul>`,
    exercises: [
      {
        tag: "Java",
        prompt: "读取整个文件为一个字符串，用哪个 Files 方法？",
        placeholder: "输入方法名",
        answers: ["Files.readString", "readString"],
        hint: "和 writeString 对应。",
        explain: "<code>Files.readString(path)</code> 会把整个文件内容读成一个 String。",
        code: true,
      },
      {
        tag: "CSS",
        prompt: "容器内部有元素获得焦点时，给容器应用样式用哪个伪类？",
        placeholder: "以冒号开头",
        answers: [":focus-within"],
        hint: "focus + within。",
        explain: "<code>:focus-within</code> 在容器内部任意元素获得焦点时生效。",
        code: true,
      },
    ],
    codeTask: {
      title: "保存并读回一条笔记",
      description: "把一句话写到 note.txt，再读回来输出；同时处理 IOException。",
      filename: "NoteFile.java",
      starter: String.raw`import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class NoteFile {
    public static void main(String[] args) {
        Path file = Path.of("note.txt");

        // TODO: 用 Files.writeString 写入：今天也要学 Java
        // TODO: 用 Files.readString 读回并输出
        // TODO: 用 try-catch 接住 IOException
    }
}`,
      reference: String.raw`import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class NoteFile {
    public static void main(String[] args) {
        Path file = Path.of("note.txt");

        try {
            Files.writeString(file, "今天也要学 Java");
            String content = Files.readString(file);
            System.out.println(content);
        } catch (IOException e) {
            System.out.println("文件操作失败：" + e.getMessage());
        }
    }
}`,
      expected: "今天也要学 Java",
      hints: [
        "把两条文件操作都放进 try，路径用已经创建好的 file。",
        "写入用 <code>Files.writeString(file, &quot;今天也要学 Java&quot;);</code>，读取用 <code>Files.readString(file)</code>。",
      ],
      requirements: [
        "保留 Path file，用 Files.writeString 写入指定句子",
        "用 Files.readString 读出内容并输出",
        "用 try-catch 捕获 IOException",
      ],
      mustContain: [
        { label: "创建 Path", text: 'Path file = Path.of("note.txt");' },
        { label: "写入指定内容", text: 'Files.writeString(file, "今天也要学 Java");' },
        { label: "读取文件", text: "String content = Files.readString(file);" },
        { label: "输出内容", text: "System.out.println(content);" },
        { label: "捕获 IOException", text: "catch (IOException e)" },
      ],
    },
    quiz: {
      question: "Java 文件读写失败时，常见的受检异常是？",
      options: ["IOException", "NumberFormatException", "NullPointerException"],
      answer: 0,
      explain: "文件不存在、没有权限、读写中断等问题通常通过 <code>IOException</code> 报告，编译器会要求处理它。",
    },
  },

  /* =======================================================
     第 18 关
     ======================================================= */
  {
    id: 18,
    phase: 6,
    phaseLabel: "阶段六 · 文件与项目",
    minutes: 50,
    title: "做一个记账本项目",
    lead: "把类、集合、循环、方法、异常和文件读写串起来，做一个能保存数据的命令行账本。这是本课的第二个完整项目。",
    skills: ["文件持久化", "项目整合", "数据汇总"],
    steps: [
      {
        title: "先看：项目结构",
        html: `<p>这个项目用一个 Expense 对象表示每笔支出，用 ArrayList 管理，用文本文件保存。启动时先读文件，退出前保存。</p>
          <div class="table-wrap">
            <table class="explain-table">
              <thead><tr><th>部分</th><th>负责什么</th></tr></thead>
              <tbody>
                <tr><td>Expense</td><td>保存名称和金额两个字段</td></tr>
                <tr><td>ArrayList</td><td>保存本次运行期间的所有记录</td></tr>
                <tr><td>菜单循环</td><td>添加、查看、保存、退出</td></tr>
                <tr><td>Files</td><td>把记录写入 expenses.txt，下次启动读回来</td></tr>
                <tr><td>try-catch</td><td>处理文件错误和金额格式错误</td></tr>
              </tbody>
            </table>
          </div>
          <div class="callout"><strong>数据格式</strong>每一行保存一条记录，格式是 <code>名称,金额</code>。名称里暂时不要写英文逗号，避免被当成字段分隔符。</div>`,
      },
      {
        title: "完整代码：LedgerApp.java",
        html: `<p>新建 <code>LedgerApp.java</code>，把代码完整敲进去。运行后先记两笔，选择保存，退出后重新运行，看看数据能不能读回来。</p>`,
        filename: "LedgerApp.java",
        language: "java",
        code: String.raw`import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class LedgerApp {
    static ArrayList<Expense> expenses = new ArrayList<>();
    static Scanner input = new Scanner(System.in);
    static Path file = Path.of("expenses.txt");

    public static void main(String[] args) {
        loadExpenses();

        boolean running = true;
        while (running) {
            printMenu();
            String choice = input.nextLine();

            switch (choice) {
                case "1" -> addExpense();
                case "2" -> listExpenses();
                case "3" -> saveExpenses();
                case "0" -> running = false;
                default -> System.out.println("请输入 0-3");
            }
        }
        input.close();
    }

    static void printMenu() {
        System.out.println("\n=== 我的账本 ===");
        System.out.println("1. 记一笔  2. 查看  3. 保存  0. 退出");
        System.out.print("选择：");
    }

    static void addExpense() {
        System.out.print("名称：");
        String name = input.nextLine().trim();
        if (name.isEmpty()) {
            System.out.println("名称不能为空");
            return;
        }

        System.out.print("金额：");
        try {
            double amount = Double.parseDouble(input.nextLine());
            expenses.add(new Expense(name, amount));
            System.out.println("已记录：" + name + " " + amount + " 元");
        } catch (NumberFormatException e) {
            System.out.println("金额必须是数字");
        }
    }

    static void listExpenses() {
        if (expenses.isEmpty()) {
            System.out.println("还没有记录");
            return;
        }

        double total = 0;
        for (int i = 0; i < expenses.size(); i++) {
            Expense item = expenses.get(i);
            System.out.println((i + 1) + ". " + item.name + " " + item.amount + " 元");
            total += item.amount;
        }
        System.out.println("合计：" + total + " 元");
    }

    static void saveExpenses() {
        StringBuilder text = new StringBuilder();
        for (Expense item : expenses) {
            text.append(item.name).append(",").append(item.amount).append("\n");
        }

        try {
            Files.writeString(file, text.toString());
            System.out.println("已保存到 " + file);
        } catch (IOException e) {
            System.out.println("保存失败：" + e.getMessage());
        }
    }

    static void loadExpenses() {
        if (!Files.exists(file)) {
            return;
        }

        try {
            List<String> lines = Files.readAllLines(file);
            for (String line : lines) {
                String[] parts = line.split(",");
                if (parts.length == 2) {
                    expenses.add(new Expense(parts[0], Double.parseDouble(parts[1])));
                }
            }
            System.out.println("已读取 " + expenses.size() + " 条记录");
        } catch (IOException | NumberFormatException e) {
            System.out.println("读取账本失败：" + e.getMessage());
        }
    }
}

class Expense {
    String name;
    double amount;

    Expense(String name, double amount) {
        this.name = name;
        this.amount = amount;
    }
}`,
        output: "=== 我的账本 ===\n1. 记一笔  2. 查看  3. 保存  0. 退出\n选择：1\n名称：午餐\n金额：18.5\n已记录：午餐 18.5 元\n选择：2\n1. 午餐 18.5 元\n合计：18.5 元\n选择：3\n已保存到 expenses.txt\n选择：0",
      },
      {
        title: "跑起来：验证数据真的留下了",
        html: `<p>按这个顺序测试，才算真正做出一个能用的程序：</p>
          <ol class="run-steps">
            <li>运行，记两笔账，选择 2 查看合计</li>
            <li>选择 3 保存，然后退出</li>
            <li>重新运行，观察是否自动读取记录</li>
            <li>再记一笔，保存，确认合计更新</li>
          </ol>
          <div class="callout"><strong>数据文件在哪里？</strong>如果没有指定绝对路径，<code>expenses.txt</code> 会出现在程序的工作目录。IntelliJ 中通常位于项目根目录，和 src 并列。</div>`,
      },
      {
        title: "这个项目还可以怎么升级",
        html: `<p>现在它已经包含一个完整项目的骨架。下一步可以按自己的兴趣扩展：</p>
          <ul class="plain-list">
            <li>增加“删除某一笔”和“按名称筛选”；</li>
            <li>把金额改成 BigDecimal，避免浮点误差；</li>
            <li>把数据格式换成 CSV 或 JSON，并处理特殊字符；</li>
            <li>把菜单和输入拆分到独立类，练习更清晰的职责划分。</li>
          </ul>
          <p>每次只做一个升级，做完重新运行。项目不是一次写完的，是一小步一小步长出来的。</p>`,
      },
    ],
    keys: [
      "用类 + 集合保存数据，用文件持久化",
      "读取和写入都可能抛出 IOException，需要处理",
      "项目先跑通闭环，再逐步增加功能",
    ],
    css: {
      title: "auto-fit：让网格自己适配",
      intro: "repeat(auto-fit, minmax(...)) 会根据容器宽度自动决定一行放几列，不需要为每一种屏幕写媒体查询。",
      code: String.raw`.demo-auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(52px, 1fr));
  gap: 4px;
}`,
      demo: `<div class="demo-auto-grid"><span>01</span><span>02</span><span>03</span><span>04</span><span>05</span><span>06</span></div>`,
      note: "minmax 给每列设置了最小和最大宽度，auto-fit 自动换行。它很适合卡片列表、标签墙和响应式仪表盘。",
    },
    challenge: `<p>把账本项目升级一个功能（只选一个）：</p>
      <ul>
        <li>增加删除记录：按编号删除，并重新保存；</li>
        <li>增加分类字段，例如“餐饮”“交通”；</li>
        <li>增加“按月统计”，先保存日期，再按月份汇总。</li>
      </ul>
      <p>写代码前先想清楚：数据在哪里、界面怎么选、文件格式怎么改。能说清楚再动手。</p>`,
    exercises: [
      {
        tag: "Java",
        prompt: "把文件读取成 List&lt;String&gt;（每行一项），用哪个方法？",
        placeholder: "输入方法名",
        answers: ["Files.readAllLines", "readAllLines"],
        hint: "readString 读成一个字符串，readAllLines 读成多行。",
        explain: "<code>Files.readAllLines(path)</code> 返回 <code>List&lt;String&gt;</code>，每个元素是一行。",
        code: true,
      },
      {
        tag: "CSS",
        prompt: "在 repeat(auto-fit, minmax(...)) 中，自动填充列的关键字是什么？",
        placeholder: "输入关键字",
        answers: ["auto-fit"],
        hint: "fit 前面有一个连字符。",
        explain: "<code>auto-fit</code> 会让网格根据可用宽度自动增减列数；配合 <code>minmax</code> 使用。",
        code: true,
      },
    ],
    codeTask: {
      title: "写一个迷你账本汇总",
      description: "用 Expense 对象和 ArrayList 保存两笔支出，再遍历求和，输出合计。",
      filename: "LedgerMini.java",
      starter: String.raw`import java.util.ArrayList;

class Expense {
    String name;
    double amount;

    // TODO: 写构造方法 Expense(String name, double amount)
}

public class LedgerMini {
    public static void main(String[] args) {
        ArrayList<Expense> expenses = new ArrayList<>();
        expenses.add(new Expense("午餐", 18.5));
        expenses.add(new Expense("地铁", 6));

        // TODO: 遍历 expenses，求金额合计
        // TODO: 输出：合计：24.5 元
    }
}`,
      reference: String.raw`import java.util.ArrayList;

class Expense {
    String name;
    double amount;

    Expense(String name, double amount) {
        this.name = name;
        this.amount = amount;
    }
}

public class LedgerMini {
    public static void main(String[] args) {
        ArrayList<Expense> expenses = new ArrayList<>();
        expenses.add(new Expense("午餐", 18.5));
        expenses.add(new Expense("地铁", 6));

        double total = 0;
        for (Expense item : expenses) {
            total += item.amount;
        }
        System.out.println("合计：" + total + " 元");
    }
}`,
      expected: "合计：24.5 元",
      hints: [
        "先补全 Expense 的构造方法，用 this 保存两个字段。",
        "在 main 里声明 double total，用增强 for 遍历，累加 item.amount，最后输出。",
      ],
      requirements: [
        "补全 Expense 的构造方法，保存 name 和 amount",
        "用增强 for 遍历 expenses，累加每笔金额",
        "输出「合计：」和 total",
      ],
      mustContain: [
        { label: "声明 name 字段", text: "String name;" },
        { label: "声明 amount 字段", text: "double amount;" },
        { label: "写 Expense 构造方法", text: "Expense(String name, double amount)" },
        { label: "用 this 保存 name", text: "this.name = name;" },
        { label: "用 this 保存 amount", text: "this.amount = amount;" },
        { label: "用增强 for 遍历", text: "for (Expense item : expenses)" },
        { label: "累加金额", text: "total += item.amount;" },
        { label: "输出合计", text: 'System.out.println("合计：" + total + " 元");' },
      ],
    },
    quiz: {
      question: "这个账本项目用哪个类把数据保存到磁盘？",
      options: ["Files", "Scanner", "ArrayList"],
      answer: 0,
      explain: "<code>Files</code> 负责文件读写；Scanner 读取输入，ArrayList 只把数据保存在内存中。",
    },
  },
];
