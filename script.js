// 可以在这里添加交互功能，比如打印按钮
// 示例：添加一个打印按钮
const printButton = document.createElement('button');
printButton.textContent = '打印简历';
printButton.style.margin = '20px auto';
printButton.style.display = 'block';
printButton.style.padding = '10px 20px';
printButton.style.backgroundColor = '#4CAF50';
printButton.style.color = 'white';
printButton.style.border = 'none';
printButton.style.borderRadius = '5px';
printButton.style.cursor = 'pointer';

printButton.addEventListener('click', () => {
    window.print();
});

document.body.appendChild(printButton);