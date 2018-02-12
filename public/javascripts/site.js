$(document).on("ready", () => {
    $("orders").show();
    $("#profit").hide();
    $("#popular").hide();
});
$("#orders-lnk").on("click", () => {
    $("orders").show();
    $("#profit").hide();
    $("#popular").hide();
});
$("#profit-lnk").on("click", () => {
    $("orders").hide();
    $("#profit").show();
    $("#popular").hide();
});
$("#popular-lnk").on("click", () => {
    $("orders").hide();
    $("#profit").hide();
    $("#popular").show();
});