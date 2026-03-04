// ==================== 倒數計時 ====================
function updateCountdown() {
    // 數學周開始日期：2026年4月13日
    const startDate = new Date('2026-04-13T00:00:00+08:00');
    const now = new Date();
    const diff = startDate - now;
    
    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('mins').textContent = mins;
        document.getElementById('secs').textContent = secs;
    } else {
        // 數學周進行中
        const ongoingDate = new Date('2026-04-13T00:00:00+08:00');
        const endDate = new Date('2026-05-08T23:59:59+08:00');
        
        if (now >= ongoingDate && now <= endDate) {
            document.getElementById('days').textContent = '🔥';
            document.getElementById('hours').textContent = '進行';
            document.getElementById('mins').textContent = '中';
            document.getElementById('secs').textContent = '';
        } else {
            // 已結束
            document.getElementById('days').textContent = '✅';
            document.getElementById('hours').textContent = '已';
            document.getElementById('mins').textContent = '結束';
            document.getElementById('secs').textContent = '';
        }
    }
}

// ==================== 遊戲功能 ====================
function openGame(gameName) {
    const games = {
        'MultiplicationBattle': '數學/乘法拔河-MultiplicationBattle.html',
        'RatioSafe': '數學/比例金庫-RatioSafe.html',
        'MatrixConquest': '數學/矩陣爭奪戰-MatrixConquest.html',
        'PenaltyShootout': '數學/12碼射門-座標挑戰.html'
    };
    
    if (games[gameName]) {
        alert(`🎮 準備進入：${gameName}\n\n等老師將網站host上去之後就可以玩喇！`);
    }
}

function showAllGames() {
    alert('🎮 以上4個數學遊戲就係全部喇！\n\n每個遊戲都需要計時挑戰，等你來挑戰！');
}

// ==================== 平滑滾動 ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
