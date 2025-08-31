document.getElementById('colorPicker').addEventListener('input', function(e) {
  document.getElementById('colorValue').value = e.target.value;
});

document.getElementById('pickColor').addEventListener('click', async () => {
  // 使用 EyeDropper API 取色（僅支援部分瀏覽器）
  if ('EyeDropper' in window) {
    const eyeDropper = new EyeDropper();
    try {
      const result = await eyeDropper.open();
      document.getElementById('colorPicker').value = result.sRGBHex;
      document.getElementById('colorValue').value = result.sRGBHex;
    } catch (e) {
      alert('取色已取消或發生錯誤');
    }
  } else {
    alert('此瀏覽器不支援 EyeDropper API');
  }
}); 