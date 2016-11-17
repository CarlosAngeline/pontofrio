$(document).ready(function() {
    // Date Picker
    $('#dtp-1').datepicker({todayHighlight: true});
    $('#dtp-2').datepicker({todayHighlight: true});
    $('#dtp-3').datepicker({todayHighlight: true});
    $('#dtp-4').datepicker({todayHighlight: true});
    $('#dtp-5').datepicker({todayHighlight: true});
    $('#dtp-6').datepicker({todayHighlight: true});
    $('#dtp-7').datepicker({todayHighlight: true});
    $('#dtp-8').datepicker({todayHighlight: true});
    $('#dtp-9').datepicker({todayHighlight: true});
    $('#dtp-10').datepicker({todayHighlight: true});
    $('#dtp-11').datepicker({todayHighlight: true});
    $('#dtp-12').datepicker({todayHighlight: true});
    $('#dtp-13').datepicker({todayHighlight: true});
    $('#dtp-14').datepicker({todayHighlight: true});
    $('#dtp-15').datepicker({todayHighlight: true});
    $('#dtp-16').datepicker({todayHighlight: true});
    $('#dtp-17').datepicker({todayHighlight: true});
    $('#dtp-18').datepicker({todayHighlight: true});
    $('#dtp-19').datepicker({todayHighlight: true});
    $('#dtp-20').datepicker({todayHighlight: true});
    $('#dtp-21').datepicker({todayHighlight: true});
    $('#dtp-22').datepicker({todayHighlight: true});
	
	$('#dtp-1, #dtp-2, #dtp-3, #dtp-4, #dtp-5, #dtp-6, #dtp-7, #dtp-8, #dtp-9, #dtp-10, #dtp-11, #dtp-12, #dtp-13, #dtp-14, #dtp-15, #dtp-16, #dtp-17, #dtp-18, #dtp-19, #dtp-20, #dtp-21, #dtp-22').on('changeDate', function(ev){
		$(this).datepicker('hide');
        //$(this).parent().siblings('.horacerta').val($(this).parent().siblings('.horacerta').attr('data-original'));
	});
	
	//$('.data-seletor').addClass('visible');

	$('.dp-toggle').on('change', function(){
        if($(this).hasClass('habilita-dp')) {
            $(this).parent().siblings('.data-seletor').addClass('visible');

            var hora = new Date();
            $(this).parent().siblings('.horacerta').val( hora.getHours()+ ":" + (hora.getMinutes()<10?'0':'') + hora.getMinutes() );
            
            //$(this).parent().siblings('.horacerta').attr('data-original', hora.getHours()+ ":" + (hora.getMinutes()<10?'0':'') + hora.getMinutes() );

            $(this).parent().siblings('.horacerta').addClass('visible');

        }
        else {
            $(this).parents('.exclusive-checkbox').find('.data-seletor').removeClass('visible');
            $(this).parents('.exclusive-checkbox').find('.horacerta').removeClass('visible');
        }
    });

    $('.habilita-dp').parent().on('click', function(){
        if ($(this).attr('checked')) {
            $(this).removeAttr('checked');
        } else {
            $(this).attr('checked', 'checked');
        }
    });

    /*
    $('.horacerta').on('keyup', function() {
        $(this).attr('data-original', $(this).val());
    });
    */
});
