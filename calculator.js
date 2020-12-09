$(function()
{
    $("#add-button").click(add);

    $("#recipe_b").on("click","#DeleteButton",del_func);


});




//add receipe list in the table
function add()
{
    var name = $("#recipe").val();
    if(!name)
    {
        $("#recipe").addClass("er");
        return;
    }
    $("#recipe_b").removeClass("er");
    var carb = $('select#recipe option:selected').attr('carb');
    var cal= $('select#recipe option:selected').attr('cal');
    $("#recipe_b").val("");
    var tab = $("#recipe_b");
    tab.append(`<tr id="a7" name=${name}>
    <td>${name}</td>
    <td id="carbs">${carb}</td>
    <td id="calorie">${cal}</td>
    <td><button id="DeleteButton"><b>Delete</b></button></td>
    </tr>`);
};

//it will delete the seleted option

function del_func()
{
    $(this).parents("tr").remove();
    
};
//function on calculate button
$(function() {

    $("#calculate").click(function()
    {
    var TotalValue = 0;

    $("tr #carbs").each(function(index,value)
    {
      currentRow = parseInt($(this).text());
      TotalValue += currentRow
    });

    document.getElementById('carbTotal').innerHTML = TotalValue;

    var TotalValue=0;
    $("tr #calorie").each(function(index,value)
    {
      currentRow = parseInt($(this).text());
      TotalValue += currentRow
    });

    document.getElementById('calorieTotal').innerHTML = TotalValue;


    })

});
