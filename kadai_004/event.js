// 読み込み完了時に文字列をコンソールに出力
$(window).on('load', function(){
  console.log('loadイベントが発生しました');  
});

// 画面スクロール時に文字列をコンソールに出力
$(window).on('scroll', function(){
  console.log('scrollイベントが発生しました');
});