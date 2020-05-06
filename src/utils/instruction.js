import Vue from 'vue'
// 横屏指令
Vue.directive("horizontal-screen", {
    bind(el, binding, vnode) {
        let self = vnode.context;
  
        let getDocumentSize = () => [
            document.documentElement.clientWidth,
            document.documentElement.clientHeight
        ];
  
        // 设备开启竖屏锁定，强制横屏模式
        let vertical = () => {
            let [width, height] = getDocumentSize();
            el.style.transform = `rotate(90deg)`;
            el.style.transformOrigin = width / 2 + 'px center';
            el.style.width = height + 'px';
            el.style.height = width + 'px';
        };
        // 设备关闭竖屏锁定，横屏时，还原成正常模式
        let reset = () => {
            let [width, height] = getDocumentSize();
            el.style.transform = `rotate(0deg)`;
            el.style.width = `${width}px`;
            el.style.height = `${height}px`;
        };
  
        el.resize = function() {
            if (document.activeElement.nodeName === "INPUT") return; // 兼容安卓
            if ([null, 180, 0].includes(window.orientation)) {
                vertical();
            } else if ([90, -90].includes(window.orientation)) {
                reset();
            }
        };
  
        el.resize();
  
        el.click = e => {
            if (e.target.nodeName === "INPUT") {
                reset();
            } else if (![90, -90].includes(window.orientation)) {
                vertical();
            }
        };
        window.addEventListener("click", el.click, false);
        window.addEventListener("resize", el.resize, false); // 兼容安卓
        window.addEventListener("orientationchange", el.resize, false);
    },
    unbind(el, binding, vnode) {
        window.removeEventListener("click", el.click, false);
        window.removeEventListener("resize", el.resize, false);
        window.removeEventListener("orientationchange", el.resize, false);
    }
  });