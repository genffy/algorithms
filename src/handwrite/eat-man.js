/**
 * 实现一个EatMan
 * 说明：实现一个EatMan，EatMan可以有以下一些行为
 * 示例：
 *  1. EatMan('Hank')输出:
 *   Hi! This is Hank!
 *  2. EatMan('Hank').eat('dinner').eat('supper')输出
 *   Hi This is Hank!
 *   Eat dinner~
 *   Eat supper~
 *  3. EatMan('Hank').eat('dinner').eatFirst('lunch')输出
 *   Eat lunch~
 *   Hi This is Hank!
 *   Eat dinner~
 *  4. EatMan('Hank').eat('dinner').eatFirst('lunch').eatFirst('breakfast')输出
 *   Eat breakfast~
 *   Eat lunch~
 *   Hi This is Hank!
 *   Eat dinner~
 */
class Eatman {
  constructor(name) {
    // 优化成一个数组
    // this.name = name;
    // this.pre = [];
    // this.after = [];
    this.arr = [
      {
        action: 'sayhi',
        value: name,
      },
    ];
    this.timer = null;
    this.innerOut();
  }

  console() {
    // if(this.pre.length){
    //   this.pre.forEach(n=> {
    //     console.log(`Eat ${n}~`);
    //   })
    //   this.pre = [];
    // }
    // if(this.name){
    //   console.log(`Hi! This is ${this.name}!`);
    //   this.name = '';
    // }
    // if(this.after.length){
    //   this.after.forEach(n=> {
    //     console.log(`Eat ${n}~`);
    //   })
    //   this.after = []
    // }
    this.arr.forEach((item) => {
      let text = '';
      if (item.action === 'sayhi') {
        text = `Hi! This is ${item.value}!`;
      } else {
        text = `Eat ${item.value}~`;
      }
      console.log(text);
    });
    console.log('\n');
  }

  innerOut() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.timer = setTimeout(() => {
      this.console();
    });
  }

  eat(en) {
    // this.after.push(en);
    this.arr.push({
      action: 'eat',
      value: en,
    });
    this.innerOut();
    return this;
  }

  eatFirst(efn) {
    // this.pre.unshift(efn)
    this.arr.unshift({
      action: 'eatFirst',
      value: efn,
    });
    this.innerOut();
    return this;
  }
}
function EatMan(name) {
  const e = new Eatman(name);
  return e;
}

EatMan('Hank');
EatMan('Hank').eat('dinner').eat('supper');
EatMan('Hank').eat('dinner').eatFirst('lunch');
EatMan('Hank').eat('dinner').eatFirst('lunch').eatFirst('breakfast');
// prettier-ignore
EatMan('Hank').eat('dinner').eatFirst('lunch').eat('supper')
  .eatFirst('breakfast');
