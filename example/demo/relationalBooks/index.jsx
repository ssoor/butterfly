import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Canvas from './canvas';
import mockData from './data.js';

import './index.less';
import './iconfont.css';
import 'butterfly-dag/dist/index.css';

class RelationalBook extends Component {
  constructor() {
    super();
    this.canvas = null;
  }
  componentDidMount() {
    let root = document.getElementById('dag-canvas');
    this.canvas = new Canvas({
      root: root,
      disLinkable: true, // 可删除连线
      linkable: true,    // 可连线
      draggable: true,   // 可拖动
      zoomable: true,    // 可放大
      moveable: true,    // 可平移
      theme: {
        edge: {
          shapeType: 'Manhattan',
          hasRadius: true,
          isExpandWidth: true,//增加线条交互区域
          defaultAnimate: false,//默认开启线条动画
        },
      }
    });
    window.canvas = this.canvas;
    this.canvas.setMinimap(true);
    this.canvas.draw(mockData, () => {
      this.canvas.focusCenterWithAnimate();
    });
  }
  render() {
    return (
      <div className='relational-books-page'>
        <div className="flow-canvas" id="dag-canvas">
        </div>
      </div>
    );
  }
}

ReactDOM.render(<RelationalBook />, document.getElementById('root'));
