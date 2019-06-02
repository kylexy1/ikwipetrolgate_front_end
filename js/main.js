$(document).ready(function() {


    const getDatas = async () => {
        const response = await fetch('http://127.0.0.1:8000/get-all-data');
        const data = await response.json();
        $("#total").html(data.header_total);
        $("#revenue").html(data.header_revenue);
        $("#growth").html(data.header_growth);


        $("#bon").html(data.right_bon);
        $("#cards").html(data.right_cards);
        $("#discounts").html(data.right_discounts);

        $("#stock").html(data.right_stock);
        $("#cards-sold").html(data.right_cards_sold);
        $("#bon-sold").html(data.right_bon_sold);
        $("#cars-in-stock").html(data.right_cards_in_stock);
    }


});
$("#fab").on("click", function (e) {
    $("#fab-layout").toggle();
    $(".input-text").removeClass("focused")
    $("#name").addClass("focused")
    $("#phone").addClass("error")
})

$("#form").on('submit',function (e) {
    e.preventDefault()
    let myForm = document.getElementById('form');
    let formData = new FormData(myForm)
    $.ajax({
        url : 'http://127.0.0.1:8000/save/',
        type : 'POST',
        processData: false,
        contentType: false,
        data : formData,
        success : function (data) {
            console.log(data)
            if (data.message === "success")
                alert("SuccessFully Saved")
            $('.input-text').val('');
            return true;
        }
    })
});
$('#clear').on('click', function () {
    $('.input-text').val('');
})