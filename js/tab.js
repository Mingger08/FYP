$(document).ready(function () {
    $(".admin-tab").click(function () {
      $(".admin-box").show();
      $(".bo-box").hide();
      $(".admin-tab").addClass("active");
      $(".bo-tab").removeClass("active");
    });
    $(".bo-tab").click(function () {
      $(".bo-box").show();
      $(".admin-box").hide();
      $(".bo-tab").addClass("active");
      $(".admin-tab").removeClass("active");
    });
  });