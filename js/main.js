/**
 * Math Week 2026 - Main JavaScript
 * 靈風中學 數學周 2026
 */

// ==================== Countdown Timer ====================
(function() {
    const target = new Date('2026-05-04T08:00:00+08:00');
    const wrap = document.getElementById('countdownWrap');
    const grid = document.getElementById('countdownGrid');

    if (!wrap || !grid) return;

    function update() {
        const now = new Date();
        const diff = target - now;

        if (diff <= 0) {
            wrap.innerHTML = `
                <div class="countdown-expired">
                    <div class="emoji">🎉</div>
                    <div class="msg">數學周進行中！</div>
                </div>
            `;
            return;
        }

        const days  = Math.floor(diff / 86400000);
        const hours = Math.floor((diff % 86400000) / 3600000);
        const mins  = Math.floor((diff % 3600000)  / 60000);
        const secs  = Math.floor((diff % 60000)    / 1000);

        const dEl = document.getElementById('cd-days');
        const hEl = document.getElementById('cd-hours');
        const mEl = document.getElementById('cd-mins');
        const sEl = document.getElementById('cd-secs');

        if (dEl) dEl.textContent = days;
        if (hEl) hEl.textContent = hours;
        if (mEl) mEl.textContent = mins;
        if (sEl) sEl.textContent = secs;
    }

    update();
    setInterval(update, 1000);
})();

// ==================== Mobile Navigation ====================
function toggleMobileNav() {
    const nav = document.getElementById('mobileNav');
    if (!nav) return;

    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
    } else {
        nav.classList.add('open');
        // Close on background click
        nav.onclick = function(e) {
            if (e.target === nav) {
                nav.classList.remove('open');
                nav.onclick = null;
            }
        };
    }
}

// Close mobile nav on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const nav = document.getElementById('mobileNav');
        if (nav && nav.classList.contains('open')) {
            nav.classList.remove('open');
        }
    }
});

// ==================== Smooth Scroll ====================
function scrollToSection(selector) {
    const el = document.querySelector(selector);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ==================== Schedule Tabs ====================
function showSchedule(filter) {
    // Update active tab
    if (event && event.target) {
        document.querySelectorAll('.calendar-tab').forEach(t => t.classList.remove('active'));
        event.target.classList.add('active');
    }
    // Future: implement row filtering
    // For now, just switch tab
}

// ==================== Reading Page ====================
function showStory(id) {
    const list = document.getElementById('storyList');
    const story = document.getElementById('story' + id);
    if (!list || !story) return;
    list.style.display = 'none';
    story.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function hideStory(id) {
    const story = document.getElementById('story' + id);
    const list = document.getElementById('storyList');
    if (!story || !list) return;
    story.classList.remove('active');
    list.style.display = 'block';
}

// ==================== Tab helpers (generic) ====================
function switchTab(tabName, panelId) {
    // For pages that use tab switching
    const tabs = document.querySelectorAll('[data-tab]');
    tabs.forEach(t => {
        if (t.dataset.tab === tabName) t.classList.add('active');
        else t.classList.remove('active');
    });
    const panels = document.querySelectorAll('[data-tab-panel]');
    panels.forEach(p => {
        p.style.display = p.dataset.tabPanel === tabName ? 'block' : 'none';
    });
}
