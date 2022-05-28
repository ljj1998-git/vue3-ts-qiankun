export const scrollAnimation = (currentY:number, targetY:number, frameNumber:number = 15, speed: number = 20):void => {
  // 计算需要移动的距离
  const needScrollTop = targetY - currentY;
  let _currentY = currentY;
  const timer = setTimeout(() => {
    // 一次调用滑动帧数，每次调用会不一样
    const dist = Math.ceil(needScrollTop / frameNumber);
    _currentY += dist;
    window.scrollTo(_currentY, currentY);
    // 如果移动幅度小于3个像素，直接移动，否则递归调用，实现动画效果
    if (needScrollTop > 3 || needScrollTop < -3) {
      scrollAnimation(_currentY, targetY);
    } else {
      window.scrollTo(_currentY, targetY);
    }
    clearTimeout(timer);
  }, speed);
};
