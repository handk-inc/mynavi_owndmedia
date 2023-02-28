$(window).on('load', function() {
  /* ここには、表示するリストの数を指定します。 */
var moreNum = 6;

/* 表示するリストの数以降のリストを隠しておきます。 */
$('.doc_card_primary:nth-child(n + ' + (moreNum + 1) + ')').addClass('is-hidden');

/* 全てのリストを表示したら「もっとみる」ボタンをフェードアウトします。 */
$('.more_feature').on('click', function() {
  $('.doc_card_primary.is-hidden').slice(0, moreNum).removeClass('is-hidden');
  if ($('.doc_card_primary.is-hidden').length == 0) {
    $('.more_feature').fadeOut();
  }
});

/* リストの数が、表示するリストの数以下だった場合、「もっとみる」ボタンを非表示にします。 */
$(function() {
  var list = $(".project_list_content div").length;
    if (list < moreNum) {
      $('.more_project').addClass('is-btn-hidden');
  }
});
});

$(window).on('load', function() {
  /* ここには、表示するリストの数を指定します。 */
var moreNum = 6;

/* 表示するリストの数以降のリストを隠しておきます。 */
$('.project_card_primary:nth-child(n + ' + (moreNum + 1) + ')').addClass('is-hidden');

/* 全てのリストを表示したら「もっとみる」ボタンをフェードアウトします。 */
$('.more_project').on('click', function() {
  $('.project_card_primary.is-hidden').slice(0, moreNum).removeClass('is-hidden');
  if ($('.project_card_primary.is-hidden').length == 0) {
    $('.more_project').fadeOut();
  }
});

/* リストの数が、表示するリストの数以下だった場合、「もっとみる」ボタンを非表示にします。 */
$(function() {
  var list = $(".project_list_content div").length;
    if (list < moreNum) {
      $('.more_project').addClass('is-btn-hidden');
  }
});
});



$(window).on('load', function() {
  /* ここには、表示するリストの数を指定します。 */
var moreNum = 3;

/* 表示するリストの数以降のリストを隠しておきます。 */
$('.research_article_card_secondary:nth-child(n + ' + (moreNum + 1) + ')').addClass('is-hidden');

/* 全てのリストを表示したら「もっとみる」ボタンをフェードアウトします。 */
$('.more_result_article').on('click', function() {
  $('.research_article_card_secondary.is-hidden').slice(0, moreNum).removeClass('is-hidden');
  if ($('.research_article_card_secondary.is-hidden').length == 0) {
    $('.more_result_article').fadeOut();
  }
});

/* リストの数が、表示するリストの数以下だった場合、「もっとみる」ボタンを非表示にします。 */
$(function() {
  var list = $(".search_result_items div").length;
    if (list < moreNum) {
      $('.more_result_article').addClass('is-btn-hidden');
  }
});
});

$(window).on('load', function() {
  /* ここには、表示するリストの数を指定します。 */
var moreNum = 3;

/* 表示するリストの数以降のリストを隠しておきます。 */
$('.doc_card_secondary:nth-child(n + ' + (moreNum + 1) + ')').addClass('is-hidden');

/* 全てのリストを表示したら「もっとみる」ボタンをフェードアウトします。 */
$('.more_result_doc').on('click', function() {
  $('.doc_card_secondary.is-hidden').slice(0, moreNum).removeClass('is-hidden');
  if ($('.doc_card_secondary.is-hidden').length == 0) {
    $('.more_result_doc').fadeOut();
  }
});

/* リストの数が、表示するリストの数以下だった場合、「もっとみる」ボタンを非表示にします。 */
$(function() {
  var list = $(".search_result_items div").length;
    if (list < moreNum) {
      $('.more_result_doc').addClass('is-btn-hidden');
  }
});
});

$(window).on('load', function() {
  /* ここには、表示するリストの数を指定します。 */
var moreNum = 3;

/* 表示するリストの数以降のリストを隠しておきます。 */
$('.mov_card_secondary:nth-child(n + ' + (moreNum + 1) + ')').addClass('is-hidden');

/* 全てのリストを表示したら「もっとみる」ボタンをフェードアウトします。 */
$('.more_result_mov').on('click', function() {
  $('.mov_card_secondary.is-hidden').slice(0, moreNum).removeClass('is-hidden');
  if ($('.mov_card_secondary.is-hidden').length == 0) {
    $('.more_result_mov').fadeOut();
  }
});

/* リストの数が、表示するリストの数以下だった場合、「もっとみる」ボタンを非表示にします。 */
$(function() {
  var list = $(".search_result_items div").length;
    if (list < moreNum) {
      $('.more_result_mov').addClass('is-btn-hidden');
  }
});
});