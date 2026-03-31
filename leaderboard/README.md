# 數學週2026 龍虎榜 - Leaderboard System

## Google Sheet

- **Sheet:** [數學週2026 龍虎榜](https://docs.google.com/spreadsheets/d/1c-eAuLu2hLCdMZ02T7aiPZfQkmgoqHhN5G7zmn_Q4Tk/edit)
- **Sheet ID:** `1c-eAuLu2hLCdMZ02T7aiPZfQkmgoqHhN5G7zmn_Q4Tk`
- **Sharing:** Anyone with link can view

## Setup (One-time)

### 1. Publish the Sheet to Web
1. Open the Google Sheet
2. **File → Share → Publish to web**
3. Select "Entire Document" → CSV
4. Click "Publish"
5. This enables the leaderboard HTML to read data without API keys

### 2. Grant Edit Access to Teachers
- Share the sheet with teacher emails as "Editor"
- Or change sharing to "Anyone with link can edit" for open entry

## Tabs

| Tab | Purpose |
|-----|---------|
| 計算機大賽 | Calculator Race scores |
| 公式圖像配對 | Formula Match scores |
| 四則運算拉力賽 | Tug of War scores |
| 數據輸入 | Raw score entry log |
| 總覽 | Summary/overview |

## Column Format (Game Tabs)

| Column | Description |
|--------|-------------|
| 排名 | Rank (auto-calculated by leaderboard display) |
| 姓名 | Student name |
| 班別 | Class |
| 總分 | Total score |
| 遊戲次數 | Number of games played |
| 最佳紀錄 | Best record/time |
| 備註 | Notes |

## Data Entry

Enter scores directly in the game tabs. The leaderboard HTML auto-sorts by 總分 (descending).

For the 數據輸入 tab, use columns: 時間戳, 姓名, 班別, 遊戲, 分數, 備註

## Scoring

- **計算機大賽:** 1 point per correct answer in 60 seconds
- **公式圖像配對:** 4×4=1pt, 6×6=2pt, 8×8=3pt
- **四則運算拉力賽:** Win=2pt, timeout win=1pt, lose=0pt
- **1 game point = 1 math credit** (direct conversion)

## Embedding in games.html

Option A - iframe:
```html
<iframe src="leaderboard/leaderboard.html" width="100%" height="600" frameborder="0"></iframe>
```

Option B - Copy the `<script>` and relevant HTML from `leaderboard.html` into your page.

## Auto-refresh

The leaderboard refreshes every 30 seconds automatically.
