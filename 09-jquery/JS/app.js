$(function () {

    //check localStorage
    if (localStorage.getItem('todolist') != null) {
        $('.list').html(localStorage.getItem('todolist'))
        countTasks()
        countRemains()

    } else {
        //countTasks & remains
        countTasks()
        countRemains()

    }

    
    //addTask

    $('footer').on('click', '#add', function () {
        if ($('#input-task').val().length > 0) {

            $task = '<article> \
                   <input type="checkbox">\
                   <p> '+ $('#input-task').val() + '</p> \
                   <button>&times;</button>\
                </article>'
            $('section.list').append($task)
            $('#input-task').val('')
            countTasks()
            countRemains()
        } else {
            alert('please! Enter a task')
        }

    })


    //toggle task(remain/done)
    $('body').on('click', 'input[type=checkbox]', function () {
        //If checked
        if ($(this).prop('checked')) {
            $(this).attr('checked',true)
            $(this).parent().addClass('checked')
        } else {
            $(this).attr('checked',false)
            $(this).parent().removeClass('checked')

        }
        countRemains()
    })
    //remove task
    $('body').on('click', 'article button', function () {
        $(this).closest('article').remove()
        countTasks()
        countRemains()
    })
    //clear all tasks
    $('body').on('click', '#clear', function () {
        $('.list').html('')
        countTasks()
        countRemains()
    })
})

function countTasks() {
        $('.num-tasks').text($('article').length)
        $('.title-tasks').text($('article').length > 1 ? 'tasks' : 'task')
    }
//count remains
function countRemains() {
    $remain = Math.abs($('.checked').length - $ ('article').length)
  $('.num-remains').text($remain)
  $('.title-remains').text($remain > 1 ? 'remains' : 'remain')
  // set localStorage
    localStorage.setItem('todolist', $('.list').html())
}