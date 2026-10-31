// Bảng đọc viết tắt: đồng bộ với slides/deck.js.
var SAY = [
  [/\bQLL\b/g, 'quản lý lãnh đạo'],
  [/\bTTS\b/g, 'chuyển văn bản thành giọng nói']
];
function normalize(t) { SAY.forEach(function (p) { t=t.replace(p[0],p[1]); }); return t.replace(/\s+/g,' ').trim(); }
