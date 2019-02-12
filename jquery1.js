// $(document).ready(function(){

    // $('#addtask').click(function(){
    //     var header = $('.header').val();
    //     var date = $('.date').val();
    //     var description = $('.dsi').val();
    //     var status = $('.status').val();

    //     $('#newtask').append('<p>hsvdjhvjsdvjf</p>')

    //     //$('#Table_task').append("<div class='maindata'><div class='task-header'>"+header+"</div><div class='date'>"+date+"</div><div class='description'>"+description+"</div><div class='task_status'>"+status+"</div></div>");
    // });
// });

$(document).ready(function () {


    $('#addTask').click(function () {
      var tasklength = $('.todo-task').length + 1;
      var title = $('.titletext').val();
      var desc = $('.titledesc').val();
      var titledate = $('.titledate').val();
      var status = $('.progstatus').val();
  
      $('#pending').append("<div class='todo-task' itemid='item" + tasklength + "'><div class='task-header'>" + title + "</div><div class='task-date'>" + titledate + "</div><div class='task-description'>" + desc + "</div><div class='task-status'>" + status + "</div><div class='close' onclick='close()'><i class='fas fa-times'></i></div></div>");
      closeing();
      $('.todo-task').draggable({
        cursor: 'move',
        helper: "clone"
      });
    })
  
  
    $('#cleardata').click(function () {
      $('.titletext').val("");
      $('.titledesc').val('');
      $('.titledate').val('');
      $('.progstatus').val('')
    })
    function closeing(){
      $('.close').click(function(){
    
        $(this).parent().remove();
      })
    }
  
  
  
  
    $('.todo-task').draggable({
      cursor: 'move',
      helper: "clone"
    });
  
    $("#pending").droppable({
      drop: function (data) {
        var itemid = $(data.originalEvent.toElement).parent().attr("itemid");
        $('.todo-task').each(function () {
          if ($(this).attr("itemid") === itemid) {
            $(this).appendTo("#pending");
            $(this).children().eq(3).css('background', '#359933');
            $(this).children().eq(3).text('New')
          }
        });
  
  
      }
    });
  
    $("#inProgress").droppable({
  
      drop: function (data) {
        
        var itemid = $(data.originalEvent.toElement).parent().attr("itemid");
        $('.todo-task').each(function () {
          if ($(this).attr("itemid") === itemid) {
  
  
            $(this).appendTo("#inProgress");
  
            $(this).children().eq(3).css('background', 'red');
            $(this).children().eq(3).text('In progress');
  
  
  
          }
  
        });
  
  
      }
    });
  
  
    $("#completed").droppable({
  
      drop: function (data) {
        
        var itemid = $(data.originalEvent.toElement).parent().attr("itemid");
        $('.todo-task').each(function () {
          if ($(this).attr("itemid") === itemid) {
            $(this).appendTo("#completed");
            $(this).children().eq(3).css('background', 'blue');
            $(this).children().eq(3).text('Complete');
          }
  
        });
  
      }
    });
  
  });
  
  


